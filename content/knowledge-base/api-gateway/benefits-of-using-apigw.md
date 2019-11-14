---
date: 2019-11-08T11:44:23+02:00
title: "Pro’s and cons of using an API Gateway"
description: "Learn what are the benefits or drawbacks of using APIGateway"
learning: ["DAPI Gateway"]
learning_weight: 200
---



## What’s the benefit of using an API Gateway

An API Gateways Provides flexibility to use completely independent protocols allowing your microservices to communicate among themselves with ease. They allow developers to access the functionality of a subset of architecture in many different ways, without ever exposing the endpoints publicly. It doesn’t matter if you are using microservices or serverless architecture or a public API, API Gateways have a lot of benefits to offer.


### Security benefits of API Gateways

Since API gateway sits between your front end applications and the microservices it will act as a security barrier making sure your sensitive API Endpoints are not exposed. It also protects your API from malicious attack vectors such as DoS attacks, SQL injections, and other several other similar attacks that take advantage of the API’s vulnerabilities. 

Some API clients can even integrate with data stores that handle session information like Redis which is designed to be accessed by trusted clients inside the environment. Without and API gateway the Redis instance would be exposed directly to the client which would present some security risks.


### Decreased Microservices complexity

Your API gateway will manage concerns like rate limiting, user access control, token authorization, scaling among others and help you reducing complexity and allowing your API to focus on the task at hand. 

This type of decoupling creates an unprecedented advantage since your actual API doesn’t have to process or format the response in any way. Routing is done by the API gateway, formating the response is done by the API gateway and even cache can be handled by the same API Gateway.


### Monitoring and Analytics

Some API gateways come out of the box with certain monitoring or analytics tools that help the developers debug and create infrastructures that can scale gracefully. Since this is not common to most API Gateway service providers there are several third-party monitoring and observability solutions that can help you figure out what’s going on behind the scenes. 

[Dashbird.io](https://dashbird.io/) is a perfect example. It connects directly to the AWS API Gateway and collects valuable information like errors, execution time and invocation details.


## Drawbacks of using API Gateways

There are lots of reasons for use and API Gateway but there are certain drawbacks that you should consider.

There’s a learning curve when it comes to architecting applications high availability applications at scale especially since the API gateway is going to be the single point on of entry between the front end and the APIs it will also act as a single point of failure.

Configuring your application and API to interact via an API Gateway will require some more orchestration which will add a level of difficulty for the developers.

Performance degradation is a concern due to the multitude of scenarios that the API Gateway will handle and can impact the speed and reliability of your application.
