---
date: 2019-11-08T11:44:23+02:00
title: "Resource Allocation and Performance"
description: "How to best allocate resources and improve Lambda performance"
learning: ["BAWS Lambda"]
learning_weight: 1200
---

# Introduction

Traditionally, to provision cloud servers, developers have to choose from a wide variety of resource combinations: CPU, RAM, Local Storage. They would be charged by the server uptime period (in hours, usually).

AWS Lambda dramatically changes this approach to computing resources. Only the amount of RAM has to be allocated. CPU power will be allocated proportionally to the memory.

This model has important caveats and implications that are important to consider.

# CPU Allocation

It is known that at 1,792 MB we get 1 full **vCPU**[^1] (notice the **v** in front of **CPU**). A **vCPU** is "a thread of either an Intel Xeon core or an AMD EPYC core"[^2]. This is valid for the compute-optimized instance types, which are the underlying Lambda infrastructure (not a hard commitment by AWS, but a general rule).

If 1,024 MB are allocated to a function, it gets roughly 57% of a vCPU (1,024 / 1,792 ~= 0,57). It is obviously impossible to _divide_ a CPU thread. In background, AWS is dividing the **CPU time**. With 1,024 MB, the function will receive 57% of the **processing time**. The CPU may **switch to perform other tasks** on the remaining 43% of the time.

The result of this CPU allocation model is: the **more memory** is allocated to a function, the **faster** it will accomplish a given task.

# Multi-core

To increase CPU power above 1,792 MB, AWS increases the number of vCPUs provided to the function. From the developer standpoint, two vCPUs can be seen as two processing cores[^3].

For single-threaded programs there is no speed gains from increasing memory above 1,792 MB. The only way to reap the benefits from more CPU power above 1 vCPU is by writing code to run in two threads simultaneously.

# Time-Sensitive Workload Optimization

In some cases, it is desirable that a Lambda function responses as fast as possible. The best choice would be increase memory to a maximum. Even if the RAM is not entirely needed, it will drive allocation of more CPU power, speeding it up and reducing processing time.

Since above 1,792 MB Lambda will provide two vCPUs, function code that can't be parallelized shouldn't have memory allocated above this threshold.

# Memory-Bound Workloads

Functions running time insensitive jobs should have memory allocated to a minimum required. The less RAM is assigned, the cheaper it gets to run the function per 100 milliseconds.

There is another caveat in this model, though. Lambda charges per duration time and more memory reduces the processing time. In some cases, increasing memory can actually reduce Lambda costs[^4].

In order to discover the optimal memory size for a given function, it's necessary to benchmark it with multiple options[^5]. 

# Tracking Memory Usage

At the end of each Lambda invocation log stored in AWS CloudWatch Logs, there will be a line indicating how much memory has been allocated and consumed by the function invocation. Using CloudWatch Log Insights[^6], it would be possible to extract this information from multiple logs and compile aggregated time-series metrics.

![Lambda Log Line with Memory Info](/images/knowledge-base/aws-lambda/lambda-log-line.png)

Professional monitoring services dedicated to serverless - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) - take care of this compilation automatically. They also allow to analyze performance on different percentiles. In these services, it's possible to set policies for expected, optimal memory performance, and receive alerts whenever a Lambda function start to deviate.

---

# Footnotes

[^1]:
     [Lambda Resource Model](https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html)

[^2]:
     [Amazon EC2 Instance Types > Compute Optimized](https://aws.amazon.com/ec2/instance-types/?nc1=h_ls#Compute_Optimized)

[^3]:
     There are some caveats, depending on the runtime, though. Developers can't use all multi-core processing features offered by Python, for example. This AWS blog post provides more details: [Parallel Processing in Python with AWS Lambda](https://aws.amazon.com/blogs/compute/parallel-processing-in-python-with-aws-lambda/).

[^4]:
     [Lower Your AWS Lambda Bill by Increasing Memory Size](https://medium.com/hackernoon/lower-your-aws-lambda-bill-by-increasing-memory-size-yep-e591ae499692)

[^5]:
     [AWS Lambda Memory Tradeoff](https://github.com/byrro/awslambda-memory-tradeoff) is an open source code that helps in automating this benchmark process. It also provides a dummy _fibonacci_ function to demonstrate the concept.

[^6]:
     [Analyzing Log Data with CloudWatch Logs Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
