---
date: 2017-06-05
title: Getting Started
linktitle: Getting Started
description: Dashbird is the leading serverless monitoring and troubleshooting platform that helps software engineers to launch agile serverless websites and software.
learning: ["ADashbird"]
learning_weight: 100
draft: false
---

AWS Lambda is a serverless computing service provided by AWS.

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

Each function runs inside a container with a 64-bit Amazon Linux AMI. And the execution environment has:

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

The Lambda free tier includes 1M free requests per month and 400,000 GB-seconds of compute time per month. Past this, it costs $0.20 per 1 million requests and $0.00001667 for every GB-seconds. The GB-seconds is based on the memory consumption of the Lambda function. For further details check out the Lambda pricing page.
