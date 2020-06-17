---
title: Using API Gateway to run Database Queries
description: Lambda is the most common integration with API Gateway, but it can also integrate directly with databases to speed up execution and reduce costs
date: 2020-04-29T00:00:00.000Z
frontImage: "2020-04-29/header-api-proxy-database.png"
thumbnail: "images/blog/2020-04-29/header-api-proxy-database.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Well-Architected", "API Gateway", "DynamoDB"]
---

The most common integration type for AWS API Gateway is with Lambda functions. The API service can integrate with virtually any other service that accepts HTTP requests, though. This opens up possibilities to use the API Gateway as a proxy to database queries, without any compute layer such as a Lambda function.

![Using API Gateway as a Proxy to DynamoDB table](/images/blog/2020-04-29/api-gateway-proxy-database-architecture-diagram.gif "Using API Gateway as a Proxy to DynamoDB table")


## Why integrate API Gateway directly to a database

The direct integration between API and database is perfect when Lambda serves only as an intermediator. It can improve performance and reduce costs by removing the - sometimes unnecessary - compute layer provided by Lambda.

In the case of a DynamoDB table, AWS already exposes HTTP endpoints that clients could use to run queries. Still, API Gateway offers several advantages:


### Reduced coupling between clients and database

This helps meet the fundamental black-box principle for serverless architectures. Your application clients should not know that DynamoDB is the database serving the requests. The lower coupling makes it easier to introduce changes later while avoiding unwanted side-effects.


### Simplified access management and authentication

API Gateway makes it quite simple to control the [authentication and authorization processes](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html). If your application uses [Cognito, it can be used seamlessly with API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html), for example.


### Possibility to customize the HTTP methods and endpoints

The DynamoDB API endpoints might not be as user friendly as you would like for your clients. Using API Gateway allows us to accept requests in a different format and “translate” them to the DynamoDB API and query model. Analogously, it is possible to modify DynamoDB responses before returning to the client.


### Throttling API requests

To avoid abuse and DDoS attacks, you can use the [API Gateway embedded throttling mechanism](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html).


### Restrict which parts of the database can be accessed and by who

Since the API request and response can have the method, endpoint, and body fully customized in API Gateway, it is possible to restrict the datasets clients can access in your DynamoDB tables.


## How to Integrate API Gateway and DynamoDB

API Gateway offers several [different integration types](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-integration-types.html). As mentioned above, the “AWS Proxy” with Lambda is the most common one. To integrate API Gateway with a [DynamoDB table](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-proxy-database), for example, we will need the more general-purpose integration type, "[AWS Service Proxy](https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-aws-proxy.html)".

There is a [great tutorial provided by AWS](https://aws.amazon.com/blogs/compute/using-amazon-api-gateway-as-a-proxy-for-dynamodb/) on how to set up this integration for POST and GET requests.

In case you are looking to learn more about serverless architectural patterns, API Gateway, Lambda. and DynamoDB, you might want to check out this [Cloud Knowledge Base](https://dashbird.io/knowledge-base/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=well-architected&utm_content=api-gateway-proxy-database).
