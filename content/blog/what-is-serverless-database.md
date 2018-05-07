---
title: What Is a Serverless Database? (Overview of Providers, Pros & Cons)
description: These systems of databases expand the serverless execution model to a Relational Database Management System (RDBMS), which eliminates the need for the physical or even virtual database hardware.
date: 2018-05-07T00:00:00.000Z
frontImage: 2018-05-07/sysadmin.jpg
thumbnail: /images/blog/2018-05-07/sysadmin.jpg
author: Nemanja Novkovic
---

![Sysadmin lounging with a computer](/images/blog/2018-05-07/sysadmin.jpg)

Serverless computing represents a cloud computing execution model meaning that the cloud provider is dynamically managing the distribution of computer’s resources. The cost of this model varies depending on the amount of storage used by the application.


Serverless computing still requires servers, and that’s where a serverless database comes in. These systems of databases expand the serverless execution model to a Relational Database Management System (RDBMS), which eliminates the need for the physical or even virtual database hardware. Knowing your needs will undoubtedly make it easy to choose the right database service and to start using the most advanced technological solutions of today.


# Different Serverless Databases #

There are several well-known databases already in use like **Azure Data Lake**. This service is hosted in Azure, which is Microsoft’s public cloud.


Google Cloud Store is a document-oriented store offering database component of **Google App Engine** as a standalone service.

Also owned by Google, the **Firebase** is available in two different payment plans for customers to choose from. There’s a fixed plan or pay-as-you-go plan. Firebase also includes a hierarchical database.


**FaunaDB** is distributed worldwide, and it is the most extensive transactional database service. Its technology is based on Twitter.

**Amazon Aurora Serverless** preview was launched in the last quarter of 2017. It comes in two different editions compatible with both *MySQL or PostgreSQL*, but it is also compatible with other known systems like *MariaDB, Oracle*, etc. Amazon Aurora Serverless database is fully-managed and automatically scales to up to 64 terabytes of database storage.

**Amazon Aurora** is designed for highly variable workloads and subject to rapid change. This new configuration allows its users to pay only the database resources you use on a second-by-second basis. Since storage and processing are separate, you can scale all the way down to zero and pay just for the used storage. Billing is based on Aurora Capacity Units (ACU) from which each of them represents the mix of computing power and memory. It’s metered in 1-second increments, with a 1-minute minimum for each and every new resource added.

**AWS Lambda (Amazon Web Services Lambda)** is the computing cloud service that is event-driven, and it comes from Amazon Web Services. It allows the developers to program functions on a pay-per-use basis without having to compute resources or to provision storage as support. AWS is supporting the code written in various code languages such as Node.js, Python, C#, and Java.

**DynamoDB** is another Amazon service. It is entirely managed NoSQL database service able to provide predictable and high-speed performance with seamless scalability.

With DynamoDB it is effortless to create database tables which can store and retrieve any amounts of data, and it’s also able to serve any level or requested traffic.

**MongoDB** is free and open-source, published by GNU Affero General Public License. MongoDB is very flexible in storing the data, JSON-like documents which means that the field can differ from document to document and data structure can be modified over time.


### Advantages of Using a Serverless Database

## Cost Efficiency

Buying a fixed number of servers usually takes a lot of time for underutilization and is far more expensive than using the serverless database. Other than being more cost-effective it can also be more cost-efficient than provisioning an autoscaling group because of the more efficient bin-packing of the machine resources.

Immediate cost benefits come with realizing that there are no operating system costs which include the licensing, installations, maintenance, support, and patching. Its description might be considered as pay-as-you-go computing since you are charged only upon the used time and memory allocated on running your code.

## Operations, Scalability, and Productivity

What serverless architecture means is that developers and operators can save their time by not setting up and tuning autoscaling policies or systems. It is cloud providers responsibility to scale the capacity to meet the demands seamlessly.

Small developer teams are now able to run the code by themselves independently. There is no need to look for support teams of infrastructure and engineers. Respectfully, more developers are becoming DevOps skilled. The differences between a software developer and a hardware engineer are now indistinguishable.


With Function as a Service (FaaS), the units of code sent to the outside world are the simple functions. That said, programmers don’t need to be concerned about multithreading HTTP requests in their code, and that really makes the tasks easy for back-end software development.


### Disadvantages of Using a Serverless Database

## Performance and Resource Limits

Codes that are not used very often can suffer from more significant response latency compared to a code that’s frequently running on a dedicated server, virtual machine, or container. This happens because the cloud provider “spins down” serverless code entirely if it’s not used meaning that if the runtime is requiring some time to start up, this will create some more latency to it.

Serverless computing is also not suitable for some computing workloads like high-performance computing. The reason for this resource limits are the providers who impose those resource limits. Another reason is that it would probably be a lot more cost-efficient to bulk-provision the number of servers that you believe is required at any given period of time.

## Monitoring and Debugging

To diagnose performance or excessive resource usage problems with serverless code can be far more difficult than with traditional server code. Although complete functions can be timed, there is no possibility to dig into more details by attaching profilers, debuggers or APM tools. Be aware that the environment in which this code is running is usually not open source meaning that its performance characteristics are not easily and precisely replicated in a local environment.

Fortunately there are already some great [serverless monitoring tools](https://dashbird.io) on the market that you can use. 

## Security 

Serverless computing and serverless database are from time to time considered by mistake as more secure than traditional databases. To some point, this is true because cloud providers are taking care of the OS’s vulnerabilities. The amount of the attacks is much higher because there are many more components to the application compared to the traditional architecture and every component is considered as an entry point to the serverless application. Securities that customers had to protect their cloud workloads became unimportant because they can’t do anything on the endpoint and network levels like IDS/IPS regarding the control or installation.
