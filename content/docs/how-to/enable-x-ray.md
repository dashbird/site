---
date: 2017-06-05
title: Enable X-Ray tracing
linktitle: Enable X-Ray tracing
description: Enable X-Ray tracing
kbSeries: ["EHow-to"]
kbSeries_weight: 500
---

To configure X-Ray integration on an AWS Lambda function:

* Open the AWS Lambda console
* Choose your function
* Choose Configuration
* Under Debugging and error handling, choose Enable active tracing

![](/images/docs/x-ray-enable.png)

### How does it work?
Dashbird automatically detects X-Ray-enabled functions. When opening an invocation from a Lambda with X-Ray, it will fetch tracing data and combine with Lambda logs so that all information is available in an easy to consume way.

### Benefits
**AWS X-Ray** is a powerful tool that provides tracing data throughout the life of an AWS invocation. It can also show you the duration metrics to different services. For example, X-Ray can show how long a database query takes, or a third party HTTP API latency.

![](/images/docs/x-ray-traces.png)

**X-Ray** also supports custom traces, meaning data you want to manually track. Dashbird shows all this and gives you a really easy way to understand where time is lost and what actually failed.

