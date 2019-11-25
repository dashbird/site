---
date: 2019-11-05T12:53:53+02:00
title: "Serverless Challenges and Solutions"
description: "What are the challenges of serverless infrastructures and how to overcome them?"
learning: ["ABasic Concepts"]
learning_weight: 400
thumbnail: "images/knowledge-base/serverless-challenges.png"
---

Fast adoption of serverless is fueled by the ability to **build products faster**, **scale effortlessly** and benefit from an efficient **pricing model**. Regardless of that, challenges exist over server-centric architectures that should be considered when adopting serverless. This article tries to outline the main challenges and concerns around building serverless applications.

## Performance Problems of Serverless

Running on Lambda can have negative performance implications due to multiple reasons:

  * **cold starts** (initial container boot up)
  * **distance of infrastructure from user**
  * **suboptimal architecture** (Lambda calling another Lambda or multiple other services before returning a result)
  * **suboptimal compute configurations**

### Cold starts

Cold starts can be optimised in a lot of ways. First thing to pay attention to is if the function is deployed inside VPC or not. Running a function inside VPC can result in a significant cold start time. On top of that, different programming languages have different cold start times, fastest being Python and Node.js and slowest being .NET and Java. Some services, such as Dashbird allow you to analyze cold starts by duration, count and frequency, giving you an opportunity to estimate the impact to your
users.

### Regions and Lambda@Edge

Response times are also influenced by the distance of the function from the user. If your user base is mostly in Europe, it's probably suboptimal to host the function in us-east-1. Functions can also be deployed to multiple regions to ensure less delays. However with <a href='https://aws.amazon.com/lambda/edge/' target='_blank'>Lambda@Edge</a>, you have the ability to deploy a function to Amazon CloudFront which will host the function in multiple locations around the world automatically.

### Suboptimal architecture patterns

Often times, user requests require actions and information from multiple databases and different microservices. Lambda-based serices can exaggerate this problem when logic is distributed to a large number of small functions, requiring many to be executed to service the request. This can often lead a single request to hit 3 or 4 Lambda functions, API Gateway, databases and external services. If you're designing a new service, you should always keep in mind the request path you are
building to keep the latency to a minimum.

### Runtime configurations

Lambda has a predefined list of memory and compute configurations to choose from. The available memory allocations range from 128MB to 3008MB (with 64MB increments). The CPU allocated to a function is correlated with the amount of memory provisioned. Lower memory and CPU settings are cheaper but can have an impact on performance for some types of tasks.

## Monitoring and DevOps challenges

Serverless infrastructures are very much decoupled and can span across hundreds of functions and other infrastructure services (such as databases, apis, queues etc.), making detecting issues, debugging problems and getting a sense on health a challenge for developer teams. AWS has services that do the heavy lifting connected to gathering logs, metrics and traces but it's not trivial to be on top of that data and diagnose the root cause of issues in a reasonable time frame. Third-party tooling provide solutions here to automate visualisation, alerting and insights  with tools such as <a href='https://dashbird.io' target='_blank'>Dashbird</a>, Serverless Framework, Thundra and others.

## Security Risks

Since serverless applications have far more surface area than traditional applications, it also means they provide a larger area of attack for malicious parties.

At the very least, as a developer you should be looking out for:

  * Lambda functions with too generous IAM policies
  * Outdated libraries included in the function
  * Functions where the request is not authorized

## Vendor Lock-in

Serverless is specific to cloud providers and migrating from one cloud platform to another can be challenging. Even though cloud providers are getting more and more similar and tools exist to manage multi-cloud workloads (see: <a href='https://serverless.com' target='_blank'>The Serverless Framework</a> or Terraform), it can still be an enourmous challenge to migrate from one cloud provider to another.

On the other hand, the richness and maturity of services in modern cloud providers often begs the question of how likely it is to change providers. Lock-in can also be in other technologies and even though the concept is slightly exaggarated with serverless, it's  still a very small likelyhood that you'll need to switch providers in the near future.

## Cost at Scale

Pound-for-pound, Lambda is more expensive than EC2. If you're building something that needs to run 24/7 and is highly paralleled, with consistent workloads, an EC2 instance will likely be cheaper. For serverless databases, APIs, and queues the same rule applies - the more layers of managedness they have, the more expensive they are compared to hosting databases and queues on your own in a container.


Arguments can be made however, that the speed of development outweighs the extra costs of paying premium on your infrastructure and you can eventually deliver more value for your users if you use serverless.

## When should you avoid using serverless?

The main scenarious where server-centric architectures win over serverless is commonly associated with architectural or cost questions. In cases where the system load is large and fairly constant, using containers can be less expensive. On top of that, it can be easier to cram some complex logic into one container and have everything in one place.

## Final notes

The future looks serverless and the community is working hard to overcome problems related to the multitude of challenges we see with serverless at the moment. In years to come, developers will also develop more experience and know-how in preventing and navigating modern cloud environments. If you're considering going serverless, a good strategy might be to start with a small solution at first and see how that works out for you.
