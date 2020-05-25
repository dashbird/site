---
title: Architectural Pattern for Highly Scalable Serverless APIs
description: Learn how to combine API Gateway, Lambda and SQS to produce highly scalable API architectures
date: 2020-06-10T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/architectural-pattern-for-highly-scalable-serverless-apis.png"
thumbnail: "images/blog/2020-05-vacation-buffer/architectural-pattern-for-highly-scalable-serverless-apis.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Lambda", "Architectural Patterns", "Scalability", "API Gateway", "SQS"]
draft: true
---

The most common API architecture on Serverless backends is not necessarily the most scalable and resilient option. Many developers take for granted that an AWS Lambda processing external requests will require an API Gateway endpoint connected directly to it.

![API Gateway and Lambda - highly coupled](/images/blog/2020-05-vacation-buffer/api-lambda-highly-coupled.png "API Gateway and Lambda - highly coupled")



## How to decouple Lambda and API Gateway

One of the best options to decouple a Lambda function and an API Gateway endpoint is by using an SQS queue. Requests come into API Gateway, which are sent as messages to SQS. Lambda polls SQS and processes messages on a regular basis, in batches.


![API Gateway and Lambda decoupled by SQS](/images/blog/2020-05-vacation-buffer/api-lambda-sqs-decoupled.png "API Gateway and Lambda decoupled by SQS")



## When should we use an SQS queue with API Gateway?

Anytime we’re receiving messages from clients that don’t have to be processed immediately. The client may need a response, but it could be only that “_your message was received and will be processed shortly_”. Usually, these are **<span style="text-decoration:underline;">Write</span>** requests to API endpoints that can accept an eventually consistent model.


## What are the advantages of using SQS with API Gateway and Lambda?

From the three services we are discussing, SQS is the most scalable, and Lambda is the least. Failures due to scalability limitations are more likely to happen in downstream resources, such as Lambda functions and DynamoDB tables. Having SQS paired with API Gateway makes our endpoints more scalable and resilient.

Throwing a message in an SQS queue is also usually faster than executing our code on Lambda synchronously to the API request. Sometimes the client doesn’t have to wait for the time it takes for us to process the request.

By having SQS taking the peaks in traffic from the API, we can allocate a lower concurrency threshold to the particular Lambda responsible for processing the messages. This leaves the overall Lambda quota freed up to other Lambdas in our system that may require higher throughput capabilities


## Implications for application monitoring

Monitoring API endpoints that are decoupled from downstream computing resources as we described above pose additional monitoring challenges, if we don’t have a Serverless-first monitoring tool, such as [Dashbird](https://dashbird.io).

First, messages can take an unpredictable period of time to end up being processed. Our system might do well with an eventually consistent model, but it may be unacceptable for messages to take several hours to be processed, for example.

If demand stays too high for a considerable amount of time and depending on how restrictive we set the Lambda concurrency limit, we might end up losing messages or having our queue full and unable to accept new requests from the API.

Debugging issues would also be harder since the request that triggered a potential issue and the error reporting are now separate apart by a queue.

Systems running in production that require full scalability possibilities from a cloud provider, such as AWS, must rely on specialized monitoring tools. [Dashbird](https://dashbird.io) can monitor not only Lambdas, but also API Gateways and SQS queues, all together in one place. It provides not only alerts and notifications when things go wrong, but also can capture potential failures in advance, such as messages piling up in a queue, or unusual API latency.

Dashbird provides a [free tier and also a trial](https://dashbird.io/pricing) of the entire feature-set. [You can start right now with no credit card](https://dashbird.io/#register).

