---
title: Serverless Well-Architected - Reconciling Resilience and Cost-Optimization
description: 
date: 2020-04-23T00:00:00.000Z
frontImage: "2020-04-23/header-image.png"
thumbnail: "images/blog/2020-04-23/header-image.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["serverless", "optimization", "resilience", "well-architected"]
---

We recently wrote about the reasons [why serverless apps fail](https://dashbird.io/blog/why-serverless-apps-fail-and-how-to-design-resilient-architectures/) and explored some ideas to make architectures more resilient and scalable.

Some of these architectural designs can become expensive if we don’t consider the financial impacts of architectural decisions. With proper care and consideration to this aspect, it is possible to achieve the same value in terms of scalability and resiliency while keeping costs at a manageable level.

Being able to reconcile these two aspects of the architectural decision-making process will not only make you a better architect and/or developer but also your services will be more valuable in the market place. Especially large projects can save thousands to millions of dollars with simple cost optimizations.

In an illustrative example, we ended up with the following architecture idea. Since _Endpoint 1_ sometimes scales to a level higher than the underlying resources can handle, we placed a queue in front of _Lambda function 1_ to smooth demand peaks.

![Initial Architecture](/images/blog/2020-04-23/architecture-1.png "Initial Architecture")

This architectural change (adding a Queue) will contribute to the Reliability pillar of the [Well-Architected framework](https://aws.amazon.com/architecture/well-architected/). Nonetheless, depending on the project, it might be undesirable from the perspective of the Cost-Optimization pillar.

Consider this API is only used internally with the purpose of decoupling services. _Endpoint 1_ accepts POST requests (write-only) and uses the API Gateway simplified model, “HTTP API”. The API and Lambda will cost in total $1.20 per million requests ($1.00 for HTTP API and $0.20  for Lambda invocations), apart from Lambda’s memory time and RDS I/O.

Let’s analyze now how SQS will increase this cost structure. Ideally, we want to provide a smooth experience to the client relying on _Endpoint 1_, so we will not require it to group requests and take advantage of SQS batch. Each incoming API request will translate into a new SQS request, adding another $0.40 per million API requests, a 33% increase in cost.

On top of that, _Lambda function 1_ will need to consume these messages in order to process and store in the RDS database. Here SQS batch could be used to reduce costs. Let’s say Lambda will poll SQS frequently and get, on average, 5 messages per request. The total added cost of 1 million API requests is then $0.08 ($0.40 ÷ 5).

The cost for 1 million API requests now jumped to $1.68, up from $1.20, **a 40% increase**! Project that as a $100,000 AWS bill now jumping to $140,000.

If we analyze closely how the application behaves, we will see that demand only exceeds capacity on two occasions throughout the day. If AWS Lambda and RDS are capable of coping with demand for most of the day, why would we pay the extra SQS 40% cost all the time?

![Concurrency Graph](/images/blog/2020-04-23/concurrency-graph.png "Concurrency Graph")

One solution here would be to create three additional resources:

*   CloudWatch alarm
*   SNS topic to receive alarm state changes
*   Lambda to respond to alarm

With a CloudWatch alarm, we can monitor when Lambda or the API starts failing due to increased demand and concurrency throughput errors. It will send an alarm through SNS, which will reach another Lambda: _function 3_.

![Cost-optimized Architecture](/images/blog/2020-04-23/architecture-animated.gif "Cost-optimized Architecture")

The role of _Function 3_ is to turn SQS on/off depending on demand. During low demand, this Lambda would temporarily detach SQS from _Endpoint 1_, and route API requests directly to _Lambda function 1_. When the alarm identifies concurrency errors, it will reestablish SQS as the destination for API requests to avoid contamination from the backend faults.

A Dead-Letter-Queue could be configured in _Lambda function 1_ so that it never misses a request, even in the meanwhile during demand peak and SQS is not up yet.

This way, the extra 40% cost would only apply to times when the demand is really high and a message buffer is absolutely needed.

The solution proposed would add extra complexity to the architecture. It might not be the most suitable solution in all cases. Our purpose was to illustrate possible scenarios and coordination between different AWS services that can be combined to actually reduce the AWS bill.
