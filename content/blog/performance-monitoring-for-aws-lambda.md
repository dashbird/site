---
title: Performance Monitoring for AWS Lambda
description: Monitoring helps you identify any performance issues, and it can also send you alerts and notify you of anything you might need to know.
date: 2018-10-16
frontImage: "2018-10-16/lambda-graphs.png"
thumbnail: "images/blog/2018-10-16/lambda-graphs.png"
authorlink: 'https://twitter.com/@rehemagi'
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
blog: ["Serverless", "Lambda", "Monitoring"]
---

Monitoring the performance of Lambda functions might seem like a trivial task but once the dataset gets larger, it becomes increasingly harder to understand how your users experience the system. As a developer, you usually care about the latency, and cost of your system. The features of a good observability tool should be aligned with all that while also enabling you to ask arbitrary questions about your system to figure out the scope and causes of problems. Let's go into detail how one should approach performance monitoring and figuring out the root causes of performance problems of Lambda functions.

## Performance monitoring for Lambda functions

Let's start with what you should monitor in Lambda functions. In general there are two areas - user experience and the cost of the system. User experience usually comes down to **availability**, **latency** and **feature set** of a service while to cost of operating a service is important to ensure the profitability of the business. In distributed architectures, the surface area of what to monitor becomes larger and changes in performance and cost can often slip through unnoticed.

One of the contributing factors that make serverless applications harder to monitor is the setup overhead of analytics services. In most cases with serverless, there's a lot more units to monitor, the lifecycles are short and configuring agents directly contribute to latency and cost.

The good thing about such services is that by default, **they make themselves observable**. Observability does not mean that you have visibility, it means that the systems emit data that makes it possible to understand what is happening from the outside. This is the core principle we built Dashbird on.

#### Observing the cost of Lambda functions

Depending on the metric, it might make sense to observe it across all functions or individually per resource. For example, cost of the system is best to keep an eye on at the account level and only if that metric experiences a significat change does it make sense to drill down to function level. 

![Dashbird Lambda profile](/images/blog/2018-10-16/account.png)
_Account metrics_


#### Monitorig latency of functions

For latency, large datasets can skew the results, making it hard to notice when an important user-facing function has started to take longer amounts of time to execute. A good way to keep an eye on latencies is to construct a custom dashboard of all mission-critical functions and observe for outliers. A good way to do this is with Dashbird. 

Once you detect a function that is taking longer then expected, you can drill down to detailed metrics...


##### Percentile statistics

Usually in large data-sets, average metrics hide the outlying datapoints, making it impossible to detect that even though the average execution speed is acceptable, some percentage of the users experience significantly longer response times. Also, as a developer, it's not uncommon to be faced with requirements that origin from SLA's and go something like this: "99% of the requests must finish quicker than 1 second". Even if you're not, a requirement like that is good because it's actionable and easily measurable. This where percentile metrics come into play.

![Dashbird Lambda profile](/images/blog/2018-10-16/lambda-graphs.png)
_Function metrics in Dashbird_

## Debugging performance issues

Even when you've detected a problem with your application, the cause of it might still not be obvious. Are the slow executions caused by cold starts? Maybe there's a service that the function is calling that is taking too long to respond? Would increasing the memory speed up the execution or would it merely cost more money while having little impact?

Let's take it one question at a time. Cold starts? You can graph out cold start in time, and compare the latency of cold strats against warm invocations. In case cold starts are the problem, they can be dealt with in different ways which we will not go into here as there is a lot of info available for that.

What about the execution itself? Is some service call there particularly slow? To break it down, you can enable X-ray tracing for any or all functions and Dashbird with connect requests with X-ray traces, showing you exactly where the time is spent for each request. In addition, logging out events before and after a particular call in code logs out the timestamp meaning you can later measure time between calls in code.


![Dashbird Lambda profile](/images/blog/2018-10-16/xray.jpg)


If you figure that nothing in particular is slowing down your function and cold starts have little impact as well, it might be that increasing the CPU speeds up the execution. This is mostly a trial and error based improvement flow and there can be a sweetspot when the speed no longer increases when adding more memory.


## Conclusions

Even though serverless introduced new challenges in monitoring and visibility, the right tooling and development practices can easily help you overcome operational and management issues. The necessity of agents is increasingly deteriorating because of the amount of info that is available just by data emitted by services itself.

___
*Dashbird takes about 5 minutes to set up, after which you will get full visibility into your serverless applications. Give it a try by signing up <a href='/' target='_blank'>here.</a>*
