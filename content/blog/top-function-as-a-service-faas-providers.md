---
title: Top Function As A Service (Faas) Providers
description: Check out all the FaaS providers developers have at their disposal when going serverless!
date: 2018-05-13T00:00:00.000Z
frontImage: "14-05-2018/faas-providers.jpeg"
thumbnail: "images/blog/14-05-2018/faas-providers.jpeg"
author: Nemanja Novkovic
---

![Top Function As A Service (Faas) Providers](/images/blog/14-05-2018/faas-providers.jpeg)

## What Is FaaS?

**Function as a Service (FaaS)** is a relatively new service of cloud computing. It provides a platform that helps users develop, manage and run functionalities of their applications without the complexities of building the infrastructure and maintaining it which always follows launching an app. FaaS in a brand-new development in cloud computing and it was presented in the world in October 2014 by the hook.io website. Since then, numerous FaaS providers came along like AWS, Google Cloud, Microsoft Azure, IBM/Apache’s Open Whisk which is open source from 2016 and Oracle Cloud in 2017 also being open source.

## Advantages And Disadvantages Of Using FaaS
Let's quickly run through all the awesomeness and pain points fo FaaS.

### FaaS advantages

1. **Price** – You will need to pay only for the resources you’ve used.
2. **Infrastructure management** – Initial investment in buying servers and configuring them is expensive. Furthermore, you’ll need to invest in specialized staff.
3. **Infrastructure security** – Worrying about Linux or Tomcat updates is a thing of the past. The Equifax breach, where a security update had a significant toll on their businesses, is behind us.
4. **Easy Deployment** – developers don’t have to wait for OPS, DBA, etc. anymore!
5. **Scalable & HA** – FaaS providers like Google, Amazon, and Microsoft are scaling much better than anyone else.

### FaaS disadvantages

1. **Latency** – It’s not a good idea to use FaaS for Fintech high-performance applications since FaaS will add more latency.
2. **Limits** – Execution time is 300s on AWS and 500s on Google, while memory on AWS is 1500MB.
3. **No local data storage** – For most of your data this is a good thing. Your application needs to be stateless nevertheless, and that can be a serious limitation.
4. **Debugging and monitoring** – There are [growing solutions for the issue on how to debug or test](https://dashbird.io/) locally and offline, but it’s still not perfected. The guys at [Dashbird](https://dashbird.io/) are busting their butts to make this segment amazing!
5. **There are always risks when using new technologies.** Lousy stability and frameworks, lack of tools, libraries and so on.
6. **Vendor lock-in** – If anything happens to your FaaS providers, maybe the company shuts down or even goes bankrupt, you will have a severe problem.

## Fundamental Differences Between The Leading FaaS Providers

Top FaaS providers of today are offering the same services with some differences, and we will try and compare them in this section, so you can decide which one suits you better while considering the language support they offer, the 3rd party language support, the monitoring systems they use and their limits. At the end of the main differences section, you will find a separate part of pricing models for each provider.

**AWS Lambda** language support is vast. It supports several languages like Node.js, Java, C#, and Python. Language support with the 3rd party is Golang by using Node.js shim. [Dashbird](https://dashbird.io/) and [Cloudwatch](https://aws.amazon.com/cloudwatch/) are AWS Lambda’s monitoring systems. There are some limitations in AWS Lambda that we will go through. Memory allocation range is min. 128 MB and max. 1536 MB. Ephemeral disk capacity is (“/tmp” space): 512 MB, while maximum execution duration per request is 300 seconds.

**Google Functions** supports Node.js and doesn’t have any other language support as the others do. Google Functions comes with a Stackdriver monitoring system. It is limited to 1000 functions with maximum function duration of 540 seconds. Function calls per second are 1 million per 100 seconds. 

**Microsoft Azure Functions** supports even more languages like Node.js, C#, F#, Python, PHP, and Java. The 3rd party language support can run anything with batch files. Azure Application Insights is Azure’s monitoring system. Azure is limited to only ten concurrent executions per one function. There are no limits on maximum execution time limit.

**IBM Apache OpenWhisk Functions** supports native languages like Node.js, Swift, Java, PHP, Go, and Python. You can use any other programming language (the 3rd party language) you need just by providing it to the Docker container. OpenWhisk uses Dashboard as a monitoring system. There are some limits in OpenWhisk. It is limited to package nesting which is not allowed meaning that the package can’t contain another package, but packages can include Actions and Feeds.

## Price Range Between The Top FaaS Providers

Prices between these FaaS providers we’ve previously mentioned are different with several different models you could choose from to pay for services provided to you. Depending on how you use it and how frequent, also as for how long, this section should offer you the best insight of which FaaS provider you should choose.

**AWS Lambda’s** pricing is set on $0.20 per million requests and $0.00001667 per GB-s (Gigabyte per second), considering that 1 million requests and 400.000 GB-s per month are for free. Depending on your needs, choosing AWS Lambda can be a good option.

**Google Function’s** pricing is set on three different models. The 1st one is $0.40 per million invocations, but consider that 2 million invocations are for free. The 2nd price model is $0.0000025 per GB-sec with 400,00 GB-sec per month that comes for free. It brings us to the 3rd price model which is $0.0000100/GHz-sec with 200,000 GHz-sec per month that also comes for free.

**Microsoft Azure Function** uses two different pricing models. The 1st one is $0.000016/GBs with 400,000 GBs per month that comes for free. The 2nd model is $0.20 per million executions, with 1 million executions per month for free.

**IBM Apache OpenWhisk Function** has the basic Cloud Function rate which is $0.000017 per second of execution, per GB of memory allocated.


## Wrapping up
The conclusion would be that FaaS is proposing a type of architecture that developers need to fit into. It’s a whole new way of building, managing and deploying code. A brand-new way, similar to microservices, with many various benefits for both big and small applications. The most considerable advantage for architecture that is based on serverless is all around the developers’ availability or non-availability. Nowadays, it is quite hard finding a good developer and much harder finding good developers specified for a specific programming language. FaaS is quite flexible, and this brings us to its disadvantages regarding its productivity. Nevertheless, being short on developers is a far bigger problem.

You know our FaaS service of choice is AWS Lambda, but don't let that cloud your judgement. Use whatever you feel is best for your use case!
___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_