---
title: Building a cryptocurrency monitoring platform using serverless
description: >-
  Development overview of a cryptocurrency monitoring platform using the
  serverless framework and how to monitor it with Dashbird
date: 2018-05-01T00:00:00.000Z
frontImage: 2018-05-01/cryptocurrency-monitoring.jpg
thumbnail: /images/blog/2018-05-01/cryptocurrency-monitoring.jpg
authorlink: 'https://twitter.com/agfviggiano'
author: Antonio Viggiano
---

## Introduction

![Trading graphs](/images/blog/2018-05-01/cryptocurrency-monitoring.jpg)

In this article I will explain how I built [COINDATAX](https://coindatax.com/?utm_source=dashbird&utm_medium=link), a cryptocurrency analytics platform to help investors analyze the market, and explain why we choose to go serverless. I will also explain our biggest pain points with AWS Lambda, and how [Dashbird](https://dashbird.io) helped us.

## Why serverless

When my co-founder and I decided to build a cryptocurrency web application, we immediately thought about using AWS Lambda for our integrations. After all, since we were a small team trying to create a new product, we didn't want to spend too much time managing AWS servers. Having to select the ideal instance type, configure auto scaling policies and create a deployment pipeline takes a significant amount of work, which we simply could not afford.

In addition, since we would like to add as much integrations as possible to our dashboards, we wanted our application to scale linearly with product usage. With traditional server-based architectures, your environment scales more like a "step" function -- if, say, each instance can handle 100 clients, when you reach 101 visitors you need to spawn a new machine that will be idle most of the time. With serverless architecture, your application scales, up or down, accordingly to each request.

Another benefit of Lambda, or more specifically of the [serverless framework](https://serverless.com/), is infrastructure as code. With serverless, you know exactly what is going on with your infrastructure simply by looking at a configuration file. Although you can do this for regular server-based architectures, using tools such as [terraform](https://www.terraform.io/), you usually need to think of it as something extra to your infrastructure design, while most complex AWS applications built on top of AWS Lambda will use serverless since the beginning.

Now speaking about some of the drawbacks:

First of all, AWS Lambda has some inherent limitations. You can't have, for example, a long running running or expensive process. If your functions last longer than 5 minutes or if they need more than 1 MB of RAM, you need to rework your architecture in order to use serverless. It might be necessary to use step functions, or to break your lambdas into smaller functions so that you can pass the processed output from one to the other.

Secondly, Lambda functions are indisputably harder to debug. Since you don't have direct access to the instance where your code is running and since AWS CloudWatch is somewhat limited in its monitoring capabilities, sometimes things break and you have no idea of what happened. This is where Dashbird comes into play, but I'll talk more about that in a moment.

<br>

## Architecture

![Our cryptocurrency monitoring platform architecture](/images/blog/2018-05-01/cryptocurrency-monitoring-architecture.png)

The architecture behind COINDATAX is pretty straightforward. We pull data from a number of external APIs, then we do some cleaning and processing to be sure that all data is consistent and reliable, and finally we store the events in our databases. These data extractors are triggered via CloudWatch events at fixed intervals, so that we have up to date crypto information in our system.

In this article I will explain how to create a monitoring platform that implements the first step of our product, the data gathering of one of an external API. More specifically, we will go through the following:

1. Setup of the development environment (Node.js, serverless)
2. Development of the API integration
3. Deployment of the application
4. Monitoring of the Lambda functions with Dashbird

<br>

### 1\. Setup of the development environment

Install serverless

```bash
  $ npm i -g serverless
```

Configure the `serverless.yml` file. In this example we are using Node.js 6 and we have only one function that is triggered every 5 minutes.

```yml
service: coindatax-dashbird-demo

provider:
  name: aws
  runtime: nodejs6.10

functions:
  coinmarketcap:
    handler: functions/coinmarketcap.handler
    events:
      - schedule: rate(5 minutes)
```

<br>

### 2\. Development of the API integration

Our Lambda function will be very simple. The first step of a monitoring platform is to extract data from external APIs. Here we connect to CoinMarketCap's JSON API and get the ticker information of the the top coins for that period.

```javascript
// functions/coinmarketcap.js

const request = require('request-promise');
const uri = 'https://api.coinmarketcap.com/v1/ticker/'

function handler(event, context, callback) {
  const options = {
    uri,
    json: true
  }
  request(options)
    .then(data => callback(null, data)) // insert into database
    .catch(err => callback(err))
}

module.exports = {
  handler
}
```

<br>

### 3\. Development of the API integration

To deploy a serverless application, simply run

```bash
  $ serverless deploy -v
```

And check out the output logs

```
Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
CloudFormation - CREATE_IN_PROGRESS - AWS::CloudFormation::Stack - CoindataxDashDashbirdDashDemo-dev
CloudFormation - CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_IN_PROGRESS - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_COMPLETE - AWS::S3::Bucket - ServerlessDeploymentBucket
CloudFormation - CREATE_COMPLETE - AWS::CloudFormation::Stack - CoindataxDashDashbirdDashDemo-dev
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (17.23 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
CloudFormation - UPDATE_IN_PROGRESS - AWS::CloudFormation::Stack - CoindataxDashDashbirdDashDemo-dev
CloudFormation - CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_IN_PROGRESS - AWS::Logs::LogGroup - CoinmarketcapLogGroup
CloudFormation - CREATE_IN_PROGRESS - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_IN_PROGRESS - AWS::Logs::LogGroup - CoinmarketcapLogGroup
CloudFormation - CREATE_COMPLETE - AWS::Logs::LogGroup - CoinmarketcapLogGroup
CloudFormation - CREATE_COMPLETE - AWS::IAM::Role - IamRoleLambdaExecution
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Function - CoinmarketcapLambdaFunction
CloudFormation - CREATE_IN_PROGRESS - AWS::Lambda::Function - CoinmarketcapLambdaFunction
CloudFormation - CREATE_COMPLETE - AWS::Lambda::Function - CoinmarketcapLambdaFunction
CloudFormation - UPDATE_COMPLETE_CLEANUP_IN_PROGRESS - AWS::CloudFormation::Stack - CoindataxDashDashbirdDashDemo-dev
CloudFormation - UPDATE_COMPLETE - AWS::CloudFormation::Stack - CoindataxDashDashbirdDashDemo-dev
Serverless: Stack update finished...
Service Information
service: CoindataxDashDashbirdDashDemo
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  None
functions:
  coinmarketcap: CoindataxDashDashbirdDashDemo-dev-coinmarketcap

Stack Outputs
CoinmarketcapLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:123456789012:function:CoindataxDashDashbirdDashDemo-dev-coinmarketcap:1
ServerlessDeploymentBucketName: coindataxdashdashbirddashdemo-dev-serverlessdeploymentbucket-abcdefgh1234
```

<br>

### 4\. Monitoring of the Lambda functions with Dashbird

After you have successfully deployed your Lambda function, you quickly realize that AWS CloudWatch does not offer that many monitoring features for you to be in full control of your application. Dashbird helps a lot with that, with a dashboard that groups all your Lambdas in a single place, a live tailing of your application logs and more.

![Dashbird overview Dashboard](/images/blog/2018-05-01/dashbird-dashboard.png)

What I love the most about Dashbird is that it was pretty easy to set it up, and at the same time it provided some very useful insights to our team. I literally spent less than 5 minutes configuring it, and we were able to have a much better understanding of our architecture.

## Learning outcomes

Because of Dashbird, we noticed that all our Lambdas were running with a third of the allocated memory size, and that we could confidently reduce that threshold in order to reduce costs. The change was very simple to implement, as it sufficed to update the `memorySize` default parameter of serverless:

```yml
provider:
  name: aws
  runtime: nodejs6.10
  memorySize: 512 # default is 1024
```

With one line of code we reduced our billing by 50%, and we are constantly monitoring our application to see if we can reduce it even further.

## Conclusion

Serverless architecture has undoubtedly many advantages both small and big companies. Nevertheless, you should always take into account the unexpected debugging/monitoring time that you usually don't have in traditional server-based systems. With Dashbird, some of that can be reduced and maybe even eliminated, so that you end up with only the benefits.
