---
date: 2019-11-08T11:44:23+02:00
title: "Introduction to AWS Lambda."
description: "What is AWS Lambda and how does it work?"
learning: ["BAWS Lambda"]
learning_weight: 100
---

### What is AWS Lambda?

AWS Lambda is a function as a service (FaaS) computing platform provided by AWS. Function as a service (FaaS) is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app. Building an application following this model is one way of achieving a "serverless" architecture, and is typically used when building microservices applications. 

### Benefits and use cases

Lambda can be used for various use cases, including *batch processing*, *stream processing*, *web applications*, *mobile applications*, *IoT* (internet of things), and *ETL* (extract-transform-load).
Benefits of FaaS are associated with on-demand functionality, that enables applications to scale up and down depending on user activity.


### Execution environment and available runtimes

Function run in a container with a 64-bit Amazon Linux AMI. Execution environment is as follows:

  * Container with a 64-bit Amazon Linux AMI
  * RAM: 128MB to 3008MB, in 64 MB increments 
  * CPU increases incrementally with RAM
  * Execution duration up to 900 seconds
  * Ephemeral disk space 512MB
  * Compressed package size 50MB
  * Uncompressed package size 250MB


Lambda supports the following runtimes and allows custom runtimes through custom AMI.

  * Node.js: v10.15 and v8.10
  * Java 8
  * Python: 3.7, 3.6, and 2.7
  * .NET Core: 1.0.1 and 2.1
  * Go 1.x
  * Ruby 2.5
  * Rust
  * Custom runtimes

## Pricing and free tier

Lambda functions are billed by the time it takes to execute your function, being rounded up to the nearest 100ms and the GB-seconds based on the memory consumption. It also comes with a free tier of 1 million requests and 400,00 GB-seconds of compute time each month.


After the free tier, it costs $0.20 per 1 million requests and $0.00001667 for every GB-seconds. The GB-seconds is based on the memory consumption of the Lambda function. For further details check out the <a href='https://aws.amazon.com/lambda/pricing/' target='_blank'>Lambda Pricing Page</a> or the <a href='/lambda-cost-calculator' target='_blank'>Lambda Cost Calculator</a>.
