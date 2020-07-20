---
title: 5 Popular Use Cases for Going Serverless
description: A list of 5 most popular serverless use cases and reasons why serverless architecture is adopted. 
date: 2020-07-20T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/5-popular-use-cases-for-going-serverless.png"
thumbnail: "images/blog/2020-05-vacation-buffer/5-popular-use-cases-for-going-serverless.png"
canonical: https://dashbird.io/blog/5-popular-use-cases-for-going-serverless/
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["serverless", "aws", "aws-lambda"]
---

Since 2014 when AWS launched [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/) and kickstarted the serverless movement, going serverless has grown exponentially for organizations of all sizes from one-man start-ups to huge listed global enterprises. While there are [some challenges to this new architecture](https://dashbird.io/blog/challenges-of-going-serverless-2020/), the ways moving to serverless can [transform a business](https://sls.dashbird.io/going-serverless-case-study) often far outweigh these.

Before looking at the use cases for serverless, let's start from the basics and define what it actually means. While obvious, it's important to clarify that there are still servers and data centers involved, however, they are now managed for you. Cloud providers, like AWS, offer managed off-the-shelf services on their own servers, both of which they are responsible for in terms of security, provisioning, updates and everything else you were previously responsible for on-prem servers.

With this in mind, a good way to think of serverless is "pay-per-use computing", i.e. when you're not using it, there are no costs. It's then down to you - the user - to be responsible for the code, what you put into the managed services, and how you use them. It is also your code that stitches the chosen managed services together to create your unique application; the possibilities are endless.

Below are a few of the best use cases for going serverless. This is by no means an exhaustive list as the opportunities and solutions really can be endless, however, the examples below offer some of the most popular and most common reasons serverless architecture is being adopted. You might also want to check out our [case study on going serverless](https://sls.dashbird.io/going-serverless-case-study) based on Shamrock Trading Corp example.


## Use Cases:

## Building Restful APIs 

One of the most popular use cases for going serverless is the ease at which to build RESTful APIs. Within AWS, Lambda functions alongside [API Gateway](https://dashbird.io/knowledge-base/api-gateway/what-is-an-api-gateway/) provide a seamless way in which to create a scalable endpoint that processes data in real-time. Its ability to scale and fluctuate as demand changes without the need to maintain the servers it sits on is, understandably, a developer's dream come true.

Being able to configure service integrations with API Gateway, AWS has made it simpler to implement asynchronous processing and, helpfully, reduces the need for additional Lambda functions.

## Websockets

We are in an age where real-time two-way communication, such as live chat functionality, is not only more common but increasingly expected by customers and users. Websockets are perfect to enable this capability or in fact any time you're needing communication of data between the user's interface and a server.

Again, looking at AWS API Gateway and AWS Lambda, connections between the user and server can be created and maintained with only a Lambda function being triggered when the user sends a message. This avoids the need to continuously poll the server for a reply reducing uptime.

## Parallel Compute

Using AWS Lambda, one of the mainstays within serverless, users are able to implement parallel computing. AWS Lambda uses a single concurrency model which essentially translates as one Lambda function handling only one request at any one time. This [coupled with its scalability](https://dashbird.io/knowledge-base/aws-lambda/scalability-and-concurrency/) means that should thousands of requests come in at the same time, the equivalent of Lambda functions will be automatically spun up.

This ability to break down large requests into concise and independent ones means each request can be executed simultaneously and therefore more quickly. Lambda charges are based on duration and so even at the highest memory, if those thousands of requests only take a few minutes to run and execute, the costs will be incredibly small each time.

## Asynchronous Processing 

As mentioned earlier in this article, going serverless encourages [asynchronous processing](https://dashbird.io/knowledge-base/well-architected/message-queue/). To sum up, asynchronous processing distributes the processing required between systems in an intercommunication environment. In real terms for an application, it enables the behind the scenes tasks to remain in a well-connected and considered background, which has a wealth of benefits.

For example, the end-user is not affected by the requests running in the background and can still interact with the application. This means that a critically enjoyable user experience is maintained while your business reputation stays high. Other great benefits of this method is a reduced idle or waiting time and greater concurrency between components, which ultimately saves time and reduces costs.

## Development Velocity & More Value

While scalability and reduced costs are substantial reasons to go serverless (as we mentioned a few times already), ultimately the biggest argument for going serverless is development velocity. Development velocity is the speed and use of the full potential at which you can deliver additional value units, either through providing existing value to new customers or new value (e.g. new features) to existing customers.

Going serverless provides developers with a better environment to innovate by removing some of the crucial but non-value-adding tasks, such as server maintenance and provisioning. This responsibility shift naturally realigns a developer's focus to continue to add greater business performance and as a result, increased revenue. According to [McKinsey research](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance#), top-in-class developer tools that enable greater productivity, visibility, and coordination are the main contributors to business success.

For all organizations, development velocity needs to be considered as a long game. While some gains can be made in a short space of time, the greatest wins will come from considered development.

## Wrapping up

Going serverless can seem confusing and at times a little over-hyped, particularly if the way your business and its infrastructure currently works for you. This said, given the development velocity and business value serverless offers, shown through the few examples offered above, dipping a toe into the serverless water to trial could be well worth it and open up opportunities not otherwise considered. The key is to start off small and considered, and set realistic expectations on the results and on the workload to get it started.\
There are a plethora of ways to introduce some of the benefits into your organization without going all in, straight away with serverless. Hybrid cloud options are becoming more common and in fact, making more sense for increasing numbers of organizations due to their flexibility and getting the best out of everything out there. Find the best use case that applies to your application and give it a go. You'll also find some good best practices and tips for getting started with serverless in our free [Serverless Best Practices e-book](https://sls.dashbird.io/en/serverless-best-practices).
