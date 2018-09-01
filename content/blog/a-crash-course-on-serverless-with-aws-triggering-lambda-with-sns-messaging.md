---
title: Serverless with AWS - Triggering Lambda with SNS Messaging
description: If you're like me, a sucker for event-driven programming, you'll want to continue reading. Today we'll take a look at triggering AWS Lambda functions from AWS SNS messages.
date: 2018-08-30T00:00:00.000Z
frontImage: "2018-08-30/header.jpeg"
thumbnail: "images/blog/2018-08-30/header.jpeg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
canonical: https://dev.to/adnanrahic/a-crash-course-on-serverless-with-aws---triggering-lambda-with-sns-messaging-30nf
featpop: most-popular
blog: ["Serverless", "Node.js", "AWS", "Lambda",  "SNS"]
---

If you're like me, a sucker for event-driven programming, you'll want to continue reading. Today we'll take a look at triggering [AWS Lambda](https://aws.amazon.com/lambda/) functions from [AWS SNS](https://aws.amazon.com/sns/) messages. I've covered a few interesting topics regarding serverless architectures and AWS already, but nothing like this yet. Dig down, and get ready. Let's go.

### TL;DR

- What are we building?
- What is AWS SNS?
- Build the API with the [Serverless Framework](https://serverless.com/)
- Deploy the API to [AWS Lambda](https://aws.amazon.com/lambda/)
- Test the API with [Dashbird](https://dashbird.io/)

_**Note**: All the [code from this tutorial is already on GitHub](https://github.com/adnanrahic/lambda-sns-dlq-error-handling) if you want to check out the end result right away._

## What are we building?

Our focus will solely be on the steps to create the infrastructure components our app will need. The code itself will just mimic the behavior of a random complex computation. I've chosen a recursive function that calculates the factorial of the number passed to it. Here's a nice diagram, because diagrams are awesome of course!

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/sls-aws-lambda-sns3.png)

The `init` function is the only exposed function, which is hooked up to [API Gateway](https://aws.amazon.com/api-gateway/). It takes a single `number` parameter which it validates, upon success, it publishes an SNS topic and sends along the `number` value.

The SNS topic will trigger a second function called `calculate`. This function will perform the calculation and log out the result to the console. This mimics a heavy computational background task such as data processing, image manipulation or machine learning calculations.

If the `calculate` function fails, the Dead Letter Queue SNS topic will receive a message and trigger the `error` function.

Every function invoked **asynchronously** will twice retry its execution upon failure. Using the Dead Letter Queue as a pool for your error logs is a smart use-case.

Now you're wondering, why all the complication with SNS instead of just invoking the second lambda function from the first one with [Lambda's invoke API](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#invoke-property)? 

First of all, it's a huge anti-pattern for asynchronous workflows, which is our case. Otherwise, it's fine if you need the response from the second lambda function right away. Another issue is hitting Lambda's concurrency limits pretty fast. It can result in losing invocations and dropping data. Sending your data through a pub/sub service like SNS or a queue like [SQS](https://aws.amazon.com/sqs/) will make sure you have data integrity.

Makes sense now? Sweet, let's talk a bit more about SNS.

## What is AWS SNS?

Before we start coding we need to cover the basics. We know what AWS Lambda is, but what about SNS? The AWS docs are pretty straightforward.

> Amazon Simple Notification Service (SNS) is a flexible, fully managed [pub/sub messaging](https://aws.amazon.com/pub-sub-messaging/) and mobile notifications service for coordinating the delivery of messages to subscribing endpoints and clients. 
>
> _- AWS Docs_

In English, this means it's a way of sending notifications between services on a publisher/subscriber basis. One service publishes some data about a **topic** and sends it along its way. SNS will then funnel it to all the subscribers of that particular **topic**. Key focus is on **topic** here, you'll see why a bit further down.

## Build the API with the Serverless Framework

The first thing to do, as always, is to set up the project and install dependencies.

### 1. Install the Serverless Framework

My go-to development and deployment tool for serverless apps is the [Serverless Framework](https://serverless.com/framework/). Let's go ahead and install it.

```bash
$ npm i -g serverless
```

**Note:** *If you’re using Linux, you may need to run the command as sudo.*

Once installed globally on your machine, the commands will be available to you from wherever in the terminal. But for it to communicate with your AWS account you need to configure an IAM User. Jump over [here for the explanation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html), then come back and run the command below, with the provided keys.

```bash
$ serverless config credentials \ 
    --provider aws \ 
    --key xxxxxxxxxxxxxx \ 
    --secret xxxxxxxxxxxxxx
```

Now your Serverless installation knows what account to connect to when you run any terminal command. Let’s jump in and see it in action.

### 2. Create a service

Create a new directory to house your Serverless application services. Fire up a terminal in there. Now you’re ready to create a new service.

What’s a service? It's like a project. It’s where you define AWS Lambda functions, the events that trigger them and any AWS infrastructure resources they require, including SNS which we'll add today, all in a file called **serverless.yml**.

Back in your terminal type:

```bash
$ serverless create --template aws-nodejs \
    --path lambda-sns-dlq-error-handling
```

The create command will create a new **service**. What a surprise! We also pick a runtime for the function. This is called the **template**. Passing in `aws-nodejs` will set the runtime to Node.js. Just what we want. The **path** will create a folder for the service.

### 3. Explore the service directory with a code editor

Open up the **lambda-sns-dlq-error-handling** folder with your favorite code editor. There should be three files in there, but for now, we’ll only focus on the **serverless.yml**. It contains all the configuration settings for this service. Here you specify both general configuration settings and per function settings. Your **serverless.yml** will be full of boilerplate code and comments. Feel free to delete it all and paste this in.

```yaml
service: lambda-sns-dlq-error-handling

plugins:
  - serverless-pseudo-parameters

provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: eu-central-1
  memorySize: 128
  environment:
    accountId: '#{AWS::AccountId}'
    region: '#{AWS::Region}'
  iamRoleStatements:
    - Effect: "Allow"
      Resource: "*"
      Action:
        - "sns:*"

functions:
  init:
    handler: init.handler
    events:
      - http:
          path: init
          method: post
          cors: true
  calculate:
    handler: calculate.handler
    events:
      - sns: calculate-topic # created immediately
    onError: arn:aws:sns:#{AWS::Region}:#{AWS::AccountId}:dlq-topic
  error:
    handler: error.handler
    events:
      - sns: dlq-topic # created immediately
```

Let's break down what's going one here. Check out the `functions` section. There are three functions here. From top to bottom they're `init`, `calculate`, and `error`. The `init` function will get triggered by a simple HTTP request, which we invoke through API Gateway. Familiar territory for us. 

However, the `calculate` and `error` functions are triggered by SNS topics. Meaning we will have logic in the `init` function that will **publish** messages to a topic named `calculate-topic` while the `calculate` function is **subscribed** to the same topic. 

Moving on, the `error` function is subscribed to the `dlq-topic` while the `calculate` function will publish messages to this topic if it fails, as you can see with the `onError` property. Now stuff makes sense, right?

Make a mental note to yourself, once you add the SNS topics as events for your functions, the resources will automatically be created once you deploy the service.

What else, take a look at the `iamRoleStatements`, they specify that our functions have permission to trigger, and get invoked by SNS topics. While the `serverless-pseudo-parameters` plugin lets us reference our `AccountId` and `Region` with the CloudFormation syntax, making it much easier to keep our SNS ARNs consistent across all resources.

### 4. Install dependencies

Luckily, this part will be short. Just one package to install. First, initialize npm and then you can install `serverless-pseudo-parameters`.

```bash
$ npm init -y && npm i serverless-pseudo-parameters
```

That'll do.

### 5. Write business logic

With all things considered, the configuration process was rather simple. The code we'll write now is just as straightforward. Nothing extraordinary to see, I'm sorry to disappoint.

Let's keep all three functions in separate files, to keep it simple. First of all create an **init.js** file and paste this snippet in.

```js
// init.js
const aws = require('aws-sdk')
const sns = new aws.SNS({ region: 'eu-central-1' })

function generateResponse (code, payload) {
  console.log(payload)
  return {
    statusCode: code,
    body: JSON.stringify(payload)
  }
}
function generateError (code, err) {
  console.error(err)
  return generateResponse(code, {
    message: err.message
  })
}
async function publishSnsTopic (data) {
  const params = {
    Message: JSON.stringify(data),
    TopicArn: `arn:aws:sns:${process.env.region}:${process.env.accountId}:calculate-topic`
  }
  return sns.publish(params).promise()
}

module.exports.handler = async (event) => {
  const data = JSON.parse(event.body)
  if (typeof data.number !== 'number') {
    return generateError(400, new Error('Invalid number.'))
  }

  try {
    const metadata = await publishSnsTopic(data)
    return generateResponse(200, {
      message: 'Successfully added the calculation.',
      data: metadata
    })
  } catch (err) {
    return generateError(500, new Error('Couldn\'t add the calculation due to an internal error.'))
  }
}
```

We have a few helper functions and the exported lambda function at the bottom. What's going on here? The lambda validates input and publishes some data to the `calculate-topic` SNS topic. That's everything this function is doing. The `calculate-topic` SNS topic will trigger the `calculate` lambda function. Let's add that now.

Create a file and name it **calculate.js**. Paste this snippet in.

```js
// calculate.js
module.exports.handler = async (event) => {
  const { number } = JSON.parse(event.Records[0].Sns.Message)
  const factorial = (x) => x === 0 ? 1 : x * factorial(x - 1)
  const result = factorial(number)

  console.log(`The factorial of ${number} is ${result}.`)
  return result
}
```

As you see this is just a simple factorial calculation implemented with a recursive function. It'll calculate the factorial of the number we published to the SNS topic from the `init` function.

An important note here is that if the `calculate` function fails a total of three times, it'll publish messages to the Dead Letter Queue SNS topic we specified with the `onError` property in the **serverless.yml** file. The Dead Letter Queue will then trigger the `error` function. Let's create it now so it can log out errors to CloudWatch. Create an **error.js** file, and paste these lines in.

```js
// error.js
module.exports.handler = async (event) => {
  console.error(event)
}
```

For now, this will do. However, ideally, you would have structured logging with detailed info about everything going on. That's a topic for another article.

## Deploy the API to AWS Lambda

Here comes the easy part. Deploying the API is as simple as running one command.

```bash
$ serverless deploy
```

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/deploy.png)

You can see the endpoint get logged to the console. That’s where you will be sending your requests.

## Test the API with Dashbird

The simplest way of testing an API is with CURL. Let’s create a simple CURL command and send a JSON payload to our endpoint.

```bash
$ curl -H "Content-Type: application/json" \
  -d '{"number":1000}' \
  https://<id>.execute-api.eu-central-1.amazonaws.com/dev/init
```

If everything works like it should, the result of the calculation will be logged to CloudWatch. If not, well then you’re out of luck. In cases like these, I default to using [Dashbird](https://dashbird.io/register/) to debug what’s going on. It’s [free and doesn’t require a credit card](https://dashbird.io/pricing/) to set up.

After hitting the endpoint a few times with a couple of different values here's the result. The `init` function works as expected.

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/init8.gif)

But, what really interests us is the `calculate` function. Here's what that looks like when it's successful.

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/calculate4.gif)

When it fails it'll specify a crash and show the error logs.

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/calculate-error2.gif)

After two retries it'll send a message to the Dead Letter Queue and trigger the `error` function.

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/error4.gif)

Sweet! We've tested all the different scenarios. Hope this clears things up a bit.

### Wrapping up

That's all folks. We've covered creating SNS triggers for Lambda while also implementing a Dead Letter Queue to catch errors from failed invocations. Using serverless for various intermittent calculations is a valid use-case that will only grow in popularity in the future. 

There are no servers you need to worry about, and you only pay for the time it runs. Just deploy the code and rest assured it’ll work. If something breaks, you have [Dashbird](https://dashbird.io/features/lambda-error-tracking/) watching your back, alerting you in Slack or E-mail if something is wrong. You just have to love Slack integration!

![](https://raw.githubusercontent.com/adnanrahic/cdn/master/trigger-lambda-sns/slack-alert.png)

Again, here's the [GitHub repo](https://github.com/adnanrahic/lambda-sns-dlq-error-handling), if you want to take a look at the code. It can act as a starter for your own use-cases where you need SNS messages triggering lambda functions. Give it a star if you like it and want more people to see it on GitHub.

Or, take a look at a few of my articles right away:

- [A crash course on serverless-side rendering with Vue.js, Nuxt.js and AWS Lambda](/blog/a-crash-course-on-serverless-side-rendering-with-vuejs-nuxtjs-and-aws-lambda)
- [Building a serverless contact form with AWS Lambda and AWS SES](/blog/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses)
- [A crash course on Serverless APIs with Express and MongoDB](/blog/a-crash-course-on-serverless-apis-with-express-and-mongodb/)
- [Solving invisible scaling issues with Serverless and MongoDB](/blog/solving-invisible-scaling-issues-with-serverless-and-mongodb/)
- [How to deploy a Node.js application to AWS Lambda using Serverless](/blog/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/)
- [Getting started with AWS Lambda and Node.js](/blog/getting-started-with-aws-lambda-and-nodejs)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. If you liked it, feel free to share so more people will see this tutorial. Until next time, be curious and have fun.*

___

_We aim to improve [Dashbird](https://dashbird.io/features/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_