
---
title: Cost Tracking For Serverless Architectures
description: Here are the best options to keeping an eye on cost
date: 2019-02-08T00:00:00.000Z
frontImage: "2019-02-08/tirza-van-dijk-72373-unsplash.jpg"
thumbnail: "images/blog/2019-02-08/tirza-van-dijk-72373-unsplash.jpg"
author: Nemanja Novkovic
blog: ["Lambda", "Other"]
---

  

Today we’ll talk more about the cost tracking for serverless architecture. Following the cost of serverless architecture utilization it might give you insights on how and what should you change or adapt to, to be able to reduce the cost. After all, we’re all always trying to improve our performances in every field while keeping the costs to a minimum (if possible). Cost tracking allows you to know everything that’s happening and how much does it cost you, so you’ll be able to change and modify the presets. Learn more about the business benefits of using serverless as well as how much your AWS bill can be reduced by reading the article on this [link](https://hackernoon.com/serverless-survey-77-delivery-speed-4-dev-workdays-mo-saved-26-aws-monthly-bill-d99174f70663).


## A Brief Introduction

 
Serverless architecture became the “next best thing” of computing power, and provides you with some perks you never knew you needed before:

  

- Time-saving that puts you in a position where there’s no need to worry about provisioning, scaling or managing your application. Also, there’s no need to worry about implementation after the deployment, etc.

  

- Cash with benefits or plainly said, “money saver” is another reason you should consider switching to serverless if you already haven’t. Serverless gives you the opportunity to pay-per-trigger meaning there’s no need for you to write scripts on or off, plan for unexpected spikes or plan for reservations at all. The only thing you’ll end up paying for is what you’ve used.

  

## Is There A Way To Track Costs?

  

Since AWS is continuously trying to improve the cost reduction for its customers, there is an automated solution from which you could benefit. Should you decide to utilize this solution, which is a series of AWS products, read the following:

  

1. AWS Budget is an AWS cost management tool that is designed to assist the customers to define and have an overview of the budget for AWS cost while also giving you an insight on how much you will need to pay in the following 3 months.

2. Amazon SNS is an AWS service that offers you an easy way to set up, operate and send notifications from the cloud.

3. AWS Lambda is another AWS service that lets you run your code with no need for provisioning and server management.

 
The Manual Approach is probably something you’d want to avoid since it can take minutes or even hours to set everything. The needed time solely depends on the number of functions. So, let’s go further. Another handy tool for figuring out the possible cost is AWS calculator which will essentially calculate the price if you have all the necessary information to put in it like the execution time, memory allocations, run time, etc. AWS calculator might also not be the best solution for you if you’re not sure about these parameters. If that’s the case, you should consider utilizing the AWS Cost Explorer which will allow you to monitor closely your usage weekly, monthly or even quarterly.

The very first thing you must know: to be able to properly use the AWS Cost Explorer you need to name your Lambda functions which takes only a couple of minutes. You also have the opportunity to slice your monitoring by applying any (or all) of the provided options like Service, Region, Tag name, Usage type, A-Z, etc. AWS console will only show you with the insight into the actual area that causes the problems, but it’ll just show you the cost details. Therefore, you’re only able to see if the Lambda function costs went through the roof when a problem occurs.

Considering that you’ve tagged your functions properly, you’ll be able to check the (weekly) pricing for every function which will allow you to discover the problematic one, therefore, take proper action. Another way of tracking the cost is TotalCloud’s Visual Console which allows you to follow-up the cost of Lambda by the runtime, memory, code size, subnet, execution time, etc.

TotalCloud has the best possible interface with the built-in filters that allow you to group resources by parameters like execution time, memory usage, runtime, and others, but on multiple levels(!) Visual Console has the Cost Analyzer which will analyze how much is spent on top of these grouped resources and all in 3D space. Getting back to its interface is a must since it will allow you to quickly follow up through an easy-to-view context of Lambda utilization and realize everything you need about spending, in real-time, and all in just a few seconds.

Dashbird gives you the opportunity to overview the resource utilization on time for the entire serverless project and point out the problems that should be fixed. Dashbird also will also provide a detailed overview of Lambda functions which will allow you to see how much every single function costs you.

![enter image description here](/images/blog/2019-02-08/lambda-invocation-cost.png)

  
## Summarizing The Thoughts

Although there are ways to have an overview of the cost of serverless architecture, there are also ways to track cost it in real-time. Depending on your personal needs, you should be able to figure out which solution suits you best, and which one you should use. Monitoring the cost is the essential part of using the serverless architecture since that way you’ll be able to predict your future needs, therefore, save the money. The most unpleasant surprise can be the one when you receive your monthly bill with the unexpectedly high figures to pay. If you had such a surprise, share it with our readers in the comments.