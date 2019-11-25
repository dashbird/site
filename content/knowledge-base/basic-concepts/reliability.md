---
date: 2019-11-21T17:51:00-03:00
title: "Reliability"
description: "How systems can be reliable and the importance to cloud applications"
learning: ["ABasic Concepts"]
learning_weight: 500
---

# Overview

A system is said to be reliable when it is:

* Capable of delivering what's expected
* Tolerates mistakes from the user
* Operates within acceptable performance thresholds
* Continues to operate in the event of one or multiple faults

It doesn't mean the system is capable of standing any and all kinds of issues. A meteor striking Earth and wiping out everything is a situation where no system can stay reliable.

# Failure vs. Fault

When one or a few components of a system start failing or deviating from what's expected, we have a fault. When the entire system stops delivering, there is a failure.

It is impossible to reduce the likelihood of failures to zero. Even faults are impossible to prevent no matter what. The idea is accounting for faults and working ways to prevent them from escalating into failures.

Building reliable systems means predicting faults and having safeguards and alternatives that are built-in the system. In the event of faults, it should be able to quickly adapt itself and continue operating with minimal or zero disruption.

# Importance of Reliability

There was a time when internet users would accept service disruption patiently. Mission-critical services were not heavily reliant on cloud applications. Those days are gone.

We are starting to see a growing pressure over the IT sector to deliver the same predictability, quality and performance as other industries. Automobile manufacturing, airline service, medical care. They all must meet the highest standards. So does software applications.

Building a system to be reliable means the application is prepared to win trust. It allows the company to face competition in a much better shape. Chances of success are much higher.

# Types of Faults

## Human

Configuration errors by system admins are known to be the leading cause of internet services downtime[^1]. Humans are prone to failing and are unreliable. Although there is no easy way to fix that, there are strategies to work around it.

### Minimize oportunities for human errors

Abstractions, APIs, interfaces. They can work as _digital fences_ to avoid humans from making mistakes.

One of the fastest growing trends in cloud computing nowadays is the [serverless paradigm](/knowledge-base/basic-concepts/what-is-serverless/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts). It implements all those three solutions.

A serverless service, such as [AWS Lambda](/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts), **abstracts away** infrastructure provisioning and management, exposes the service through **secure and well-designed APIs**, and provide a **battle-tested interface** for developers to build upon.

Some good practices are also key:

* Having testing or sandbox environments that are isolated from the production system
* Thorough testing (unit, integration) of the application
* Automated system integration and delivery
* Deployment strategies that enable quick and easy rollback in case of issues
* Automated back-ups enabled with point-in-time recovery

## Software

This type of fault usually leads to systematic issues. An unknown bug only manifests itself when given a particular type of input, for example. This can easily be overlooked in the best testing and deployment setups.

Or it could be a service that the application relies on. When it slows down or starts behaving in an unexpected way, the system must be able to adapt itself appropriatelly.

An new version of a certain system component creates a conflict with another library that was difficult to anticipate in a testing environment.

Software code always makes assumptions about the environment in which it's running, the inputs and data-points it will be working with. For a long time, reality might meet those assumptions, but when it doesn't, the system can derail quickly.

Allowing processes to restart quickly in the event of a crash, isolating components, monitoring carefully thought metrics, [automated issue alerting](/knowledge-base/monitoring/failure-detection-and-alerting/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts). These are all methods to avoid or at least deal with software errors in a better way.

## Hardware

Hardware faults are usually isolated events that have a relatively lower potential of causing systematic issues. Nevertheless, they can as well escalate to failures and must be accounted for.

A hardware fault can involve a CPU, RAM, local or external network, the power supply system, cooling systems in a data center, etc. By using a cloud service such as AWS, developer already abstract away the need to account for many of those issues in the development process[^2].

Managed services, such as AWS EC2 and RDS abstracts machine administration by providing virtual instances that can run anywhere. Serverless services such as AWS Lambda and DynamoDB go one step further: they entirely abstract away the need to provision and manage infrastructure.

AWS employs advanced and sophisticated redundancy strategies to ensure reliability and high levels of availability to its systems. When developers build upon them, it can speed up an application development cycle by a great deal. This can be an important competitive advantage, especially to startups and SMEs.

---

# Footnotes

_This article was heavily inspired by the [Designing Data-Intensive Aplications](http://shop.oreilly.com/product/0636920032175.do) book, by [Martin Kleppmann](https://www.linkedin.com/in/martinkleppmann/). The book itself is a compilation of a multitude of sources, some of which we link below in the footnotes_.

[^1]:
     [Why do Internet services fail, and what can be done about it?](http://roc.cs.berkeley.edu/papers/usits03.pdf)

[^2]:
     Understand more about the [AWS Global Infrastructure](/knowledge-base/aws-cloud/global-infrastructure/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts) and how it minimizes risks of hardware faults affecting an application hosted on AWS.
