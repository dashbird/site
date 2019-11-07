---
date: 2019-11-05T12:53:53+02:00
title: "Serverless Challenges and Solutions"
description: "What are the challenges of serverless infrastructures and how to overcome them?"
learning: ["ABasic Concepts"]
learning_weight: 400
---

## Challenges of serverless

Rapid adoption of serverless is fueled by the ability to build products faster, scale effortlessly and benefit from an efficient pricing model. Regardless of that, challenges exist over classical server-centric architectures that should be considered when adopting serverless.

#### Possible Performance Implications

Running on Lambda can have adverse performance implications due to multiple reasons, associated with container boot-up, architectural patterns and limited compute selection.

**Cold start** is a delay that happens when a cloud provider spins up the underlying container to service the request. The duration of cold starts depends on various factors, including the programming language and runtime configuration. 

Often times, one user requests responds to multiple sequential backend requests in serverless, increasing the latency of a response to the end user.

Lambda has a timeout limit of 15 minutes, making it unsuitable for certain long-running tasks.

#### Monitoring and DevOps challenges

Serverless infrastructures are inherently decoupled and often span across hundreds of functions and other infrastructure services, making detecting issues, debugging problems and getting a sense on performance a challenge. Third-party tooling comes to rescue here with tools such as <a href='https://dashbird.io' target='_blank'>Dashbird</a>, <a href='https://serverless.com' target='_blank'>Serverless Framework</a>, <a href='https://thundra.io' target='_blank'>Thundra</a> and
others.

#### Security Risks

Serverless architectures usually consist of a larger amounts of elements from a classical server-centric system, exposing more surface area for attacks and exploits. Often functions that are not updated over a longer period can include outdated packages that expose vulnerabilities for explotation. 

Role and persmission management can also be tricky for functions. 

#### Possible Vendor Lock-in

Serverless technologies are specific to the cloud provider and migrating from one cloud platform to another can be challenging. Fortunately, cloud providers are getting more and more similar and tools exist to manage multi-cloud workloads (see: <a href='https://serverless.com' target='_blank'>The Serverless Framework</a>).

## When should you avoid using serverless?

Cases exist where server-centric architectures have significatn benefits over serverless. Usually those benefits are associated with architectural or cost advantages. In cases where the system load is large and fairly constant, using containers can be less expensive.
