---
title: How to deploy a Node.js application to AWS Lambda using Serverless
description: Today you'll learn how to deploy a Node.js application to AWS Lambda with the help of the Serverless Framework.
date: 2018-06-21T00:00:00.000Z
frontImage: "2018-06-21/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless.jpeg"
thumbnail: "images/blog/2018-06-21/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless.jpeg"
canonical: https://dev.to/adnanrahic/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless-2nc7
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
featpop: most-popular
blog: ["Serverless", "Node.js", "Lambda"]
---

Being a developer is amazing. Writing code, solving problems and thinking of ingenious solutions for complicated algorithms is what we live for. But, the grass is not always so green on this side of the fence. Sooner or later you need to get your hands dirty and deploy the app you worked so hard on. Deployments are not always easy. To be blunt, they can be incredibly hard and time-consuming. That's what we'll solve in this tutorial. 

## TL;DR
You can follow along from the beginning or jump to the section which interests you most, and severely hurt my feelings. 😅

- [Goals](#htdanatalus-1)
- [Prerequisites](#htdanatalus-2)
- [What's AWS Lambda?](#htdanatalus-3)
- [But, how does it work?](#htdanatalus-4)
- [What will we deploy?](#htdanatalus-5)
- [How to deploy it?](#htdanatalus-6)
- [Let's get coding!](#htdanatalus-7)
- [Ready to deploy!](##htdanatalus-8)
- [Deploy to production!](#htdanatalus-9)
- [How to gain insight into your system?](#htdanatalus-10)

<h3 id="htdanatalus-1">Goals</h3>

Today you'll learn how to deploy a Node.js application to [AWS Lambda](https://aws.amazon.com/lambda/) with the help of the [Serverless Framework](https://serverless.com).

The walkthrough will also cover a real-life scenario of deploying a production version of your application, with [environment variables](https://serverless.com/framework/docs/providers/spotinst/guide/variables/#environment-variables), [proper monitoring](https://dashbird.io/features/aws-lambda-serverless-monitoring/), and, of course, [easy debugging](https://dashbird.io/features/lambda-error-tracking/). Oh, how I love seeing nice stack traces!

<h3 id="htdanatalus-2">Prerequisites</h3>

This tutorial will need you to have a few simple things set up already. Don't worry, nothing special, just the basics, and I'll link it all below for you to see, and make sure you have, before moving on.

- [AWS account](https://aws.amazon.com/console/) - AWS has 12 months of free tiers, and plenty of lifetime free tiers, so don't worry about breaking the bank.
- [Node.js and npm installed](https://nodejs.org/en/download/) - Here's a quick reference for making sure you have them installed.
- [Serverless Framework installed](https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44#422a) - Check this out for a nice reference, and follow along steps 1-3.
- [Dashbird account](https://dashbird.io/features) - This will give us the required overview to see what's happening to our app.

Ready? Let's go!

<h3 id="htdanatalus-3">What's AWS Lambda?</h3>

AWS Lambda is a pay-as-you-go serverless compute service. Meaning what now? Well, you just deploy your source code to AWS and they handle the rest. Amazing! No need to fiddle with servers, ssh connections, Linux or Vim. But, want to know what's even better? It scales automatically and has absolutely no downtime. I'll let that sink in...

The technical definition for AWS Lambda would be a Function as a Service. You deploy some code, it gets invoked, processes some input, and returns a value. Simple! 

Hold up a sec. We need to mention a crucial fact. All lambda functions are stateless, meaning they cannot store persistent data. And, if I just said **Function** as a Service, how do we deploy a whole Node.js application to AWS Lambda?

<h3 id="htdanatalus-4">But, how does it work?</h3>

When you think about it, it's not that complicated. A single lambda function is essentially just a tiny Node.js runtime environment. You can run whatever you want in there. That's what we'll do, package up a Node.js app and send it off to AWS Lambda. Sneaky. 😉

<h3 id="htdanatalus-5">What will we deploy?</h3>

To make this example as simple as possible, the code we'll be deploying is just 7 lines long. However, it could be as large as any Node.js application you have in production, and it would all work like a charm. Intriguing... 

<h3 id="htdanatalus-6">How do we deploy it?</h3>

In comes the Serverless Framework like a horse riding a white knight! Hold up, I may have that backward. 🤔 

Anyhow, this awesome framework enables us to both develop our apps locally, just like we're used to, but also deploy it with one simple command. Hmm... tell me more.

<h3 id="htdanatalus-7">Let's get coding!</h3>

First thing's first. Open up your terminal, we need to install some packages. Yay, installing stuff, love it! 😫

## 1. Install and configure the Serverless Framework

```shell
$ npm install -g serverless
```

_**Note**: Prefix the command with `sudo` if you're running this command on Linux._

```shell
$ sls config credentials --provider aws --key PUBLIC_KEY --secret SECRET_KEY
```

Make sure to add your IAM User's public and secret key instead of the placeholders I specified above. If you skipped this part above, [here's the official guide in the AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console).

## 2. Create the boilerplate code

Let's create a new folder and give it a rather noteworthy name. Jump over to your terminal and run the commands below.

```shell
$ mkdir serverless-nodejs-app && cd serverless-nodejs-app
```

Awesome, now what's left is to run the `create` command to generate some starter code for us. This is called a serverless service.

```shell
$ sls create -t aws-nodejs -n serverless-nodejs-app
```

Only one more step before opening a code editor.

## 3. Installing dependencies

Like you can see in the code snippet above, we need to install a few modules first. Lucky for us there are only two and it's as simple as running one command.

```shell
$ npm init -y
$ npm install --save express serverless-http
```

That's it! Let's open it up in a code editor and do some real coding.

## 4. Coding for real

Once you open up the code editor, you'll see three files. Ignoring the `.gitignore` file, let me explain what the `handler.js` is first, then I'll move on to the `serverless.yml`. The handler will hold all your app logic, all the code. While the `servereless.yml` is the configuration file for the resources you'll be creating on AWS.

<p style="text-align:center">
  <img src="https://raw.githubusercontent.com/adnanrahic/cdn/master/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/starter-code.png" alt="vs code sidebar shows the file structure" />
</p>

Go ahead and rename the `handler.js` to `app.js`, just to make it simpler for us to figure out what goes where.

Delete all the starter code and paste this code snippet into the `app.js` file.

```js
// app.js

const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
  res.status(200).send('Hello World!')
})
module.exports.server = sls(app)
```

Seven lines of code 😎. Looks familiar right? Just like you're used to. That's it. Believe it or not, there's nothing more to it. Let's move on to the `serverless.yml`.

Once again, delete all the boilerplate code and paste this in.

```yaml
# serverless.yml

service: serverless-nodejs-app

provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  region: eu-central-1

functions:
  app:
    handler: app.server # reference the file and exported method
    events: # events trigger lambda functions
      - http: # this is an API Gateway HTTP event trigger
          path: /
          method: ANY
          cors: true
      - http: # all routes get proxied to the Express router
          path: /{proxy+}
          method: ANY
          cors: true
```

Done! All that's left is to deploy it.

<h3 id="#htdanatalus-8">Ready to deploy!</h3>

Switch back to the terminal window. By running one simple command your app will be deployed.

```shell
$ sls deploy
```

The Serverless Framework will now wrap everything up into a nice bundle, create a CloudFormation file from the `serverless.yml` and shoot it off to AWS S3. Once the resources are created and the code is deployed, you'll see an endpoint get sent back to you in the terminal.

![terminal show sls deploy output](https://raw.githubusercontent.com/adnanrahic/cdn/master/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/sls-deploy.png)

Opening up the provided URL in a browser you'll see `Hello World!` get sent back to you.

<h3 id="htdanatalus-9">Deploying to production!</h3>

This is great and all, but not really ready for a production environment... yet. Worry not! You'll be surprised how simple it is to make it production ready.

## 1. Add a secrets.json file to keep environment variables

For now, let's just add the `NODE_ENV` in the `secrets.json`.

```json
{
  "NODE_ENV": "production"
}
```

## 2. Add a reference for the secrets.json in the serverless.yml

As simple as it was to add the secrets file, it's even easier to just reference the file in the `serverless.yml`.

```yaml
service: serverless-nodejs-app

custom: # add these two lines
  secrets: ${file(secrets.json)} # reference the secrets.json file

provider:
  name: aws
  runtime: nodejs8.10
  stage: production # make sure to change this to production
  region: eu-central-1
  environment: # add environment property
    NODE_ENV: ${self:custom.secrets.NODE_ENV} 
    # reference the NODE_ENV from the secrets.json file

functions:
  app:
    handler: app.server
    events:
      - http:
          path: /
          method: ANY
          cors: true
      - http:
          path: /{proxy+}
          method: ANY
          cors: true

```

Amazing, that's it! Delete the `node_modules` and `.serverless` folders from the service and run `npm install` once again, but this time with the `--production` flag.

```shell
$ npm install --production
```

Great! All that's left is to re-deploy the service and you're set.

```shell
$ sls deploy
```

And this is what we end up with.

<p style="text-align:center">
  <img src="https://raw.githubusercontent.com/adnanrahic/cdn/master/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/final-code.png" alt="vs code final file structure" />
</p>

I guess we're done? Not really. Having an app running in production just because you installed npm modules with `--production` doesn't really cut it. To be able to sleep well at night, I need a bit more. Here's where proper system insight and monitoring tools come to play. Let me show you.

<h3 id="htdanatalus-10">How to gain insight into your system?</h3>

The #1 problem with all serverless applications are their distributed nature. Plain and simple, it's impossibly [hard to have an overview](https://serverless.com/blog/serverless-monitoring-the-good-the-bad-and-the-ugly/) of all the things going on. Not to mention how hard it is to debug when something goes wrong.

To calm my fears I use [Dashbird](https://dashbird.io/signup/). It's a simple monitoring tool that doesn't require me to change any code and has absolutely no overhead. So, no performance-hits either. Nice!

Thankfully, they have sensible documentation, which makes the onboarding process a breeze. Go ahead and follow their [Quick Start guide](https://dashbird.io/docs/get-started/quick-start/). Don't forget to come back here though. 😄

Once you're done, all the requests will start piling in one by one and you should see something like this.

![Dashbird](https://raw.githubusercontent.com/adnanrahic/cdn/master/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/dashbird-dashboard-lambda-3.gif)

### Wrapping up

This was fun! 

[Lambda](https://aws.amazon.com/lambda/) is awesome! When combined with HTTP event triggers such as [API Gateway](https://aws.amazon.com/api-gateway/), development tools like the [Serverless Framework](https://serverless.com/) and observability tools such as [Dashbird](https://dashbird.io/), things just become so easy.

This simple API example we coded above is just a proof of concept. But you can see the point. It gives you a starting point from where you can create awesome production apps!

If you missed any of the steps above, [here's the repository](https://github.com/adnanrahic/express-sls-app) with all the code.

[*Feel free to join my serverless newsletter if you want to play a key role in the serverless revolution!*](https://upscri.be/b6f3d5/)

Or, take a look at a few of my other articles regarding serverless:

- [Getting started with AWS Lambda and Node.js](https://dev.to/adnanrahic/getting-started-with-aws-lambda-and-nodejs-1kcf)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. Until next time, be curious and have fun.*

___

_Feel free to join our newsletter, to stay up to date regarding all things serverless! Any questions? Drop us a comment below!_