---
title: "How to Track Performance and Errors of a Serverless Project"
description: List of benefits and a quick walkthrough for setting up a monitoring dashboard for your Serverless project.
date: 2017-12-18
frontImage: "18-12-2017/thumb.png"
thumbnail: "/images/blog/18-12-2017/thumb.png"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
blog: ["Product", "Serverless", "Monitoring"]
---

Since the launch of Dashbird 6 months ago, we've offered overview dashboards on account and function level. **Now, we launched project views.** 

Grouping projects into a single dashboard gives you an overview of your Serverless service in one screen (or any other grouping of functions, like production, staging etc.).
For ourselves and beta testers, this feature has proven valuable in detecting errors and optimising services towards cost or speed.

![Overview](/images/blog/18-12-2017/thumb.png)

The service dashboard lets you keep an eye on your service performance metrics.

### Breakdown of data in the project views
**Time-series graphs of:**

  * Invocations
  * Errors
  * Durations
  * Memory utilisation

**Service level statistics:**

  * Invocation count
  * Error count
  * Health score
  * Cost

 **Function statistics:**


  * Cost 
  * Average memory utilisation
  * Total invocation count
  * Total error count

### Detecting optimization opportunities


Functions table allows you to pinpoint expensive lambdas.

<img src="/images/blog/18-12-2017/functions.png" width=800 />

You can also optimise function memory usage by noticing the outliers in the graph. For instance, if a function is using around 10-20% of memory, it's a pretty good candidate for optimization, which in large scales can help save money.

<img src="/images/blog/18-12-2017/memory.png" width=600/>

Now let's go and set up your first project...
### Setting up

<img src="/images/blog/18-12-2017/walkthrough3.png" width=400 style='float: right; margin-left: 32px; '/>
_If you haven't already, sign up for [Dashbird to monitor your Lambda functions](/register)._

From the main dashboard, go to _Projects -> Create a new project view_

Add a short title and description for your service.
To select the Lambda functions, you need to specify a glob pattern filter. Let's say your service name is <code>alpha</code> and you want to monitor all production lambdas. Then you would insert the following filter: <code>alpha-prod-*</code>


Click _Create project view_ and you're done.

Congratulations, you've just gotten visibility into your Serverless project.
