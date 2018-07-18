---
title: Log based monitoring for AWS Lambda
description: Dashbird is a service that approaches monitoring and error-tracking by collecting and analyzing CloudWatch logs.
date: 2017-11-13
frontImage: "13-11-2017/dashboard.png"
author: Taavi Rehemägi
author_image: '/images/team/taavi.png'
category: "Monitoring, Lambda"
---

Monitoring and analytics has been an issue for Serverless systems since they were invented. While it's easy to attach an agent like NewRelic or DataDog to a server or container, function monitoring requires a different approach. Serverless applications, where logic is distributed over a large amount of functions, attaching  agents or wrappers leads to cost increase and development overhead. To provide insights into FaaS architectures, Dashbird collects all your CloudWatch logs and extracts meaningful and actionable metrics from that. 
 
### [Dashbird](https://dashbird.io/monitor-aws-lambda) is a service that approaches monitoring and error alerting by collecting and analysing CloudWatch logs.

The service takes advantage of the fact that Lambda functions emit logs with a lot of useful, pre-formatted, information. With smart parsing, it provides time-series metrics for invocations, memory usage, durations, while also sorting displaying invocation separately. Every piece of data is then culminated into a single Dashboard, that offers a
bird's eye-view to the entire system, and points out problematic areas. It also acts like an error-alerting system, by recognizing exceptions, runtime errors, configuration problems and timeouts. 

[Dashbird](https://dashbird.io/monitor-aws-lambda) requires minimal effort to set up and has no cost effect to your AWS bill. Onboarding requires a delegation to your AWS account, that allows the service to get basic data about Lambda functions and collect their logs from CloudWatch.

## Monitoring
![Main dashboard](/images/blog/13-11-2017/dashboard.png)
_overview of all Lambda functions_

[Dashbird](https://dashbird.io/monitor-aws-lambda) captures everything relevant in a single view. That prevents problems from going unnoticed and gives developers an understanding of traffic in the system. The main page consists of time-series metrics for invocations, mean durations and memory usage, health stats, billed duration, error reports and function-level load distribution. From there, you can drill down to any metric or locate misbehaving functions and troubleshoot issues.

![Function overview](/images/blog/13-11-2017/dashbird-function.png)
_single function view_

Single function view gives you execution, duration and  memory usage graphs, along with errors, statistics and invocation listing. You can use that to optimise memory usage or view the average latency, while also see errors and debug errors and searh and live tail a lambda function. That is as close as you get to your function when debbugging or developing.

## Error alerting
![Error view](/images/blog/13-11-2017/error.png)
_single error view_

Dashbird  has a no bullshit approach to error detecting and alerting. It finds all runtime problems like crashes, exceptions, early exits and configuration errors and is able to integrate with Slack and email. What's sets it apart from other errror-trackers, although, is the ability to find timeouts and configuration errors. **These errors do not get notified to APMS that rely on sending data with a net request, since the execution is halted immediately.**

Dashbird also aggregates error data, so that you can track the relevance and magnitude of a reoccurring error and find overlaps in the logs, that helps with debugging.

## Set up and cost
Creating the delegation takes about two minutes, and the setup screen guides you through it with a few simple steps. After that, the data will start pouring in and you will learn stuff about your system in a matter of minutes. 

Dashbird requires the following privileges to your AWS account.

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "logs:FilterLogEvents",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "logs:describeLogStreams",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "lambda:listFunctions",
      "Resource": "*"
    }
  ]
}
```

The free tier tracks 10 lambda functions with a sum total of  500k requests per month. In the first 14 days, Dashbird offers unlimited amount of data for unlimited amount of functions. [Here are the full pricing details.](https://dashbird.io/pricing)

## Conclusion
If your application logic is distributed over large amounts of functions, it makes a lot more sense to collect info from the logs rather than sending telemetry at the execution time. Dashbird introduces what will one day be the _de facto_ standard for Serverless monitoring. If you're building on AWS Lambda, Dashbird is one of the best tools to monitor and improve your Serverless architecture.

### [Try out Dashbird for free](https://dashbird.io/register) 
