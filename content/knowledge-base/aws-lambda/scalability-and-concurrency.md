---
date: 2019-11-18T17:10:00-03:00
title: "Scalability and Concurrency"
description: "Understand how Lambda scales and deals with concurrency"
learning: ["BAWS Lambda"]
learning_weight: 710
---

# Overview

A Lambda function's _concurrency level_ is the number of invocations being served simultaneously at any given point in time. Lambda doesn't limit the number of "_requests per second/minute_", for example, as is common in API services. Developers can run as many requests per period of time as needed, providing that it doesn't violates concurrency limits.

# What is Concurrency

As stated below, concurrency is the total number of simultaneous requests in a given time. Below is a visual representation of this concept, to make it easier to understand.

![Concurrency Visual Representation](/images/knowledge-base/concurrency-visual-representation.png)

Key takeaways from the diagram above:

1. All requests lasted a few milliseconds, having started and finished within one second
1. At time **Point 1**, the concurrency is **four requests**
1. At time **Point 2**, concurrency dropped to only **two requests**
1. Despite handling **five requests in total**, the **maximum concurrency was four** over this period of one second

# Concurrency Limits and Scalability

Lambda concurrency limits will depend on the Region where the function is deployed. It will vary from 500 to 3,000.

New functions are limited to this default concurrency threshold set by Lambda. After an initial burst of traffic, Lambda can scale up every minute by an additional 500 microVMs[^1] (or instances of a function).

This scaling process continues until the concurrency limit is met. Developers can request a concurrency increase in the AWS Support Center[^2].

When Lambda is not able to cope with the amount of concurrent requests an application is experiencing, requesters will receive a throttling error (429 HTTP status code)[^3].


# Reserved Concurrency

The concurrency limit discussed in the previous topic is shared across **all** functions in an AWS account. Developers might want to limit one or more functions, so that they don't eat up all the concurrency capacity.

This can be done by setting the _Reserved Concurrency_ parameter in the AWS Lambda configuration. For more information, please follow the AWS documentation about [Reserving Concurrency for a Lambda Function](https://docs.aws.amazon.com/lambda/latest/dg/per-function-concurrency.html).


# Provisioned Concurrency

AWS Lambda allows developers to anticipate how many instances of a function should be provisioned and warm to serve requests. By setting a minimal provisioned concurrency level, the performance of all requests are guaranteed to stay below double-digit milliseconds.

Using this feature can be beneficial for workloads that are time-sensitive, such as customer-facing endpoints. Nevermind, it is a step back in the serverless model and comes with several financial caveats.

Learn more about this feature and its caveats in its [dedicated Knowledge Base page](/knowledge-base/aws-lambda/provisioned-concurrency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda).


# Security Considerations

Reserved concurrency setting is recommended to be used whenever possible in all Lambda functions. Since it prevents _Low & Slow DoS_ attacks[^4].


---

# Footnotes

[^1]:
     Understand what is a Lambda MicroVM in the Lambda [Programming Model](/knowledge-base/aws-lambda/programming-model/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) page.

[^2]:
     [Request concurrency limit increase](https://console.aws.amazon.com/support/v1#/case/create?issueType=service-limit-increase)

[^3]:
     [AWS Lambda Function Scaling](https://docs.aws.amazon.com/lambda/latest/dg/scaling.html)

[^4]:
     CloudFlare: [What is a low and slow attack](https://www.cloudflare.com/learning/ddos/ddos-low-and-slow-attack/)
