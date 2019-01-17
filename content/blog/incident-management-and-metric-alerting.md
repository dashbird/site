---
title: Dashbird announces incident management platform
description: Get custom alerts and incident management for serverless applications
date: 2019-01-17
frontImage: "2019-01-17/errors-teaser.png"
thumbnail: "images/blog/2019-01-17/errors-teaser.png"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: https://twitter.com/rehemagi
blog: ["reInvent", "serverless", "AWS", "news"]
---

Since the beginning of <a href='https://dashbird.io' target='blank'>Dashbird</a>, we've been conducting user interviews with all the users that take the time to jump on a call with us. One of the most common requests we get is the ability to customise alerts - specifically, what failures you will get notified upon and the ability to set custom alert based on metrics. Today we announce a new part of Dashbird that takes care of that - an incident management platform.

*If you haven't yet tried Dashbird, it's an observability platform for serverless applications that helps you build applications with less time and increase the quality of your service. <a href='https://dashbird.io' target='_blank'>Take it for a spin</a> in 5 minutes with no code changes.*

Dashbird detects all excecution and configuration errors by importing logs and smart pattern matching them against failure patterns. With Dashbird, you'll not only be able to tell that something is not working, you'll be able to say WHAT exactly went wrong. The powerful thing about log-based error detection is that it automatically covers all the functions under your account without any implementation overhead.




### Setting up alerts for execution failures

![Exception handling](/images/blog/2019-01-17/errors-teaser.png)

The first thing we redid was the exception handling logic - now you can specify exactly what function or service you want to get alerted about and which are not so important. We also support granularity for the error type. For example, you can get only CRASH type exceptions, and not timeouts or out of memory errors. By default, users will get email alerts about all failures that happen after they sign up.

### Metric alerting and incident management

![Metric alerting](/images/blog/2019-01-17/metric-alerting.png)

Dashbird now supports setting alerting conditions for all Lambda metrics. The supported metric types can contain invocations, cold starts, errors and retrys and of those you can monitor the count, latency, memory usage, cost etc. Metric alerting can be a powerful way of getting in front of performance and cost issues. Imagine you can set an condition for all customer-facing functions to be executed in less than 500ms.

### For the future

Our aim for the alerting section of Dashbird is to make it configurable for almost any event a user can think of for alerting. Another area where we are looking to improve is our notification channel support. Currently we support Slack and email integration, but webhooks support and an open API is on the roadmap.

### Start now 

In case you're looking to introduce metric alerting to your company, we usually only recommend customers to start with a few basic metrics and build on top of those. Building and managing alerting rules should be an ongoing process and we're happy to get you started. Our experts are happy to help with a consultation for setting up alerts.


To get the process going, you could either sign up for Dashbird and we'll take it from there or schedule a <a href='https://dashbird.io/contact-us/' target='_blank'>demo here</a>.
