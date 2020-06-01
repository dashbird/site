---
title: How to Reduce Costs on AWS Lambda
description: 
date: 2020-06-01T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/how-to-reduce-costs-on-aws-lambda.png"
thumbnail: "images/blog/2020-05-vacation-buffer/how-to-reduce-costs-on-aws-lambda.png"
author: "Renato Byrro"
author_image: "/images/team/renato.jpg"
blog: ["Serverless", "Cost-Efficiency", "Well-Architected"]
---


As a Serverless computing service, Lambda already [saves hundreds of thousands of dollars](https://sls.dashbird.io/going-serverless-case-study) for many companies out there. While traditional server-based infrastructures usually lead to overprovisioning and waste, the Serverless pay-per-use model enables cost-effective cloud spending.

Nevertheless, there are still more cost-saving opportunities that many development teams miss on AWS Lambda.


## Prioritizing Lambda optimizations

Optimizing Lambda functions can be time-consuming, though. One essential practice is prioritizing the ones that are contributing the most to the overall AWS bill.

It’s understandable that many will overlook this obvious practice since AWS does not provide much granularity into our cloud spending at first glance. Specialized monitoring services can take care of that. [Dashbird](https://dashbird.io), for instance, one of the most widely used platforms currently, shows our spending on a per-function basis, aggregated by time period.

![Dashbird Metrics Lambda Cost](/images/blog/2020-05-vacation-buffer/dashbird-metrics-lambda-cost.png "Dashbird Metrics Lambda Cost")


## Benchmark optimal Lambda memory settings

AWS doesn’t allow us to customize CPU for Lambda functions, but the more memory we allocate, the more computing power we get… and the faster our functions will execute our code! This can actually reduce the total execution cost.

There are a few caveats to this strategy, though. For example: over 2 GB of RAM, Lambda will allocate a second vCPU to the function. In this case, single-threaded programs won’t see any speed gains from increasing memory. [Take a look at this article](https://dev.to/byrro/how-to-optimize-lambda-memory-and-cpu-4dj1) if you’d like to explore more about how Lambda’s memory and CPU allocation work under the hood.

Below is an illustration of the strategy: when we increased memory from about 1.8 GB to 2 GB, it decreased the total billed duration from 600 to 500 milliseconds. Although the memory cost is higher, the lower duration more than offsets the additional memory cost, rendering an effective 5% cost reduction. And we even have the extra benefit of lower latency.

![lambda memory optimization average duration chart](/images/blog/2020-05-vacation-buffer/lambda-memory-optimization-average-duration-chart.png "lambda memory optimization average duration chart")


We [published a sample benchmarker](https://medium.com/hackernoon/lower-your-aws-lambda-bill-by-increasing-memory-size-yep-e591ae499692) on [this Github repository](https://github.com/byrro/awslambda-memory-tradeoff), which you can plug to any of your Lambda functions in order to emulate requests and find the memory sweet spot.


## Using Lambda internal memory as a local cache

The Lambda internal memory can be used as a cheap and fast caching mechanism. As it’s widely known, anything loaded outside the handler function remains in memory for the next invocations.

We can keep a copy of information retrieved from a database, for example, so that in future requests the data can be pulled from the Lambda internal memory. [This article](https://dashbird.io/blog/leveraging-lambda-cache-for-serverless-cost-efficiency/) we published recently illustrates this with a couple of basic examples and covers a few points to pay attention to when implementing this strategy.


## Constant monitoring is essential

Software projects are changing constantly, which makes cost optimization a moving target. For that reason, it’s important to have proper monitoring and alerting when our financial policies are not met so that we can act upon these incidents and fix them before they become a financial nightmare.

AWS offers spending alerts and expenditure information, but not on the granular level of a Lambda function, for example.

With services like [Dashbird](https://dashbird.io), you can set custom policies for one or more functions with very granular details. In the example below, it will send an email and slack message whenever the selected functions cost more than $10 over the past hour.

![lambda alert cost](/images/blog/2020-05-vacation-buffer/lambda-alert-cost.png "lambda alert cost")


## Wrapping up

As we can see, there are many areas that may offer you cost savings opportunities on AWS Lambda functions. For very low-cost systems, averaging around dozens or even hundreds of dollars per month, it might not be worth the time spent in optimizing them. But once the application traffic increases, the opportunities can really stand out.

If you are looking for a tool to assist you in finding and implementing these cost-efficiencies, [Dashbird](https://dashbird.io/#register) is certainly something you should try. It offers a [free plan](https://dashbird.io/pricing) and doesn’t even require a credit card to test out.
