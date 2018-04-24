---
date: 2017-06-05
title: Tracing Lambda Functions with Dashbird
linktitle: Tracing
description: Tracing
kbSeries: ["CUser Guide"]
kbSeries_weight: 300
---

Dashbird provides tracing possibilities through [Aws X-Ray](https://aws.amazon.com/xray/).

<h2>
  <span class="h2 underlined bold">How it works</span>
</h2>

Dashbird automatically can detect if a function has [X-ray](https://aws.amazon.com/xray/) enabled or not. 
When opening an invocation belonging to a lambda that has X-ray monitoring enabled it will fetch X-ray data on-demand and show the results in a orderly fashion.

<h2>
  <span class="h2 underlined bold">Why to use?</span>
</h2>

X-Ray is a powerful tool that provides tracing data throughout the life of AWS invocation. With the help of X-ray its possible to track the full extent of invocation flow. 

It also can show you the duration metrics to different services, for example X-ray can show you exactly how long it took to read and write data to DynamoDB, or any other AWS service.

X-ray also supports custom traces, meaning data you want to manually track. Dashbird shows all this and gives you a really easy way to understand where time is lost and what actually failed.
