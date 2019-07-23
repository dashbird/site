---
title: API Gateways are a thing of beauty. Here's why
description: AWS API Gateway is a completely managed service that makes developers’ job much easier by allowing them to publish, create, monitor, maintain, and secure APIs at any scale.
date: 2019-07-18T12:00:00.000Z
frontImage: "2019-07-18/nikola-knezevic-Q3JcLtECTtE-unsplash.jpg"
thumbnail: "images/blog/2019-07-18/nikola-knezevic-Q3JcLtECTtE-unsplash.jpg"
author: Nemanja Novkovic
author_image: '/images/team/nemanja.jpg'
blog: ["alerts", "Lambda"]
---
AWS API Gateway is a completely managed service that makes developers’ job much easier by allowing them to publish, create, monitor, maintain, and secure APIs at any scale.

In today’s article, we’ll talk more about API Gateway What is it, why is it so important, as well as how it can help us with?

When it comes to Amazon Web Services, as we’ve already mentioned, API Gateway service allows developers to monitor, maintain, create, and publish APIs at any scale by merely pressing a few buttons in the AWS Management Console. Therefore, you’ll create REST and WebSocket APIs that will act as a front door for applications to get access to data. The applications will then have open access to the data, business logic or even functionality from your backend services like workloads running on Amazon EC2, AWS Lambda, and any other web application, or even a real-time communication application.

If you wish to know how much your AWS API Gateway will cost you, we at Dashbird have made the <a href="https://dashbird.io/api-gateway-cost-calculator/">API Gateway calculator</a>. Use it to calculate the potential cost of your API Gateway service utilization.

### Why Is API Important?

APIs are the force that drives in the background of numerous applications regardless of their size. If you’re publishing a public API or building an integrations marketplace, APIs are the way to do the business.

It is similar to when the web era had HTTP servers to serve the websites in production; APIs have API Gateways to serve APIs in production. We can use API Gateways to assist in the delivery of API with high availability in mind to your partners and customers.

API Gateways are a type of proxy which sits in front of your APIs and the features it has include task performance like authentication, security policies enforcements, routing publicly accessible endpoints to the appropriate microservice, rate limiting, load balancing across multiple internal services, as well as numerous other features.

Another way to look at it is that API Gateway is a reverse proxy which exposes the microservices as APIs. As its name implies, API Gateway is a “gatekeeper” between the microservices and clients.

### Benefits That API Gateway Brings

Companies that use API Gateway will benefit from a complexity reduction in their client and server code, which is a more manageable way to impose limits and enforce access. Occasionally, it provides an overall network latency reduction, which is required to satisfy the client’s requests.

Considering that the client and backend services are decoupled, there’s no need for the client to realize how the individual services have been decomposed. The decoupling makes it much easier to refactor services without one code base impacting another.

With API Gateways there’s no need for developers to build logic into their apps which are supposed to keep track of endpoints or even how to handle request failures, and all to avoid the delivery of a bad user’s experience. Another benefit API Gateway provides the minimization of latency, which, ultimately, brings a better end-user experience.

Without API Gateway, every backend service would need to create its own security-related decisions about every incoming client request. So one big benefit is that it can simplify encryption and authentication as well.

### How Many Different API Gateways Are There?

- Amazon’s API Gateway is a wholly managed service designed for developers, and it allows them to create, maintain, monitor, publish, and secure APIs. The AWS API Gateway has seamless integration with the AWS Management Console, and in case you wish to expose AWS workloads as an API, this is a good thing to know.

- Ambassador is built on top of the Envoy proxy that serves as an ingress controller and is a Kubernetes-native API Gateway.

- Kong is a cloud-native API Gateway which is written mostly in Lua, and it’s extensible through the open-source as well as through the proprietary plugins. Kong can be easily integrated with the Kong Service Control Platform, which is the API management solution that came from the same vendor.

- Tyk is an open-source API Gateway which is written in Go, and plugins written in many different languages can expand it. The company is offering an API Management Platform that can be installed on-premises or even as a managed service for a certain fee.

- Express Gateway is an API Gateway written in Node.js and built entirely on Express as well as Express Middleware. Configuring Express Gateway is easy, and it can be extended with plugins written in JavaScript.

The list above is just the example of some of the best API Gateways, but many more exist along with the highly specialized ones as well. Akamai, Microsoft, Google/Apigee, Dell Boomi, and many other companies offer their own API Gateway services too.

Wrapping Up

API Gateways essentially help in minimizing the possibility of data sources exposure as well as backend services exposure directly to the clients. By using API Gateways, you’ll have a cleaner and simpler client code, less latency involved, along with the simplified authentication and encryption.

What are your experiences in using API Gateways? Do you have thoughts you’d like to share with our readers? Leave them in the comment section below.
