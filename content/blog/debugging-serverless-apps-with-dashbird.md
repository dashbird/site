---
title: Debugging serverless applications with Dashbird
description: Over the past year, we've seen Dashbird grow up into a great product service. Here's the latest updates we've made to the service
date: 2019-01-25T12:00:00.000Z
frontImage: "2019-01-25/pedro-garcia-maurino-1324377-unsplash.jpg"
thumbnail: "Untitled-document/blog/pedro-garcia-maurino-1324377-unsplash.jpg"
authorlink: 'https://twitter.com/@theburningmonk'
author: Yan Cui
author_image: '/Untitled-document/team/yancui.png'
category: "Serverless, Other, Lambda"
blog: ["Serverless", "Other", "Lambda"]
---

With AWS Lambda, we get scalability and resilience out-of-the-box. What's more, AWS also provides built-in monitoring, logging and tracing support through CloudWatch and X-Ray. These built-in tools provide a good starting point but many developers eventually outgrow them as their serverless application becomes more complex.

In this post, let's take a serverless application and see how [Dashbird](https://dashbird.io/) can help you debug a serverless application.


## Challenges with serverless observability

When it comes to observability, serverless has introduced some interesting challenges. For so long, we have relied on the use of agents and daemons to collect metrics and logs. They run silently in the background, away from our critical paths where we are concerned with minimizing user-facing latencies. They collect, buffer and publish these observability data in batches to improve efficiency. As a practice, they are so deeply ingrained into how we monitor our applications, until now.

When it comes to serverless, specifically with managed platforms such as AWS Lambda, there's simply nowhere for us to install these agents!

To collect metrics and logs as part of your function's invocation would understandably add overhead to its invocation time. Since AWS is collecting logs from your function asynchronously already, and publishing them to CloudWatch Logs. A common workaround is to subscribe to these logs and perform post-processing on them.

Indeed, that is how Dashbird collects data about your function's execution. It subscribes the CloudWatch Logs log groups to a Kinesis stream and then processes the events from there. You can read about the advantages of this approach in [this article](https://theburningmonk.com/2018/07/centralised-logging-for-aws-lambda-revised-2018/).

![alt_text](/images/blog/2019-01-25/image14.png "image_tooltip")


As our serverless applications become more complex, it's important for us to be able to trace executions across multiple functions. As the demo app demonstrates, even a simple user transaction can span across multiple event sources as well as Lambda functions.


## The demo app

Imagine you're building a Twitter clone. One of the core features of the system is to distribute a user's post to his followers' feeds. To implement this feature, imagine we have two separate API endpoints:



*   POST posts/create : to create a new post for the current user
*   GET followers/{userId} : to fetch a user's followers

Each endpoint is handled by a separate Lambda function - **_create-post_** and **_get-followers_** respectively.

When a user publishes a new post, the **_create-post_** function would save the post in the **_posts_** DynamoDB table and also publish a **_post-created_** event into a Kinesis stream. This event then triggers a **_distribute-post_** function. This function would query the _GET followers/{userId}_ endpoint and then add the post to the followers' feeds. The **_get-followers_** function would query the **_followers_** DynamoDB table to return the IDs of the user's followers.

For brevity sake I have omitted the logic for actually distributing the posts. So the overall architecture for our demo app looks like the following.

![alt_text](/images/blog/2019-01-25/image15.png "image_tooltip")


To make things more interesting, each of the Lambda functions are hardwired to error or timeout based on a configurable probability. The source code for the demo app is [available on Github](https://github.com/theburningmonk/dashbird-demo), so feel free to try it out yourself.


## Introducing Dashbird

Even with a simple serverless application like the one outlined above, we have quite a few functions to look after. Let's see how we can use Dashbird to help us monitor this application and debug issues.

As soon as I log in, I have a high level dashboard for my account.

![alt_text](/images/blog/2019-01-25/image10.png "image_tooltip")


In addition to the data I get in the AWS Lambda console (see below), the Dashbird dashboard has two useful data points:

*   Average memory utilization for the functions
*   Cost for the Lambda invocations


![alt_text](/images/blog/2019-01-25/image12.png "image_tooltip")


Next, in Dashbird's Lambda console, I can see a high level summary of my functions and their activities over the last 24 hours.

![alt_text](/images/blog/2019-01-25/image7.png "image_tooltip")


What I find very useful here is the fact that it highlights functions that have been idle for 10 days as inactive. As your serverless architecture expands and you end up with hundreds of functions, maintained by different teams, it's very difficult to track which functions are no longer needed. Having redundant functions lying around is a security risk as they remain an attack surface that might be exploited. 

While this view alone cannot tell you definitively which functions are no longer used. Many functions are not run on a regular basis. Maybe they are part of a cron job that only runs once a month. Or maybe they are only used during disaster recovery scenarios. Nonetheless, being aware of which functions are inactive encourages teams to ask the question "Is this function still needed?". From here, maybe better practices can emerge. For example, use tags to mark functions that are expected to be used sparingly so they are not flagged by these checks.

![alt_text](/images/blog/2019-01-25/image2.png "image_tooltip")


If I navigate to one of the functions, then I have a function-centric view of invocation time, error, cost and memory utilization. In addition, I can also see a list of the recent invocations. What's really useful here is that cold starts and retries are clearly labelled. When debugging live issues this lets me quickly narrow down the invocations that I need to pay attention to.

Straight away, I can see that 3 of the invocations timed out after 6 seconds. What's more, the original Kinesis event was retried 3 times and finally succeeded on the third retry.

![alt_text](/images/blog/2019-01-25/image5.png "image_tooltip")

![alt_text](/images/blog/2019-01-25/image11.png "image_tooltip")


If I click on the "+" button next to an invocation then I can drill down to the invocation itself. Here I can see the logs and X-Ray trace for this invocation in one screen. This is great as it saves me from having to constantly jump between different AWS console.

![alt_text](/images/blog/2019-01-25/image3.png "image_tooltip")



## Debugging with Dashbird

As mentioned before, the demo app is hardwired to error and timeout. And sure enough, when these failure cases happen, Dashbird's built-in alerting kicks in and I promptly received emails notifying me that something went wrong.

![alt_text](/images/blog/2019-01-25/image8.png "image_tooltip")

![alt_text](/images/blog/2019-01-25/image13.png "image_tooltip")


While this built-in alerting is great, I couldn't see any settings to adjust the alert sensitivity.

As I followed the links in the emails, to the function, then the failed invocation. Dashbird neatly groups the related invocations - the initial timeout, and the subsequent retries - together. I can quickly see that Kinesis event was successfully processed on the 3rd retry.

![alt_text](/images/blog/2019-01-25/image9.png "image_tooltip")

Dashbird also tracks the open issues in the Errors console. Now that I know the problem has resolved itself I can go ahead and resolve the error.

![alt_text](/images/blog/2019-01-25/image6.png "image_tooltip")



## Tailing function logs

Another nice feature of Dashbird is that it's able to tail the logs for multiple functions at the same time. For the demo app, I want to see the logs for both the _create-post_ and _distribute-post_ functions as I curl the _POST posts/create_ endpoint.

That way, I can see that the event was successfully published into the Kinesis stream, and was subsequently received by the _distribute-post_ function.

![alt_text](/images/blog/2019-01-25/image1.png "image_tooltip")



## Conclusion

Overall I was impressed with what Dashbird has to offer, and it's clear that a lot of thought has gone into the product. It has many nice touches that makes debugging much easier. For example, grouping retries together, and integrating X-Ray traces and logs in one screen. These might seem like trivial niceties, but they can make a big difference under the high-pressure scenarios of dealing with a live issue.

From what I have been able to see, I think Dashbird is a really great tool. The main thing missing for me is the ability to trace executions end-to-end. Personally, I'd really like to see the entire execution traced from the API call to create a post, all the way to the **_get-followers_** function performing a Query against the **_followers_** DynamoDB table.

![alt_text](/images/blog/2019-01-25/image4.png "image_tooltip")


If you're solely relying on the built-in AWS tools (CloudWatch, CloudWatch Logs, and X-Ray) then you should give Dashbird a try. Why not sign up for a free trial, and deploy the demo app to your environment so you can see how Dashbird can help you debug your serverless application?

