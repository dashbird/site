---
title: "Microservices & Serverless: Winning Strategies and Pitfalls"
description: Explore the pros/cons, challenges and good practices for going serverless with a Microservices architecture
date: 2020-07-29T00:00:00.000Z
frontImage: "2020-07-29/microservices-serverless-winning-strategies-pitfalls.png"
thumbnail: "images/blog/2020-07-29/microservices-serverless-winning-strategies-pitfalls.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Microservices", "Well-Architected"]
draft: true
---


The concept of a [microservice](https://dashbird.io/knowledge-base/well-architected/monolith-vs-microservices/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) perfectly fits the structure of a [serverless function](https://dashbird.io/knowledge-base/aws-lambda/programming-model/), which easily enables deployment and runtime isolation for different services. On the storage side, services such as [DynamoDB](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) also make it easier to have independent databases for each microservice and scale them independently (when required or desirable).

Before we dive into details, please consider whether the benefits of Microservices abundantly outweighs its disadvantages for _your_ particular project and team. Please, please don’t pick it because "_it’s the trend_". More often than you may think, [a Monolith is better](https://www.martinfowler.com/bliki/MonolithFirst.html) and can be a "_[majestic](https://m.signalvnoise.com/the-majestic-monolith/)_" choice.


## Advantages of Microservices in Serverless


### Selective scalability and concurrency levels

Serverless functions make it easy to manage concurrency and scalability. In a microservices architecture, we take maximum advantage of this. Each (micro)service can have its own concurrency/scalability settings according to its needs.

This is valuable from different perspectives: possibilities to mitigate DDoS attacks, reducing financial risks of cloud bills spiraling out of control, better allocation of resources...


### Fine-grained resource allocation

With selective scalability and concurrency comes the benefits of a detailed control over the resource allocation priorities.

In Lambda functions, each (micro)service can have different levels of memory allocation, according to its needs and purposes. Customer-facing services can have higher memory allocated, since it will [contribute to faster execution times](https://dev.to/byrro/how-to-optimize-lambda-memory-and-cpu-4dj1). Internal services that are not sensitive  to latency can be deployed with [optimized memory settings](https://medium.com/hackernoon/lower-your-aws-lambda-bill-by-increasing-memory-size-yep-e591ae499692).

The same applies to storage mechanisms. A DynamoDB table or Aurora Serverless database can have different levels of [capacity units allocation](https://dashbird.io/knowledge-base/dynamodb/capacity-modes/) according to the needs of the particular (micro)service they are supposed to serve.


### Loose coupling

This is a property of Microservices in general, not so much of Serverless, since it makes it easier to decouple components of a system that have different purposes.


### Multi-runtime environments

The easiness of configuration, deployment and execution of serverless functions opens up possibilities for systems that are based on multiple runtimes.

While Node.js (JavaScript runtime) is one of the most popular technologies for backend web applications, it’s unlikely to be the best tool for every single task.

For data-intensive tasks, predictive analytics and any sort of machine learning, it’s likely that Python will be your programming language of choice. Dedicated platforms - i.e. [SageMaker](https://aws.amazon.com/sagemaker/) - are better suited for very big projects, but you can still run some of the most popular data and AI projects - [Scikit Learn](https://serverlesscode.com/post/deploy-scikitlearn-on-lamba/), [SpaCy](https://dimashup.com/when-nlp-with-spacy-meets-aws-lambda/), [Numpy & Pandas](https://medium.com/@korniichuk/lambda-with-pandas-fd81aa2ff25e) - on a serverless function.

With a serverless infrastructure, there is no additional effort (operations-wise) to pick Node.js for your regular backend APIs and Python for your data-intensive workloads. Obviously this would add some effort in terms of code maintenance and the type of skills your team must manage.


### Independence for development teams

Also more associated with Microservices than Serverless itself. Different developers or teams can work, fix bugs, extend features, etc on (micro)services without stepping on each other's toes.

Tools such as [AWS SAM](https://aws.amazon.com/serverless/sam/), [Serverless framework](https://www.serverless.com/) also give more independence on the operations side. [AWS CDK constructs](https://docs.aws.amazon.com/cdk/latest/guide/constructs.html) enable an even greater independence without sacrificing higher-level quality and operational standards.


## Disadvantages of Microservices in Serverless


### Harder to monitor and debug

Among many of the [challenges introduced by Serverless](https://dashbird.io/blog/challenges-of-going-serverless-2020/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas), monitoring and debugging is one that can be problematic. Microservices introduces additional challenges since compute and storage systems are scattered across many different functions and databases, not to mention other services for queueing, caching, etc.

There are [professional platforms](https://dashbird.io/blog/ultimate-guide-to-serverless-monitoring-platforms?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) to solve all of these issues, though. Professional teams should certainly consider whether it’s worth investing.


### Possible to experience more cold starts

[Cold starts](https://dashbird.io/knowledge-base/aws-lambda/cold-starts/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) happen when the FaaS platform (e.g. Lambda) needs to spin up a new virtual machine to run your function code. They _may be_ problematic if your function’s workload is latency sensitive, since a [cold start adds](https://dashbird.io/blog/cold-starts-impact/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) from a few hundred milliseconds up to a few seconds in the total startup time.

After one request if finished, FaaS platforms will usually keep microVMs idle for some time waiting for the next one before shutting down after 10-60 minutes (yes, varies a lot). The result is: the more frequently your function is executed, the more likely it is for a microVM to be up and running for the incoming requests (avoiding cold starts).

When we scatter our application in hundreds or thousands of (micro)services, we _may_ also spread invocations in time per service, leading to a lower invocation frequency per function. Notice the "_may spread invocations_". Depending on the business logic and how your system behaves, this negative impact might well be small or negligible.


### Other disadvantages

There are other disadvantages inherent to the Microservices concept itself. These aren’t inherently associated with Serverless. Nonetheless, every team adopting this type of architecture should be cautious to mitigate their potential risks and costs:



*   Not trivial to decide on service boundaries, which may lead to architectural issues
*   More extensive attack surfaces to secure
*   Services orchestration overhead
*   Syncing compute and storage (when required) is not easy to do in a performant and scalable way


## Microservices challenges and good practices in Serverless


### How small or big a serverless microservice should be

It’s relatively easy to confuse the concept of a "**_function_**-as-a-service" with a **_function statement_** (or, more generally speaking, a [subroutine](https://en.wikipedia.org/wiki/Subroutine)) in your programming language of choice.

We are entering an area with no way to draw a perfect line, but [anecdotal experience](https://dev.to/rehanvdm/comment/121pa) shows that going for very small serverless functions is **<span style="text-decoration:underline;">not</span>** a good idea.

One thing you should keep in mind is that, when deciding to spin out a (micro)service into a separate function, you will have to deal with the [Serverless trilemma](https://dashbird.io/knowledge-base/well-architected/serverless-trilemma/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas). Whenever possible, there are many benefits in keeping correlated logic in a single function.

The decision-making process should take into account the advantages of having a separate microservice. "_If I spin out this microservice…_



*   _...will it enable different teams to work independently?_
*   _...can I benefit from a fine-grained resource allocation or selective scalability capability?_

If not, it’s worth considering to keep this service bundled with another that requires similar resources, is contextually linked and performs correlated workloads.


### Loosely coupling your architecture

There are many ways to orchestrate microservices by [composing serverless functions](https://dashbird.io/knowledge-base/well-architected/serverless-functions-composition-strategies/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas).

When synchronous communication is required, good ol’ direct invocations (i.e. [AWS Lambda RequestResponse invocation method](https://dashbird.io/knowledge-base/aws-lambda/invocation-methods-and-integrations/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas#synchronous)), but this leads to a highly coupled architecture. Better alternatives are using [Lambda Layers](https://dashbird.io/knowledge-base/aws-lambda/lambda-layers/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) or an [HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html), which makes it possible to later modify or migrate services without disrupting clients.

For workloads that accept an asynchronous communication model, we have several possibilities such as queues ([SQS](https://dashbird.io/knowledge-base/sqs/intro-to-sqs-queue-service/)), topic notifications ([SNS](https://aws.amazon.com/sns/)), [Event Bridge](https://dashbird.io/knowledge-base/event-bridge/intro-to-event-bridge/), or even [DynamoDB Streams](https://dashbird.io/knowledge-base/dynamodb/operations-and-data-access/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas#streams).


### Isolating implementation details across components

Ideally, microservice should not leak implementation details to its consumers. A serverless platform such as Lambda will already provide an API to isolate functions. But that in itself is an implementation detail leakage, and ideally we would add an agnostic HTTP API layer on top of our functions to make them truly isolated.

This strategy has its drawbacks as well and there are [several factors](https://dev.to/aws-heroes/are-lambda-to-lambda-calls-really-so-bad-4p4k) you should consider to make a decision.


### Importance of using concurrency limits and throttling policies

To mitigate DDoS attacks, make sure to [set individual concurrency limits and throttling policies](https://dev.to/theburningmonk/the-api-gateway-security-flaw-you-need-to-pay-attention-to-44) for each public-facing endpoint when using services such as AWS API Gateway. Such services have global concurrency quotas for an entire region in the cloud platform. If you don’t have endpoint-based limits, an attacker only needs to target one single endpoint to exhaust your quota and bring your entire system down in that region.


## Wrapping up

No matter if you are migrating legacy systems or building something from scratch, making sure it’s running smoothly as expected is a constant challenge. Dashbird has launched a monitoring platform and well-architected insights engine tailored for serverless applications that implement distributed and microservices architectures.

In case you (are going to) run serverless microservices in production, I highly recommend [checking it out for free](https://dashbird.io/register/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas). The service implements an [asynchronous monitoring approach](https://dashbird.io/docs/dashbird/how-dashbird-works/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas) with a simple 2-minutes [integration process](https://dashbird.io/docs/quickstart/setting-up-dashbird/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=microservices-in-faas).
