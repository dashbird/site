---
title: Problems With AWS Lambda Observability And How Dashbird Solves Them
description: Using event-driven distributed systems has countless business benefits but easy observability isn't one of them. The more functions you have, the more complicated things get. Fortunately there is a solution for this - Dashbird!
date: 2018-09-04T12:00:00.000Z
frontImage: "2018-09-04/dashbird-tracing.png"
thumbnail: "images/blog/2018-09-04/dashbird-tracing.png"
author: Annika Helendi
author_image: '/images/team/annika1.jpg'
blog: ["AWS Lambda", "Observability", "Serverless"]
---

The serverless space is maturing and it's <a href="https://www.forbes.com/sites/forbestechcouncil/2018/05/18/why-companies-are-adopting-serverless-cloud-technology/#4753820274d9)" target="_blank">usage is skyrocketing</a>(AWS Lambda being the *de facto* leader in this space). Since it has brought a whole paradigm change to software engineering, we are seeing some unique challenges as well. Serverless architectures are built in a totally different way. Sooner or later you will end up with hundreds or even thousands of functions that are connected with countless other services/endpoints.

Since you don't have to worry about the infrastructure on the server side of things anymore, you won't have the same kind of access to all the monitoring, tracing, debugging, alerting and log aggregation options that you used to have with "old-school workflows" or container-based setups. Serverless observability is a real issue. That's exactly the reason why [Dashbird](https://dashbird.io) was launched in 2017. So, in this article I'm listing all the biggest observability challenges serverless computing brings and how Dashbird helps to solve them.

## No top-level visibility

AWS [Lambda](https://aws.amazon.com/lambda/) is offering [CloudWatch](https://aws.amazon.com/cloudwatch/) for monitoring your functions, but it only performs up to a point when you are just starting out with serverless and only have a few lambda functions to monitor. It automatically collects metrics and logs, but **regarding the bird's-eye-view, you are left in the dark.** You'll never know how good the overall health of your serverless application is. Especially when it grows to a larger scale and introduces more complexity.  

So to get centralized overview of your serverless stack's health, you should sign up for a [free Dashbird account](https://dashbird.io). Unlike some of the competitors, Dashbird doesn't use any wrappers, but collects and visualizes actionable data from your CloudWatch logs. You just need to connect your AWS account - **the whole setup takes less than 2 minutes and there are no code-changes involved**.

Dashbird's main dashboard consists of time-series metrics for invocation counts, invocation durations, memory usage vs the allocated maximum, health statistic and error reports. This gives you the incredibly valuable, central, helicopter-view that becomes a must when you have more than 10 lambda functions.


![Observing Serverless Stack's Health With Dashbird](/images/features/2a-account-wide@2x.jpg)
*Dashbird's main dashboard with full system health overview with real time metrics.*

**Bonus tip #1:** Dashbird allows you to group functions any way you like by using their names. This enables you to construct custom dashboards for service level monitoring, outlining the load, errors and other important metrics. This is especially useful if your AWS account includes lambdas for several independent services.

**Bonus tip #2:** Dashbird also provides daily report emails with key points of interest compiled from the invocation logs from the previous 24 hours.


## Finding failures = looking for a needle in the haystack

Endpoints can perform slower than you think and if you don’t measure it, you will never know. Worse yet, your users probably will. You also might be close to timeouts or memory limits, without even knowing about it. Also, you might not expect some functions to fail, but they do anyway.

Dashbird can detect all kinds of errors: crashes, early exits, timeouts and configuration errors that are unique for serverless technology.

![Detecting Serverless Failures With Dashbird](/images/features/error-aggregation@2x.png)
*Dashbird provides instant and actionable failure detection.*

**Bonus tip:** Dashbird offers notifications through email and an integration with Slack with a short description of the error and a direct link to the failed invocation view which makes finding the error really quick and easy.

![Slack notifications alerts](/images/features/slack.png)

## Debugging is pain and major time suck

Debugging serverless applications with AWS tools is often described as pure pain. It takes a lot of time to find out what exactly failed, why it failed and how to fix it.

Dashbird breaks down every function, showing stack traces and context which make debugging lambdas really easy.

>The killer feature that brings most value is actually a simple one - the ability to search through the logs for one or multiple functions.

<br/>

![Debugging Serverless Applications With Dashbird](/images/features/3b-live-tailing@2x.jpg)
*Dashbird's live tailing feature offers near real-time troubleshooting.*

**Bonus tip:** Dashbird also links directly to relevant X-Ray traces and X-Ray is very helpful for identifying slow database calls.



## No insights on how to best optimise your stack

As mentioned above, going "serverless" will leave you in the dark with a lot of things. Missing out on the opportunities to optimize the costs or the performance of your application is a big challenge because you not only need good failure detection and general overview, but also great context to make these decisions. Right now, none of the tools provided by AWS or by old-school monitoring companies solve the problem.

Fortunately Dashbird is offering various information about the weak points in your system that could need some optimization. For example, you can detect how many cold starts your functions are experiencing and optimise the user experience based on that information. 

**Bonus tip:** There are workarounds for avoiding cold starts. Check [this](https://serverless.com/blog/keep-your-lambdas-warm/) out for reference.

![Optimising Serverless Applications With Dashbird](/images/features/2d-per-function@2x.jpg)  
*Dashbird lets you check the execution timelines, memory usage stats and how much each function is costing you.*


## Monitoring overhead can mess with your code

If you send your logs as part of your function, it will have an effect on the user-side latency as well. Using monitoring services that add a wrapper around every function will run into a risk of interfering with your function as well. These are the things you would like to avoid.

Since [Dashbird](https://dashbird.io) doesn't require wrappers, but instead works by collecting logs, metrics and listing resources under your AWS account, there's absolutely no user-facing latency.

![No Code Changes Needed With Dashbird](/images/docs/onboarding.png)
*Dashbird just needs limited access to your AWS account. After completing the registration form, a custom CloudFormation template is generated for you.*


## Wrapping up
Observability is hard, that's no secret. Serverless is still young, and has it's teething issues. By using the right tools for the job, like Dashbird for observability, and properly structuring your logs in a logical manner, many of the issues can be mitigated. Hope you enjoyed the read, catch you next time. Until then, stay safe, and make sure to alert your errors!

---
*Are you using serverless in production and have some insights to share? We are always looking to improve Dashbird based on the feedback of real serverless users. [Get in touch!](mailto:info@dashbird.io)*
