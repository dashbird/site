---
date: 2019-11-08T11:44:23+02:00
title: "Introduction to AWS Lambda."
description: "What is AWS Lambda and how it works"
learning: ["BAWS Lambda"]
learning_weight: 100
---

# What is AWS Lambda?

AWS Lambda is a Function-as-a-service (FaaS) computing platform provided by AWS. FaaS provides a computing platform to execute code in the cloud. As in any serverless system, it abstracts away the complexities of provisioning and managing a cloud infrastructure.

It is commonly used when building microservices applications, but also serves monolithic and other types of architectures as well. There are several [use cases and multiple benefits](/knowledge-base/aws-lambda/aws-lambda-benefits-and-use-cases/) from using AWS Lambda.


# Execution environment and available runtimes

* Container with a 64-bit Amazon Linux AMI[^1]
* RAM: 128MB to 3008MB, in 64 MB increments
* CPU increases incrementally with RAM[^2]
* Execution duration: up to 900 seconds (or 15 minutes)
* Ephemeral disk space 512MB
* Compressed package size 50MB
* Uncompressed package size 250MB

Lambda supports the following runtimes by default:

* Node.js: v10.15 and v8.10
* Java 8
* Python: 3.7, 3.6, and 2.7
* .NET Core: 1.0.1 and 2.1
* Go 1.x
* Ruby 2.5
* Rust

Developers can implement any other custom runtime of their choosing. The custom runtime will run in the Lambda execution environment. It can be a shell scrit or an executable binary[^3].


# Anatomy of a Lambda function

All Lambda functions consist of three key elements:

* Handler function
  * The main function that will be executed each time an event occurs.
  * Takes two required arguments: an `event` and `context` objects (also takes an optional `callback` object)
* Event Object
  * The first argument to the handler function
  * Contains information about the invocation event
  * An invocation event could be an API request event holding the HTTP request object, for example
* Context object
  * Contains information about the Lambda runtime, such as the function name, version, memory limit, etc.[^4]
  * Provides a method that returns the remaining miliseconds left before the function times out


# Pricing and free tier

Lambda functions are billed by the time it takes to execute your function, being rounded up to the nearest 100ms and the GB-seconds based on the memory consumption. It also comes with a free tier of 1 million requests and 400,00 GB-seconds of compute time each month.

After the free tier, it costs $0.20 per 1 million requests and $0.00001667 for every GB-seconds. The GB-seconds is based on the memory consumption of the Lambda function. For further details check out the <a href='https://aws.amazon.com/lambda/pricing/' target='_blank'>Lambda Pricing Page</a> or the <a href='/lambda-cost-calculator' target='_blank'>Lambda Cost Calculator</a>.


---

**Footnotes**

[^1]:
    [AWS Lambda Runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html)

[^2]:
    [At 1,792 MB, a function has the equivalent of 1 full vCPU (one vCPU-second of credits per second)](https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html)

[^3]:
    [Custom AWS Lambda Runtimes documentation](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html)

[^4]:
    More info about the AWS Lambda Context Object in [Python](https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html), [NodeJS](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html), [JAVA](https://docs.aws.amazon.com/lambda/latest/dg/java-context-object.html), [Golang](https://docs.aws.amazon.com/lambda/latest/dg/go-programming-model-context.html), and [C#](https://docs.aws.amazon.com/lambda/latest/dg/dotnet-context-object.html)
