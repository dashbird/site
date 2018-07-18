---
title: Changes to Dashbird Enterprise Plan
description: We just raised our enterprise invocation level limit to 100 million requests and are focusing on monitoring large Serverless architectures.
date: 2018-01-29
frontImage: "29-01-2018/enterprise-serverless-monitoring.jpeg"
thumbnail: "images/blog/29-01-2018/enterprise-serverless-monitoring.jpeg"
author: Taavi Rehemägi
author_image: '/images/team/taavi.png'
category: "Product, Other"
---

Last week, we raised the limit of our <a href='/pricing' target='_blank'>enterprise plan</a> to **100 million requests per month**. This is the first step towards improving our value offering for large-scale serverless systems.

### More bang for the buck
Previously, the default limit for enterprise customers was 30 million a month. At the time, this was the range we could promise to import from CloudWatch without getting throttled and also it seemed to be more than enough for basically all of our users. Lately, we have made significant improvements to our log importer system, which now is able to easily import a hundred million request per month. That is, without running into throttling issues with CloudWatch.

### Shorter delays
With the improvements on the importer and data aggregators (including swapping the database from DynamoDB to MongoDB) we have also significantly improved the importing delays. In January, the **mean delay for a request was 40 seconds** (down from the range of about 90-120 seconds), with best case scenarios being **around 10 or 20 seconds**.

### Better overview
We launched project views in December. With project views, you can break down your main dashboard into micro-service or stage level and have more detailed metrics. We believe, this will help you create more relevant dashboards if you have a huge amount of functions.

![Serverless project monitoring](/images/blog/29-01-2018/project-overview.png)

### What's coming?

For the next months, we have a ton of interesting features coming, like **custom metrics, custom alerting, API Gateway support** and more.
Also there's going to be a push for even bigger limits. We're also working towards supporting volumes into billions of requests, which will require a different approach on importing (think sampling).
