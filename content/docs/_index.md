---
date: 2019-02-13
title: What is Dashbird?
linktitle: Home
description: What is Dashbird
kbSeries: ["ALearn"]
---
Dashbird is a service to **monitor**, **debug** and **improve** your <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>* functions. **It's tailor made to help develop serverless apps.**

_* Currently, Dashbird only supports <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>, but we have plans to support other cloud FaaS offerings in the future._

Using <a href="https://aws.amazon.com/lambda/serverless-architectures-learn-more/">serverless architectures</a> is one of the fastest and cheapest ways of building scalable and cheap back-end applications. Yet, with large architectures, they can sometimes be hard to monitor and debug.

### Core Benefits

Dashbird provides an overview of all lambda executions across your entire account. Making it incredibly easy to keep an eye on all lambda functions and to know what's going on at any given moment.

<a href='/images/docs/overview-2019.02.13.png' target="_blank"><img alt='Main dashboard' src='/images/docs/overview-2019.02.13.png'></a>

<br>

### Project View

Dashbird allows you to group lambda functions any way you like, making it easier to monitor inter-related functions in a microservices architecture. This allows you to construct a dashboard for a service or set of functions. It will outline the load, any problems you might face, the cost and other important metrics.

<a href='/images/docs/project-view-2019.02.13.png' target="_blank"><img alt='Project dashboard' src='/images/docs/project-view-2019.02.13.png'></a>

<br>

### Function View

This dashboard shows health, cost and other meaningful statistics of a single lambda function. You can also see the invocation history and pinpoint errors, cold starts, retries, and anomalies at a glance.

<a href='/images/docs/functionview-2019.02.13.png' target="_blank"><img alt='Function dashboard' src='/images/docs/functionview-2019.02.13.png'></a>

<br>

### Invocation View

An overview with logs for each invocation with additional data about duration, memory consumed, cost of serving the invocation. It also flags errors, anomalies, retries, and cold starts. JSON strings are also formatted as an object, making it easier to inspect the content.

<a href='/images/docs/invocation-2019.02.13.png' target="_blank"><img alt='Invocation view' src='/images/docs/invocation-2019.02.13.png'></a>

<br>

### Error Tracking

Track errors in your lambdas in real time and easily debug them with stack traces. Dashbird shows not only the current occurrence, but also all past occurrences of the same error.

<br>

When errors occur, AWS Lambda will automatically retry the request for you (see <a href="https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html">AWS Lambda Retry Behavior</a>). That can be very convenient, but is also a potential source of issues that can be hard to debug. For that reason, Dashbird will also link any retries detected for an error occurrence, so that you can track all invocations at once.

<br> 

<a href='/images/docs/errorview-2019.02.13.png' target="_blank"><img alt='Error view' src='/images/docs/errorview-2019.02.13.png'></a>
