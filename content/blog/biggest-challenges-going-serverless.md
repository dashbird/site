---
title: The Biggest Challenges (And Solutions) Of Going Serverless 
description: With the advent of various serverless computing services, developers now, more than ever, are reaping numerous benefits that serverless computing offers.
date: 2018-03-27
frontImage: "27-03-2018/challenge.jpg"
thumbnail: "images/blog/27-03-2018/challenge.jpg"
author: Irfan Khan
---

![AWS Lambda Use Cases](/images/blog/27-03-2018/challenge.jpg)

With the advent of various serverless computing services such as AWS Lambda, Google and Azure functions, Spotinst etc, developers now, more than ever, are reaping numerous benefits that serverless computing offers; top of which includes less responsibility to manage your app's backend, improved automation and effortless scaling.


All these benefits let the developers focus more on innovation and product itself instead of spending time around admin tasks and infrastructure. Additionally, serverless computing, being a good fit for event-driven applications, is playing a significant role in boosting the rising category of event driven applications which are likely to represent bigger fraction of future corporate applications portfolio.


Nevertheless, there are some challenges associated with going serverless that need to be dealt with in order for it to make its mark on the software development world in a true essence.   


### Serverless Security Concerns

Various enterprises already employ serverless architectures for building and deploying their services and software. And even though it has greatly helped developers with its inherent scalability and compatibility with other cloud services, however, it is not impervious to some security concerns.


A research by [PureSec](https://www.puresec.io/press_releases/sas_top_10_2018_released) highlights that the miss-configuration of cloud services and erroneous settings are the most frequent reasons for the leak of confidential, sensitive information. It can supply an entry point to attackers to the serverless architectures as well as provide a way for potential Man-in-The-Middle (MiTM) attacks.


As a matter of fact, serverless architecture makes things so convenient for developers that it may lead to *“poor code hygiene”* that results in bigger attack surfaces and lurks developers into making awful decisions about security. This doesn’t mean you should not go serverless, but you should be mindful about security. [There's this great article about identifying serverless security risks.](https://serverless.com/blog/fantastic-serverless-security-risks-and-where-to-find-them/)



### Dormancy Concerns — Cold vs Warm
With serverless architecture, generally no copies of functions are running on standby which indicates that whenever the function will be hit, it is going to be a cold hit. This means that the code needs to be initiated, unlike a warm hit where code is already in running condition prior to any hit, resulting in increased invocation latency.


One solution can be to keep selected functions warmed up. This will make sure that the massive bulk of requests will be encountered with a much lower-latency response. However, the issue with this solution is, that it won’t come cheap and developers will end up paying extra amount for keeping the idle containers warmed-up.  


Another solution is to use a load prediction system which will help to analyse the times it thinks service is going to be under a huge load. This can potentially help in addressing the cold hit problem by accurately predicting load intensive spikes.   


[Dashbird](https://dashbird.io) can be used to get a good overview of all your functions and overall application performance. In this manner, developers can get an overview of resource utilization for the entire serverless project and can optimize cost by executing functions with the most suitable frequency in order to avoid the number of cold starts.


### Inadequate Application Monitoring
While it is relatively easy to test individual functions, testing the infrastructure and combinations of all functions becomes much harder with the increase in the complexity of the serverless architecture. As a result, it becomes increasingly difficult to manage the countless different endpoints in different environments.


Additionally, high level of abstraction in serverless architecture doesn't allow access to all customary system metrics such as consumption of RAM and disk usage which notifies about the health of the system. The good news is that there are several supporting services available in the market which ensure that your [serverless systems are properly observed](https://dashbird.io) even in the absence of metrics’ like memory, CPU, and etc.   


Again, this is where [Dashbird](https://dashbird.io) comes to the rescue by offering real-time insights into your lambda functions.



### Lack Of Operational Debugging Tools
Debugging distributed systems is a complex task and generally needs access to a substantial amount of relevant metrics in order to identify the root causes of problems. Even though AWS offers log based performance metrics via AWS Cloudwatch, it is not a good place for debugging because of it's many limitations.


[Dashbird](https://dashbird.io) provides a log-based debugging solutions for AWS Lambda users by collecting and analyzing Cloudwatch logs and presenting these in a more actionable way. Dashbird tracks real-time errors and notifies you of any performance problems once they occur in your infrastructure, and thereby, helps you to easily and quickly troubleshoot any errors.


---

Despite decreasing server management costs, maintenance efforts, scalability planning etc, you should be aware of these challenges before going serverless.
