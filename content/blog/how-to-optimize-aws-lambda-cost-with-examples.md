---
title: How to Optimize AWS Lambda Costs (With Examples)
description: Here's how you can track and optimize you're AWS Lambda costs
date: 2018-02-14
frontImage: "14-02-2018/optimize-lambda-cost.jpg"
thumbnail: "images/blog/14-02-2018/optimize-lambda-cost.jpg"
author: Andrei Popescu
category: "Serverless, Lambda, Other"
---

I’m in my late 30s and still have memories of the days when there was a clear difference between developers and system admins. As a developer, each time I needed a simple software environment set up on the development server, I had to call the IT admin and wait for him until he installed… a different version of one of the software packages I asked for! It took anywhere from two days to a whole week just to have a simple application server installed.

But things changed quickly. First, we had virtualization, then containers and now there’s serverless computing. You don’t have to worry anymore about the software environment, operating system, or hardware. As a developer, your only focus is the application and the time to market.

AWS Lambda uses a pay-per-use billing model, where you are billed only for the time your functions are running. The more your function runs, the more you pay. This model changes forever the relationship between application code and infrastructure costs. The hardware is automatically provisioned when needed and billed accordingly. There is no need to overprovision servers to cope with peak load. 

As a result, traditional tools designed to monitor resource usage are of no practical use. Instead, it is necessary to track application level metrics like response time, memory utilization and batch size to control infrastructure costs. To put it in a few words, **the infrastructure costs and application performance are strongly linked.**

It might look straightforward but, there’s a big risk hidden here. Because AWS Lambda is very cheap to get started with, it lures developers to forget about the infrastructure costs during the development phase. At the end of the month, you will end up getting an unpleasant surprise in the form of a significant bill.

### How AWS Lambda Pricing Works

For each Lambda function, you can set the maximum memory size and maximum function execution time. For the moment, keep in mind that the maximum memory size has an impact on the processing power (CPU) allocated. The more memory you provision, the more CPU your function gets.

Lambda functions run only when triggered and Amazon uses several indicators to calculate the cost of running your Lambda function: 

  - **number of executions**
  - **duration**, rounded up to the nearest 100ms
  - **memory size** - the value set in the function configuration.

For each invocation, the duration and memory size are multiplied to produce a unit called **GB-sec**. Although it might seem simple, practice has shown that GB-sec is not a very intuitive concept. To help you get an idea of the costs of your function, try this <a href='/lambda-cost-calculator' target='_blank'>AWS Lambda cost calculator</a>.

To whet your appetite, Amazon provides a monthly free tier of 400,000 GB-sec but you will soon learn that if you don’t optimize your costs early in the development process, your AWS Lambda will cost you lots of money.

### Monitoring AWS Lambda functions
In order to start optimizing your AWS Lambda costs, you have to set up a monitoring system in the first place. Amazon automatically sends logs to CloudWatch where you can view the basic metrics. But CloudWatch is not good at providing key details on the execution of your functions. Here <a href='/' target='_blank'>Dashbird</a> comes to help by providing time series metrics for invocation counts, durations, memory usage and costs.

### Strategies for optimizing AWS Lambda Costs

One of the most overlooked aspects is that AWS Lambda **cold starts** happens **for each concurrent execution**. Therefore, as a first step in optimizing your costs, make sure that the functions are executed with the best frequency to avoid cold starts as much as possible. An approach that works most of the times is to group them in bigger batches. Also, since your bill depends on execution time, do your best to optimize the code and shorten the running time. For example, if your function uses a heavyweight library, see if it can be replaced with a lighter alternative.


Another simple strategy to save money is to simply adjust the memory allocated to your functions. Let me show you a quick example. Suppose you configured 512 MB for a specific function which is called 100 times per second and each time it runs for 400ms. As the <a href='/lambda-cost-calculator' target='_blank'>calculator</a> shows, Amazon will charge about 909 USD/month for it. Fire up Dashbird and check the amount of memory your function is really using. And here comes the nice part! Dashbird shows that your function only uses 25 MB! Now that we know this, let’s use it to our own advantage and **incrementally reduce the amount of provisioned memory while keeping an eye on your execution time**. Suppose we managed to reduce provisioned memory to 128 MB and the execution time is not changed. This means that your monthly bill will only show 261 USD. **You just saved 648 USD/month or 7776 USD/year** instead of spending it on an over-provisioned AWS Lambda function. However, as we mentioned earlier, since CPU available to your function is correlated with the amount of provisioned memory, I advise you to **thoughtfully test your functions with different memory sizes to find the best configuration.**


Now that we optimized the memory size, we should have a closer look at the running time of your functions. We know that AWS Lambda is billed using 100ms increments. Even if 100ms can seem granular enough there is still space to further optimize your costs.


Let’s see another example. Suppose you have a function that takes 20ms to run and you provided it with 1GB of memory. If this function is called 100 times per second you will end up with a cost of 477 USD/month. But remember that the smallest quanta of time that Amazon uses for calculating your costs is 100 ms. It will not make any difference is the function will run for 20 ms, 40 ms or even 90 ms. Why not try to allocate less memory to see what happens? Change the settings, fire up Dashbird and run some tests. Repeat until you find the smallest amount of provisioned memory that keeps the running time under 100ms. Suppose that for 384 MB of provisioned memory, your runtime increased to 80ms. Since the billed duration is the same, your cost is decreased to 207 USD/month. **It’s a saving or 270 USD/month or 3240 USD/year.**

### Conclusion

As many others have said before, serverless does not mean "no servers". It’s just that you, as a developer, don’t have to think about servers. The servers are still here but their role is changed, providing a generic application environment for a multitude of applications.

As a result, when working on optimizing computing costs, the focus has shifted to application related metrics where you can use Dashbird to collect and analyze valuable performance data. With AWS Lambda, minor incremental changes in patterns or function configuration can make a big impact on your monthly bill. If you’re small startup where each dollar counts, I am sure that you don’t want to spend money on a sub-optimal function. To get things going, Dashbird has also decided to <a href='/pricing' target='_blank'>help new startups with a special discount.</a>
