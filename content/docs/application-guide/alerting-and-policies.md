---
date: 2019-09-04
title: Alerting & Policies
linktitle: Alerting
description: Alerting & Policies
kbSeries: ["CApplication Guide"]
kbSeries_weight: 400
---


In this section, Dashbird will show incidents that are open (pending resolution) and the ones previously resolved.

Under the **Policies** tab, you will be able to customize how Dashbird should raise incidents, depending on your application-specific context and needs.

![Alerting and Policies](/images/docs/aws-lambda-error-policies.png)

For example, we could set Dashbird to raise an incident whenever memory consumption is above 90%, on average, over a period of 15 minutes.

It is possible to combine filters in seven different dimensions:

* Type of request (invocations in general, cold starts, errors, etc)
* Metric (cost, duration, memory usage, etc)
* Inequality operator (above or below a certain threshold)
* A given number to compare against the metric monitored
* Aggregation factor (sum, average, minimum, maximum)
* Time-period to look for the comparison (last minute, 5 or 10 minutes, for example)
* Target Lambdas (to which functions this policy should apply - can be all your Lambdas)
