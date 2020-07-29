---
title: What Is a Serverless Database? (Overview of Providers, Pros & Cons)
description: A simple 101 explanation of serverless databases, including an overview of the providers, it's advantages and disadvantages. Are they worth it and are they better than physical or even virtual database hardware?
date: 2020-07-29T00:00:00.000Z
frontImage: 2018-05-07/sysadmin.jpg
thumbnail: /images/blog/2018-05-07/sysadmin.jpg
author: Nemanja Novkovic
blog: ["Serverless", "Database"]
---


## Get To Know Serverless Architecture

To put it simply, serverless computing is a cloud computing execution model meaning that the cloud provider is dynamically managing the distribution of computer’s resources. What’s taking up valuable computing resources is the function execution. Both AWS and Azure charge more if you have a combination of allocated memory and the function execution elapse time which is rounded up to 100ms. AWS Lambda’s current pricing is $0.00001667 for every used GB-second, while Azure’s functions cost $0.000016 for each GB-second. That gives you the idea of how the cost can climb fast. Considering that the amount of allocated memory can be configurable between 128 MB and 1.5 GB, the price of function execution can be variable depending on your setting. The cost per 100ms of the execution time for the configuration of significant power will be around 12 times more expensive than the 128 MB option, which is the basic one.

Serverless computing still requires servers, and that’s where serverless database comes in. Knowing your needs will undoubtedly make it easy to choose the right database service and to start using the most advanced technological solutions of today.

## Different Serverless Databases

There are several well-known databases already in use like Azure Data Lake. Azure is Microsoft’s public cloud and a host of this service.

### Google Cloud Store
**Google Cloud Store** is a document-oriented store offering database component of Google App Engine as a standalone service. Also owned by Google, the Firebase is available in two different payment plans from which customers can choose. There’s a fixed plan or pay-as-you-go plan. Firebase also includes a hierarchical database.

### FaunaDB
**FaunaDB** is distributed worldwide, and it is the most significant transactional database service. Its technology is based on Twitter.

### Amazon Aurora Serverless
The preview for **Amazon Aurora Serverless** was launched in the end of 2017. It comes in two different editions compatible with both MySQL or PostgreSQL, but it is also compatible with other known systems like MariaDB, Oracle, etc. Amazon Aurora serverless database is fully-managed and automatically scales to up to 64 terabytes of database storage.

### DynamoDB
Yet another Amazon service. DynamoDB is an entirely managed NoSQL database service able to provide predictable and high-speed performance with seamless scalability.
With DynamoDB creating database tables is straightforward and you can store and retrieve any amounts of data, and it’s also able to serve any level or requested traffic.

### MongoDB
While not being a serverless database MongoDB is still worth mentioning because of their Database as a Service offering called **MongoDB Atlas**. MongoDB is free and open-source, published by GNU Affero General Public License. It's is very flexible in storing the data, JSON-like documents which means that the field is variable from document to document and the data structure will change over time.

Moving on to **MongoDB Atlas**, as I said, is their DBaaS tool, and it comes with some great features like being able to have automated operations meaning that you’ll be able to create and deploy clusters in a few minutes as well as to ensure your cluster has zero downtime. Role-based access controls keep your data protected. It is also encrypted and network isolated. Authentication is just another segment of the protection provided.

Another great feature of MongoDB Atlas is that it makes it entirely easy to scale up or out by just pressing a button. You’re also able to deploy clusters across several regions for better reads and guarantees. The clusters are geo-distributed, they can heal themselves, and they come with excellent fault tolerance. The continuous backup solution that comes with MongoDB Atlas has an option of point-in-time restores and snapshots that are queryable. Finding any details is quite comfortable, and the view performance is in real-time. You can customize alerts, and the optimized dashboards highlight the key historical metrics.

Learn more in our article on (8 comparison points of DynamoDB and MongoDB (and Atlas))[https://dashbird.io/blog/mongo-vs-dynamo/].

## Advantages of Using a Serverless Database

### Cost Efficiency

Buying a fixed number of servers usually takes a lot of time for underutilization and is far more expensive than using a serverless database. Other than being more cost-effective it can also be more cost-efficient than provisioning an autoscaling group because of the more efficient bin-packing of the machine resources. Immediate cost benefits come with realizing that there are no operating system costs which include the licensing, installations, maintenance, support, and patching. Its description might be considered as **pay-as-you-go** computing since you are charged only upon the used time and memory allocated on running your code.

### Operations, Scalability, and Productivity

What (serverless architecture)[https://dashbird.io/blog/what-is-serverless-architecture/] means is that developers and operators can save their time by not setting up and tuning autoscaling policies or systems. It is cloud provider's responsibility to scale the capacity to meet the demands seamlessly.
Small developer teams are now able to run the code by themselves independently. There is no need to look for support teams of infrastructure and engineers. Respectfully, more developers are becoming DevOps skilled. The differences between a software developer and a DevOps engineer are now indistinguishable.

## Disadvantages of Using the Serverless Database

### Performance and Resource Limits

Not using the databases very often can cause the database to suffer from more significant response latency compared to a database that’s actively running on a dedicated server, virtual machine, or in a container. It is happening because the cloud provider “spins down” a serverless database entirely if it’s not used, meaning that if the runtime requires some time to start up, it will create more latency. Serverless computing is also not suitable for some computing workloads like high-performance computing. The reason for this resource limits are the providers who impose those resource limits. Another reason is that it would probably be a lot more cost-efficient to bulk-provision the number of servers that you require at any given period.

### Monitoring and Debugging

To diagnose performance or excessive resource usage problems with serverless architecture can be far more difficult than with traditional server architecture. Although complete functions can be timed, there is no possibility to dig into more details by attaching profilers, debuggers or APM tools. Be aware that the environment in which serverless architecture is running is usually not open source meaning that its performance characteristics aren't easy to precisely replicate in a local environment. Fortunately, there are already some fantastic [serverless monitoring tools](https://dashbird.io) on the market that you can use.

### Security

Serverless databases are sometimes considered, by mistake, as more secure than traditional databases. To some point, this is true because cloud providers are taking care of the OS’s vulnerabilities. The amount of the attacks is much higher because there are many more components to the application compared to the traditional architecture and every element is an entry point to the serverless application. Securities that customers had to protect their cloud workloads became unimportant because they can’t do anything on the endpoint and network levels like IDS/IPS regarding the control or installation.

You can find more information about serverless security risks and where to find them by visiting [this article](https://hackernoon.com/fantastic-serverless-security-risks-and-where-to-find-them-737d2206545a).

___

_Editor’s note: This blog has been refreshed and updated for accuracy in July 2020. Originally published in May 2018._
