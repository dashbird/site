---
date: 2017-06-05
title: Tracing Lambda Functions with Dashbird
linktitle: Tracing
description: Tracing
kbSeries: ["CUser Guide"]
kbSeries_weight: 300
---

Dashbird provides tracing possibilities through [AWS X-Ray](https://aws.amazon.com/xray/).

### How to enable X-Ray?

To configure X-Ray integration on an AWS Lambda function:

1. Open the AWS Lambda console.
2. Choose your function.
3. Choose Configuration.
4. Under Debugging and error handling, choose Enable active tracing.

![](/images/docs/tracing-enable-x-ray.png)

<br/>

### How it works?

Dashbird automatically can detect if a function has [AWS X-Ray](https://aws.amazon.com/xray/) enabled or not.
When opening an invocation belonging to a lambda that has X-Ray monitoring enabled it will fetch X-Ray data on-demand and show the results in an orderly fashion.

Just from enabling X-Ray you get basic measurements and more insight. But to gain incredible value from X-Ray, you use the [X-Ray SDK](https://github.com/aws/aws-xray-sdk-node).

### How to use the X-Ray SDK?

Using the SDK is preferred because it supports instrumenting calls to SQL databases, automatic AWS SDK client instrumentation, and other awesome features as you can see below.

The X-Ray SDK provides:

- Interceptors to add to your code to trace incoming HTTP requests
- Client handlers to instrument AWS SDK clients that your application uses to call other AWS services
- An HTTP client to use to instrument calls to other internal and external HTTP web services

> ...you can instrument your Lambda functions with the same methods that you use to instrument applications running on other services. The primary difference is that you don't use the SDK to instrument incoming requests, make sampling decisions, and create segments. - **AWS Documentation**

### What's the benefit?

AWS X-Ray is a powerful tool that provides tracing data throughout the life of an AWS invocation. With the help of X-Ray it is possible to track the full extent of an invocation flow.

It can also show you the duration metrics to different services. For example X-Ray can show you exactly how long it took to read and write data to DynamoDB, or any other AWS service.

Below you can see what it actually looks like in Dashbird.

![](/images/features/x-ray.png)

X-Ray also supports custom traces, meaning data you want to manually track. Dashbird shows all this and gives you a really easy way to **understand where time is lost and what actually failed.**

You can read our product update about how we added X-Ray support [here](/blog/tracing-lambda-functions-with-aws-x-ray/).

---

Our integration with X-Ray connects each invocation with an trace and gives you a breakdown of execution. Check out all our other integrations [here](/docs/user-guide/integrations/)!
