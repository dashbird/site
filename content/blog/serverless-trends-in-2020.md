---
title: Serverless trends in 2020 you should know about 
description: Recent changes in serverless that are likely to shape how development teams use serverless in practice
date: 2020-06-04T12:00:00.000Z
frontImage: "2020-05-vacation-buffer/serverless-trends-2020.png"
thumbnail: "images/blog/2020-05-vacation-buffer/serverless-trends-2020.png"
canonical: https://jaxenter.com/serverless-trends-in-2020-172011.html
author: Renato Byrro
author_image: '/images/team/renato.jpg'
blog: ["Serverless", "Other"]
---

_This post was originally published in [JAXenter.com](https://jaxenter.com/serverless-trends-in-2020-172011.html)._

Serverless is a relatively novel concept and cloud architectural model but has been advancing very quickly over the past 5 years. In this article, we've compiled a list of recent changes that are likely to shape how development teams use Serverless in practice.

In this article, we'll be heavily focussing on AWS serverless services. The cloud provider has been investing heavily in the advancement of Serverless. Many of the factors behind the trends we see are affected by this.


## A higher level of decoupling

With API Gateway HTTP API now generally available, it becomes easier and cheaper for developers to use an API Gateway privately to connect multiple cloud components while still keeping a healthy level of decoupling and black-box design. This is an important architectural practice that is part of the good practices around the [Serverless trilemma](https://dashbird.io/knowledge-base/well-architected/serverless-trilemma/).


## Faster adoption of serverless database model

DynamoDB is the leading serverless database offering right now on the market. Although it attracted some bad press in the past, the AWS team did an outstanding job over the past two years and most of its limitations are now gone.

For development teams that are still concerned about vendor lock-in, [AWS has launched Cassandra Serverless](https://dashbird.io/blog/why-cassandra-serverless-is-a-game-changer/). When generally available, it will be a compelling reason to move towards a serverless persistence model. Since the application would be tied to an open-sourced database API, a migration to another infrastructure would be facilitated in comparison with DynamoDB.


## Usage of Serverless for low-value batch jobs

The argument that the Serverless computing model was too expensive for low-value, high-volume workloads will have a hard time holding up now that [Fargate offers a Spot version](https://aws.amazon.com/about-aws/whats-new/2019/12/aws-launches-fargate-spot-save-up-to-70-for-fault-tolerant-applications/) with up to 70% savings. Fargate is already a great tool, but it would be amazing if we ever see a Lambda Spot as well.


## Strengthening of asynchronous architectural trends

AWS is pushing forward the [EventBridge](https://dashbird.io/knowledge-base/event-bridge/intro-to-event-bridge/) model, having recently [released the Schema Registry in general availability](https://aws.amazon.com/about-aws/whats-new/2020/04/amazon-eventbridge-schema-registry-now-generally-available/). It greatly simplifies the process of building serverless event-driven data pipelines and will be a compelling reason for Architects, Developers, and CTOs to push its adoption for more resilient and easier to maintain architectural designs.

Speaking of architectural design improvements, the [Well-Architected framework](https://dashbird.io/knowledge-base/well-architected/serverless-architectural-patterns/) is getting traction among the Serverless developer community. To support the Operational Excellence pillar, Dashbird has launched a centralized monitoring tool for multiple cloud resources with issue detection, automated alerting, and best-practices insights to improve the architectural design. If you don't want to be left behind, [check it out now for free](https://dashbird.io/#register), no credit card required.
