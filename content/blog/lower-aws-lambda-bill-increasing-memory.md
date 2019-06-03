---
title: Lower Your AWS Lambda Bill by Increasing Memory Size— yep!
description: By increasing memory, your function runs faster and may save you money!
date: 2019-03-26T12:00:00.000Z
frontImage: "2019-03-26/joshua-sortino-215039-unsplash.jpg"
thumbnail: "images/blog/2019-03-26/joshua-sortino-215039-unsplash.jpg"
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
featpop: most-popular
blog: ["AWS", "Serverless", "Monitoring", "Performance", "Optimization"]
---

When we specify the memory size for a Lambda function, AWS will allocate CPU proportionally. For example, a 256 MB function will receive twice the processing power of a 128 MB function. That looks simple and straightforward, but…

> I had this question: would there be an ideal memory size that minimizes the cost of running a given task on Lambda?

In order to answer that, I tested the same task running on multiple memory sizes to check whether such cost/memory trade-off sweet spot exists.

# Benchmark Lambdas

I created two Lambda functions to run this test:

* Fibonacci: basic code that generates a sequence of… you guessed it, Fibonacci numbers! It's just a low-memory, CPU-intensive task.
* Benchmarker: invokes the Fibonacci function (or any other function) multiple times, switching memory sizes; in the end, it averages out the results to determine which memory size optimizes speed and cost.

The [code is open sourced](https://github.com/byrro/awslambda-memory-tradeoff), in case you'd like to test your own Lambdas. The results presented below will certainly vary according to the function you test, so I encourage you to download the Benchmarker Lambda and run it for yourself.

![Dashboard](/images/blog/2019-03-26/0_SewxONiODMnoFQFe.png)
<p class="caption">Photo by <a href="https://unsplash.com/photos/qwtCeJ5cLYs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Stephen Dawson</a> on <a href="https://unsplash.com/search/photos/data-center?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>

# Test Parameters

* AWS region: us-east-1 (N. Virginia)
* Memory sizes tested: 128, 256, 512, 768, 1024, 1280, 1536, 1792, 2048, 2304, 2560, 2752, 3008
* Fibonacci was invoked 20 times for each memory size
* Invocations ran in batches of 10 concurrent requests to speed up the process
* On each invocation, the Fibonacci function built a sequence of the first 30 Fibonacci numbers
* Cold starts were ignored to standardize duration results

#Test Results

![Chart: average cost per million executions](/images/blog/2019-03-26/0_ylagxmv_3AxdGU2h.png)

<p class="caption">Average cost (USD) per million executions of the Fibonacci sequence builder (n=30)</p>

# The sweetest spots in terms of cost were:

* **768 MB**: that's the cheapest we can get for this task on Lambda; why 128 MB isn't cheaper? It takes longer to process, long enough to make it more expensive in total!
* **2048 MB**: although the price is \~3% higher than 768 MB, it runs 2.5x faster; in some cases, it might be worth spending the extra pennies to speed up the processing.

It's counter-intuitive that a task running with 768 MB can cost less in comparison to 128 MB, for example. It means we can actually lower our AWS bill by increasing memory size in some cases. Of course, we need to know what is the minimum memory our function requires when considering changing our settings. We created ]Dashbird](https://dashbird.io/features/aws-lambda-serverless-monitoring/) to make it easier to profile Lambda memory usage and identify thresholds for this kind of benchmarking analysis.

The sharp rise in the line slope (chart above) for higher memory sizes caught my attention. From that point on, it has been reported — although not officially — that Lambda provides two cores. My hypothesis is that the processing power is split among cores and, since my job was using only one core, the test was actually punishing the dual-core function setting. That's something to look more closely in a future test, with a task that can take advantage of multiple cores.

![Average Duration - milliseconds](/images/blog/2019-03-26/0_bI3gNQM65BbpZLw_.png)

<p class="caption">Average duration (milliseconds) for running the Fibonacci sequence builder (n=30)</p>

In terms of duration, the chart above seems to have no surprises, but I actually found something consistently weird in the results: **2048 MB** always performs faster than **2304** and **2560 MB**, which is unexpected. Zooming in to the highest memory sizes we can notice the difference.

![Average Duration - milliseconds](/images/blog/2019-03-26/0_vM7wTMtAli7bi4qj.png)

<p class="caption">Average duration (milliseconds) for running the Fibonacci sequence builder (n=30)</p>

It might be negligible since it represents roughly 2% in extra execution time. Nonetheless, if we're running this function millions of times or if latency is super important, those extra milliseconds can be relevant.

Understanding exactly which factors are playing a role in producing these unexpected results is hard. Lambda infrastructure is sort of a black box. Maybe there are differences in hardware serving each request, which would introduce some undesirable variability in our tests. Bottom line is: if you want to optimize your Lambda usage for either the fastest execution or lowest cost, you should definitely benchmark your functions.

We've released the [benchmarking function](https://github.com/byrro/awslambda-memory-tradeoff) so that you can deploy and test your own Lambda functions for yourself.

To reap the benefits of a performance monitoring tool tailored for AWS Lambda, [sign up today for Dashbird](https://dashbird.io/#register), it's free and doesn't require credit card.
