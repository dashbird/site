---
date: 2017-06-05
title: "Common Problems and Best Practices."
description: "How to avoid common problems you run into while developing serverless applications."
learning: ["AAWS Lambda"]
learning_weight: 300
---

AWS Lambda is a function as a service computing platform provided by AWS. With Lambda, developers can focus on writing code while the cloud provider manages the allocation of the underlying compute resources.

## Getting started

The best way to get started with Lambda functions is by using the <a href='https://github.com/awslabs/serverless-application-model/' target='_blank'>SAM Framework</a> provided by AWS.

## Anatomy of Lambda function

Here `myHandler` is the name of our Lambda function. The `event` object contains all the information about the event that triggered this Lambda. In the case of an HTTP request it’ll be information about the specific HTTP request. The `context` object contains info about the runtime our Lambda function is executing in. After we do all the work inside our Lambda function, we simply call the `callback` function with the results (or the error) and AWS will respond to the HTTP request with it.

## Runtimes

Lambda supports the following runtimes.

  * Node.js: v10.15 and v8.10
  * Java 8
  * Python: 3.7, 3.6, and 2.7
  * .NET Core: 1.0.1 and 2.1
  * Go 1.x
  * Ruby 2.5
  * Rust

## Execution environment

Each function runs inside a container with a 64-bit Amazon Linux AMI. The execution environment has:

  * Memory: 128MB - 3008MB, in 64 MB increments
  * Ephemeral disk space: 512MB
  * Max execution duration: 900 seconds
  * Compressed package size: 50MB
  * Uncompressed package size: 250MB

You might notice that CPU is not mentioned as a part of the container specification. This is because you cannot control the CPU directly. As you increase the memory, the CPU is increased as well.

## Pricing

Lambda is usually the least expensive part of our infrastructure costs.

Lambda functions are billed only for the time it takes to execute your function. And it is calculated from the time it begins executing till when it returns or terminates. It is rounded up to the nearest 100ms.

Note that while AWS might keep the container with your Lambda function around after it has completed; you are not going to be charged for this.

Lambda comes with a very generous free tier and it is unlikely that you will go over this while working on this guide.

The Lambda free tier includes 1M free requests per month and 400,000 GB-seconds of compute time per month. Past this, it costs $0.20 per 1 million requests and $0.00001667 for every GB-seconds. The GB-seconds is based on the memory consumption of the Lambda function. To estimate a cost of a single function, you can check out the <a href='/lambda-cost-calculator' target='_blank'>cost calculator</a>. For further details check out the <a href='https://aws.amazon.com/lambda/pricing/' target='_blank'>Lambda pricing page</a>.
