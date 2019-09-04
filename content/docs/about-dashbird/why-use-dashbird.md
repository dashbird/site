---
date: 2017-06-05
title: Why use Dashbird?
linktitle: Why use Dashbird?
description: Why use Dashbird?
kbSeries: ["BAbout Dashbird"]
kbSeries_weight: 100
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /docs/getting-started/get-started/
 - /help/basic/get-started
---

**Serverless architecture** fundamentally changes how we develop, deploy and, most of all, monitor applications. Since we do not have access to the underlying servers that support Lambda, we cannot rely on daemons or other direct ways of monitoring our applications from within its infrastructure.

**AWS Lambda** also comes with its own limits and idiosyncrasies: limited memory and execution time can create execution errors, for example. When a function execution fails, Lambda may automatically retry it, with side-effects that can easily become monitoring nightmares.

Two architectures empowered by Lambda are microservices and event-driven software. Both will provide numerous benefits, but will also come with its challenges. Microservices will make it harder to debug for example. When a process involving potentially dozens of functions goes wrong, where is exactly the issue?

**Dashbird** provides a Project View, where Lambda functions can be virtually grouped for unified navigation of traces and errors.

An event-driven approach (such as using S3 or Dynamo Streams to trigger Lambda) will probably make it harder to understand why and how your functions are being executed. Especially when something fails, that piece of information may be crucial to understand and fix the issue.

By also integrating with **AWS X-Ray** and **API Gateway**, Dashbird will provide a comprehensive view of your cloud stack, from the start and until the end of a process that involves Lambda.

**Dashbird was created by serverless developers, for serverless developers**. We walk on the same shoes as you do and put in a tremendous amount of effort to make your life easier and to keep your peace of mind when running production applications on top of Lambda.