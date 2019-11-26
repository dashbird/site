---
date: 2019-11-26T11:15:00-03:00
title: "AWS Lambda Pricing Model"
description: "How much AWS Lambda costs, pricing model structure and how to save money on Lambda workloads"
learning: ["ABasic Concepts"]
learning_weight: 250
draft: true
---

# Overview

AWS Lambda charges are based on two key metrics:

* Function invocations
* Execution duration time

Everytime a function is invoked, AWS charges $0.0000002 **per request**. That translates to 1 Million requests for $0.20.

After it's invoked, another charge starts counting based on how long it takes for the execution to finish. It charges a fraction of a cent **per 100 milliseconds**. How much depends on the amount of **memory allocated** to the function[^1].

A function with 1 GB allocated, for example, will cost $0.000001667 per 100 milliseconds. That translates to $16.67 for 1 Million requests lasting 1 second each.

For billing purposes, function execution time is **rounded up** to the next **multiple of 100**. When duration is 256 milliseconds, for example, Lambda rounds to 300 in order to determine the cost.

Dashbird offers a [Lambda Cost Calculator](https://dashbird.io/lambda-cost-calculator/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda), in case you would like to simulate your own use cases.

## Additional costs

### Event Sources

### CloudWatch

# AWS Lambda vs. EC2 Pricing

Consider an application running on the AWS US-East (Ohio) region. It serves 1 Million requests per month, each during on average 250 milliseconds. The workload requires 2 GB of RAM.

Now let's compare this application running on Lambda vs. EC2:

## Lambda

* Invocations: `1,000,000 x $0.0000002 = $0.200`
* Execution time: `1,000,000 x roundup(250/100) x $0.000003334 = $10.002`
* Total cost: `$0.200 + $10.002 = $10.202`

## EC2

Since Lambda runs on Amazon Linux[^2], let's consider an EC2 instance also running on a similar type of OS.

To match the same Memory size (2 GB) and vCPU allocation[^3] (2 cores) of the Lambda function, we chose the `t3a.small`[^4] EC2 instance.

Also aiming at a fair comparison, we are using the EC2 on-demand pricing and assuming the application must be online 24x7, which better aligns with Lambda pricing model.

* Cost per usage-hour: `$0.0188`
* Number of hours: `30 days x 24 hours = 720`
* Total cost: `$0.0188 x 720 hours = $13.536`

## Comparison

Even though Lambda offers a wide range of benefits over EC2 (fully-managed, highly available and scalable, etc), it can still be cheaper than provisioning and maintaining our own server instances.

A really fair comparison would consider a cluster of at least four EC2 servers: a couple servers in two different Availability Zones[^5]. This would provide a level of availability similar with Lambda's (although still not on par with it).

Only that would already quadruple EC2 costs and management work. On top of that, consider the need for a Load Balancer and an Auto-Scaling service, the total cost of the infrastructure would probably be 5 or 6 times higher than Lambda. 

# Advantages

The main benefit of Lambda pricing model is that it **eliminates waste** with idle resources. There's no need to pay for servers allocated at waiting for requests in your application. Developers only pay when the function is invoked.

If 24 hours or even days, weeks pass without any invocation, it costs nothing. Nevertheless, the function remained highly available throughout all that time. Developers don't have to worry about whether the application will be up when it's needed.

Another major advantage that comes from this pricing structure is **reduced financial risks**. That is especially beneficial to SMEs and startups. To reach such level of availability and [scalability](knowledge-base/basic-concepts/scalability/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda), it's usually necessary to allocate a large budget on a cluster of servers. That is without knowing how much of those resources will actually be needed.

Companies usually over-provision to avoid going out of compute or memory resources and failing during peak times, when auto-scaling systems cannot cope with the speed with which demand grows.

High availability comes totally free of charge in AWS Lambda.

# Downsides

For workloads that are difficult to predict duration, the Lambda model can actually increase financial risks.

With an EC2 server, for example, there is always some level of idle resources that can accommodate some compute time fluctuations without increasing costs. In AWS Lambda, on the other hand, if execution time increases, the total cost will increase proportionally.

Another downside is that, since pricing is fully variable to application demand, there are no economies of scale as the demand grows.

# Free tier

AWS offers 1 Million invocations and 400,000 GB-seconds of execution time per month for free.

This free tier does not expire after 12 months of account creation, like other services. That means developers can continue enjoying the free tier for an unlimited period of time.

There is no official guarantee, though, that AWS will keep the free tier in place forever.


# Footnotes

[^1]:
     [AWS Lambda Pricing - cost per execution millisecond](https://aws.amazon.com/lambda/pricing/)

[^2]:
     Learn more about the [Amazon Linux](https://aws.amazon.com/amazon-linux-2/) and [other details about the Lambda execution environment](/knowledge-base/aws-lambda/introduction-to-aws-lambda/#execution-environment-and-available-runtimes?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda).

[^3]:
     Understand how [AWS Lambda allocates vCPUs](/knowledge-base/aws-lambda/resource-allocation-and-performance/#cpu-allocation?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) to the function execution environment.

[^4]:
     [AWS EC2 T3: low-cost, general purpose instance types](https://aws.amazon.com/ec2/instance-types/t3/)

[^5]:
     What is an AWS [Availability Zone](https://dashbird.io/knowledge-base/aws-cloud/global-infrastructure/#availability-zone-az?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda)
