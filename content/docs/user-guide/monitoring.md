---
date: 2017-06-05
title: Monitor Lambda Functions with Dashbird
linktitle: Monitoring
description: Monitoring
kbSeries: ["CUser Guide"]
kbSeries_weight: 100
---

Dashbird currently offers **account, microservice and per function level monitoring**. Below we will go through each one of them in detail, discuss how to use them and how to get the most out of them.

## Account level
The <a href='https://app.dashbird.io' target='_blank'>main dashboard</a> provides account level insights into your serverless architecture. It's designed to give you a quick overview of everything going on in your account including invocation **volumes, failures, latency and overall health.** You can control the observable time period on the top right corner of the graph area.
<a href='/images/docs/overview.png' target="_blank"><img alt='Main dashboard' src='/images/docs/overview.png'></a>

**We recommend enabling the `live reload` mode and putting that screen on a TV to keep an eye on things.**

## Microservice level

**<a href='/docs/user-guide/projects/' target='_blank'>Projects views</a> lets you group relevant functions together** to observe detailed metrics about them in one dashboard. You can decide yourself which functions to group together and build your own system.

Dashbird allows you to group lambda functions any way you like. This allows you to construct a dashboard for a service or set of functions. It will outline the load, any problems you might face, the cost and other important metrics.

**Read more about project view <a href='/docs/user-guide/projects'>here</a>.**

<a href='/images/docs/serviceview.png' target="_blank"><img alt='Project dashboard' src='/images/docs/project-view.png'></a>

## Per function level
This dashboard shows health, cost and other meaningful statistics of a single lambda function. You can also see the invocation history to pinpoint failed executions. You can also use this view to live tail a lambda function.

<a href='/images/docs/functionview.png' target="_blank"><img alt='Function dashboard' src='/images/docs/functionview.png'></a>

## Invocation level
This dashboard shows an overview of logs for each invocation.

<a href='/images/docs/invocation.png' target="_blank"><img alt='Invocation view' src='/images/docs/invocation.png'></a>

---

Get started with [Alerting](https://dashbird.io/docs/user-guide/alerting/) by setting up Slack or email error notifications for your account!
