---
title: Why Serverless Apps Fail and How to Design Resilient Architectures
description: The main challenges of scaling modern cloud applications and implementing well-architected practices
date: 2020-04-14T00:00:00.000Z
frontImage: "2020-04-14/why-serverless-apps-fail.png"
thumbnail: "images/blog/2020-04-14/why-serverless-apps-fail.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Well-Architected", "Scalability", "Resilience"]
draft: true
---

We've been monitoring 100,000’s of serverless backend components for 2+ years at Dashbird. In our experience, Serverless infrastructure failures boil down to:

*   Throughput and concurrency limitations;
*   Increased latency;
*   Timeout errors;

These isolated faults become causes of failure due to dependencies in our cloud architectures (ref. [Difference of Fault vs. Failure](https://dashbird.io/knowledge-base/basic-concepts/reliability/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=launch-q2-2020&utm_content=serverless-at-scale)). If a serverless Lambda function relies on a database that is under stress, the entire API may start returning 5XX errors.

You may think this is just a fact of life, but we can dodge or at least mitigate these failures in many cases.

Serverless is not a magical silver bullet. These services have their limitations, especially to [scalability](https://dashbird.io/knowledge-base/basic-concepts/scalability/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=launch-q2-2020&utm_content=serverless-at-scale) capacities. [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=launch-q2-2020&utm_content=serverless-at-scale), for example, can increase concurrency level up to [a certain level per minute](https://dashbird.io/knowledge-base/aws-lambda/scalability-and-concurrency/#concurrency-limits-and-scalability?utm_source=dashbird-blog&utm_medium=article&utm_campaign=launch-q2-2020&utm_content=serverless-at-scale). Throw in 10,000 concurrent requests out of thin air and it will throttle.

A typical architecture goes like this:

![Typical Architecture](images/blog/2020-04-14/when-serverless-apps-will-fail-typical-architecture.png "Typical Architecture")


It usually works well under a low scale. Put in more load a single component’s fault can bring the whole implementation to its knees.

Consider this scenario: due to market reasons, _API Endpoint 1_ starts receiving an unusual amount of requests. Your clients are generating more data and your backend needs to store it in the _RDS instance_. Relational databases usually don’t scale linearly to I/O level, so we can expect an increase in query latency during this peak demand. _API Endpoint 1_ or _Lambda function 1_ will start timing out at some point due to the database delays.

Another possible fault scenario is throttling from _Lambda function 1_ due to a rapid increase in concurrency.

Not only _API Endpoint 1_ will become unavailable to clients, but also the second endpoint. In the first scenario, _Endpoint 2_ also relies on the same _RDS instance_. In the second scenario, _Lambda function 1_ will consume the entire concurrency limits for your AWS account, causing _Lambda function 2_ to throttle requests as well.

We can avoid this by decoupling the _API Endpoint 1_ and _Lambda function 1_. In the example, our clients are only sending information that needs to be stored, but no processing and customized response are needed. Here is an alternative architecture:

![Using a queue to off-load peak demand](images/blog/2020-04-14/when-serverless-apps-will-fail-typical-architecture-solution.png "Using a queue to off-load peak demand")


Instead of sending requests directly from _API Endpoint 1_ to the _Lambda function 1_, we first store all requests in a highly-scalable _SQS queue_. The API can immediately return a 200 message to clients. The _Lambda function 1_ will later pull messages from the queue in a rate that is manageable for its own concurrency limits and the _RDS instance_ capabilities.

With this modification, the potential for widespread failure is minimized by having a queue absorbing peaks in demand. SQS standard queues can handle nearly unlimited throughput. At the same time, all components serving _Endpoint 2_ can continue to work normally, since data consumption by the _Lambda function 1_ is smoothed out.

This is a simplified example, there are several aspects to consider in terms of potential failure points and architectural improvements. We are hosting a webinar to cover these topics in much more depth. If this is something that interests you, [reserve your spot here for free](https://zoom.us/webinar/register/8015867838556/WN_GsUbkv7pQdqL9Og6f9IlVA).
