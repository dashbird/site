---
title: Roadmap to Backend Developer on Serverless Infrastructures
description: Some contribution insights to the popular Backend Developer community roadmap
date: 2020-05-22T00:00:00.000Z
frontImage: "2020-05-22/roadmap-to-backend-developer-on-serverless-infrastructures.jpg"
thumbnail: "images/blog/2020-05-22/roadmap-to-backend-developer-on-serverless-infrastructures.jpg"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Career"]
---

[Roadmap.sh](https://roadmap.sh/) is a quite popular Github repo providing community-driven guidelines for professionals willing to join or develop a software career. From Backend to Fullstack to DevOps.

> I missed some details there about Serverless environments and thought about sparking a discussion around this. Perhaps these ideas can mature and eventually become a contribution to the repository.

The goal here is to introduce areas that Backend developers have to be aware and knowledgeable, but not going in-depth coverage. Each of the following topics can be unfolded in several long chapters for investigation and study.


## Read the Docs! I mean, really

Serverless is different from what we’re used to in backend cloud infrastructures. It requires learning. Our starting point has to be the cloud provider documentation. That’s mandatory reading. You can’t start using AWS Lambda or DynamoDB, for instance, without reading their docs.

Many times I've seen developers upset, complaining about an unexpected behavior or limitation in a particular managed Serverless service. When I go read and understand, in many cases, it all boils down to lack of understanding. Has the developer read the documentation carefully, he would know about that reality in advance and adapt accordingly. Or choose another service!


## There's no Operating System or SSH tunnel, now what?

The way we interact with Serverless managed services is also very different. There's no "machine" or "instance" that we can connect to. No operating system in which we can install anything we may need. You have to understand what are the interfaces available for each service you consider using in your projects, how they work, what they allow, or disallow you to do.


## Serverless testing, monitoring and debugging

Since the managed services are proprietary to the cloud, we can’t mirror our local environment to the cloud. There are ways to simulate, but not to replicate. The lack of access to the underlying infrastructure also poses challenges to monitoring and debugging production workloads.

Understanding how we can develop, test, identify, and fix issues on Serverless environments is crucial. Unless you want to [waste countless hours](https://dashbird.io/blog/how-to-save-hundreds-hours-debugging-lambda/) on debugging, you’ll most likely look for [Serverless-first monitoring and debugging solution](https://dashbird.io/function-as-a-service-monitoring-and-debugging-software/).


## Dev is taking over Ops: how to configure, deploy, and maintain Serverless apps?

During the last few years, we’ve seen a trend of having the operational side shifting hands away from developers to specialized DevOps practitioners. For a few reasons, this trend is being reverted to some extent (no, not talking about “the end of DevOps”, please). It’s important for Backend developers to know at least the basics of how Serverless environments are deployed and maintained in the cloud.


## How does distributed processing work in Serverless?

We got used to having machines with several cores, capable of running countless threads and dozens of GB of RAM. That’s not how it works in Serverless. The computing environment is usually much leaner, in order to provide flexibility for efficient scaling.

In most projects involving Serverless, having to deal with distributed processing is unavoidable, thus it’s essential to understand how concurrency, parallelization (in the cloud, not in a single machine), and batching works, as well as patterns such as map-reduce and fan-in/fan-out.


## What is the Serverless scalability model?

Perhaps misleading marketing is to blame on this, but many developers imagine that Serverless services can scale infinitely, at any speed, any time. That’s-just-not-true. Backend developers must understand exactly what are the service quotas, how it scales, how fast it scales, whether it’s possible to warm up the service prior to a predictable spike in demand, etc.


## Learn how the symbiosis between infrastructure and code unfolds

It was common to have the same codebase deployed across several machines that received distributed load and processed similar things in parallel.

In Serverless, we have multiple cloud functions, each with its own unique codebase, processing different things. Interactions that were usually coordinated within a machine memory, in our code, are now coordinated in the cloud networking infrastructure, with services composed of multiple functions communicating with each other.

More than ever, the infrastructure is now in symbiosis with our code. Just as it has always been easy to end up in [messy spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code), Serverless compositions also require understanding and new design patterns to build maintainable and performant applications.


## Version control practices for Serverless projects

Serverless projects could be structured in different ways from a version control standpoint. There are mono-repo, multi-repo, and mixed approaches. Learn how and when to use them.


## What are the caching mechanisms for Serverless?

We are used to having centralized caching but, in Serverless, most likely there will be several caching points in front of different services. The API Gateway might have a request/response caching, a Lambda function’s internal memory can be used as a local cache, databases such as DynamoDB will provide their own integrated caching mechanism as well.


## Wrapping up

There is much to learn in order to be an effective Backend developer working on top of a Serverless infrastructure. The industry is reaching a relatively good maturity level now. Learning sources and developer tooling is quite decent already, so don’t feel overwhelmed. In case you are looking to be successful in running healthy production environments on Lambda, you will find good partners in [Dashbird](https://dashbird.io). You can [check the service for free](https://dashbird.io/#register) right now.
