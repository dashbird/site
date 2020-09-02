---
title: The Ultimate Guide to Monitoring Serverless Applications
description: The good, the bad, and the importance of Monitoring Serverless Applications. Your A-Z from cold starts to logging to Lambda cost and latency.
date: 2020-09-02T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/the-ultimate-guide-monitoring-sls-apps.png"
thumbnail: "images/blog/2020-05-vacation-buffer/the-ultimate-guide-monitoring-sls-apps.png"
canonical: https://dashbird.io/blog/ultimate-guite-monitoring-serverless-applications/
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["serverless", "monitoring"]
---

Serverless applications, more often than not, have logic distributed over multiple functions and services, which with growth and agents and wrappers attached, can get more complex and costly. This is where Serverless monitoring comes in to help. But what is Serverless monitoring? 

Serverless monitoring allows developers to gain important insight on what happens during each execution and event, errors become more easily visible and measuring resource consumption for each invocation is possible. Simply put, there is no better way to optimize the costs and performance of your applications than using a serverless [monitoring tool](https://dashbird.io/features/).

While the old tools for AWS logging and monitoring are obsolete here, the requirements for a good logging system remains:

-   information should be granular

-   data should be available on the shortest amount of time

-   log collection should not impact application performance

These are key elements to look out for when finding the most comprehensive serverless monitoring tool. 

## What is AWS Lambda?


Let's go back to basics first and remind ourselves exactly what AWS Lambda is and its purpose.

Serverless architectures are an extension of the principles of the Service Oriented Architectures (SOA), where services (functions) communicate using messages (events). When using this approach correctly, serverless architectures can reduce code complexity and provide easier management of an application.

[AWS Lambda](https://aws.amazon.com/lambda/) is a service which runs your code deployed to a container with pre-allocated CPU, disk and memory. Together, your code and its associated configuration are called a Lambda function; these functions run in response to external events or triggers. Lambda functions are "stateless" with no affinity to the underlying infrastructure, allowing developers to focus solely on the code. Lambda is undoubtedly at the heart of Serverless applications. You can learn more about how [Dashbird helps monitor and navigate your Lambdas](https://dashbird.io/docs/application-guide/lambda-functions/).

[Function-as-a-Service (FaaS)](https://dashbird.io/blog/what-is-faas-function-as-a-service/) solves many problems that the previous architectural models had to cope with - from a developer's point of view, the most important one being the ability to run code without having to consider server administration, scalability and availability. On the other hand however, there are aspects that have to be dealt with in a different manner than before, such as monitoring.

For more detailed technical knowledge and information around Serverless as a whole, head to our [Knowledge Base](https://dashbird.io/knowledge-base/). 


## What to Monitor

One of the contributing factors that makes serverless applications harder to monitor is the setup overhead of analytics services. In most cases with serverless, there are a lot more units to monitor, the life cycles are short and configuring agents directly contributes to latency and cost.

The good thing about such services, however, is that by default, they make themselves observable. 

> Observability does not mean that you have visibility but rather it means that the systems emit data that makes it possible to understand what is happening, from the outside. This is the core principle we built Dashbird on.

Monitoring can be both specific and generic when it comes to Serverless applications, depending on your needs and the platforms used. First though, here's what we think are the most important areas to monitor to gain maximum benefit of Serverless: latency; cold starts; invocation errors; and costs and usage.

## Performance


### Latency

For latency, large datasets can skew results making it hard to notice when an important user-facing function has started to take longer to execute. Usually in these large data-sets, average metrics hide the outlying data points making it impossible to detect that even though the average execution speed is acceptable, some percentage of the user experience has significantly longer response times. 

A good way to keep an eye on latencies is to construct a custom dashboard of all mission-critical functions and observe for outliers. Once you detect a function that is taking longer than expected, you can drill down into detailed metrics. 

Additionally, as a developer, it's not uncommon to be faced with SLA requirements that go something like this: _"99% of requests must finish quicker than 1 second"_. Even if this doesn't apply, this type of requirement is good to use because it's actionable and easily measurable. This is where percentile metrics come into play.

![Latency Dashbird serverless monitoring](/images/blog/2020-05-vacation-buffer/1image9.png "Latency Dashbird serverless monitoring")


### Cold Starts

Each Lambda function runs inside a Docker container. When it's invoked for the first time, AWS first spins up a new container and then executes the function inside it. This increases latency and may make your application seem slow to the user initially. It usually takes from a few hundred milliseconds to several seconds while the requester is waiting for a response. After this initial latency however, the function is kept 'warm' for a period of time. During this time, new invocations don't suffer similar latencies and feel much more responsive to the end user.  

There's an additional complication which is the concurrency issue. If you receive a burst of traffic simultaneously, AWS scales the function by spinning up more containers to handle all the new requests. This causes a whole different sequence of cold starts, which has nothing to do with resources being left idle for too long.

There are many scenarios where cold starts are undesirable. If that's the case for your application, you need to detect and monitor cold starts in your stack. Cloud services usually won't provide this information directly, but monitoring services such as [Dashbird](https://dashbird.io/features/) will. Monitoring cold starts is a great way to keep on top of these issues, in order to assess where architectural improvements can be made.

Also, bear in mind, if the function relies on [Elastic Network Interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html) ([ENI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)) to talk to other services then that adds another layer of latency.

We go more in depth in [this article on how to solve cold starts](https://dashbird.io/blog/can-we-solve-serverless-cold-starts/), if you'd like to learn more.

### Invocation Errors 

An AWS Lambda invocation can raise errors for a  [variety of reasons](https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html). Invocation errors will make Lambda return a 400-series or 500-series HTTP status code, in other words, the invocation request is rejected before your function receives it. You can find out more from  [this list of some of the most common errors](https://dashbird.io/knowledge-base/logging/lambda-invocation-function-and-runtime-errors/)  or see  [this complete list of invocation errors](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_Errors).

On average, Small Medium Businesses (SMBs) use about 20 SaaS tools; many of those are connected via an API to the service itself and often play a crucial role in the business logic. The problem arises when one of these endpoints goes down without anyone knowing. Understanding what doesn't work or where the bottleneck is, is imperative to running a business and having insight into applications. Notification of the failure and pinpointing where and when the error happened saves hours searching through endless logs and that crucial downtime affecting end users. 

Below is an example of critical errors dashboard on Dashbird app. It's important you quickly understand the severity, root cause and time the specific error occurred the first and last time in your app. 

![Invocations Errors Dashbird serverless monitoring](/images/blog/2020-05-vacation-buffer/2image11.png "Invocations Errors Dashbird serverless monitoring")


## Costs & Usage

Lambda pricing is very straightforward, with its billable factors including:

-   Number of requests

-   Compute time

-   Amount of memory provisioned

To break it down, let's start with the number of requests. The first 1 million requests are free every month. After that you will be charged $0.20 per million requests for the remainder of that month. You can also use our [free Lambda Cost Calculator](https://dashbird.io/lambda-cost-calculator/) to calculate the exact Lambda cost for your specific case.

Independent of the number of requests, you also pay for the memory allocated to your function along with the compute time that the function takes to do its job. You specify the memory allocation (GB) when you deploy a function, while the compute time (seconds) can vary from one invocation to the next. With these together, a GB-seconds charge is billed where the first 400,000 GB-seconds are free, and anything after is charged at $0.00001667 per GB-second.

There will likely be some additional charges for resources like an AWS S3 bucket, VPC, DynamoDB, etc.

As you can see, costs and usage can grow exponentially and in particular with distributed models, it's easy to lose track of what's been spent and what resources have been used efficiently and intentionally.  

When it comes to the cost of the system, it is best to monitor at the account level and only if that metric experiences a significant change, does it make sense to drill down to function level.

Below is a 12h general statistics dashboard on Dashbird app. You can drill down information from a month's view to a detailed 5 minutes view to get a quick under the hood understanding of your serverless application. From here, you'll be able to spot trends and anomalies within your application.

![Lambda Cost and Usage Dashbird serverless monitoring](/images/blog/2020-05-vacation-buffer/3image3.png "Lambda Cost and Usage Dashbird serverless monitoring")


## Monitoring Tools


### AWS CloudWatch


![AWS CloudWatch monitoring](/images/blog/2020-05-vacation-buffer/4image7.png "AWS CloudWatch monitoring")

Let's start with what's already in the box.

The built-in tool for Lambda, [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), organises logs based on function, version and containers while Lambda adds metadata for each invocation. In addition, runtime and container errors and timestamps are included in the logs. With the use of these CloudWatch logs, metrics can be collected and tracked providing an infrastructure-wide view on resource usage, application performance and operational health. 

The service also includes AWS [Cloudwatch Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html), which can be set up for both metric alarms and composite alarms. The latter takes into account other alarms set up, working together to help reduce alarm noise. Cloudwatch alarms let you know how much RAM a given application is using, how much CPU usage pops up across your entire system and more. You're also able to set data limits by pre-determining events to notify you when you've made it to or approaching the limit, helping projects and applications to stick to budget. 

When you start building your first FaaS application, chances are you will begin with using CloudWatch. CloudWatch lets you track issues and is a great starting point for serverless monitoring and instilling good monitoring habits. While CloudWatch provides just enough monitoring tools for some users, others with more volume might need something more comprehensive to significantly cut down their discovery and resolution time.

### Dashbird


![Lambda Cost and Usage Dashbird serverless monitoring](/images/blog/2020-05-vacation-buffer/5image5.png "Lambda Cost and Usage Dashbird serverless monitoring")

Dashbird excels in providing error alerting and monitoring support. It works by collecting and analyzing CloudWatch logs, however, doesn't affect Lambda performance or overall AWS cost. The dashboard provides an easy live view of your architecture and allows you to drill down into invocation level data to analyze each function individually. To make the differences between Dashbird and CloudWatch solutions easier to grasp, we've put together [this comparison table between the two platforms](https://dashbird.io/blog/dashbird-vs-aws-cloudwatch/).

Most recently, [Dashbird launched its newest feature - Atlas](https://dashbird.io/blog/introducing-dashbird-atlas/) bringing your Serverless environment to life using interactive visuals, mapping out the state of your entire application in real-time.

![Dashbird Atlas](/images/blog/2020-05-vacation-buffer/6DashbirdAtlas.png "Dashbird Atlas")

Dashbird integrates with various communication channels, including Slack, so alerts can be brought directly to your development chat for the speediest remediation. Additionally, Dashbird supports Serverless beyond AWS Lambda, giving the same level of monitoring and alerting to AWS DynamoDB, AWS SQS, AWS API Gateway, AWS Kinesis, AWS Step Functions and AWS ECS. 

With the benefit of complete observability and instant alerting, developers and businesses using Dashbird have easy access to actionable insights to remediate errors, spot trends and ultimately continue to improve their application's performance, spend and usage efficiency. 

For more detail and guidance on serverless monitoring options, [head to our comprehensive guide to the most prominent providers here](https://dashbird.io/blog/ultimate-guide-to-serverless-monitoring-platforms/).  


## Instant Benefits of Serverless Monitoring


It's pretty clear now that using a monitoring tool for your serverless architecture provides a multitude of benefits, from instilling good habits and best practice to creating a more productive and effective business, team and application. It's a no brainer, but here are a few more reasons why it's so important and beneficial.


### Issue Management and Team Collaboration

Any cloud application, even that with minimal complexity, will generate a reasonable amount of issues on a frequent basis - especially those that are under active development. The development teams behind such applications need a way to effectively manage these issues. 

Monitoring platforms allow teams to visualize and control in a user-friendly way issues that are open, those that are resolved and those that have been temporarily muted. This setup creates better cohesion and clear communication for the team and the resolution workflow. 

![Serverless issue management on Dashbird](/images/blog/2020-05-vacation-buffer/7image6.png "Serverless issue management on Dashbird")


### Quality Tracking


Quickly visualizing past occurrences of the same issue can be important as some cases require further investigation. They can also indicate any current bug fixing approaches that aren't working as expected.

In all, this can help avoid making the same mistakes in both initial development and error remediation, and improve expertise and knowledge by creating a continuous learning and assessment approach. 

![Past Occurrences of Issues](/images/blog/2020-05-vacation-buffer/7image2.png" Past Occurrences of Issues")

### Event-Driven Debugging


Developers won't have the time to keep monitoring application logs for themselves, so they need a monitoring tool that alerts them proactively when something requires their attention.

![New Error Alert Configuration](/images/blog/2020-05-vacation-buffer/8image4.png "New Error Alert Configuration")

An automated alerting system may sound like something that any service provider offers today, however the key to their effectiveness is what's in the alerts. With an immense amount of application logs, it's easy for the monitor to miss relevant signals.

The alerting mechanism should detect not only application errors, but also infrastructure faults that can affect the application indirectly. In the case of AWS Lambda, this would include timeouts, container crashes, memory exhaustion and even more. You can learn more about [Dashbird's automated alerting here](https://dashbird.io/features/automated-alerting/).

![Alert All Issues Configuration](/images/blog/2020-05-vacation-buffer/9image10.png "Alert All Issues Configuration")

For parts of the system that are more tolerant to faults, developers may disable individual issue alerting and set up aggregation metrics. This allows the attention to shift from development to debugging only when it's really required.

![Alert High Error Count Configuration](/images/blog/2020-05-vacation-buffer/91image8.png "Alert High Error Count Configuration")

Having customization abilities when it comes to alerts is crucial for successful monitoring and error debugging. 


### Fast Communication


When something goes wrong in an application, developers are usually running against time to mitigate damages and fix the root cause. Not only is receiving alerts important, but getting them in the fastest and most convenient way is also essential to save time.

Most development teams today use instant messaging services such as Slack. Having a channel dedicated to receiving issue alerts can help developers cut through the noise enabling instant alerts and quicker responses for fixes. 

![Notification Channels](/images/blog/2020-05-vacation-buffer/92image1.png "Notification Channels ")


And there you have it, our ultimate guide to serverless monitoring. Monitoring your serverless applications makes sense for so many reasons, but possibly the most important being that it actually helps make a developer's job easier and more enjoyable, providing the confidence in your app's reliability and freeing up all the time spent on debugging so that you can focus on developing your product. If you're new to Dashbird, [get your free account now](https://dashbird.io/register/) and start monitoring your serverless app like a pro today - all in one place. No code instrumentation, no security or performance implications, easy to use and understand and no credit card required.
