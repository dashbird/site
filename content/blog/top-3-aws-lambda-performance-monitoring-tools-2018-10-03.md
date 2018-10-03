---
title: Top 3 AWS Lambda Performance Monitoring Tools
description: Performance monitoring that hurts neither the performance nor your wallet.
date: 2018-10-03
frontImage: "2018-07-20/lambda-performance-monitoring.jpeg"
thumbnail: "images/blog/2018-07-20/lambda-performance-monitoring.jpeg"
author: Ranvir Singh
blog: ["Serverless", "Lambda", "Monitoring"]
featloc: blog-header
---

Serverless is often described as the abstraction to end all abstractions. VMs and standalone containers pale in comparison stateless functions. That pristine distinction between the application's code and its stateful data is something we all dream of. Scalability, observability and high availability can now be realized on a global scale. That said, just running your app on serverless doesn’t make it bullet-proof, neither should we believe that a Lambda function can make inefficient code run faster for us. Throwing resources at the problem doesn't solve it efficiently anymore.

Only by gathering relevant metrics and analyzing it with rigorous logic can we eliminate bugs and improve performance. The problem is that there are very few performance monitoring solutions that understand serverless. Certain issues, like [Cold Starts](https://dashbird.io/blog/how-to-deal-with-cold-starts/), are unique to the Serverless and you need to ensure that your monitoring solution is aware of them.

On that note here are the top 3 AWS Lambda performance monitoring tools:

## 1. [Dashbird.io](https://dashbird.io/)
Dashbird.io offers one dashboard to rule them all! Quite literally. All your Lambda functions can be monitored and analyzed from a single place. More fine-grained options are also available where individual functions can be observed. Taking it a step further, Dashbird offers live tailing which gives you near real-time stats on your Lambda invocations. It taps into the AWS CloudWatch Logs directly so you don’t incur any performance penalty or surge in AWS bills by using Dashbird.

Information about cold starts, memory utilization and time of execution are laid out explicitly along with the expected AWS bill. If you want to segregate various Lambda functions, you can categorize your Lambdas into different projects as well. It goes further than that and happily monitor AWS API Gateways and supports AWS X-Ray. Monitoring with Dashbird can be as in-depth as you can possibly desire. On the otherhand, if you need an easy to understand overview with no frills attached Dashbird can do that too.

Getting started with Dashbird is quite easy. They provide you with a CloudFormation stack which can be deployed by the click of a single button. I worked with Dashbird a few months ago, in early 2018, when it required a quick, although manual setup. Fast forward a few months, I see a single button to deploy the entire Dashbird integration stack on my AWS account. Folks at Dashbird will automate things to the nth degree so you don't have to waste any of your valuable time.

The main strength of Dashbird are the people working behind it. They are not merely creating a tool because there’s a market for it. No, they believe in the serverless architecture. They understand that applications ranging from personal projects to enterprise grade workloads run on AWS. Monitoring at that scale is not a nicety, it’s a necessity. There’s really nothing more comforting than knowing that an organization has got your back. It is comforting to know that Dashbird is active in development with new and useful features continuously being added to it.

You can add your team members and share Dashbird’s insight with them. Integrate Dashbird with Slack to get instant alerts. The free tier allows upto 1GB of data and 7 days of data retention. 1GB can get you a long way as your app grows and captures the market. The paid plans start from $299/mo. You can find out more about professional and enterprise plans (here)[https://dashbird.io/pricing/].

## 2. [AWS CloudWatch Dashboard](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions.html)
The de facto performance monitoring system for everything AWS is AWS CloudWatch. If you are skeptical about the merits of performance monitoring, this is a good place to start. CloudWatch Logs is where most of your performance and monitoring data comes from. While creating a new function, you are often asked by AWS to grant permissions in the Lambda's role to write to CloudWatch Logs. CloudWatch Dashboard then uses this information to plot nifty graphs showing the performance of your Lambda functions.

You start by selecting what Functions you need to monitor followed by what aspect of those functions -- Invocations, Duration, Error, or Throttle -- do you want to observe. You can also monitor the resource utilization across all your Functions. Mix and match these various parameters to generate as many plots and graphs you desire and AWS CloudWatch will comply.

However, the CloudWatch Logs themselves contain a lot more information than what can be glimpsed via CloudWatch Dashboard alone. The most important example of this is details about Cold Start -- when your Lambda runs for the first time in a long time. When a Cold Start happens, your Function's duration skyrockets resulting in poor user experience as well as greater utilization of resources. When this happens CloudWatch will show an uptick in the duration of function's execution. The cause behind this uptick would however stay mysterious.

> CloudWatch Dashboard overlooks some of the minutiae behind the working of AWS Lambda.

It tries to be a general purpose monitoring system for a multitude of AWS services like EC2, API Gateway, etc. Real-time monitoring feature, like Live Tailing from Dashbird, is noticeably absent. Moreover, AWS X-Ray is not integrated with CloudWatch Dashboard, further fragmenting your attention.

CloudWatch Dashboard is a good out-of-the-box solution that will get you started on the path of performance monitoring. It will also make you appreciate the necessity of fine-grained monitoring solution like that of Dashbird, which you will soon start wishing that you had.

## 3. [Grafana](https://grafana.com/dashboards/593)
Grafana is famous for its flexibility. No matter what you want to measure, Grafana’s flexible API can integrate with it in one way or another. AWS is no exception. Grafana offers literally hundreds of templates that will integrate with everything from beefy EC2 instances to small and numerous AWS Lambda containers.

It is true that you can get it to dance in the exact way you want, but only if you are willing to spend hours and hours understanding and configuring your personalized Grafana Dashboard. To make matters worse people often don’t know what they need to monitor. Services like Dashbird and AWS are war veterans when it comes to running serverless apps. They know about Cold Starts, they know about AWS X-Ray, and they know what to monitor. Grafana has no inherent conception of AWS Lambda or FaaS. It is meant to monitor anything from bare metal servers, to VMs and everything in between. The burden of ensuring that nothing is missed, is on your shoulders. There are numerous dashboards templates for AWS Lambda specifically. You can use them to monitor your application. However, the experience is far from smooth. As we all know, quantity often comes at the expense of quality. Grafana is no exception to this rule.

You must be willing to carve out a significant portion of your time and attention. Understand the basics of Grafana, set up IAM roles and learn how to process and visualize your Function's logs. All the while ensuring that everything stays safe and secure.

Pricing is yet another concern. The free tier offers upto 5 dashboards. This may force your hand into cramming more and more parameters on a single dashboard. Most microservice based applications, even the nascent startups, will outgrow this limit in no time. As your app grows in complexity, additional dashboards will soon be needed. This makes the free tier a bit limiting. Dashbird allows as many views as you desire and is limited only by the volume of metrics. Grafana caps its users off by mere views and dashboards. A constraint which seems artificial and put in place to just capture unwitting wanderers.

Being open source, you can self-host Grafana and not be limited anymore. Many would encourage you to do just that. However, doing so will add a point of failure that you now need to worry about... "What if the monitoring system fails?" Grafana has its heart in the right place, and, for most use cases, it is good enough. However, if you are running a serverless application you probably don’t want to monitor it using a traditional server.

## Final Verdict
While CloudWatch Dashboard is a good starting point, with [Dashbird's Free Tier](https://dashbird.io/pricing/) there's no reason not to opt in for the latter, directly. As your application grows, and you find yourself wishing for more you can upgrade to Dashbird's Professional or Enterprise plans. There's support for Live Tailing, monitoring API Gateways and [much more](https://dashbird.io/features/). It works on AWS, leverages all that the platform has to offer with no additional costs in terms of AWS bills.

When it comes to performance monitoring, we need to stop reinventing the wheel. Use solutions like Dashbird or CloudWatch and focus the rest of your efforts into developing your application.
