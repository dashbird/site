---
title: Product News - Tracing made easy with X-Ray
description: We are committed to provide the best serverless monitoring and debugging experience out there. Here's what we have been working on lately.
date: 2018-05-01
frontImage: "02-05-2018/x-ray-update.jpg"
thumbnail: "images/blog/02-05-2018/x-ray-update.jpg"
authorlink: 'https://twitter.com/kolmas'
author: 'Mikk Kirštein'
---

![Dashbird Product Update - X-Ray](/images/blog/02-05-2018/x-ray-update.jpg)

<i class="quote pull-left"><a href="https://aws.amazon.com/xray/">AWS X-Ray</a> helps developers analyze and debug production, distributed applications such as those built using a microservices architecture. <br> <span class="pull-right">- <a href="https://aws.amazon.com/xray/">AWS X-Ray</a> documentation<span></i>

## What does it really mean?

X-ray is a new service AWS offers which can collects traces from apps. But not just any apps. X-Ray covers the most sensitive types of infrastructure, your Serverless and distributed resources.

What does tracing actually mean? It gives you the ability to have insight into the whole process of execution your application goes through. By using traces it's possible to quickly, without any additional effort, see what's happening to your software.


## Get started
In terms of AWS Lambda, X-Ray will be added automatically if you check the **enable monitoring** button in the Lambdas settings view. Enabling X-Ray for a Lambda Function essentially means that all invocations of that particular function contains information about the active trace (unless sampling is available). For all the Lambda invocations the **active trace** will be added to the Lambda environment and automatically picked up by X-Ray.

Once you've enabled monitoring you will see a high level overview of your function invocations. Here's is what it looks like on AWS.

![](/images/blog/02-05-2018/trace-1.png)

Check this out now! As you can see here, X-Ray allows you to see the timing of Lambda containers as well! How cool is that!? 

_Note: The **dwell time** measure is the **time spent waiting for the invocation**._

We at Dashbird gone a step further, and removed all the nonsense from AWS, only showing you the essential info you need. We are dedicated to making everything much easier to understand.

![](/images/blog/02-05-2018/trace-2-dashbirdapp.png)

## Unleash the real power of X-Ray

X-Ray shows its real power when you tie it to different AWS services or send them custom segments. Here's an example, if you tie X-Ray to DynamoDB you can see how much time it takes to get a response from DynamoDB, including all requests, all errors, with metadata included! The added bonus for debugging is incredible. Now you see why we're excited.

Check out this is function. 

![](/images/blog/02-05-2018/trace-3-dashbirdapp.png)


The function does the following things:

- Pushes a random string to DynamoDB
- Fetches that same random string from DynamoDB
- Triggers a Lambda invoke on another Lambda
- Triggers an SNS trigger to invoke a Lambda

As you can see we can track everything aside from the SNS trigger. Once again let's see the two images side by side to compare the overview. To the left is the default AWS Console, while the right image is Dashbird.

<div class="row">
  <div class="col-xs-12 col-sm-6">
    <img src="/images/blog/02-05-2018/trace-4-aws-console.png">
  </div>
  <div class="col-xs-12 col-sm-6">
    <img src="/images/blog/02-05-2018/trace-5-dashbirdapp.png">
  </div>
</div>

<br>
From simple example from above you can see we try to clean up the traces and make the most important info clearly visible. This is our result.

Another really cool fact about this is that you can see all the resources touched by that Lambda Function when looking at the X-Ray logs.

Regarding the example from above we can actually see that it's also touching the `alpha-dev-push-receiver` function.
It allows you to navigate to sub requests made from that Lambda, giving you an incredibly easy and cool way to see what's going on within the actual function invocation.

## Conclusion
With the addition of X-Ray, the family of monitoring services on AWS has reached an amazing growth. The tracing capabilities which make debugging so much easier are a welcome sight to Serverless Architectures. We have done our best to give you the ability to use X-Ray for tracing your Lambda Functions with Dashbird. Hope you liked reading this short product update. Feel free to let me know in the comments below if you have any questions or remarks!

---

_We aim to improve Dashbird every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_