---
title: A playbook for enterprises moving on to serverless
description: Serverless is great technology that will be the basis for all future tech innovation, but it doesn't come without its problems. Observability (or lack thereof) is one of them.
date: 2018-09-10T00:00:00.000Z
frontImage: "2018-08-30/dashbird-office-mikk-taavi.jpg"
thumbnail: "images/blog/2018-08-30/dashbird-office-mikk-taavi.jpg"
author: Annika Helendi
author_image: '/images/team/annika1.jpg'
blog: ["Serverless", "Observability", "Monitoring"]
---

Serverless has been gaining more and more traction over the last few years, **more than [600% in the last quarter](https://www.zdnet.com/article/serverless-computing-containers-see-triple-digit-quarterly-growth-among-cloud-users/) of 2017** alone. The time has come when enterprises start looking for ways of decoupling their current monolithic architectures and moving their stack to serverless. Looking back at the container revolution and how long it took for serious enterprises to start banking on it, it's likely that we're still a couple of years away but because the rate of adoption has been quicker for serverless, we might see the migration pick up a bit sooner than expected.

Our team at [Dashbird](https://dashbird.io/) has done extensive research about how companies use serverless, what common pain points they have, and how developers go about solving them.

In this article, we will cover the most common use cases and give an honest breakdown of what to expect when using AWS Lambda.

## REST APIs (with The Serverless Framework or APEX etc.)
This seems to be the most popular use case for [AWS Lambda](https://aws.amazon.com/lambda/) and there's no surprise there since everyone needs some sort of an API in their stack. It's also one of the strongest use-cases for AWS Lambda because of its big benefits in scalability, ease of use, simplicity and of course low cost. However, decoupling an existing system into smaller logical units shifts the difficulty from code to orchestration and introduces some new challenges.

#### Advantages
 * **Smaller learning curve.** The serverless framework does an amazing job in abstracting, setting up and managing resources in AWS, allowing you to build and launch apps quickly. There's really nothing complicated to learn when starting out building serverless APIs - this fact is obvious when looking at the popularity around the Serverless Framework. In addition, it's not just deployments that get easier but the atomic nature of functions ensures that code is easy to write and less likely to contain bugs.

 * **Faster time to proof of concept.** Serverless enables developers to focus the majority of time on business logic and solving the problems unique to the service rather than generic operational problems. Overall, serverless seems to have a dramatic improvement on development speed due to this.

 * **Scales by default.** Out of the gate, serverless APIs are able to support large workloads with the limitation being the concurrency limit set by AWS (which is changeable with a simple support request)

#### Pitfalls

 * **Operational visibility.** Having logic distributed over a larger amount of lambda functions increases the surface area for failures while the parallel nature of event-driven architectures acts as a multiplier of complexity. Moreover, event-sources such as API Gateway, databases (Aurora, DynamoDB), notification systems and queues add even more possible failures to the list. This is the reality of distributed architectures but it's easily improvable by observability platforms such as Dashbird or AWS' own CloudWatch. 

 * **Using non-serverless DBs in large-scale.** Parallelism can cause non-serverless databases (I mean limited connection counts) to run into scalability issues when lambdas functions use up all the connections. Some remedies there are connection-pooling over subsequent requests (re-using underlying lambda containers makes this possible).

 * **Latency in decoupled microservice architectures.** This isn't a serverless issue per-se but more of a side-effect of having microservices ask information from one-another, producing chain-requests that increase latency. This is avoidable by designing the microservices in a way that allows parallel querying and avoids dependencies for requesting data.

 * **Scaling lambda functions in a VPN.** Functions in a VPN that need internet connection are limited to the IP addresses available in the network, meaning scaling can become an issue there. Make sure you allocate enough IP addresses and are mindful of the fact when designing the application.

## Multimedia/image processing
An amazing and very useful use-case for AWS Lambda is to pair it up with S3 storage. After a user uploads a file to S3, a lambda function is triggered to process the data. This can be image optimizations, video transcoding, or whatever you may need. It's up to you to handle the data further, store it in a database or return it to S3.

#### Advantages

 * **Simplicity.** It's easier to set up a lambda function than it is to set up an EC2 instance. You're essentially using dedicated services for your needs. You're storing the data in S3 which is built to store files, and using serverless compute to spin up and process the files, return them back to S3 and shut down.

#### Pitfalls

 * **5 minute timeout limit.** With large files, these computation can take some time. Watch out because a lambda function can't run for more than 5 minutes.

## Scheduled tasks (CRON jobs)
Using lambda functions as CRON jobs is another excellent use case. In most cases, it's a relatively easy task to decouple an existing CRON server to AWS Lambda. 

#### Advantages

 * **Cost.** Not having to add a separate EC2 instance can decrease the cloud bill.

 * **Simplicity.** It's easier to set up a lambda function than it is to set up an EC2 instance, especially because you don't have to worry about uptime and other basic DevOps questions. AWS Lambda also scales better for these cases if the workload happens large.

#### Pitfalls

 * **5 minute timeout limit.** If a CRON job takes longer than 5 minutes, you'll have to ensure that the task gets continued somehow. Lambda functions have a maximum time limit of 5 minutes.

## Stream processing
Processing a potentially infinite stream of messages - it's something that we've been doing in Dashbird for a while now without much headache. The reason why lambda functions are good for stream processing is the scalability aspect and the pay-as-you-go pricing model. Keep in mind that compute time is not cheaper (than EC2 for instance) but if the events are infrequent and sent in bursts, you'll end up saving money.

#### Advantages

 * **Development speed.** You'll only have to focus on how one shard is processed and everything else is abstracted away - this makes for a faster time to market.

 * **Automatic scalability.**

#### Pitfalls

 * **Cost.** Compute isn't necessarily cheaper with AWS Lambda, so a constant and highly parallel flow of executions might end up costing the same or more than EC2. Optimise for performance and cost by analyzing invocation level data with <a href='https://dashbird.io' target='_blank'>Dashbird</a>.

 * **Difficult to monitor.** Another area when Dashbird gives a good overview into what's going. Latency metrics, error reporting and cost breakdown help improve various aspects of your application.

## Conclusion

The biggest benefit for anyone using serverless is the **dramatic increase in development speed**. Sure, it can be more cost effective and is scalable by default, but for the most part, development time is actually the most crucial metric for any tech company. This is why high levels of abstraction really benefits companies. In our experience (being a serverless operations company), observability and tooling around serverless is the biggest pain point for new AWS Lambda users. Another thing you want to keep an eye on is the design-patterns you use.

Event based architectures are really hard to debug, not only finding failures but also latency can get really high. This tech stack usually produces lots of invocations and it might get expensive. That's what we want to solve. Giving you the overview and insight you need to make changes that can have a huge impact on your overall system health and performance.

### Benefits

  - Speed of development
  - Cost effective
  - Automatic scalability

### Things to look out for

  - Latency
  - Operational visibility
  - Misuse and anti-patterns

---

This post is loosely based on the <a href="https://www.itopstimes.com/cloud/10-use-cases-for-serverless/" target="_blank">CNCF (Cloud Native Computing Foundation)</a>, classification of the top 10 serverless use cases. We listed the use cases that might encounter biggest observability problems.
