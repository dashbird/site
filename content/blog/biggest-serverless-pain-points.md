---
title: Serverless Use Cases With Biggest Observability Problems
description: Serverless is great technology that will be the basis for all the future tech innovation, but it doesn't come without it's problems and observability (or lack thereof) is one of them.
date: 2018-08-29T12:00:00.000Z
frontImage: "2018-08-30/dashbird-office-mikk-taavi.jpg"
thumbnail: "images/blog/2018-08-30/dashbird-office-mikk-taavi.jpg"
author: Annika Helendi
author_image: '/images/team/annika1.jpg'
blog: ["Serverless", "Observability", "Monitoring"]
---

We have talked about the [benefits of serverless](https://dashbird.io/blog/serverless-business-benefits-for-big-companies/) (and oh believe me, there are many), but just like with any other great thing in life, it has its own pain points as well. For more established companies, the main problems are **lack of standardization and interoperability** between cloud providers that may lead to vendor lock-in. Although this is something the community is actively solving, it might scare off some technology leaders.

But the biggest challenge is actually the **lack of visibility into your serverless stack**, because monitoring and debugging is a whole new ball game with distributed systems. Since we, at [Dashbird](https://dashbird.io), work exclusively on solving the serverless observability problems, we wanted to share some insights about the use cases where the monitoring and debugging challenges of serverless cause the most pain and frustration.

*Disclaimer: since the AWS Lambda is currently the de facto serverless cloud provider, we're focusing mostly on this.*

### HTTP REST APIs and web apps
This use case will very likely run into observability problems because serverless applications in production usually have lots of lambda functions and API Gateway endpoints. This means that things get complicated really quickly and there are so many places where things can fail.

It's very critical to get visibility into these endpoints and to track latency for each one.


###  Chat bots: scaling automatically for peak demands

### Batch jobs scheduled tasks
Jobs that require intense parallel computation, IO or network access. Tracing is a big part here, it’s a big pain point.

### Stream processing at scale

Processing data within a potentially infinite stream of messages - it's something that we are doing in Dashbird as well with lambdas, we are the source of our own events.

Event based architectures are really hard to debug, not only finding failures but also some delays can get really high. This use case usually produces lots of invocations and it might get expensive. There is a difference on how much resources you give your lambda functions and small changes here can have a huge impact (thanks to Dashbird).

DynamoDB produces streams, Kinesis streams - data continuously coming in and lambda functions processing it.

### Mobile back ends
Ability to build on the REST API backend workload above the BaaS APIs

### Database changes or change data capture
Auditing or ensuring changes meet quality standards - if some row in database gets updated it can trigger another action. Getting proper alerting is very important for this use case and a good process for debugging.


---

This post is loosely based on the <a href="https://www.itopstimes.com/cloud/10-use-cases-for-serverless/" target="_blank">CNCF (Cloud Native Computing Foundation)</a>, classification of the top 10 serverless use cases. We listed the use cases that might encounter biggest observability problems.
