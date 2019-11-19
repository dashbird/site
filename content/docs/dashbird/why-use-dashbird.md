---
date: 2017-06-05
title: Why use Dashbird?
linktitle: Why use Dashbird?
description: Why use Dashbird?
kbSeries: ["ADashbird"]
kbSeries_weight: 200
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /docs/getting-started/get-started/
 - /help/basic/get-started
---

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

**Serverless architecture** fundamentally changes how we develop, deploy and, most of all, monitor applications. Since we do not have access to the underlying servers that support Lambda, we cannot rely on daemons or other direct ways of monitoring our applications from within its infrastructure.

**AWS Lambda** also comes with its own limits and idiosyncrasies: limited memory and execution time can create execution errors, for example. When a function execution fails, Lambda may automatically retry it, with side-effects that can easily become monitoring nightmares.

Two architectures empowered by Lambda are microservices and event-driven software. Both will provide numerous benefits, but will also come with its challenges. Microservices will make it harder to debug for example. When a process involving potentially dozens of functions goes wrong, where is exactly the issue?

**Dashbird** provides a Project View, where Lambda functions can be virtually grouped for unified navigation of traces and errors.

An event-driven approach (such as using S3 or Dynamo Streams to trigger Lambda) will probably make it harder to understand why and how your functions are being executed. Especially when something fails, that piece of information may be crucial to understand and fix the issue.

By also integrating with **AWS X-Ray** and **API Gateway**, Dashbird will provide a comprehensive view of your cloud stack, from the start and until the end of a process that involves Lambda.

**Dashbird was created by serverless developers, for serverless developers**. We walk on the same shoes as you do and put in a tremendous amount of effort to make your life easier and to keep your peace of mind when running production applications on top of Lambda.