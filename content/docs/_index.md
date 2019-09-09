---
date: 2017-06-05
title: Getting Started
linktitle: Getting Started
description: Dashbird is the leading serverless monitoring and troubleshooting platform that helps software engineers to launch agile serverless websites and software.
kbSeries: ["ADashbird"]
kbSeries_weight: 100
---

Dashbird is a service to **monitor**, **debug** and **improve** your lambda functions. **It's tailor made to help develop serverless apps.**

Serverless architecture fundamentally changes how we build, deploy and maintain software. Although AWS CloudWatch can be used to monitor Lambda functions, for example, it was not designed specifically for it, and Dashbird fills the gaps left by CloudWatch and other traditional tools.

### Core Benefits

Dashbird provides an overview of all lambda executions across your entire account in a single view:

<img alt='Main dashboard' src='/images/docs/lambda-functions-overview.png'>

<br>

### Error Tracking & Alerting

Track errors in real-time and receive alerts by email and/or Slack whenever things go south in your application backend.

Dashbird automatically detects all types of application errors and exceptions, in every runtime supported by AWS Lambda: NodeJS, Python, Java, Ruby, Go, .NET. It also monitors errors related to the Lambda platform and its limits, such as timeout, lack of memory, etc.

Detailed stack traces are available within Dashbird so that you can easily track sources of issues and debug them.

<img alt='AWS Lambda error tracking' src='/images/docs/lambda-error-tracking.png'>

<br>

### X-Ray & API Gateway Integration

Dashbird also integrates with AWS X-Ray and API Gateway. This way, you can navigate your entire cloud stack, as well as API and application traces and errors in a single interface, making it much easier and faster to identify where failures are occurring and how to fix them.

### Policies

Monitor each function behavior with customized policies based on performance and resource usage.

For example, an incident can be raised when one or more Lambdas start using more than 90% of memory, on average, over a period of 10 minutes.

<img alt='AWS Lambda Error Policies' src='/images/docs/aws-lambda-error-policies.png'>

<br>

### Function View

This dashboard shows health, cost and other meaningful statistics of a single lambda function. You can also see the invocation history and pinpoint errors, cold starts, retries, and anomalies at a glance.

<img alt='Function dashboard' src='/images/docs/aws-lambda-function-view.png'>

<br>

### Under the hood

Dashbird requires zero instrumentation (a.k.a. no code changes), thus your Lambda costs, execution speed, and latency will not be affected.

In a handful clicks and less than five minutes, through a CloudFormation stack, we will connect to your AWS account privately and monitor Lambda logs in your CloudWatch Log groups. From that on, Dashbird will automatically start monitoring your Lambda apps.

<img alt='Error view' src='/images/docs/dashbird-install.png'>
