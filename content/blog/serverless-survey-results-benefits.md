---
title: Survey Results - Dashbird Benefits, Use Cases & Feature Requests
description: We recently conducted a survey among active Dashbird users to find out more about their product experience and about the serverless technology in general.
date: 2018-04-26
frontImage: "26-04-2018/serverless-survey.jpg"
thumbnail: "images/blog/26-04-2018/serverless-survey.jpg"
authorlink: 'https://twitter.com/annikahelendi'
author: 'Annika Helendi'
author_image: '/images/team/annika1.jpg'
featloc: blog-header
featpop: most-popular
blog: ["Product"]
---

We recently conducted a survey among active [Dashbird](https://dashbird.io) users to find out more about their product experience and about the serverless technology in general. We were mostly interested to find out what business benefits these companies have experienced since switching to serverless and how we can offer more value to them with Dashbird.


# Business benefits of serverless technology #


The findings from the survey showed some impressive business benefits that these companies experienced since starting to use serverless. On average they reported **77% increase in delivery speed, 4 developer workdays saved every month and their AWS monthly bill went down by 26%**.

You can read more about this from this Medium post: <a href="https://medium.com/@AnnikaHelendi/serverless-survey-77-delivery-speed-4-dev-workdays-mo-saved-26-aws-monthly-bill-d99174f70663" target="blank">Serverless Survey: +77% Delivery Speed, 4 Dev Workdays/Mo Saved & -26% AWS Monthly Bill.</a>


![Serverless survey benefits listed](/images/blog/26-04-2018/dashbird-survey-serverless-benefits.png)




# Benefits of using Dashbird for observability #


Among other things, we asked the companies *"What have been the biggest benefits that Dashbird  has provided for your business?"* and here's what they said:

### Centralized overview ###

- *Good centralized view for the tech lead, really good follow-up of bugs.*
- *Additional cost reduction and general lambda monitoring.*
- *Having all the stats for all of our lambdas at one convenient place.*
- *Good reporting.*
- *Dashbird gives the central point of logging/monitoring and a quick overview of all the serverless functions.*

### Error tracking and alerting ###
- *We can fix errors as soon as they appear. Fix problematic functions which consume too much/little resources, the easy grouping by projects to see how it behaves after deployment and the details about specific execution are the main benefits of Dashbird for us.*
- *Error alerts.*
- *We love the Slack integration for error tracking and the easy access to AWS X-ray.*
- *Serverless monitoring and failure detection which before went unnoticed.*
- *Notifications of server crashes.*
- *Tracking errors that happen.*

### Logs, AWS critique and faster delivery ###

- *Consolidated lambda logs from Cloudwatch.*
- *Quickly diagnosing distributed problems from various AWS services we hook up to lambda. Monitoring/alerting faster than it takes for someone to realize there is a problem. Identifying cold-starts and historical trends in a dashboard which isn't crap (AWS dashboards are the woooorrrst). Creating groups of lambdas to monitor and alert on!*
- *Logging.*
- *Confidence and ability to move to serverless faster thanks to Dashbird alerts.*

![Serverless survey](/images/blog/26-04-2018/serverless.jpg)

# What's needed to deliver better serverless apps? #


We also wanted to know what kind of resources, products, and features these companies wish they had in order to deliver even better serverless applications. Here's what they said they needed:

- *More best practices and ci/cd!*
- *Integration with API GW / SNS to see which lambdas are triggered by SNS and how often. Stats: average lambda execution time - warm vs cold. Stats: execution distribution - which requests are exceptionally long - so we can investigate logs of specific executions which take too long.*
- *Serverless Aurora, better logging between lambda and API gateway, showing status codes being returned from our lambdas, setting arbitrary alarms on any metric.*
- *Ability to see the logs/summary of logs of the past functions and an overview of the lambda function returns*
- *Something for easier debugging of SLS apps.*
- *Daily updates on Slack.*
- *Monitoring for CloudFront, S3, and maybe EC2. Monitoring serverless deployments (via serverless npm module).*
- *Custom tags to track performance by query since we have a serverless monolith.*
- *Apdex-based reports would be great.*

---
We would like to thank all of the companies that took the time to take part in this survey! We gained a lot of new knowledge about the serverless world in general and also how we can improve [Dashbird](https://dashbird.io) in ways that offers additional value to our users.

You guys rock!
