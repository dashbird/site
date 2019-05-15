---
title: Quickly Debug Your AWS Lambda Functions
description: Debugging Lambdas is hard but there are a few ways to make life easier.
date: 2019-04-09T00:00:00.000Z
frontImage: "2019-04-09/antique-blue-blur-1484791.jpg"
thumbnail: "images/blog/2019-04-09/antique-blue-blur-1484791.jpg"
authorlink: 'https://twitter.com/johndemian'
author: 'John Demian'
author_image: '/images/team/john.jpg'
category: "Debug, Serverless, Lambda"
blog: ["Debug", "Serverless", "lambda"]
---

Great writers use metaphors to get their point across so let me give that a try real quick. Bugs are nasty little pests, mm'key? It's hard to get rid of them but apart of just spraying poison everywhere, there are only a few options left. One of those options is using a natural predator to those bugs, a predator like birds. So birds can help you get rid of bugs. I work for a company called Dash<strong>bird</strong>  that help developers debug their AWS Lambda applications. See what I did there? Pests\bugs <-> birds\Dashbirds? Clever, right? Now, who do I need to call for my Pulitzer Prize?

## Main Reasons For Using AWS Lambda Functions

One of the AWS Lambda perks is that as AWS claim <strong>“You can forget all about project’s infrastructure and focus solely on launching apps in the cloud while you’ll be able to perform integrations with other Amazon services.” </strong> Scalability and the low cost of using the AWS computing resources are other perks that come along. 

<img src="https://thepracticaldev.s3.amazonaws.com/i/rvsm59em8ijtn9wt2h4h.png">
<center><i>Anatomy of a Lambda function - AWS re:Invent 2017</i></center>

For starters, all you need to do is to write your function, connect it to an event, deploy it, and AWS will take care of the rest. The Lambda function will be able to process thousands of requests every hour on AWS with no need for our effort whatsoever.

## How To Debug AWS Lambda Functions?

When talking about the debugging process on AWS Lambda functions, four methods are most commonly used.

1. Logging for deployed Lambda functions can be performed when supported by other AWS services like Kinesis. In this process, the need for manually creating these tools will take developers a lot of time, which further means it’ll cost more since additional Amazon infrastructure will be used. But at first, this process seems quite faster.

2. Offline debugging as a second option gives you the opportunity to work locally in case of a standard development process.

3. AWS Cloudwatch is the most popular option for debugging and while it's easy to get it set up it does have it's downsides. All the logs are grouped together and it can take a lot of time to figure out what's wrong when you have a lot of moving parts in your app. Nevertheless, it's probably the best option if you are just starting out with AWS Lambda.

4. Third party tools are a great way to debug your functions and will speed up the development process quite a bit by providing all the necessary information up front saving you countless of digging-through-tons-of-logs-hours.

<a href="https://www.npmjs.com/package/serverless-offline">Serverless Offline</a> is great for debugging your application while it's still in development. It acts very similar to AWS giving you access to various services like SQS, SNS, S3, etc only instead of the request hitting the live services it goes to a local emulated service.

If you have a live service or have a dev/staging environments or have multiple developers working on the same project at once you'll need to start looking at live debugging services and while there are tons of tools to debug monolith application, for serverless specifically, there are only a few tools for debugging, some better than others.

<a href="http://dashbird.io">Dashbird.io</a> is one of those tools that are dedicated to debugging AWS Lambda applications and of the main reason our users loves the service is because of its simplicity. Everything is one click away, from general statistics of your microservices to individual function execution profiles.

## Debugging AWS Lambda Functions with Dashbird

Dashbird is an excellent choice since it was built specially for developers and it’s able to detect quickly any sorts of failures. Dashbird offers quite a lot of features for effective debugging like:

* Error Views which is necessarily a point of failure discovery which gives developers insight into what went wrong from this view. 
* Log Searching allows you to search through logs of Lambda functions which means you’ll be able to find relevant invocations.
* Function View allows you to look closer to any function that seems to misbehave, and thoroughly work on it. 
* Live Tailing allows developers to perform a real-time observation on the function’s activity.
* Tracing gives you an incredible and compelling insight into what your invocations are doing.

<img src="https://thepracticaldev.s3.amazonaws.com/i/f86h82npl8856sjihaxi.png">

## Summary

AWS Lambda functions are working in an isolated environment, but because of it, debugging becomes more and more complicated. While your code is in the development phase, it’s crucial to use Serverless Offline or Serverless Application Model to monitor and debug your code.
What experiences do you have about quick debugging of your functions? If you believe you’d be able to help our readers and us out with your strategies, let us know of your solutions in the comment box below, and let’s discuss.
