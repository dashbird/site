---
title: 5 Serverless AWS Core Services Everyone Should Have in Their Starter Toolkit
description: A breakdown of the 5 key AWS serverless tools needed to make up the core of your serverless architecture's starterkit. Looking at their function and purpose as well as how they are charged.
date: 2020-07-09T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/5-aws-serverless-core-services-starter-toolkit.png"
thumbnail: "images/blog/2020-05-vacation-buffer/5-aws-serverless-core-services-starter-toolkit.png"
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
canonical: https://dashbird.io/blog/challenges-of-going-serverless-2020
blog: ["serverless", "aws", "business"]
---

When first looking into serverless migration and its architecture, it can feel like you're staring down an endless shopping aisle of critical serverless tools that all need to be put into your basket straight away. Some services seem to offer the same function, while others can feel wildly different - both, as a result, can instill some doubts as to what is really necessary for your business and serverless application.

In this article, we break down the key AWS serverless tools needed to make up the core of your architecture, looking at their function and purpose as well as how they are charged. We also discuss how they can connect with other components and AWS services as you continue to build and scale for a successful serverless workflow.

## AWS Lambda 

Typically, we aren't able to start discussing serverless applications without [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/anatomy-of-a-lambda-function/) being raised because of its centrality. Serverless applications are event-driven meaning its code is in response to an event, such as a request or a change in state.

AWS Lambda is a serverless compute service that lets you run code for virtually any type of application or backend service. Its functions are triggered by events, from integrated sources such as AWS Simple Queue Service (SQS) or AWS Simple Notification Service (SNS), with the Lambda functions consuming and then producing new events for other services.

AWS Lambda is only charged on the compute time used through either every 100ms of code executed or the number of times code is triggered, making it incredibly cost-effective. For consistent high performance, you're also able to optimize code execution time by selecting the right memory size for each function or set it so it's able to respond within double-digit milliseconds.

## SQS

[AWS Simple Queuing Service](https://dashbird.io/knowledge-base/sqs/intro-to-sqs-queue-service/) (SQS) is a fully managed message queuing service. With SQS, you can send, store and receive messages between components at any volume without losing messages or needing additional services to be available for its use.

By decoupling from other application components, queues (and other components) can run and fail independently, which increases the fault tolerance on your system.

AWS SQS is highly available and scalable, and manages all the ongoing operations, maintenance, and underlying infrastructure associated with middleware software. Its elasticity takes away capacity and pre-provisioning issues as there is no limit to the number of messages per queue, while standard queues provide nearly unlimited throughput.

Once again, costs are based on usage only, which is a huge cost saving to the "always-on" mode of traditional self-managed messaging middleware.

## API Gateway

[AWS API Gateway](https://dashbird.io/knowledge-base/api-gateway/what-is-an-api-gateway/) is a fully managed service making it easy for developers to create, publish, maintain, monitor and secure APIs. The service manages all tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, throttling, and API version management.

You can build REST APIs optimized for serverless workloads in order to provide more features and full control of responses and requests. Its pricing structure is budget-friendly with no minimum fees involved and a sliding scale model against API usage, with charges for only the API calls received and the data transferred out.

## DynamoDB

[AWS DynamoDB](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/) is a high-performance key-value and document database. Its multi-region, secure, durable and scalable service means that some of the world's largest businesses and enterprises across various industries rely on DynamoDB.

Being serverless and fully managed, availability and fault tolerance are built-in, with DynamoDB global tables replicate data across multiple AWS regions to provide fast, local access where needed and single-digit millisecond response times at all scales.

The service automatically scales tables up and down to suit capacity without compromising on performance; it can handle more than 10 trillion requests per day and can support peaks of more than 20 million requests per second.

## Step Functions

[AWS Step Functions](https://dashbird.io/knowledge-base/step-functions/what-is-aws-step-functions/) allows you to bring multiple AWS services together to create a serverless workflow, which can be updated and ran quickly. With this service, application development is simpler and more intuitive; it automatically starts and tracks each step in the workflow, and also retries when there are errors so there are no nasty surprises.

AWS Step Functions is also a great way to move away from monolithic applications and into microservices being used as a series of steps. This design principle enables users to work on code safely without disrupting operations while also being able to deliver new products and features ensuring business as usual.

With all of the above, the service means users don't need to write additional code for workflow logic, timeouts, retries, or parallel processes. It's essentially a neatly packaged way to bring together all of your curated AWS services and create a well-executed workflow for your application. You can find illustrated examples of some common and useful use cases for [Step Functions](https://dashbird.io/knowledge-base/step-functions/use-cases-for-aws-step-functions/) in our [Cloud Knowledge Base](https://dashbird.io/knowledge-base/).

## Final Thoughts

The beauty of serverless is its scalability and so even if some of these serverless tools may seem a little advanced or too large for where your business is right now, remember that there is always flexibility in how you use each service and highly important, for any organization no matter the size, you are only charged based on usage.

Serverless doesn't mean having every service or functionality under the sun, but rather understanding the fundamentals needed within this type of architecture and how best to take advantage of the tools available so it works for your team and organization.\
For us, these five serverless tools - AWS Lambda, AWS SQS, AWS API Gateways, AWS DynamoDB and AWS Step Functions - are a great starting point for your serverless starter pack as they each adequately cover and can scale the various core components needed; computing, events, automation, database, message queues, APIs and how each can be brought together to create your application. But of course, once you've decided to adopt them, it's important to keep an eye on their performance, so as a bonus sixth starter-kit service for your serverless application, we'll throw in [Dashbird's monitoring platform](https://dashbird.io/features/), which helps you easily visualize the data and thus understand what's going on in your application within seconds, and receive alerts when something is not working properly so that you can jump in and fix it before it starts affecting your end-users' experience.
