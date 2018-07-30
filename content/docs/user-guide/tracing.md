---
date: 2017-06-05
title: Tracing Lambda Functions with Dashbird
linktitle: Tracing
description: Tracing
kbSeries: ["CUser Guide"]
kbSeries_weight: 300
---

Dashbird provides tracing possibilities through [AWS X-Ray](https://aws.amazon.com/xray/).

<h2>
  <span class="h2 underlined bold">How it works?</span>
</h2>

Dashbird automatically can detect if a function has [AWS X-Ray](https://aws.amazon.com/xray/) enabled or not.
When opening an invocation belonging to a lambda that has X-Ray monitoring enabled it will fetch X-Ray data on-demand and show the results in an orderly fashion.

<h2>
  <span class="h2 underlined bold">What's the benefit?</span>
</h2>

AWS X-Ray is a powerful tool that provides tracing data throughout the life of an AWS invocation. With the help of X-Ray it is possible to track the full extent of an invocation flow.

It can also show you the duration metrics to different services. For example X-Ray can show you exactly how long it took to read and write data to DynamoDB, or any other AWS service.

X-Ray also supports custom traces, meaning data you want to manually track. Dashbird shows all this and gives you a really easy way to **understand where time is lost and what actually failed.**
