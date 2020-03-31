---
title: How Professional Serverless Teams Manage Software Issues
description: Understand the key metrics and most efficient ways to manage issues in modern distributed applications
date: 2020-03-30T00:00:00.000Z
frontImage: "2020-03-30/how-professional-serverless-teams-manage-software-issues-1.jpg"
thumbnail: "images/blog/2020-03-30/how-professional-serverless-teams-manage-software-issues-1.jpg"
author: Renato Byrro
blog: ["AWS", "AWS Lambda", "CloudWatch", "Monitoring", "Debugging", "Issue Management"]
---

No matter how careful developers are or how comprehensive tests are applied before deployment, there will always be some level of issues to deal with in production.

When it comes to managing issues and ensuring application quality, two main metrics should be on our radar: **time to discover** and **time to resolve issues**.

As the names suggest, the first indicates how long it takes for the development team to discover that something went wrong, and the second shows how long it usually takes to debug and fix the source of the error.

Both times should be as low as possible in order to guarantee the best experience for the end-user. Below are the main aspects impacting these times and tips to help you along the way:


# Time to Discover


## Detection and Awareness

Although it’s obvious that being able to detect issues is fundamental to dealing with it, you would be impressed by how many bugs are probably happening in your application right now without you knowing it.

This is a typical occurrence for teams who are still using old-school monitoring for modern distributed cloud infrastructure. Many solely rely on AWS CloudWatch for monitoring [Lambda functions](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/), for example, [which has several limitations](https://dashbird.io/blog/dashbird-vs-aws-cloudwatch/), including the inability to uncover issues that your team should be taking care of.


## Proactive Alerting

A key to reducing time to discover issues is a proactive alerting system. It makes no sense to regularly search your application logs looking for potential problems. That is where [failure detection algorithms](https://dashbird.io/knowledge-base/monitoring/failure-detection-and-alerting/) come in.

Having an automated monitoring system detecting issues for you, allows it to send your team an alert within a couple of seconds. Usually, you will be able to choose whether you want to receive those alerts by e-mail or a Slack channel, for instance.


# Time to Resolve


## Precision in Accessing Logs

In a traditional server-based infrastructure, one server or container serves multiple unrelated requests simultaneously. Isolating logs to debugging purposes is difficult.

Many monitoring systems follow the same approach for Serverless functions. In CloudWatch, for instance, hundreds or even thousands of Lambda invocations may be mixed together in a single log stream.

Modern approaches, such as the one used in [Dashbird](https://dashbird.io), aim to isolate logs for each request. When developers need to debug, they will find the data they need well organized and easy to browse and read, all in one place. This can save [numerous hours in development time](https://dashbird.io/blog/how-to-save-hundreds-hours-debugging-lambda/) and reduce the time to resolution of issues, as we have discovered from [our own customers](https://dashbird.io/shamrock-case-study/).


## Tracing

Lastly, tracing is about profiling all interactions with external resources out of a serverless function invocation process. This would include database queries, third-party APIs, etc.

Sometimes, the source of an issue may be in a bad performing IO-bound operation, for example, such as retrieving an object blob from S3 or information from a database. In these cases, only looking at AWS Lambda logs will not help. That's where tracing comes in to fill the missing gaps in information for a fast and precise debugging experience.

Being able to consume logs in connection with this rich tracing profiling is key for developers to identify the root causes of issues and work on solutions as quickly as possible.

Dashbird provides all of these benefits and much more, including a [14-day free trial](https://dashbird.io/register), no credit card required. [Click here](https://dashbird.io/register) to professionalize your issue management processes today.
