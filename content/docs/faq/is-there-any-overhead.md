---
date: 2017-06-05
title: FAQ - AWS Lambda Performance Monitoring Overhead
linktitle: Is there any overhead?
description: Worried about your monitoring tool affecting your lambda functions? Worry not, Dashbird gets all the necessary data out of CloutWatch logs and doesn't affect the performance of your functions at all.
kbSeries: ["FFAQ"]
kbSeries_weight: 200
---

<h2>
  <span class="h2 underlined bold">
    Is there any overhead?
  </span>
</h2>
**Dashbird does <u>not</u> affect the performance of your lambda functions.**

Dashbird gets all of the information from logs when they reach AWS CloudWatch, meaning that the service has no effect on the execution itself.

Read more about **overhead** and how Dashbird avoids it [here](/docs/learn/overhead/).

<!-- - what is overhead?
- explain why Dashbird is fast
- explain how it does not affect performance
- very small to no impact on AWS bill -> segway to next FAQ
- link to `/docs/learn/overhead/` -->
