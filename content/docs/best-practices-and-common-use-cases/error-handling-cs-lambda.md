---
date: 2017-06-05
title: Best Practices - Error Handling With AWS Lambda And C#
linktitle: C#
description: Catching and troubleshooting AWS Lambda errors when using C#.
kbSeries: ["EBest Practices"]
kbSeries_weight: 300
---

<h2>
  <span class="h2 underlined bold">
    Error Handling With AWS Lambda and C#
  </span>
</h2>

AWS Lambda, one of the most popular FaaS providers, added support for .Net Core Runtime 1.0 a whole two years after it's release in 2014 and in 2018 added the support for .Net Core 2.0 runtime. While similar in name, the .Net Core differs from the other .Net frameworks for a number of reasons. Here are the main ones:
*  .NET Core is the new redesigned version of .NET that focuses on more modern applications and in particular, cloud-enabled applications which has significant benefits when writing Lambda functions
*  .NET Core was designed with a modularized design which means you only get to include the part of .NET you will need when writing your Lambda functions. This leads to lesser memory usage and since Lambda charges you for memory usage, lesser memory demands by your functions will lead to lesser costs to you for using AWS Lambda.
*  .NET Core is open-source and has been validated against Amazon Linux - the underlying platform for AWS Lambda making it very possible for AWS to respond to security issues that might arise with using it.
*  Lastly and more importantly, with .NET Core, you can now write your C# code on any platform as opposed to earlier days with .NET where you could write C# code on only Windows environments

There are many programming options for building your application on AWS Lambda but .Net Core has a few very important qualities that make up a solid case for picking C# over the alternatives.

*    Platform independent
*    Improved performance due to a new modularized design (.Net Core 2.0 was released through NuGet in smaller assembly packages)
*    Lower memory requirements
*    Open source
*    Many of the same APIs as the .NET Framework are included
*    You can use Visual Studio, which is one of the best IDE’s available
*    Many mature 3rd party libraries available to speed up your development process

<h3>Where do you need to pay attention</h3>
AWS Lambda is all about performance and with the second iteration of .Net Core which is all about development speed you'll need to keep a close eye on your functions making sure every single one of them does exactly what it is designed to do.

The only way for your business to be healthy is for your incomes to outpace your costs. It is therefore key to be able to deliver small pieces of functioning software and get immediate feedback from your customers. I advise you to break down your work in many Plan-Do-Check-Adjust to get the shortest lead time:

*    Plan: collect relevant data and define the scope
*    Do: develop the solution and define the metrics you will use to check its effectiveness
*    Check: Confirm the results by comparing before-and-after data
*    Act: document the outcomes and set the goals for the next cycle

In the context of AWS Lambdas, one of the most important aspects is to check the results, using the before-and-after metrics. Since Amazon manages the underlying hardware and software infrastructure, the established profiling and monitoring tools are of no practical use. There is no need to know how much RAM or CPU is available on the server to execute your functions. Instead, you should focus on monitoring the upper layers of the stack like invocation counts, durations, memory usage, and cost. 

<h3>The basics</h3>
Before you dive right into building your first serverless application with C# I'd advise you take a quick minute to understand the programming model concepts of AWS Lambda.

<h2>Function Handler</h2>

Function Handler is an entry point to start execution of the lambda function. It takes input data as the first parameter and lambda context as the second parameter. If you have long-running computation task you can take advantage of Async lambda functions. Refer AWS Lambda Developer Guide for more details.

<h2>Context Object</h2>

The context object is passed as the second parameter to the handler. Context object provides useful information about AWS Lambda runtime. This could be used within the function to control the execution of AWS function.

<h2>Logging</h2>

A properly designed function should have an appropriate logging mechanism. AWS Lambda writes all logs to Cloud Watch. which could be used for analysis/troubleshooting if required. There are three ways to write logs in AWS function.

* Using Console.write or Console.writeline method.
* Using Log method of the Amazon.Lambda.Core.LambdaLogger class
* Using Context.Logger.Log method.

<h2>Exceptions</h2>

In the event of an unhandled error, an exception is sent back in Payload and logged to CloudWatch. You can look through exceptions logged by function in cloud watch.

<h3>Dashbird to the rescue</h3>
With Dashbird you'll have a clear overview of all your C# functions running on AWS Lambda. This way you'll be able to track errors and, alerts when things go awry, monitor costs and get the information you need in order for you to make necessary adjustments to your application.

Truly understanding your applications performance and characteristics require frequent testing and continuous monitoring. While C# has bigger cold start times than Javascript it's important to note that C# has a significant advantage due to its multithreading capabilities which makes the need for a tool that monitors your functions imperative as making sure that your functions do what they are expected to do on time, every time is not a recommendation but an absolute must.

<!-- - R&D error handling with C#
- re-use content from Python article
- mention common use cases and real-life scenarios -->
