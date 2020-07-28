---
title: Serverless for Enterprises: Scale big or go home
description: Migrating to serverless might sound daunting to enterprises with an already huge infrastructure. In this article, you'll find some best practices and insights on the serverless designs that can scale massively and represent enterprise models. 
date: 2020-07-28T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/serverless-for-enterprises.png"
thumbnail: "images/blog/2020-05-vacation-buffer/serverless-for-enterprises.png"
canonical: https://dashbird.io/blog/serverless-for-enterprises-large-scale-projects/
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
blog: ["serverless", "aws", "business"]
---

We discuss quite a bit about [going serverless for SMEs and startups](https://dashbird.io/blog/serverless-and-startups/), however it's often those with an already huge infrastructure, such as enterprises, that can find the move and change daunting. We see many companies from the likes of [Coca-Cola](https://dashbird.io/blog/serverless-case-study-coca-cola/) to [Netflix](https://dashbird.io/blog/serverless-case-study-coca-cola/) managing it but what does it look like in action? In this article, we share some best practices and insights on the serverless designs that can scale massively and represent enterprise models. For a real life example, you can also check out how [Shamrock Trading Corp migrated to serverless](https://sls.dashbird.io/going-serverless-case-study) from a traditional cluster - psst, they're also giving away their winning strategy for a smooth transition.

As AWS says, the most important foundation to keep in mind is that no matter the size, well-designed serverless applications are decoupled, stateless, and use minimal code. As the projects and applications grow, simplicity and low-code needs to be maintained.


## Moving away from Monoliths 

While [monolith designs can still suit some functionalities](https://dashbird.io/knowledge-base/well-architected/monolith-vs-microservices/), with a business and application that is going serverless, moving away from this traditional style will save a huge amount of time. By grouping common functionalities together into smaller services and creating separate code repositories and microservices, the evolution of an application including new features will be more straightforward. This design also reduces security risks, deployment issues and bugs that can cross-contaminate.

So, what is the best way to group these?

Often, the best way to consider this is through the functions and resources that define a microservice. The design itself is also important; we don't want to build a large repository that'll end up as a monolith, however too many of them will mean duplicate code and difficulties in sharing resources. The aim here is to have one single piece of functionality that does that one thing very well.


## Consider Concurrency 

It can be tempting, when using automatically scalable services such as [AWS API Gateway](https://dashbird.io/knowledge-base/api-gateway/what-is-an-api-gateway/)and [AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/), to not consider the backend relational database being used. We want scale that will match demand - that's one of the beauties of these serverless services at the end of the day! However, without the correct and, most importantly, necessary intermediary services to buffer requests, bottlenecks, throttling, outages and even loss of valuable data can occur due to exhaustion. 

While API Gateway and Lambda are able to spin up thousands of concurrent requests quickly, it's key to remember that not all AWS services are the same, such as AWS RDS. Instead, including services like AWS Kinesis or AWS SQS that poll for new records and can return findings to Lambda functions means greater control without any downtime or latency.


## Take advantage of individual AWS Services 

Using bundled code libraries may feel like the simpler route, but once again, as your application scales, this design will create a monolith that restricts developers. So instead of this:

![aws swevices scaling 1](/images/blog/2020-05-vacation-buffer/aws-services-scaling2.png "aws swevices scaling 1")

Source: AWS

Let's go to this: 

![aws swevices scaling 2](/images/blog/2020-05-vacation-buffer/aws-services-scaling1.png "aws swevices scaling 2")

Source: AWS

### API Gateway

API Gateway offers native routing functionality. It's also capable of validating parameters meaning less custom code, and provides protection against unauthorized access. Don't forget about security!

### Lambda

In this latter example and following best practice, Lambda functions should consist of minimal code and fewer dependencies. This simplicity is crucial in enabling easier testing and for different developers to work on functions separately for speedier builds and ultimately, safe deployment.

### Step Functions

Following on from the theme of simplicity, Step Functions should be used for workflows as opposed to Lambdas, which can make changes more difficult and cause idling, resulting in avoidable high costs. Step Functions, again, means less custom code, code that will last and it enables in-flight executions.


## Multiple AWS Accounts 

This is a basic but critical standard best practice to consistently follow. From a security perspective, it's a no-brainer as permissions and access levels can be set according to the rule of least privilege. However from a CI/CD pipeline point of view, with each developer having their own account, their actions won't impact on the production environment or other's due to the limits set. This can be further taken advantage of when using AWS SAM or CloudFormation templates, as functions can be tested locally against live cloud resources within their own machines and accounts.

It's also useful to create accounts for beta deployment and production, in order to create separation. Within the multiple accounts, groups can be created with policies attached enabling the sharing of scripts and avoiding manual processes.


## Maintaining Visibility 

As any developer knows, visibility is key to ensure autonomy, assurance and confidence. As applications grow and more features are involved, new AWS accounts created and further services employed, monitoring becomes increasingly important as the potential for failure increases synonymously.

We want to maintain [end-to-end visibility on our serverless architecture](https://dashbird.io/docs/dashbird/how-dashbird-works), understanding how it looks and feels from the client's front-end to how clean functionality and performance is at the backend. This means being able to look at all environments including test, beta and production.

Using a [monitoring system](https://dashbird.io/features/) that can reach all aspects of your serverless infrastructure from supporting all services used, providing insights into performance and costs, and simple and quick switches between accounts will provide full assurance that you know exactly what is going on within. Many monitoring systems use an [alerting system](https://dashbird.io/features/automated-alerting/) for failures or errors, which is undeniably helpful for instant acknowledgement and quick remediation.


## Wrapping up

And so, it's clear that the common themes for successful large scale serverless projects are varying degrees of separations and simplicity. Scalability in the serverless world is dependent on independent services that interact with each other but aren't wholly reliant on another. AWS has created a plethora of brilliant services that can integrate seamlessly with each other, here's a [list of AWS services we think everyone should have in their starter toolkit](https://dashbird.io/blog/5-core-aws-serverless-tools-starterkit/), to get you started. However to get the best out of each of them, make use of their full capabilities and don't be shy to employ other services within a function for extra productivity.

Lastly, don't forget about security and that crucial visibility into your infrastructure's performance so you know all is safe and running as it should be! Learn more about how Dashbird can help you with [keeping on top of your application's performance](https://dashbird.io/features/).
