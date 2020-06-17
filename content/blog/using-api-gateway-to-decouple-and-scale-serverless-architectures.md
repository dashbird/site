---
title: Using API Gateway to Decouple and Scale Serverless Architectures
description: Learn the benefits of decoupled cloud architectures and how to implement design patterns using API Gateway
date: 2020-05-28T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/using-api-gateway-to-decouple-and-scale-serverless-architectures.png"
thumbnail: "images/blog/2020-05-vacation-buffer/using-api-gateway-to-decouple-and-scale-serverless-architectures.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "API Gateway", "Scalability", "Architectural Patterns"]
draft: true
---

One of the benefits of Serverless architectures is the possibility of scaling applications without worrying about load balancers and clusters of servers. While services like [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/) hold their promises on this area, there are usually misconceptions about how they work.


## Why should I care about Serverless scalability

It is common for developers to assume that Lambda functions can scale infinitely, at any speed, in any circumstances. Reality is quite different from that. Lambda has limitations in both maximum concurrency and how fast it can scale up. Similar limitations are applicable to other services, such as DynamoDB tables or S3 buckets.

Understanding how these services scale is essential to build resilient and well-architected applications on top of them. This will lead to more stable software and services to your end-users, potentially translating into greater customer satisfaction and increased revenue.


## What decoupling has to do with scalability

The issue with scalability is that each service will scale in different ways. If they are tightly coupled, the application as a whole will be limited to its weakest node.

Consider a Lambda function that relies on DynamoDB to store information, for example. The DDB table might not be able to cope with the Lambda’s rapid upscaling. Depending on how we architect that dependency, the service will start returning error messages to its clients.

Having the two services decoupled would make it easier to buffer peak requests from Lambda and process on a pace that fits DynamoDB scalability speed.

Another benefit from decoupling, in this case, is making the architecture more flexible for future changes. Consider your team decided to migrate from DynamoDB to another database service, for whatever reason. If you have hundreds of Lambda functions tightly wired to the DDB tables, you’ll have to change the code for every single one of them, which may prove to be cumbersome and risky to run such migration in production.


## How API Gateway can help

Just as in code architecture we look for ways to reduce dependency among components, it’s important to decouple cloud resources as well. And API Gateway is a good ally for this task.

The main reasons are:



*   The service is simple to use and requires nearly zero maintenance efforts
*   It’s based on HTTP standards, which are open and ubiquitous
*   AWS recently launched the HTTP API version, which is 3x cheaper
*   Integrates with multiple other AWS services or external resources through HTTP proxy

Instead of connecting a Lambda function directly to a DynamoDB table or to an S3 bucket, for example, we could create API endpoints mapping the DB operations (read, write, delete, etc).


## Using the black-box principle to its maximum

To make the DB service even more of a black-box, the API could even embed a higher-level abstraction.

Initially, the Lambda function would have to build a DynamoDB query to write information on the table, for example. This would defeat part of the decoupling benefits: being able to migrate to another database without having to change the Lambda function code.

Instead, we can have Lambda sending requests in an agnostic format. As an example, in order to write a new user to the DB table, it could send:

```json
{
    "operation": "store-new-user",
    "data": {
        "id": "ABC123",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@doe.com"
    }
}
```

The API Gateway would be responsible for [mapping this request](https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html) to a query that is compatible with the [DynamoDB write operation API](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html).

With this architecture, the client (Lambda) doesn’t even have to know where the data will be stored. The development team can have its own internal query standards that are decoupled from DynamoDB ones. Especially for large applications, this has the benefit of allowing multiple teams to collaborate with a reduced risk of having developers stepping on each other’s toes.

One team could take care of the data model and share it with several other teams taking care of different services. As long as the internal API contracts are followed, any changes to the data model or the application side can be introduced smoothly, without interfering with other team members.

Although they greatly contribute to higher scalability and resilience, decoupled architectures are not silver bullets, though. As we know well, bad things still can happen and affect our systems and the service provided to end-users. In case you are looking for a cloud monitoring partner that is deeply integrated with these architectural patterns, you will want to [check Dashbird out](https://dashbird.io/#register). It’s free and requires no credit card.
