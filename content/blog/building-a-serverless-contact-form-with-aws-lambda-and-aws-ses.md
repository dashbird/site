---
title: Building a serverless contact form with AWS Lambda and AWS SES
description: This tutorial will cover the basics of both the front-end form, with vanilla JavaScript, and the serverless back end, hosted on AWS Lambda. AWS SES is the service you use for sending the actual emails and trust me, it's so incredibly simple the configuration takes 13 seconds.
date: 2018-07-17T01:00:00.000Z
frontImage: "2018-07-17/communication.jpg"
thumbnail: "images/blog/2018-07-17/communication.jpg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
featloc: blog-header
featpop: most-popular
blog: ["AWS", "Serverless", "Node.js"]
category: "AWS, Serverless, Node.js, Lambda"
canonical: https://dev.to/adnanrahic/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses-4jm0
---

![Building a serverless contact form with AWS Lambda and AWS SES](/images/blog/2018-07-17/communication.jpg)
_Image shows my way of communication before learning serverless._
___

What if I told you it can be done with zero dependencies? Hope you're up for a challenge because that's exactly what we'll be doing.

This tutorial will cover the basics of both the front-end contact form, with vanilla JavaScript, and the serverless back end hosted on [AWS Lambda](https://aws.amazon.com/lambda/). [AWS SES](https://aws.amazon.com/ses/) is the service you use for sending the actual emails and trust me, it's so incredibly simple the configuration takes 13 seconds. Yes, I timed myself. 😁

Well, okay then. Let's jump in!

## TL;DR

Just to make sure you have an overview of what we're doing today, here's a short TL;DR. You can jump to the section that interests you, and severely hurt my feelings, or just keep reading from here. Take your pick... I won't silently judge you. 😐

- What are we building?
- Configure [AWS SES](https://aws.amazon.com/ses/)
- Build the API with the [Serverless Framework](https://serverless.com/)
- Deploy the API to [AWS Lambda](https://aws.amazon.com/lambda/)
- Test the API with [Dashbird](https://dashbird.io/)
- Build the form

_**Note**: I turned this [code](https://github.com/adnanrahic/lambda-mailer) into an [npm module](https://www.npmjs.com/package/lambda-mailer) for easier re-usability, and so you peeps don't need to write all the code yourself when you need a quick contact form._

### What are we building?

The general idea is to build a contact form that can be added to a static website. We want to add it without managing any servers and ideally not paying anything for it to run. Here's an amazing use case for AWS Lambda.

The structure of what we want to build is rather simple. We have a simple form, with a tiny snippet of JavaScript to parse the parameters to JSON and send them to an API endpoint.

The endpoint is an [AWS API Gateway](https://aws.amazon.com/api-gateway/) event, which will trigger an AWS Lambda function. The function will tell AWS SES to send an email with the content to your email address. From there you can continue exchanging emails with the person who filled out the form. Simple, right?

![overview](https://raw.githubusercontent.com/adnanrahic/cdn/master/lambda-mailer/lambda-mailer.png)

Let's start hacking!

### Configure AWS SES

In order to send emails with the Simple Email Service AWS provides, you need to verify an email address which will be used to send the emails. It's as simple as navigating to the AWS Console and searching for **Simple Email Service**.

![ses-1](https://raw.githubusercontent.com/adnanrahic/cdn/master/building-a-serverless-contact-form/ses-2.png)

Once there press the **Email Addresses** link on the left side navigation. You'll see a big blue button called **Verify a New Email Address**. Press it and add your email address.

![ses-2](https://raw.githubusercontent.com/adnanrahic/cdn/master/building-a-serverless-contact-form/ses-1.png)

AWS will now send you a verification email to that address. Go ahead and verify it. That's pretty much it. Ready to write some code now?

### Build the API with the Serverless Framework

There are a couple of main steps in building the actual API. First thing, as always, is the configuration.

#### 1. Install the Serverless Framework

In order for serverless development to **not** be absolute torture, go ahead and install the [Serverless framework](https://serverless.com/).

```bash
$ npm i -g serverless
```

_**Note:** If you’re using Linux, you may need to run the command as sudo._

Once installed globally on your machine, the commands will be available to you from wherever in the terminal. But for it to communicate with your AWS account you need to configure an IAM User. Jump over [here for the explanation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html), then come back and run the command below, with the provided keys.

```bash
$ serverless config credentials \
    --provider aws \
    --key xxxxxxxxxxxxxx \
    --secret xxxxxxxxxxxxxx
```

Now your Serverless installation knows what account to connect to when you run any terminal command. Let’s jump in and see it in action.

#### 2. Create a service

Create a new directory to house your Serverless application services. Fire up a terminal in there. Now you’re ready to create a new service. 

What’s a service you ask? View it like a project. But not really. It's where you define AWS Lambda functions, the events that trigger them and any AWS infrastructure resources they require, all in a file called **serverless.yml**.

Back in your terminal type:

```bash
$ serverless create --template aws-nodejs --path contact-form-api
```

The create command will create a new **service**. Shocker! But here’s the fun part. We need to pick a runtime for the function. This is called the **template**. Passing in `aws-nodejs` will set the runtime to Node.js. Just what we want. The **path** will create a folder for the service.

#### 3. Explore the service directory with a code editor

Open up the **contact-form-api** folder with your favorite code editor. There should be three files in there, but for now, we'll only focus on the **serverless.yml**. It contains all the configuration settings for this service. Here you specify both general configuration settings and per function settings. Your **serverless.yml** will be full of boilerplate code and comments. Feel free to delete it all and paste this in.

```yaml
# serverless.yml

service: contact-form-api

custom:
  secrets: ${file(secrets.json)}

provider:
  name: aws
  runtime: nodejs8.10
  stage: ${self:custom.secrets.NODE_ENV}
  region: us-east-1
  environment: 
    NODE_ENV: ${self:custom.secrets.NODE_ENV}
    EMAIL: ${self:custom.secrets.EMAIL}
    DOMAIN: ${self:custom.secrets.DOMAIN}
  iamRoleStatements:
    - Effect: "Allow"
      Action:
        - "ses:SendEmail"
      Resource: "*"

functions:
  send:
    handler: handler.send
    events:
      - http:
          path: email/send
          method: post
          cors: true
```



The `functions` property lists all the functions in the service. We will only need one function though, to handle the sending of emails. The **handler** references which function it is.

Take a look at the `iamRoleStatements`, they specify the Lambda has permission to trigger the **Simple Email Service**.

We also have a `custom` section at the top. This acts as a way to safely load environment variables into our service. They're later referenced by using `${self:custom.secrets.<environment_var>}` where the actual values are kept in a simple file called `secrets.json`.

Awesome!

#### 4. Add the secrets file

We all know pushing private keys to GitHub kills little puppies. Please don't do that. Handling this with the Serverless Framework is simple. Add a `secrets.json` file and paste these values in.

```json
{
  "NODE_ENV":"dev",
  "EMAIL":"john.doe@mail.com",
  "DOMAIN":"*"
}
```

While testing you can keep the domain as `'*'`, however, make sure to change this to your actual domain in production. The `EMAIL` field should contain the email you verified with AWS SES.

#### 5. Write business logic

With that wrapped up, let's write the actual code. All in all, the code itself is rather simple. We're requiring the [SES](https://aws.amazon.com/ses/) module, creating the email parameters and sending them with the `.sendMail()` method. At the bottom, we're exporting the function, making sure to make it available in the `serverless.yml`.

```js
const aws = require('aws-sdk')
const ses = new aws.SES()
const myEmail = process.env.EMAIL
const myDomain = process.env.DOMAIN

function generateResponse (code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(payload)
  }
}

function generateError (code, err) {
  console.log(err)
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': myDomain,
      'Access-Control-Allow-Headers': 'x-requested-with',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generateEmailParams (body) {
  const { email, name, content } = JSON.parse(body)
  console.log(email, name, content)
  if (!(email && name && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Message sent from email ${email} by ${name} \nContent: ${content}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `You received a message from ${myDomain}!`
      }
    }
  }
}

module.exports.send = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body)
    const data = await ses.sendEmail(emailParams).promise()
    return generateResponse(200, data)
  } catch (err) {
    return generateError(500, err)
  }
}
```

That's it, all about 60 lines of code, with absolutely no dependencies. Sweet!

### Deploy the API to AWS Lambda

Here comes the easy part. Deploying the API is as simple as running one command.

```bash
$ serverless deploy
```

![deploy](https://raw.githubusercontent.com/adnanrahic/cdn/master/building-a-serverless-contact-form/deploy.png)

You can see the endpoint get logged to the console. That's where you will be sending your requests.

### Test the API with Dashbird

The simplest way of testing an API is with CURL. Let's create a simple CURL command and send a JSON payload to our endpoint.

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"john.doe@email.com","name":"John Doe","content":"Hey!"}' \
  https://{id}.execute-api.{region}.amazonaws.com/{stage}/email/send
```

If everything works like it should, you will get an email shortly. If not, well then you're out of luck. In cases like these, I default to using [Dashbird](https://dashbird.io/register/) to debug what's going on.

![dashbird-lambda-mailer-2](https://raw.githubusercontent.com/adnanrahic/cdn/master/building-a-serverless-contact-form/dashbird.lambda-mailer-2.gif)

The logs on my end are showing all green, so it's working perfectly! That's the API part done. Let's move on to the contact form itself.

### Build the contact form

Because I'm not the best CSS guru in the world, I'll just entirely skip that part and show you how to make it work. 😁

Let's start with the HTML markup.

```html
<form id="contactForm">
  <label>Name</label>
  <input type="text" placeholder="Name" name="name" required>
  <label>Email Address</label>
  <input type="email" placeholder="Email Address" name="email" required>
  <label>Message</label>
  <textarea rows="5" placeholder="Message" name="content" required></textarea>
  <div id="toast"></div>
  <button type="submit" id="submit">Send</button>
</form>
```

It's an incredibly simple form with three fields and a button. Let's move on to the JavaScript.

```js
const form = document.getElementById('contactForm')
const url = 'https://{id}.execute-api.{region}.amazonaws.com/{stage}/email/send'
const toast = document.getElementById('toast')
const submit = document.getElementById('submit')

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}
function success () {
  toast.innerHTML = 'Thanks for sending me a message! I\'ll get in touch with you ASAP. :)'
  submit.disabled = false
  submit.blur()
  form.name.focus()
  form.name.value = ''
  form.email.value = ''
  form.content.value = ''
}
function error (err) {
  toast.innerHTML = 'There was an error with sending your message, hold up until I fix it. Thanks for waiting.'
  submit.disabled = false
  console.log(err)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  toast.innerHTML = 'Sending'
  submit.disabled = true

  const payload = {
    name: form.name.value,
    email: form.email.value,
    content: form.content.value
  }
  post(url, payload, function (err, res) {
    if (err) { return error(err) }
    success()
  })
})
```

Another 50 lines and you have the client side logic done. Feel free to drop this into your website, change the `url` constant to the API endpoint you deployed above. Hey presto, there's your serverless contact form done and ready for production!

### Wrapping up

There you have it, a quick and easy way to add a serverless contact form to a website. Using serverless for the odd, isolated endpoint like this is great. There are absolutely no servers you need to worry about. Just deploy the code and rest assured it'll work. If something breaks, you have [Dashbird](https://dashbird.io/features/lambda-error-tracking/) watching your back, alerting you in Slack if something is wrong. Damn, I love Slack integrations.

Anyhow, I took the time to create an [npm module](https://www.npmjs.com/package/lambda-mailer) out of the code above, so in the future, nobody needs to write this twice. Just install the package and there's your contact form endpoint up and running in less than a minute. You can find the instructions in the [GitHub repo](https://github.com/adnanrahic/lambda-mailer), if you want to take a look. Give it a star if you want more people to see it on GitHub.

If you want to read some of my previous serverless musings head over to [my profile](https://dev.to/adnanrahic) or [join my newsletter!](https://upscri.be/b6f3d5/)

Or, take a look at a few of my articles right away:

- [A crash course on Serverless APIs with Express and MongoDB](/blog/a-crash-course-on-serverless-apis-with-express-and-mongodb/)
- [Solving invisible scaling issues with Serverless and MongoDB](/blog/solving-invisible-scaling-issues-with-serverless-and-mongodb/)
- [How to deploy a Node.js application to AWS Lambda using Serverless](/blog/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/)
- [Getting started with AWS Lambda and Node.js](/blog/getting-started-with-aws-lambda-and-nodejs)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. If you liked it, feel free to share. Until next time, be curious and have fun.*

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_