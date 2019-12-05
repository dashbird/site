---
date: 2019-12-05T13:50:00-03:00
title: "Provisioned Concurrency"
description: "How to use Provisioned Concurrency to reduce function latency and improve overall performance"
learning: ["BAWS Lambda"]
learning_weight: 711
---

# Overview

The Lambda model[^1] is based on ephemeral microVMs (or _containers_). Once a request is received, AWS will provision resources on-demand to run developer's code and compute what's necessary.

Depending on the runtime[^2] and how large is the codebase and its dependencies, the start up process of a function may take some time (from a few hundred milliseconds to several seconds). This is what is called "_cold start_" (the function was "_cold_" when the request was received).

AWS allows developers to set a minimal concurrency threshold in which the function would be warm to answer all requests in under **double-digit millisecond**. It is also possible to use auto-scaling to increase provisioned concurrency proactively when demand is on the rise.


# Financials

## Main caveats

Provisioned Concurrency is a step away from the serverless model of paying for what is used. By enabling it in a Lambda function, it is going back to renting compute capacity for time. This model defeats one of the main arguments in favor of using serverless: not paying for idle time.

One major caveat is that, by enabling Provisioned Capacity, the function is inelligible for the Lambda Free Tier.

Another problem is the complexity that the pricing model for Provisioned Concurrency[^3] adds to the overall Lambda financials. The amount of memory needed by a function is usually fixed and determined by the workload, so developers are left with only one dimension to analyze Lambda costs: duration of the executions.

Additionally to duration, with Provisioned Concurrency developers must also observe:

* For how long provisioned capacity is active
* How many concurrent instances of the function should be available


## Pricing

AWS Lambda Provisioned Concurrency will charge for the following dimensions:

* $0.000004167 for every GB-second of provisioned capacity
* $0.000009722 for every GB-second of function execution time

## Comparison

Consider a function with 512 MB allocated running for 31 days. It receives 10 Million requests, with a duration of 2 seconds, each.

In the traditional, on-demand pricing model, this function would cost:

* **Invocations**: $0.20 * 10 Million = $2.00
* **Compute time**:
    * $0.000000833 per 100 milliseconds
    * Total compute time: 10 Million * 2 sec = 20,000,000,000 seconds
    * Total compute cost: $0.000000833 * 20,000,000,000 / 100 ms = $166.60
* **Total Cost**: $168.60

In Provisioned Capacity, with 50 function concurrent instances provisioned:

* **Invocations**: $0.20 * 10 Million = $2.00
* **Provisioning**:
    * $0.000004167 for every GB-second
    * 31 days * 24 hours * 3600 seconds = 2,678,400 seconds
    * Total concurrency provisioned: 512 MB/1,024 GB * 2,678,400 = 1.339.200 GB-second
    * Concurrency provisioned: 50
    * Total provisioning cost is 50 * 1.339.200 * $0.000004167 = $279.00
* **Compute time**:
    * $0.000009722 for every GB-second
    * 10 Million x 2 seconds = 20,000,000 seconds
    * Total compute cost: 512/1024 * 20,000,000 * $0.000009722 = $97.22
* **Total Cost**: $379.92

With this example, we can see that using provisioned concurrency can greatly increase the costs of running serverless workloads on AWS Lambda. In light of that, developers should plan and anticipate costs carefully before using it.

# Impacts on Lambda Limits

The Provisioned Concurrency level counts to the function's Reserved Concurrency[^4] limit and also to the account regional limits[^5].


# Auto-scaling Provisioned Concurrency

It is possible to use Application Auto Scaling[^6] to automatically scale up and down the concurrency provisioned threshold.

There are three ways to implement the auto-scaling:

1. Targeting[^7] a particular CloudWatch metric
2. Step-scaling[^8]: set metric thresholds for CloudWatch alarms to trigger the scaling process
3. Scheduled-scaling[^9]: scale concurrency level up/down depending on time

The first two options have some similarities in the way they work and are suitable for applications with unpredictable load behavior.

The last one (Scheduled-scaling) is suitable for applications that have predictable spikes in demand, such as an e-commerce during the Black Friday period, for example.

# Configuring Provisioned Concurrency

## AWS Console

The provisioned concurrency can be set manually from the AWS Console. Under the **Provisioned concurrency configurations** option, click "Add" or "Add configuration":

![Configuring Provisioned Concurrency](/images/knowledge-base/aws-lambda/configuring-provisioned-concurrency-1.png)

It will open a new screen to select a version or alias of the function and the desired concurrency level:

![Configuring Provisioned Concurrency](/images/knowledge-base/aws-lambda/configuring-provisioned-concurrency-2.png)

## Command Line Interface

With the [AWS CLI](https://aws.amazon.com/cli/), we can [add](https://docs.aws.amazon.com/cli/latest/reference/lambda/put-provisioned-concurrency-config.html), [list](https://docs.aws.amazon.com/cli/latest/reference/lambda/list-provisioned-concurrency-configs.html) and [delete](https://docs.aws.amazon.com/cli/latest/reference/lambda/delete-provisioned-concurrency-config.html) provisioned resources to our functions. Please see examples below:

Add `50` as the concurrency level for the version `123` of `my-function`:

```shell
aws lambda put-provisioned-concurrency --function-name my-function --qualifier 123 --provisioned-concurrent-executions 50 
```

List concurrency settings for `my-function`:

```shell
aws lambda list-provisioned-concurrency-configs --function-name my-function
```

Delete concurrency provisioned for the version `123` of `my-function`:

```shell
aws lambda delete-provisioned-concurrency-config --function-name my-function --qualifier 123
```

## AWS SAM

In the AWS SAM YAML, declare Provisioned Concurrency settings like the example below.

> Bear in mind that AWS SAM will raise an error if this feature is used when `AutoPublishAlias` is not set.

```yaml
Type: AWS::Serverless::Function
Properties:
  Handler: hello_lamba
  ProvisionedConcurrencyConfig: {
    ProvisionedConcurrentExecutions: 50
  }
```

## Serverless Framework

Provisioned Concurrency can be configured in the Serverless framework _YAML_ file such as:

```yaml
functions:
  helloworld:
    handler: hello_handler
    provisionedConcurrency: 50
    ...
```

---

# Footnotes

[^1]:
     Read more about the Lambda [programming model and virtualization strategy](/knowledge-base/aws-lambda/programming-model/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda)

[^2]:
     Some runtimes are slower than others. Usually, Python and nodejs are the fastest ones. Compile languages, such as .NET and Java are the worse performers.

[^3]:
     [The Provisioned Concurrency pricing model](https://aws.amazon.com/lambda/pricing/?nc1=h_ls#Provisioned_Concurrency_Pricing) adds complexity to the Lambda financials

[^4]:
     [Reserved Concurrency](/knowledge-base/aws-lambda/scalability-and-concurrency/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda#reserved-concurrency)

[^5]:
     [AWS Lambda account regional limits](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)

[^6]:
     [AWS Application Auto Scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/what-is-application-auto-scaling.html)

[^7]:
     [Target-based](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) Application Auto-Scaling

[^8]:
     [Step-scaling] Application Auto-Scaling

[^9]:
     [Scheduled-based](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html) Application Auto-Scaling
