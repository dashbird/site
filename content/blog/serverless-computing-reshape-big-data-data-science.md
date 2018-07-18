---
title: Can Serverless computing reshape big data and data science?
description: Data science will evolve further with serverless development. Although there are few sophistications but the general opinion is that as serverless computing matures, so will the development skyrocket.
date: 2018-05-30T01:00:00.000Z
frontImage: "2018-05-30/header.jpg"
thumbnail: "images/blog/2018-05-30/header.jpg"
author: Bhaskar Das
category: "Serverless, DataScience, BigData"
---

### All aboard the hype train!

Serverless development has been turning heads in the market for quite some time now. But it has yet to be accepted by the majority in the development community. With AWS Lambda, Azure Functions and IBM’s Open Whisk market is poised to take a different route in this field. 

Most of these organizations are spending a lot in making the market accept the new development using serverless computing. In the coming years our development thinking, terminology and the way we develop will go through a significant change. This is true for many other domains as well. People have already started experimenting and coming up with solutions for **Big Data**, **Data Science**, **Virtual Reality** among many other fields. 

However, this development has yet to become mature. But, given the rapid pace with which the open source community, commercial organizations and the market trend is speaking about serverless computing, we could possibly see it **redefining Big Data solutions**. Data science will surely evolve further with the rise of serverless development. 

Hopefully, as the technology matures so will the [development and monitoring solutions](https://dashbird.io/features/aws-lambda-serverless-monitoring/) become more sophisticated. Underlying **core business value related questions** that organizations planning to go for serverless have are:

1. Will the overall cost to setup Big data structure reduce?
2. Will it reduce organization’s operational cost?
3. Is there availability of required pool of skilled resources to handle such type of development?
4. What will be required skills?
5. How can we manage large data pipelines? 

It will be fun to see where serverless takes us next. We are looking forward to the journey into un-chartered territory which should try to solve the complex world of data economy. 

### The evolution of Big Data

_Purpelle.com_, an online fashion retailer has done brilliantly with building scalable serverless data pipelines, that work at low operating costs while being engineered and maintained by single developer. The data pipeline created by _Purpelle.com_ helps to collect millions of data points every day. They achieved it using AWS services such as [Kinesis](https://aws.amazon.com/kinesis/), [Lambda](https://aws.amazon.com/lambda/) and [Kinesis Data Firehose](https://aws.amazon.com/kinesis/data-firehose/).

Serverless computing has opened new possibilities for the development community. Pay for what you use has made it quite cheap while leveraging the power of cloud.

The evolution in Big data analytics has undergone through following phases.

![evolution phases](/images/blog/2018-05-30/ref1.png)

Lambda can be used to perform basic compute functions. Exactly the same as with a Hadoop distribution platform. Initial Hadoop processing involved setting up on-premise infrastructure using cheap commodity hardware for nodes and one rather costly main machine for maintaining the master. 

Soon enough The Cloud started to give the same capability, where you can spin up several instances in seconds depending upon your requirement. These instances worked in similar fashion as what the on-premise Hadoop infrastructure. The migration from physical infrastructure to cloud gave an edge to users and organization who had difficulty in setting up big infrastructure using cheap commodity hardware. 

The idea of pay-per-use and spinning up as many instances as required gave people the idea to perform Hadoop jobs in the cloud without the need to maintain physical hardware. It also gave an additional advantage. As soon as job was finished, you could just kill the entire cloud instance and thus you don’t need to pay for it anymore! 

Cloud computing still needed manual intervention from the user to spin up required instances thus a DevOps team or Infra team were needed to maintain the count of instances. **Lambda goes one step above and beyond!** It is more than everything you need in your development environment. The best part is you don’t need a team to manually scale up the capabilities. Lambda takes care of that itself and **automatically scales up the system** whenever required. Lambda is basically an event oriented system. It works by using events to trigger actions. 

What’s more it can do a complete Hadoop processing by eliminating the requirement to bring or use Hadoop framework. The only thing that worries some people is that no one knows the hardware capability that powers AWS Lambda. But going by robust infra provided by AWS, Lambda can be trusted to perform Big data processing without failure caused due to hardware. Here's a diagram of a Hadoop Map and Reduce Task.

![lambda graph](/images/blog/2018-05-30/ref3.png)
_Overview of Big data processing using AWS Lambda_

Here are two techniques or approaches can be applied to achieve the big data processing.

1. Use Amazon S3 if working with persistent data.
2. Use Amazon Kinesis if working with streaming data.

![lambda map](/images/blog/2018-05-30/ref2.png)
_A serverless Map-Reduce architecture using AWS lambda - Image source - AWS_

### Cost comparison for Hadoop processing

During the initial days of Hadoop processing, much of the cost was incurred on setting up on-premise infrastructure with cheap commodity hardware. A petabyte Hadoop cluster required around 125-250 nodes which costs approximately $1 million. The cost of each node comes around $4000. Thus, making operational and hardware cost roughly around $32-40 per hour. This cost is per hour no matter if it is idling or running.

As cloud solutions became more mature, organization began to leverage the power of cloud solutions for Big Data problems. Now, no more commodity hardware based infrastructure was required to be maintained. Besides that, the pay-as-you go model allowed more flexibility in terms of eliminating the requirement of maintaining hardware. In a cloud model, when the solution was achieved, the cloud instances were shut down thus bringing the cost down even further. For using static cluster of Amazon for 100 TB data usage one will have to pay around $78000, while using Amazon EMR with S3 for same amount of data one will have to pay around $28000. 

Coming to AWS Lambda's pricing model, Amazon has been quite smart considering the market sentiments.

![lambda map](/images/blog/2018-05-30/ref4.png)
_Source: Amazon_

It's quite obvious from the pricing model above, as serverless services become more mature, the cost of Big Data infra is going to come down. Finally, we need to wait for more community driven development using serverless in the field of Big Data and expect this cool service to revolutionize our existing Big Data and Data Science solutions. 
___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_

_Sign up to our newsletter to get all the latest news and tutorials on serverless._