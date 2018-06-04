---
title: How To Measure And Improve Your Serverless Application's Health
description: Technology and their implementation methodology evolves with time very rapidly. Cost efficiency and productivity are the key drivers of technological evolution these days.
date: 2018-06-04
frontImage: "2018-06-04/manage-health.jpeg"
thumbnail: "images/blog/2018-06-04/manage-health.jpeg"
author: Mahendra Batra
---

![How To Measure And Improve Your Serverless Application's Health With Dashbird](/images/blog/2018-06-04/manage-health.jpeg)

Technology and its implementation methodology evolves with time very rapidly. Cost efficiency and productivity are the key drivers of technological evolution these days. With the advent of _The Cloud_, infrastructure costs have been brought down significantly. Serverless technology adds icing to the cake! Serverless, or in other words "pay-as-you-go" computing, enables users to **not pay for infrastructure** while apps are sitting idle.

AWS Lambda and serverless computing have become synonymous to each other. But, that's not exactly true. AWS Lambda is a compute service on the AWS cloud provider. While serverless stands for any and every service you can use to serve your app without managing your own servers. These services are numerous on AWS, like Kinesis, S3, API Gateway and of course Lambda. The same applies to other cloud providers such as Azure and Google Cloud!

Getting back to the gist of it. If you choose to use AWS Lambda to create functions or any serverless architecture based service, you will have to deal with some "trade-offs". 

To name few, you lose some flexibility. Mainly because you cannot connect to the instance, like you would with let's say EC2. But the main issue is the difficulty to monitor issues, diagnose where they are happening and debug them. Considering these limitations, this article will cover how the health of your AWS Lambda functions can be measured and improved.

Before moving on let's just mention some positive trade-offs. The main upside is that you do not have to manage any servers. You just deploy the code, and the Cloud provider does the rest. You don't have to scale anything, because it will auto-scale to keep up with spikes in usage. Meaning, you can sleep at night and not worry about downtime. I like sleep. Very much.

### How to measure the health of your AWS Lambda functions

Here are few metrics which should be considered while measuring how good your lambda functions are functioning. It is important to note that, these measures vary from function to function depending on their type. For example, for a real-time request (user facing), functions need to quickly respond while for a calculation intensive non-user facing request will have different priorities.

* How many times functions are invoked in a given period of time?

* What is the average time taken by these function calls? And what is the breakdown between lambda service and function code?

* What is the memory usage of these functions? 

* Which are most invoked functions? And which functions caused most errors?

* How many functions were throttled?

* How frequently is my function having cold start?

[Dashbird helps aggregating and analyzing](/features/aws-lambda-serverless-monitoring/) the metrics above to diagnose issues which surface in a serverless environment. [Dashbird parses CloudWatch logs](/docs/learn/how-it-works/) and presents an overview which enables users to analyze lambda functions effectively, including their health, errors, invocations among many other key factors. 

Here is an image of the [main dashboard on Dashbird](/docs/learn/what-is-dashbird/). It's very handy tool which lets you analyse the health of your lambda functions. As you can see, parameters like number of invocations, duration, memory usage are among the few parameters which are displayed straight up.

![Dashbird main dashboard](/images/blog/2018-06-04/image_0.png)


### How to improve Serverless application health
Here are some ways which helps in improving AWS lambda application health.

## 1. Fixing / Improving bad lambdas
Dashbird lets you analyse individual lambdas as shown in following screenshot. 

![Dashbird Lambda Health](/images/blog/2018-06-04/image_1.png)

You can narrow down your analysis by clicking on a specific lambda above. Say you click on the lambda named as "timeout" in the view above, it will show the detailed view of the timeout lambda as shown below.

![Dashbird Function View](/images/blog/2018-06-04/image_2.png)

Now, if you wish to further analyse the logs or other factors of specific invocation, you can do so by clicking the _Request_  which shows this.

![image alt text](/images/blog/2018-06-04/image_3.png)

## 2. Allocating more memory to resource-hungry functions
Dashbird also provides memory usage for each lambda. The memory usage in the below screenshot helps you identify if we need to allocate more memory for improving health.

![image alt text](/images/blog/2018-06-04/image_4.png)

## 3. Unused libraries/frameworks
The size of the deployed archive can impact the performance of your lambda function. Removing any unused libraries or frameworks will speed up the warm up and invocation time. If none of the libraries can be removed, one can look for alternative lightweight efficient libraries that can replace the ones which are currently used. 

## 4. Avoid Cold starts, keep lambdas warm
AWS Lambda is billed per invocation. It makes no sense for AWS to keep our functions warm all the time. But these cold starts can be frustrating for user experience. The best way to keep them warm is to schedule their invocation. Though, it adds to the overall cost but it is worth considering, because of the significant performance boost it gives. Here is how you can schedule your lambda function invocation.

1. Go to AWS console

2. Click on CloudWatch

3. Click on Events and Create Rule

4. Enter necessary details in Event Source and Targets as shown in screenshot below

![image alt text](/images/blog/2018-06-04/image_5.png)

## 5. X-Ray SDK
With AWS X-Ray, developers can analyze and debug performance issues and troubleshoot them. You can use AWS X-Ray SDKs to create your own trace segments, annotate your traces, and view trace segments for downstream calls made from your Lambda functions. Luckily, Dashbird now has X-Ray integration making it incredibly easy to trace the logs!

![Dashbird X-Ray tracing](/images/blog/02-05-2018/trace-3-dashbirdapp.png)

### Finally, a few takeaways

Serverless comes with limitations of less control on your application infrastructure, however, with analysis in right direction powered by right metrics and utilising tool provided by Dashbird, one can come over these limitations. 

Hope you liked reading this short overview of monitoring the health of your lambda functions. Feel free to let us know in the comments below if you have any questions or remarks!

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_

_Sign up to our newsletter to get all the latest news and tutorials on serverless._
