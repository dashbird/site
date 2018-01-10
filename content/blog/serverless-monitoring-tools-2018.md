---
title: Serverless Monitoring Tools 2018
description: 'Tutorial: getting your Lambda functions in line to behave their best in production environments.'
date: 2018-01-09
frontImage: 11-01-2018/dashbird-project.png
thumbnail: images/blog/11-01-2018/dashbird-project.png
author: Simon Orgulan
---

Monitoring for AWS Lambda allows you to get an insight into all tiers of your stack. With its help, not only will you be able to see exactly what goes on during each step of the script, but also determine what went wrong by looking at the detailed logs and being able to optimize the process by measuring resource consumption.

Simply put, when resource management matters, there’s no better way to optimize for it than using an AWS Lambda monitoring tool.

Today, we’re going to look at 4 tools to monitor AWS Lambda and weigh their pros and cons, so you will have an easier time deciding which one would best suit your needs.

<h3><a href='https://dashbird.io' target='_blank'>Dashbird</a></h3>

![Dashbird Serverless project view](/images/blog/11-01-2018/dashbird-project.png)

Taavi Rehemägi and Mikk Kirstein, its co-founders, have designed it to be an accurate reporting tool without compromising on performance. Instead of injecting new code that runs between functions, Dashbird reads CloudWatch logs and presents the data gathered in an organized, structured way through graphs and lists. The data it gathers can also be used to calculate a resource cost estimate.

This tool also has great debugging features, through which you’ll be able to pinpoint exactly what went wrong on serverless workflows and when.

You can also search the logs to find the exact details. The logs and invocations are separated, so it’s of great use for the purposes of debugging during the stage of development.

When it comes to setting it up, unlike many of its competitors, Dashbird does not require you to insert a new piece of code into your existing projects to get it working, so you can get it up and running in no time.

![Dashbird error view](/images/blog/11-01-2018/dashbird-error.png)

Pro-active alerts is another one of its features. Simply put, you can set up email alerting, so whenever your functions get close to reaching memory limitations, you will receive a notification. Dashbird also allows for a seamless integration with Slack.

**Pros:**

  - No extra code needs to be added for it to work with AWS
  - Does not introduce performance delays

**Cons:**

  - About 1 minute of delay


<h3><a href='https://iopipe.com' target='_blank'>IOPipe</a></h3>

![IOPipe](/images/blog/11-01-2018/iopipe.png)

Erica Windisch and Adam Johnson, it’s co-founders, have aimed for simplicity and designed this AWS monitoring tool to be easier to install than many of its competing products. It’s quite comprehensive and allows you to easily drill down into each specific invocation to see what’s going on beneath the surface.

Iopipe gathers data directly from your code through applying a wrapper and monitoring what’s going on inside of it. It even allows for customized reports by defining exactly which metrics you want to monitor, then you can customize the type and number of alerts you want to receive by setting your own conditions.

Although this is a great monitoring tool for AWS Lambda which also has Python and Node.js libraries, it does come with its own set of drawbacks. For starters, every function you want to monitor demands its own separate wrapper. Fortunately, IOPipe has developed a useful <a href='https://github.com/iopipe/serverless-plugin-iopipe' target='_blank'>Serverless plugin</a> to speed the process up.

**Pros:**

  - Simple integration
  - Customized alerts
  - Custom metrics
  - Tracing

**Cons:**

  - Demands a wrapper for each function
  - Slight performance delays (85ms on cold and 35ms on warm functions)


<h3><a href='https://www.datadoghq.com/monitor-aws-lambda/' target='_blank'>DataDog</a></h3>

![DataDog](/images/blog/11-01-2018/datadog.png)

DataDog, at its core, is an infrastructure and network monitoring tool. Just like its competitors, it allows for custom alerts, which you can easily integrate with popular teaming services such as Slack, PagerDuty, and Campfire. It’s quite flexible and allows you to set custom triggers and conditions.

In order to get it working, you’re going to need to set up IAM permissions. Its dashboard is everything you expect it to be, although the setup process can be a little bit painful. Also, it’s quite noticeable that DataDog was primarily developed to be a real-time monitoring tool.

The great thing about it is that due to how log processing is structured (the logs are sent to CloudWatch in the background), no delays will be introduced to the workflow.

**Pros:**

  - Does not introduce a delay
  - Custom alerts and alerting conditions

**Cons:**

  - Complicated setup
  - Lack of details
  - Can increase AWS bill by using CloudWatch:getMetricStatistics endpoint

<h3><a href='https://aws.amazon.com/cloudwatch/' target='_blank'>AWS CloudWatch</a></h3>

![AWS CloudWatch](/images/blog/11-01-2018/cloudwatch.png)

Amazon’s CloudWatch is an AWS monitoring tool many solutions are using in one way or another, however, on its own, it does introduce around a minute of delay, so performance is not one of its stronger points.
Serverless monitoring is done through the command line, or – alternatively – the visualization features that CloudWatch offers. You can examine a specific metric in more detail by searching for details like resources, metric names, regions, etc.

You can also set custom alert triggers. These are quite advanced in terms of customization, and you can set to receive an alert when, for example, one of your functions has consistently been occupying an above-expected amount of RAM for a longer period of time.

Depending on the features you want, there are different pricing tiers. The basic services all fall into the free tier, while detailed EC2 monitoring, to name an example, will require you to be a paid subscriber.

**Pros:**

  - Custom alert triggers
  - Available out of the box

**Cons:**

  - Difficult to navigate

### Conclusion

So there you have it! My choice of the best monitoring tools for AWS Lambda in 2018. As you can imagine, the Serverless tooling sector is expanding every day so check back soon and maybe there will be some additions to this list. Hope you enjoyed this article.
