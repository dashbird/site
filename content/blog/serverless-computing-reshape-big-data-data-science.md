---
title: Can Serverless computing reshape big data and data science?
description: Data science will evolve further with serverless development. Although there are few sophistications but the general opinion is that as serverless computing matures, so will the development skyrocket.
date: 2018-05-30T01:00:00.000Z
frontImage: "2018-05-30/header.jpg"
thumbnail: "images/blog/2018-05-30/header.jpg"
author: Bhaskar Das
---
![Header](/images/blog/2018-05-30/header.jpg)

### All aboard the hype train!

Serverless development has been in the market for quite some time now. But still at large it has yet to be accepted by majority of the development community. With Amazon lambda, Azure functions and IBM’s Open whisk market is poised to take a different route in this field. Most of these organizations are spending a lot in making the market accept the new development using serverless computing. In the coming years our development thinking, terminology and the way we develop will pretty much change. So also, is true for the other domains. People have already started experimenting and coming up with solutions for Big data, datascience, Virtual Reality and so on. Though these developments are yet to become mature, but given the rapid pace with which open source development community, the commercial organizations and the market trend is speaking in terms of serverless computing. We could possibly see Serverless computing might redefine the Big data solutions. Data science will evolve further with serverless development. Although there are few sophistications but in general opinion is that with the passage of time as more maturity will come in serverless computing, so will the development will ease out.  Underlying core business value related questions that organizations planning to go for serverless have are:

1. Will the overall cost to setup Big data structure reduce?
2. Will it reduce organization’s operational cost?
3. Is there availability of required pool of skilled resources to handle such type of development?
4. What will be required skills?
5. How can we manage large data pipelines? 

It would be test of time how serverless goes from here. We are looking forward to the journey into unchartered territory which should try to solve the complex world of data economy.  

### The evolution of Big Data

Purpelle.com an online fashion retailer has done brilliantly with building scalable serverless data pipeline, that too at low operating costs and the idea engineered and maintained by single developer. The data pipeline created by Purpelle.com helps to collect millions of data points every day. They achieved it using Amazon Kinesis, Lambda and kinesis firehose.
The serverless computing has opened new possibilities for the development community. Pay for what you use has made data economy quite cheap and it has leveraged the power of cloud to the users.

The evolution in Big data analytics has undergone through following phases.

![evolution phases](/images/blog/2018-05-30/ref1.png)

Lambda can be used to perform the basic compute function which a Hadoop distribution platform does. Initial Hadoop processing involved setting up in premise infrastructure using cheap commodity hardware for nodes and one costly hardware for maintaining the master. Soon Cloud started to give the same capability where you can spin up several instances in seconds depending upon your requirement. These instances worked in similar fashion as what the in-house Hadoop infrastructure nodes supported. The migration from physical infrastructure to cloud gave an edge to the users and organization who had difficulty in setting up big infrastructure using cheap commodity hardware. The idea of pay per use and spin up as many instances as required gave people to perform Hadoop jobs in the cloud without the need to maintain physical hardware. It also gave advantage that as soon as job is finished kill the entire cloud instance and thus you don’t need to pay any further. Cloud computing still needed manual intervention from the user to spin up required instances thus a devops team or infra team were needed to maintain the count of instances. Lambda goes one step ahead. It is more than everything you need in your development environment. The best part is you don’t need a team to manually scale up the capabilities. Lambda takes care of that itself and automatically scales up the system whenever required. Lambda is basically event oriented system. It depends on triggering event to initiate action. What’s more it can do a complete Hadoop processing by eliminating the requirement to bring or use Hadoop framework. The only thing that worries some people is that no one knows the hardware capability that powers AWS Lambda. But going by robust infra provided by AWS, lambda can be trusted to perform Big data processing without failure caused due to hardware. We will perform a sample demo here. We will try to achieve Hadoop map task and reduce task using Lambda. 

![lambda graph](/images/blog/2018-05-30/ref3.png)

### Overview of Big data processing using AWS Lambda

Here two techniques or approaches can be applied to achieve the big data processing.

1. Use Amazon S3 if working with persistent data.
2. Use Amazon Kinesis if working with streaming data.

![lambda map](/images/blog/2018-05-30/ref2.png)
_A serverless Map-Reduce architecture using AWS lambda - Image source - AWS_

### Cost comparison for Hadoop processing

During the initial days of Hadoop processing, much of the cost was incurred on setting up on-premise infrastructure with cheap commodity hardware. A petabyte Hadoop cluster required around 125-250 nodes which costs approximately $ 1 million. The cost of each node comes around $4000. Thus, making operational and hardware cost roughly around $32-40 per hour. This cost the organization had to maintain irrespective of infrastructure being idle or being in use. 
As cloud solutions became more matured organization began to leverage the power of cloud solutions for Big Data problems. Now no more commodity hardware based infrastructure was required to be maintained. Besides the pay as you go model allowed more flexibility in terms of eliminating the requirement to maintain hardware. In cloud model when the solution was achieved the cloud instances were shut down thus bringing the cost further down. For using static cluster of Amazon for 100 TB data usage one will have to pay around $78000, while using Amazon EMR with S3 for same amount of data one will have to pay around $28000. 

Coming to AWS Lambda pricing model, amazon has been quite smart considering the market sentiments has put the pricing model into three tiers.

![lambda map](/images/blog/2018-05-30/ref4.png)
_Source: Amazon_

Thus, it is quite obvious that from above pricing model that as these serverless services become more mature cost of big data infra is going to come down.  Finally, we need to wait for more community driven development using serverless in the field of Big Data and expect this cool service to revolutionize our existing Big data and data science solutions. 

