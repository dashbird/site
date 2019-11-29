---
date: 2019-11-04T03:21:00+02:00
title: "What is Serverless"
description: "What defines a serverless system, main characteristics and how it operates"
learning: ["ABasic Concepts"]
learning_weight: 100
---

# Quick intro

Serverless is a cloud architectural model that **abstracts away** from developers the need to **handle server** provisioning and maintenance.

It is commonly associated with **Functions-as-a-Service** (Faas), a form of computing service that was the pioneer of all <a href="https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/">serverless systems</a>. FaaS executes self-contained code on-demand. It is stateless, not keeping any data persisted after an execution.

Most types of traditional cloud services have a serverless version available nowadays: **database, queue buffer, pub/sub, stream processing, etc**. It is possible to build an entire application in the cloud relying solely on serverless platforms.

# No server management

A serverless system abstracts away the need to provision and manage servers or virtual machines.

As mentioned above, a good example is Function-as-a-Service (FaaS), such as AWS Lambda. It allows us to run code written in virtually any programming language without having to provision an EC2 server, for example. Behind the scenes, Lambda will create an ephemeral microcontainer, run our code and return the results. There's no need to manage the infrastructure. Developers only have to deploy the code and run it.

Some argue that _serverless_ is a misnomer because everything still must run in a server anyway. What is really relevant is that, **from the developer perspective**, there is **no server handling involved**. The **developer experience** is _serverless_, not the service provider.

# Pricing Model

Traditionally, a **server-based system bills for the availability** of a resource over a given period of time (e.g. EC2 servers are charged by the hour).

On the other hand, **serverless charges actual usage**. The availability of a serverless system is not charged, it is available all time at zero cost[^1]. The user only pays when it actually uses the system.

Following the FaaS example above (AWS Lambda), we only pay when the code gets executed. If we deploy our code and **never run it, there's nothing to be paid**, even though the function remains available and will respond to execution requests at any time.

In a comprehensive analysis, **prices are low in serverless**, especially when accounting for the hidden costs of traditional architectures.

Lambda charges only $0.20 for 1 million executions of a function, or $0.0000002 per request. Depending on how much memory (RAM) the function requires the it will charge extra.

This pricing model is **especially advantageous for startups and small/medium applications**, since it reduces financial risks by converting fixed costs into variable ones.

Applications with highly variable demand can also benefit from serverless. Sudden and sharp demand peaks usually leads to over-provisioning in a traditional infrastructure. In serverless, there's no extra cost for idle resources.

# Release from infrastructure responsibilities

Developers have no responsibility for the serverless underlying infra: load balancer, auto-scaling, operational system and patches, server security, etc.

Many common **operational puzzles are also inexistent**. Should it scale vertically or horizontally? How many servers are needed for high availability? How long does it take to spin up new servers in the cluster? What level of IOPS capacity is needed? All **asbtracted away to best-in-cloud DevOps teams**.

In a serverless database - such as DynamoDB -, planning for master/read replicas, backup, scaling up/down partitions, managing indexes, etc. is not an issue for the user to take care of.

# Clarity on limits and expected performance

How many concurrent code executions (or database queries) a server can handle? In traditional infrastructure, the answer requires extensive load testing. In serverless, it's a **transparent contractual SLA**.

AWS Lambda, for instance, supports up to 1,000 concurrent executions by default. DynamoDB on-demand tables support 40,000 read and 40,000 write capacity units per second. All serverless systems will have an SLA for their performance thresholds.

Default limits can accomodate a vast majority of use cases, and they can be increased if needed. A large pool of resources is maintained by the cloud and shared among multiple users. This enables **efficient usage**, allowing for **greater capability** and **lower costs**.

It is essential to **understand the serverless thresholds**. It is common for newcomers to assume they'll be able to use the service at any concurrency level, for example, which is an unrealistic expectation.

# Smooth, autonomous and inexpensive scaling

Most serverless platforms can scale up and down to accomodate variable demand transparently to the development team.

If an application experiences a momentaneous peak, suddenly going from one to a thousand concurrent requests, a serverless system should have no problem to cope with. That level of **scalability** comes with **zero additional cost** to each execution.

In a traditional server architecture, this would require a very well crafted auto-scaling system and some level of upfront overprovisioning. Instantiating new servers in a cluster takes time, from few seconds to minutes, depending on the case. If the demand grows faster than the scaling process, the application can experience downtime.

---

**Footnotes**

[^1]:
     There are exceptions, such as serverless databases, where the amount of data stored is usually charged regardless of actual access to the data. This is because only keeping the data persisted consumes resources that can't be shared.

[^2]:
     This is a challenge that we address in [Lambda Challenges & Solutions](/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/), as well as in the Getting Started guides: [Logging](/knowledge-base/getting-started/logging/) & [Monitoring](/knowledge-base/getting-started/monitoring/).
