---
title: Monitoring serverless applications with AWS CloudWatch alarms
description: Detecting errors for AWS Lambda without instrumentation
date: 2018-08-12T12:00:00.000Z
frontImage: "2018-08-12/pexels-photo-767197.jpeg"
thumbnail: "images/blog/2018-08-12/pexels-photo-767197.jpeg"
authorlink: 'https://twitter.com/@rehemagi'
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
blog: ["AWS", "Lambda", "CloudWatch", "Serverless"]
---

Running any application in production assumes reliable monitoring to be in place and serverless applications are no exception. As modern cloud applications get more and more distributed and complex, the challenge of monitoring availability, performance and cost gets increasingly difficult and unfortunately there isn't much that's offered out of the box from cloud-providers. Although you can't fully understand what's happening just by CloudWatch it is a great place to start and have it as the first line of defense for ensure service availability and perfomance. Let's explore the basics and more complex use cases for monitoring your Lambda functions with CloudWatch (ofcourse this approach can be used similarly for other services aside from Lambda).

### Metrics

CloudWatch gathers basic metrics allowing you to observe how your system is performing. For Lambda functions, the gathered metrics are: errors, invocations, concurrency, latency and memory usage.  Since it's unlikely that you'll happen to check your metrics at the exact right time when something goes wrong, it's a good to configure alarms in case some unexpected threshold or condition is met to notify you.

### Setting up metric alarms

You can configure a CloudWatch alarm to trigger an SNS topic in case a predefined condition is met. That SNS trigger can then invoke a Lambda function which will take action to either notify or possibly fix the situation. (Sketch here about CW metric -> SNS -> Lambda)

Let's configure a basic alarm for when a Lambda function fails for any reason.

[Screenshot walkthrough]

### Best practices for setting metric alerting

So when should you configure a metric alarm? In general, you only want to receive alerts in cases that require your attention. If you create a situation where you have alerts too frequently and responding to them is optional it won't be long until you miss a critical alert from the noise or worse yet - start ignoring alerts all together. For example you can ask yourself: Is it okay if 1% of all requests fail for a specific Lambda function? Maybe it's important that requests take less than 1 second? Probably you'll want to know if your Lambda are reaching an account-wide concurrency limit. The settings are individual for every application and usually take some time and iteration to get right.

The other thing to think about is should you try to configure alerts that are preventive by nature - to trigger when something hasn't failed yet but might very soon. For example, if a Lambda function is near a timeout or very close to its memory capacity?

By default, CloudWatch attains metrics for failures, latency, concurrency, memory usage and invocation counts. The most straight forward 

### Custom metrics
You can also log custom metrics to CloudWatch, here's how:

[tutorial]

## Going further

Using CloudWatch alarms is a great first line of defence but debugging applications just through CloudWatch is hard and time-consuming, especially when your functions have a non-trivial amount of invocations. We built Dashbird to make serverless monitoring, debugging and alerting easy and straightforward, without losing the granularity. Dashbird not only detects failures, it also points you to the exact request, shows you logs, X-ray traces and relevant metadata for that invocation. Dashbird requires no extra instrumentation so you can start using it today and you won't have to re-deploy any of your Lambda functions.

<a href='/' target='_blank'>Learn more about Dashbird here.</a>
