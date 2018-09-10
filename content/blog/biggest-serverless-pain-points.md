---
title: A playbook for enterprises moving on serverless
description: Serverless is great technology that will be the basis for all the future tech innovation, but it doesn't come without it's problems and observability (or lack thereof) is one of them.
date: 2018-09-29T12:00:00.000Z
frontImage: "2018-08-30/dashbird-office-mikk-taavi.jpg"
thumbnail: "images/blog/2018-08-30/dashbird-office-mikk-taavi.jpg"
author: Annika Helendi
author_image: '/images/team/annika1.jpg'
blog: ["Serverless", "Observability", "Monitoring"]
---

Serverless is gaining more and more traction and the time is not far when a lot of enterprises start looking to decouple their current monolithic architectures and moving their stack on serverless. Looking back at the container revolution and how long it took for serious enterprises to start banking on it, it's likely that we're still a couple of years off but because the rate of adoption has been quicker for serverless, we might see the migration pick up a bit sooner.

Our team at Dashbird has done extensive research into how companies use serverless, what common pain points they have and how developers go about solving them.

In this article, we will go over the most common first use cases and give an honest breakdown of what to expect when using AWS Lambda in all of those ways.

### REST APIs (on The Serverless Framework or APEX etc.)
This seems to be the most popular use case for AWS Lambda and there's no surprise there since everyone needs some sort of an API in their stack. It's also one of the strongest fit for AWS Lambda with big benefits in scalability, straight-forwardness of building and cost effectiveness. However, decoupling an existing system into smaller logical units shifts the difficulty from code to orchestration and introduces some new challenges.

#### Advantages
 * **Smaller learning curve.** The serverless framework does an amazing job in abstracting, setting up and managing resources in AWS, allowing you to build and launch apps quickly. There's really nothing to learn to start building serverless APIs - a fact is obvious when looking at the popularity around the Serverless Framework. In addition, it's not just deployments that get easier but the atomic nature of functions ensures that code is easy to write and less likely to contain bugs.

 * **Faster time to proof of concept.** Serverless enables developers to focus the majority of time on business logic and solving the problems unique to the service rather than generic operational problems. Overall, serverless seems to have a dramatic improvement on development speed due to this.

 * **Scales by default.** Out of the gate, serverless APIs are able to support large workloads with the limitation being the concurrency limit set by AWS (which is changeable with a simple support request)

#### Pitfalls

 * **Operational visibility.** Having logic distributed over a larger amount of Lambdas increases the surface area for failures while the parrallel nature of event-driven architectures acts as a multiplier of complexity. Moreover, event-sources such as API gateway, databases (Aurora, DynamoDB), notification systems and queues add to the list of possible failures even more. This is the reality of distributed architectures but it's easily improveable by observability platforms such as 
Dashbird or AWS's own CloudWatch. 

 * **Using non-serverless DBs in large-scale.** Parallelism can cause non-serverless databases (I mean limited connection counts) to run into scalability issues when Lambdas use up all the connections. Some remedies there are connection-pooling over subsequent requests (lambdas re-use underlying containers, making this possible).

 * **Latency in decoupled microservice architectures.** This isn't a serverless issue per-se but more of a side-effect of having microservices ask information from one-another, producing chain-requests that increase latency. This is avoidable by designing the microservices in a way that allows parallel querying and avoids dependencies for requesting data.

 * **Scaling LAMBDAs in VPN.** Lambdas in VPN that need internet connection are limited to the IP adresses available in the network, meaning scaling can become an issue there. Make sure you allocate enough IP adresses and are mindful of the fact when designing the application.

### Multimedia processing


### Scheduled tasks (CRON jobs)
Moving CRON jobs to Lambda is another excellent use case to start off with Lambdas. In most cases, it's a relatively easy task to decouple an existing CRON server to Lambda. 

#### Advantages

 * **Cost.** Not having to add a separate EC2 instance can decrease the cloud bill.

 * **Simplicity.** It's easier to set up a Lambda than it is to set up an EC2 instance, especially because you don't have to worry about uptime and other basic devops questions. Lambda also scales better for these cases if the workload happens large.

#### Pitfalls

 * **5 minute timeout limit.** If a CRON job takes longer than 5 minutes, you'll have to ensure that the task gets continued somehow. Lambda functions maximum time limit is 5 minutes.

### Stream processing

Processing a potentially infinite stream of messages - it's something that we've been doing in Dashbird for a while now without much headache. The reason why Lambdas are good for stream processing is the scalability aspect and the pay-as-you-go pricing model. Keep in mind that compute time is not cheaper (than EC2 for instance) but if the events are bursty or infrequent you'll end up saving money.

#### Advantages

 * **Development speed.** You'll only have to focus on how one shard is processed and everything else is abstracted away - this makes for a faster time to market.

 * **Automatic scalability.**

#### Pitfalls

 * **Cost.** Compute isn't necessarily cheaper with Lambda, so a constant and highly parallel flow of executions might end up costing the same or more than EC2. Optimise for performance and cost by analysing invocation level data with <a href='https://dashbird.io' target='_blank'>Dashbird</a>.

 * **Difficult to monitor.** Another area when Dashbird gives a good overview into what's going. Latency metrics, error reporting and cost breakdown help improve various aspects of your application.

## Conclusion

The biggest benefit for anyone using serverless is the **dramatic increase in development speed**. Sure, it can be more cost effective and has scalability written in but most of the time, development time is the most crucial metric for any tech company and that's where high level of abstraction really benefits companies. In our experience (being a serverless operations company), observability and tooling around serverless is the biggest pain point for new Lambda users. Another thing you
want to keep an eye on is the design-patterns you use

### Benefits

  - Speed of development
  - Cost effectiveness
  - Automatic scalability

### Things to look out for

  - Latency
  - Operational visibility

Event based architectures are really hard to debug, not only finding failures but also some delays can get really high. This use case usually produces lots of invocations and it might get expensive. There is a difference on how much resources you give your lambda functions and small changes here can have a huge impact (thanks to Dashbird).

  - Misuse and anti-patterns

<!-- We have talked about the [benefits of serverless](https://dashbird.io/blog/serverless-business-benefits-for-big-companies/) (and oh believe me, there are many), but just like with any other great thing in life, it has its own pain points as well. For more established companies, the main problems are **lack of standardization and interoperability** between cloud providers that may lead to vendor lock-in. Although this is something the community is actively solving, it might scare off some technology leaders. -->

<!-- But the biggest challenge is actually the **lack of visibility into your serverless stack**, because monitoring and debugging is a whole new ball game with distributed systems. Since we, at [Dashbird](https://dashbird.io), work exclusively on solving the serverless observability problems, we wanted to share some insights about the use cases where the monitoring and debugging challenges of serverless cause the most pain and frustration. -->

<!-- *Disclaimer: since the AWS Lambda is currently the de facto serverless cloud provider, we're focusing mostly on this.* -->

### HTTP REST APIs and web apps
This use case will very likely run into observability problems because serverless applications in production usually have lots of lambda functions and API Gateway endpoints. This means that things get complicated really quickly and there are so many places where things can fail.

It's very critical to get visibility into these endpoints and to track latency for each one.


###  Chat bots: scaling automatically for peak demands

### Mobile back ends
Ability to build on the REST API backend workload above the BaaS APIs

### Database changes or change data capture
Auditing or ensuring changes meet quality standards - if some row in database gets updated it can trigger another action. Getting proper alerting is very important for this use case and a good process for debugging.


---

This post is loosely based on the <a href="https://www.itopstimes.com/cloud/10-use-cases-for-serverless/" target="_blank">CNCF (Cloud Native Computing Foundation)</a>, classification of the top 10 serverless use cases. We listed the use cases that might encounter biggest observability problems.
