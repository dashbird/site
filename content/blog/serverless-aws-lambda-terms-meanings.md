---
title: Serverless 101 - AWS Lambda Basic Terms And Their Meanings
description: With serverless, you can run code for any type of application or backend service you can think of, and do it with zero infrastructure administration. Sounds like something you want to know more about?
date: 2018-04-09
frontImage: "09-04-2018/serverless-aws-lambda.jpg"
thumbnail: "images/blog/09-04-2018/serverless-aws-lambda.jpg"
authorlink: 'https://twitter.com/annikahelendi'
author: 'Annika Helendi'
---

![Serverless basic terms](/images/blog/09-04-2018/serverless-aws-lambda.jpg)

Serverless is arguably the [next big thing after blockchain](https://dashbird.io/blog/why-serverless-is-the-next-big-thing-after-blockchain/)  and one of the major players in this field is, of course - AWS Lambda. In essence, it allows you to run your code without provisioning or managing any servers. You only pay for when your code is actually running.


You can run code for any type of application or backend service you can think of, and do it with zero infrastructure administration. Sounds like something you want to know more about? To get started, these are the basic terms you should know:


## What's a lambda function (lambda expression)? ##


A *lambda function* is a group of related statements that perform a specific task in your application. It consists of code and any dependencies that are associated with it. Each lambda function has its associated configuration information (name, description, entry point, and resource requirements).


The main benefit of using lambda functions is that as your application grows larger, it breaks your application into small modular chunks which makes it more organized and manageable in the long run.


## What are event sources? ##


Along with *lambda functions*, *event sources* are the core components of AWS Lambda. Event source is an entity that publishes events, and a lambda function is a custom code that processes the events. An event source can be an AWS service or developer-created application that produces events that trigger a function to run. Check out [AWS Lambda supported event sources here.](https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html#intro-core-components-event-sources)


## What's an invocation? ##


Essentially, an *invocation* is called up to execute a specific lambda function.  These are triggers for the code of the function to start running. Invocations can be either [synchronous or asynchronous](https://docs.aws.amazon.com/lambda/latest/dg/invocation-options.html).


## What's event source mapping? ##


*Event source mapping* is a configuration of AWS services in which an event source is tied to a specific lambda function. It enables automatic invocation of a lambda function when specific events occur.  


## What's a lambda execution model? ##


When you create a lambda function, you can specify configuration information, such as the amount of memory and maximum execution time that you allow for your function. When that function is invoked, AWS Lambda launches an [Execution Context](https://docs.aws.amazon.com/lambda/latest/dg/running-lambda-code.html) based on the configuration settings you have provided.


## What are cold starts? ##


A *cold start* happens when a lambda function is invoked after not being used for an extended period of time and it results in increased invocation latency. Since this can potentially negatively affect the end-user experience with your application, this topic has been [covered a lot lately.](https://hackernoon.com/im-afraid-you-re-thinking-about-aws-lambda-cold-starts-all-wrong-7d907f278a4f)


---
*Is there something crucial we missed? Let us know in the comments section!*
