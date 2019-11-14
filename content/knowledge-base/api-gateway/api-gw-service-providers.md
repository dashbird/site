---
date: 2019-11-08T11:44:23+02:00
title: "API Gateway service providers"
description: "Picking the correct one API Gateway service provider can be difficult"
learning: ["DAPI Gateway"]
learning_weight: 300
---


## API Gateway service providers

There are a lot of strong options for picking an APIGateway provider and while they vary in terms of what they offer, how easy they are to implement or how much they cost, they do have one thing in common. They are the driving force behind your application, that thing that carefully choreographs all the interactions between the front end and the backend microservices.


### [Amazon API Gateway](https://aws.amazon.com/api-gateway/?nc2=type_a)

Since Amazon is already the leading cloud provider it stands to reason that they would have one of the most popular API Gateway solutions called, well, API Gateway. It’s a fully managed serviced that can be deployed with little to no effort from your AWS Dashboard and if you are using Lambda or EC2 in your application, you will have the option of deploying in the same region, reducing latency considerably.


### [Azure API Management ](https://azure.microsoft.com/en-us/services/api-management/)

Similar to Amazon’s API gateway, Microsoft has it’s own API management platform that just like AWS API Gateway works best with other services from Azure like Azure Functions.  It’s a great tool for streamlining your work across hybrid or multi could environments while keeping all the management under one roof.


### [Apigee](apigee.com)

It’s by far the oldest Api management service provider, founded in 2004 and aquired in 2016 by Google. Apigee has a complicated architecture, compared to the other options listed here requering a [highly complex](https://docs.apigee.com/private-cloud/v4.18.05/installation-requirements) setup that you’ll be managing yourself. While complicted to install and set up, Apigee has a really strong following among Fortune500 companies running hybrid applications.


### [Kong](https://github.com/Kong/kong)

Kong is a cloud-native, fast, scalable, and distributed Microservice Abstraction Layer (also known as an API Gateway, API Middleware or in some cases Service Mesh). Made available as an open-source project in 2015, its core values are high performance and extensibility.
