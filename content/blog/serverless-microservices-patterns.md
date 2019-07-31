---
title: Serverless Microservice Patterns Used In AWS
description: Nowadays, serverless computing is everywhere around us.
date: 2019-07-30T12:00:00.000Z
frontImage: "2018-07-12/pexels-photo-1198325.jpg"
thumbnail: "images/blog/2018-07-12/pexels-photo-1198325.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["microservices"]
---

With serverless computing, our daily tasks and routines are much more comfortable than they used to be before. Serverless allows us to put our focus on the code itself without the need to worry about the configuration of the underlying compute resources or maintenance. Numerous cloud providers (AWS included) gives us a variety of previously managed services which we can combine and create a massively scalable and incredibly robust serverless microservices.

In today’s article, we’ll talk about the serverless microservice patterns that we can use in AWS. We’ll explain their importance, as well as how to benefit the most from using them. Discover more about serverless best practices in Dashbird’s new book which you can download for free from our website.

<h2>Types Of Communication Between Microservices You Should Know About</h2>

There are two types of communication between microservices – Synchronous communication and Asynchronous communication. Today, we’ll explain the differences between the two.

<b>Synchronous communication</b> allows services to invoke other services, but they need to wait for a reply. This is also considered as a “blocking request” since the service invocation can’t finish the execution until it receives a response.

<b>Asynchronous communication</b> is known as a non-blocking request. This service is capable of triggering (invoking) another service directly, or it can even use another type of communication channel to put information in the queue. This service usually needs to wait for confirmation about sending the request.

When using services like AWS Lambda you want to use asynchronous requests since waiting for a response from a third party will keep the lambda execution time high, thus costing a lot more.

<h2>Let’s Talk About Serverless Microservice Patterns</h2>

We will try to explain different microservice patterns that represent the conventional microservice designs used on AWS. Many of the microservice models we’ll mention are mostly used in production, but they are all good enough for building serverless microservices as well. If you wish to know more, bare with me and you'll discover more interesting facts about the microservices.

<h2>A Simple Web Service</h2>

The most basic pattern that you will most likely see within serverless applications is the simple web service. It’s worth mentioning that a simple web service fronts Lambda function by using an API Gateway. And at the end, we’ve used DynamoDB as the database since it scales excellently with the high concurrency capabilities of Lambda.

<h2>The Scalable Webhook</h2>

In case you’re building a webhook, you should know that the traffic can often be unpredictable. If you’re using Lambda, you’re good to go. But in case your using a backend that is not scalable as Lambda is, you may experience some bottlenecks. There are various ways to manage this, but since Lambda supports SQS Triggers, we can throttle our workloads by putting requests in the queue after which we will use a low concurrency (throttled) Lambda function which will help us work through our queue.

In case you stumble upon some heavy load, in a certain period, you may experience small delays as the low concurrency Lambda goes through the messages.

It’s worth mentioning that the <a href=”https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-lambda-function-trigger.html”>SQS Triggers for Lambda</a> functions now work correctly with throttling. Therefore, there’s no need to manage your own redrive policy.

<h2>The Internal API</h2>

The Internal API can be described as a web service with no <a href=”https://dashbird.io/aws-api-gateway-monitoring/”>API Gateway</a> frontend. In case you’re building a microservice that you can access only from your AWS infrastructure, you should consider using AWS SDK so that you can access Lambda’s HTTP API directly.

Let’s say you’re using an InvocationType of RequestResponse, and the synchronous request will be sent to the destination Lambda function while the function (or the calling script) will wait for the response. People tend to believe that when the functions are calling other functions, it creates an anti-pattern, but it’s not necessarily like that.

For example, the HTTP calls from within microservices are a standard, and often necessary practice. In case you're calling HTTP-based DynamoDB, or HTTP-based API or any other HTTP-based internal microservice, your service will probably need to wait for HTTP response data so it'll be able to achieve its directive.

<h2>The Robust API</h2>

The Router pattern works amazingly well when clients are unsure of how to split the requests across the separate endpoints, but there are cases when clients know how to perform this task like with the case of a REST API.

By utilizing API Gateway along with its ability to route the requests based on the methods and endpoints, we're able to let the client decide with which backend service it wants to interact with.

<h2>The Eventually Consistent Microservice Pattern</h2>

Microservices must rely on the concept of eventual consistency to replicate the data across various other services. The small delay is often gradual and subtle to end users because the replication usually happens very fast.

An easy example to comprehend is if you think about your Facebook profile picture. When you change your photo, it takes several seconds for it to update in the header. This data needs to be replicated, and the cache must be cleared as well. Utilizing the same kind of data for various purposes in microservices usually means that we’ll need to store the same data several times.

<h2>Think About What You’ve Learned So Far</h2>

The mentioned patterns should present you with a good idea of where to start from when designing your serverless microservices. You should always keep in mind that it’s of the utmost importance to think about what a microservice needs to do, as well as what kind of data it needs, and which other services it must interact with.

Applying some basic standards to serverless microservices is crucial, and we’ll mention some:

- Services should always have private data of their own;
- Services should be enabled to deploy independently;
- Use the eventual consistency;
- Keep your services small and valuable;
- Utilize asynchronous workloads whenever it’s possible.

Building your serverless microservices is fun and engaging, and unlike anything we've done before. If you feel like sharing your experiences, leave your comments in the comment box below, and share your thoughts and builds with our readers.
