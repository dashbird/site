---
date: 2019-11-08T11:44:23+02:00
title: "What is an API Gateway"
description: "How does an API gateway work and what are some of the most common usecases"
learning: ["DAPI Gateway"]
learning_weight: 100
---

## What is an API Gateway 

An API(2) gateway is an interface that sits in front of applications as an entry point for a predefined group of microservices(1). The Gateway handles API calls in a couple of ways. Some are going to be handed to a single service while others will be proxied off to multiple services based on predefined logic.




![alt_text](images/with-apigw.jpg "image_tooltip")


Without using an API Gateway you’d have to connect all your API resources directly with your user-facing applications which would make it more difficult to manage responses, implement updates to your business logic or even secure your API.



![alt_text](images/no-api-gateway.jpg "image_tooltip")


Not only will the APIGateway simplify the way you build and manage API’s but it will boost your security since you are not exposing any endpoints, minimizing the attack vector considerably


## What does an API Gateway do?

An API gateway can handle any type of interaction between your website, web or mobile application or even IoT devices and your microservices. Here are some of the most used scenarios:


### Authentification

Your API gateway will integrate with any third party authentification providers and provide an authentification layer for your application. Here are some of the most common use cases.


### User Management

Once the user is registered and authenticated it will manage the user’s interactions with the website and limit its access based on predefined criteria. The API Gateway will take the pressure of deciding what type of information the user can interact with from your API.


### Logging and monitoring

Since your API Gateway sits between the client and the backend API it it in a position to track all the interactions between the two, tracking the activities and monitoring all the resources available as well as the response time.


### Payload Management

The API Gateway will take the request and route it to the correct microservice and in exchange receive a response. There are scenarios when that response is not something that the front end can handle and will have to route it to a second microservice or and external service provider before it can return the correct response or format. All of this is done without exposing any of the complex logic or the API endpoints to the client.


### Scaling

Last but not least, the need for scaling is a particularity that the API Gateway is in a unique position to calculate based on the frontend and backend activities. Not all of the API Gateway can be expected to provide autoscaling but they should be able to trigger a service that will deal with it.

<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is an APIGateway?","acceptedAnswer":{"@type":"Answer","text":"An API(2) gateway is an interface that sits in front of applications as an entry point for a predefined group of microservices(1). The Gateway handles API calls in a couple of ways. Some are going to be handed to a single service while others will be proxied off to multiple services based on predefined logic."}},{"@type":"Question","name":"What’s the benefit of using an API Gateway?","acceptedAnswer":{"@type":"Answer","text":"One of the biggest benefits of using API Gateways is that they allow users to condense the internal function or a subset of architecture in many different ways depending on the use case. It can handle singular requests or call multiple backend services and combine the result into a single response."}},{"@type":"Question","name":"What are the drawbacks of using API Gateways?","acceptedAnswer":{"@type":"Answer","text":"There’s a learning curve when it comes to architecting applications high availability applications at scale especially since the API gateway is going to be the single point on of entry between the front end and the APIs it will also act as a single point of failure.\n"}}]}</script>