---
title: Cold Start Impact On Latency
description: Cold start latency depends on numerous variables like the language you're using, how many libraries you're using, or how much code do you have.
date: 2019-01-24T00:00:00.000Z
frontImage: "2019-01-24/pexels-photo-953626.jpeg"
thumbnail: "images/blog/2019-01-24/pexels-photo-953626.jpeg"
author: Nemanja Novkovic
blog: ["Lambda", "Other"]
---


Even in this field of work, not everything can be perfected 100%. There are always some situations and cases that will force you to go back or even remain in the present spot, despite your wish to keep going forward at your own pace. In this article, we'll talk about the cold start impact on latency. What is it? How to fight against it? Is there a successful way of avoiding it or not? Follow up this link to our <a href="https://dashbird.io/blog/serverless-survey-results-benefits/">website</a> and find many useful answers regarding the serverless technology and its benefits.

<h2>What Is A Cold Start And Why Do We Care?</h2>

Going serverless has a tremendous amount of benefits as well as it has its downfalls. In some cases, it's not the cheapest way of hosting. But again, in other cases, it simplifies and quickens the turnaround time which results with much more free time for other things to be done. All serverless computing has the same weak spot known as the cold start. Even the AWS Lambda is no exception to this dreadful fact. Let's roll-back and explain why is the cold start so meaningful and why do we care about it. 
The serverless cold start is happening when your code is executed for the first time by your cloud provider. Your code requires to be downloaded, placed in a container, to be booted, and of course, it needs to be primed to run. All of these requirements add up to 1.5s of latency.
The bright side of it all is that these cold starts are the outliers that affect only about 5% of executions. Therefore, it's important to mention that they do not happen all the time, but still are an essential aspect to think about when you're creating your application.

<h2>Cold Start Latency</h2>

The cold start latency depends on numerous variables like the language you're using, how many libraries you're using, or how much code do you have. Also, it depends on the configuration of the Lambda function environment as well as if you need to connect to Virtual Private Cloud (VPC) resources, https calls, code size, memory size, and so on. A lot of these aspects are under control by the developer which means that it's frequently possible to reduce the startup latency which happened by a cold start.
Should we be worried about the cold start? The answer to that question really depends on the style and traffic shape of your app. For example, if you're writing a low-latency trading app, you most probably wouldn't want to use the cloud-hosted FaaS systems, regardless of the languages used for its implementation.

<h2>Cold Start Optimization</h2>

In the raging battle against the cold start and latency, we've come across a couple of ways to optimize the cold starts. The two tactics to battle against the cold starts are:

<h3> 1. Minimize the cold start duration</h3>

In simple words, this means cutting down the latency of the cold start itself. To achieve the lowering of the time impact of cold starts, basically, you'd need to write functions via interpreted languages. Cold start latency is under 1s with Python and Node.js. Language like Go is yet another example of low cold start latency. Choosing a higher memory setting for your functions might also do the trick, but it also provides your functions with much more CPU power. Another way to avoid the latency is to exclude the utilization of VPC since VPC must create ENIs which goes well over 10s upon initialization. Avoid placing your functions in VPC, and it will help you a great deal.

<h3>2. Minimize the cold start rate of occurrence</h3>

Warming up the function can reduce the occurring cold starts. Sending the pre-scheduled ping events to your function will keep them idle and alive, which means they're ready to serve requests. Yet again, this brings us to another question: How to handle simultaneous cold starts? There are several modules and plugins which will solve this for you. For Node.js developers, there's a Lambda Warmer plugin which will help you out with warming up simultaneous functions, and it also allows you to choose the levels you want. It's compatible with both AWS SAM and the Serverless Framework. It is worth mentioning that the Serverless Framework has another plugin "Serverless WARM-Up Plugin" but note that it doesn't support the warming of simultaneous functions.

To warm up your functions correctly, see this guideline:

   - Never invoke your function more frequently than once every five minutes;
   - Amazon CloudWatch Event is where you must summon your function; 
   - When you run the warming process you should pass-in a test payload;
   - Create a handler logic that even though it's running the warming, it doesn't run all function logic.

By utilizing this warmer, you are able to safely keep as many AWS instances running as you wish, which includes the copies of the exact same function in case you expect the concurrent requests. This just might mean that the cold starts are history.

<h2>The Conclusion</h2>

Unfortunately, there is no available firm solution, and you must accept that there is no guarantee that you won't experience the cold starts. The ultimate solution must and will come from the cloud provider. You must be prepared for 1-3 seconds cold starts even for the small functions, but know that all cloud providers are aware of this problem and that they're actively doing their best to optimize the cold start experience which furthermore means fixing the latency issues. If nothing from this article helped with your cold-start/latency issues, try finding a solution again in a few months since FaaS vendors are continually improving their services.

