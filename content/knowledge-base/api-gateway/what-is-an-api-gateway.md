---
date: 2019-11-08T11:44:23+02:00
title: "What is AWS API Gateway"
description: "How does an API gateway work and what are some of the most common usecases"
learning: ["DAPI Gateway"]
learning_weight: 100
---

## What is an API Gateway 
An Api Gateway is an interface that sits in between the application and the micro services. Developers use them to create, publish, maintain, monitor and secure API's.

![With an API Gateway](/images/knowledge-base/api-gateway/with-apigw.jpg)

Without using an API Gateway you’d have to connect all your API resources directly with your user-facing applications which would make it more difficult to manage responses, implement updates to your business logic or even secure your API.

![Without API Gateway](/images/knowledge-base/api-gateway/no-api-gateway.jpg)


Not only will the APIGateway simplify the way you build and manage API’s but it will boost your security since you are not exposing any endpoints, minimizing the attack vector considerably


## What does an API Gateway do?

An API gateway can handle any type of interaction between your website, web or mobile application or even IoT devices and your microservices. Here are some of the most used scenarios:


## What is Amazon’s API Gateway

It’s a fully managed service that provides all the necessary tools for developers in order to create, publish, manage and secure your API regarding of scale. Amazon API Gateway will take care of all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls, including traffic management, authorization and access control, monitoring, and API version management.

Deployable with a couple of clicks, your Amazon API Gateway will act as the single point of entry to your backend services and will handle the data management, business logic or any other type of functionality or workloads running on services like EC2, AWS Lambda and many more.


## How much does API Gateway cost

Amazon API Gateway is a SaaS that’s available to all AWS users for free for the first 12 months as long as you stay under the 1 million calls per month limit. Past that 1 million requests you’ll be charged as follows:

For the first 300 million:** $ 1** per 1 million requests and after that it is  **$ .90 **for every 1 million calls.

That’s not it as you will also have to pay for data transfer, caching, services like Cloudwatch and AWS Lambda. Check out their pricing [here](https://aws.amazon.com/api-gateway/pricing/).


## Amazon API Gateway architecture

Written in node.js, it can be configured the backbone of the AWS Cloud as it is the gateway between all the connected services in the AWS ecosystem.

Amazon API Gateway is a closed-source software-as-a-service (SaaS) product written in Node.js available only on AWS. Amazon API Gateway can be considered a backplane in the AWS ecosystem.

In conjuncture with AWS Lambda, the API gateway forms the client-facing part of Amazon’s serverless infrastructure. Lambda runs the code on the highly available, fully managed computing infrastructure but relies on API gateway to expose those endpoints to the required services.

To enable the serverless applications, API Gateway supports streamlined proxy integrations with AWS Lambda and HTTP endpoints.

Features include:



*   Build, deploy and manage APIs
*   Resiliency
*   API lifecycle management
*   SDK generation
*   API operations monitoring
*   AWS authorization
*   API keys for third-party developers


## Deploying an AWS API Gateway

Deploying Amazon API Gateway is done via GUI or AWS’ CLI. You need to create a new deployment and a new stage. You can think of a stage as a snapshot of the API configuration, similar to how git tag works.


### Code example

**To deploy the configured resources for an API to a new Stage:**


```
_aws apigateway create-deployment --rest-api-id 1234123412 --stage-name dev --stage-description 'Development Stage' --description 'First deployment to the dev stage'_
```


**To deploy the configured resources for an API to an existing stage**

```
aws apigateway create-deployment --rest-api-id 1234123412 --stage-name dev --description 'Second deployment to the dev stage'
```

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an APIGateway?","acceptedAnswer":{"@type":"Answer","text":"An API(2) gateway is an interface that sits in front of applications as an entry point for a predefined group of microservices(1). The Gateway handles API calls in a couple of ways. Some are going to be handed to a single service while others will be proxied off to multiple services based on predefined logic."}},{"@type":"Question","name":"What’s the benefit of using an API Gateway?","acceptedAnswer":{"@type":"Answer","text":"One of the biggest benefits of using API Gateways is that they allow users to condense the internal function or a subset of architecture in many different ways depending on the use case. It can handle singular requests or call multiple backend services and combine the result into a single response."}},{"@type":"Question","name":"What are the drawbacks of using API Gateways?","acceptedAnswer":{"@type":"Answer","text":"There’s a learning curve when it comes to architecting applications high availability applications at scale especially since the API gateway is going to be the single point on of entry between the front end and the APIs it will also act as a single point of failure.\n"}}]}</script>
