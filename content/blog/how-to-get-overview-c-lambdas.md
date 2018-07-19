---
title: How to Get an Overview of C# Lambdas 
description: Serverless has taken the world by storm and changed the way organizations write and deliver code.
date: 2018-02-27
frontImage: "05-03-2018/c-sharp-lambda-monitoring.jpg"
thumbnail: "images/blog/05-03-2018/c-sharp-lambda-monitoring.jpg"
author: Andrei Popescu
blog: ["Serverless", "C#", "Lambda"]
---

<a href='https://en.wikipedia.org/wiki/Serverless_computing' target='_blank'>Serverless</a> has taken the world by storm and changed the way organizations write and deliver code. Your code is packaged into a stateless container which runs on a server managed by the cloud provider. You only pay when your code gets executed. In short, **serverless helps you ship code faster** and enables you to focus on smaller units of logic.


Back in 2014, AWS Lambda was the first serverless implementation provided by a major cloud player and, at the time this article is written, you can use to run your code in JavaScript, Python, Java, C# and Go. With AWS Lambda you are even free to include the 3rd party libraries.
Starting with 15th of January 2018, AWS Lambda added support for .Net Core 2.0. Along with it, Amazon provides the AWS Toolkit for Visual Studio which lets you easily build, debug and deploy .Net Core 2.0 projects to the AWS cloud platform.

With so many important programming languages available in AWS Lambda, one might ask why use .Net Core? First, I’m not going to preach that C# and .Net Core are the best choices, no matter what your problem is. Instead, I will only highlight its most important advantages:

  - Platform independent
  - Improved performance due to a new modularized design (.Net Core 2.0 was released through NuGet in smaller assembly packages)
  - Lower memory requirements
  - Open source
  - Many of the same APIs as the .NET Framework are included
  - You can use Visual Studio, which is one of the best IDE’s available
  - Many mature 3rd party libraries available to speed up your development process

Until now, we have only discussed the functionalities that C# and .Net Core 2.0 offer in order to speed up your development process. But AWS Lambda is all about performance. You are billed for your function’s running time and memory consumption. Thus, it is important to **make sure that not only your code works, but that it works the way you expect it to.** As I have shown in one of my previous articles, even a small gain in terms of execution time or memory consumption can significantly lower your AWS bill.


Today, one of the key requirements for building a new application or service is the **ability to continuously add new features.** It is the only way you will be able to maintain and to expand your customer base! Surprisingly, with AWS Lambda this has the potential to be a double-edged sword:


  - Your customer base is growing and you are **earning more money**.
  - **Your AWS bill is increasing**, due to the fact that the execution time of your functions is now longer. Also, the memory requirements are now higher. This is not exactly a good news, especially if this happens because of **suboptimal lambdas!**

The only way for your business to be healthy is for your incomes to outpace your costs. It is therefore key to be able to deliver small pieces of functioning software and get immediate feedback from your customers. I advise you to break down your work in many **P**lan-**D**o-**C**heck-**A**djust to get the shortest lead time:

  - **Plan**: collect relevant data and define the scope
  - **Do**: develop the solution and define the metrics you will use to check its effectiveness
  - **Check**: Confirm the results by comparing before-and-after data
  - **Act**: document the outcomes and set the goals for the next cycle

In the context of AWS Lambdas, one of the most important aspects is to check the results, using the before-and-after metrics. Since Amazon manages the underlying hardware and software infrastructure, the established profiling and monitoring tools are of no practical use. There is no need to know how much RAM or CPU is available on the server to execute your functions. Instead, you should **focus on monitoring the upper layers of the stack** like invocation counts, durations, memory usage, and cost. There are a few perks you should be aware of:

  - At the time this article is written, there is no way to locally test your C# Lambdas.
  - Amazon charges for each execution and there is no free tier for testing. 

You are free (and I encourage this approach) to build a separate test environment to avoid mingling with production data, but each test call will add a cost on your monthly bill.
Taking all these aspects into consideration, Dashbird founders came to the conclusion that a **new type of monitoring tool was needed** -  to get actionable and instant metrics of errors, invocations, durations and memory usage. There has been a real need for a tool that would help to **troubleshoot and analyze each invocation with log and runtime data**. A tool that would make us **confident** that we get sufficient data to help us make the **correct decision**. If you are performing simple functional tests this might not be an issue. Most likely you can retest with minor hassle. But think about testing edge cases, under heavy load. To repeat these tests because your monitoring tools didn’t collect all the required data is something you would like to avoid. It is financially painful and also time-consuming.

### Currently, Dashbird can help you to:

  - Keep an eye on executions and failures and **react quickly to negative trends**. Locate the most problematic functions and services quickly and evaluate the scope of issues.
  - **Track errors and send alerts** for all Lambda functions. 
  - Show stacktraces and context to help troubleshooting errors quickly. Dashbird detects all types of failures for all programming languages. This includes **crashes, early exits, timeouts and configuration errors in Node.js, Python, and Java.**
  - Get an overview of all functions with metrics that show where you have the most traffic and how your system is performing across the board.

**Dashbird requires no redeploys and it has no impact on your AWS bill** because it works by collecting logs through your AWS CloudWatch API. By default, CloudWatch is tracking several metrics like the number of functions executed, latency, and errors. One of the default settings I  advise you to tune, at least on your test/development environment, **is the recording interval**. By default, it is set up to one minute. You can go as low as one second but bear in mind that collecting data beyond default metrics is not free of charge. That’s the reason I advise you to **modify this setting only on your test/development environment**. If you choose to deploy production and development stages under different accounts, you can onboard multiple AWS accounts inside the app. 

### Getting to Know Your Lambdas

Once you have tuned your logging and fired up <a href='https://dashbird.io' target='_blank'>Dashbird</a> console it is time to get into more details. There are three main types of issues that I advise you to tackle using Dashbird, in order to get your code executed faster and with lower costs:

## 1. Cold Starts 

When a C# function starts cold it can take a few hundred milliseconds to warm up. With an increased **number of calls**, this seemingly tiny amount of time will add up and so your monthly costs will also go up. Dashbird enables you to get a **real-time overview** of your whole serverless project and **notice the outliers**. There’s a good chance that these outliers fall either in one of the two categories: edge cases or cold starts. I’ll talk about edge cases later.
In order to improve the cold start-up time of your C# AWS Lambda functions there are a few simple actions you can take:

  - Try to **keep your functions** warm. If your customers base is not yet large enough/ geographically dispersed, you can either set up a periodic ping with a CloudWatch event rule or customize your Kinesis streams as to keep your lambdas warm. Aim to get high-frequency Lambda invocations to benefit from the **re-use of warm containers.**
  - Check the libraries that you are using and see if you can find **lightweight** options that will reduce the cold start-up time of your lambdas.
  - Try to **increase the amount of memory available** to your function. This will also result in getting more CPU.
 - If connecting to a database, initialize the connection outside of the handler function. This way, you will extend your connection lifetime to match the lifetime of the container.

As mentioned earlier, this should be a **repetitive process**. Make one single change and test its impact. Do not make more than one change because it will be impossible to know which one of the changes really had an impact on your function’s performance. Test each change and check Dashbird’s metrics to find out where how your functions are performing.

## 2. Warm Response Time
For the most cases, since lambdas are simple functions there is not much to do in order to optimize warm response time. What you should test and seek to improve instead are real-life scenarios where multiple functions are called sequentially and several third-party APIs or databases are used. You should do real concurrency and load tests that mimic expected real-life usage. I advise you to run your tests over longer periods of at least 24 hours to identify possible bottlenecks like external calls to sluggish HTTP APIs or underperforming database queries. Use Dashbird to collect relevant metrics such as invocations, duration, and memory usage. Make the appropriate changes and test again.

Once you’ve worked on your most obvious issues it is time to get to the nice part!

## 3. Edge Cases
These kind of errors are hardest to spot and fix since they only appear under specific circumstances that are not easy to replicate (high load, incorrect input parameters, etc) and the results are always very annoying: failure to deliver the service to your clients. Usually, a function fails due to one of these reasons:

  - Time-out while trying to reach an endpoint
  - Failure in parsing input data
  - Resource constraints (e.g.: out of memory)

In any of these cases, the function will throw an error. If the function was called synchronous then the caller receives a 429 error and it can choose if it will retry or not. However, if the function is called asynchronously, AWS Lambda will queue the event and will automatically retry to invoke the function. If you are dealing with stream-based sources like Kinesis or DynamoDB, Amazon will treat the error as blocking and it will not read any new records until it successfully processes the erring block or the batch expires.

Fortunately, Dashbird is well equipped to detect problems in your code so that no errors are left behind. It provides stacktraces and trends for each error:

```
START RequestId: b7d0ea17 Version: $LATEST
launching rockets
rockets launched
aligning satellites
{
  "errorMessage": "Cannot read property 'length' of undefined",
  "errorType": "TypeError",
  "stackTrace": [
    ...
  ]
}satellites not aligned 😬
END RequestId: b7d0ea17
REPORT RequestId: b7d0ea17 Duration: 1078.39 ms  ...
```

To help you automate your workflows, Dashbird supports sending webhooks to multiple events. You can send a webhook for every error occurrence or if something changes in the status of an error (like it gets resolved or re-surfaces). 

### Conclusion
The .Net Core is rapidly evolving and the second version brought significant improvements. Some might argue that C#, as a statically typed language, has higher cold start times that JavaScript. It is true but, on the other hand, C# benefits from the advantage of multithreading which will boost your lambda’s performance under heavy load.

I hope that one thing is clear now: the only way to get useful insights into your lambdas is frequent testing and continuous monitoring. There is no other way to deeply understand your architecture’s performance characteristics and without continuously testing and monitoring.
It is not enough that your lambdas are working, they have to work in real life scenarios as you are expecting them to do. I think Dashbird is the best tool available to help you understand how your lambdas are really working. It is easy to set up, it brings no additional costs and no performance penalty. Remember that having a function finish faster and consume less memory will save you money!

I would love to hear your comments on how you are working to monitor and optimize your C# lambdas.
