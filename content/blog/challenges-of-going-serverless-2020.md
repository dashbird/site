---
title: Challenges of Going Serverless (2020 edition)
description: There are many obvious benefits of going serverless but also an equal amount of challenges you need to overcome to reap the fruits and really make serverless work for you. Here's list of the challenges and advice on how to overcome each.
date: 2020-07-02T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/challenges-of-going-serverless-2020.png"
thumbnail: "images/blog/2020-05-vacation-buffer/challenges-of-going-serverless-2020.png"
author: "Mariliis Retter"
author_image: "/images/team/mari.png"
canonical: https://dashbird.io/blog/challenges-of-going-serverless-2020
blog: ["serverless", "best practices"]
---

While we know the many benefits of going serverless - reduced costs via pay-per-use pricing models, less operational burden/overhead, instant scalability, increased automation - the challenges are often not addressed as comprehensively. The understandable concerns over migrating can stop any architectural decisions and actions being made for fear of getting it wrong and not having the right resources. This article discusses the common concerns around going serverless and our advice to minimise their impact. 

If you'd like to learn more about the challenges of going serverless and other contepts more in depth, make sure to check out our [Knowledge Base](https://dashbird.io/knowledge-base/basic-concepts/serverless-challenges-and-solutions/). We've also written about the [threats and opportunities of going serverless](https://dashbird.io/blog/threats-opportunities-of-going-serverless/) a while back but as serverless is evolving at the speed of light, we thougt we'd put together a little refresher.

## Security Risks Caused By Misconfiguration and Premature Deployment

### Challenge: 

Misconfiguration and subsequent premature deployment is a very real, real-life issue when it comes to technology. Even though Serverless is a managed service and there are usually fewer configuration concerns to take into account, you are still in charge of making your application secure, just as in a traditional server-based infrastructure. As teams start to migrate, using new cloud applications without full insight into the deployment until it's too late, their infrastructure is at risk of exposure to data leaks, Distributed Denial of Service (DDoS) attacks and Man-in-the-Middle (MiTM) attacks to name a few.

There have been plenty of stories over the years showing well-known organizations' general data breaches and leaks, and various successful security hacks into their infrastructure leading to their customer base questioning their reputation and security, not to mention the huge financial repercussions too. Serverless infrastructures, on the other hand, have proved to be rather bullet-proof when it comes to security breaches.

### Advice: 

Learning any new language or skill requires mistakes to be made, but the key is to avoid having these mistakes create any true impact. There are plenty of resources and platforms available that check your infrastructure follows the correct security best practices. A simple method to check configurations is to deploy small and often into a test environment, letting it run in there for some time while using one of these platforms to cross check. Once all proves successful and safe, you'll be confident when you deploy it into production.

## Observability Lessens


### Challenge: 

As we already know, insight is key and the main driver for architectural changes and improvements. A common stumbling block for anyone new to serverless infrastructure is the lack of visibility, or rather the seemingly reduced visibility in comparison to what they were used to.

Serverless, by design, encourages event-based architecture and is often stateless so having access to logs and application traces is the only way to understand any gaps in your infrastructure.

### Advice:

All public cloud platforms offer services to increase visibility and observability of your infrastructure, however specialist monitoring platforms such as [Dashbird,](http://dashbird.io/features) are able to give further insight. Such services make observability easier by providing intuitive dashboards that can drill down into detail should you need it, offer 3rd party integration for automated alerts, and seamlessly remain updated with any infrastructure changes.

These features offer full and comprehensive observability to a level that would be difficult to have in a default cloud-provider monitoring service such as AWS CloudWatch.

## Reliance on Vendors


### Challenge:

There is often a fear of a certain amount of loss of control when it comes to serverless, as management and application specifics are determined by the vendor. The very benefits of the cloud, such as hardware choices and upgrades, runtimes and resource parameters, can also be seen as over-reliance and inflexibility.

In addition to this, once infrastructure has been deployed and fully functioning, concerns are raised around vendor lock-in and limitations should, later down the line, users want to migrate.

### Advice:

As developers working within agile organizations, architectural adaptability is crucial in order to meet the needs of the business. While hardware choices are no longer down to the business, public cloud platforms and ways to work have come a long way to enable greater infrastructure autonomy.

A good example here is to "program to an interface, and not to an implementation". Looking at applications using AWS Lambda and AWS DynamoDB (DDB), there can be hundreds of Lambda functions interacting with just a few DDB tables. If every Lambda queries using DDB standards - this is programming to an implementation - any database move will require an arduous change to each individual Lambda. A useful workaround here is to instead create an interface that can translate general Lambda requests to the DDB query standards - this is programming to an interface.

This change in programming will allow developers to simply write a new interface that still understands the requests and is capable of translating to the new database query language, when they need to move out of AWS DDB. The interface can be deployed as a Lambda layer, for an even greater decoupling level.

## Distributed Computing


### Challenge: 

With serverless comes the design for distributed computing, where components are shared among multiple computers to enable greater efficiency and performance. The challenge comes from creating a balance of granular functions for high performance but not too many to make it unmanageable in the long term. Another consideration is to ensure that the functions aren't so high level or broad that its very benefit is eliminated and instead you simply have multiple mini monoliths to contend with.

### Advice:

When looking at examples of large enterprises taking advantage of serverless benefits and the distributed computing model, after the "I want that too" thoughts comes the "but how?!" It's important to keep clear that every organization started small and scaled. This sounds like very simple advice but it's one that can get easily lost in the noise when it comes to starting out or migrating entire builds into the cloud.

Second thing to keep in mind when thinking about your system and how each function will communicate with another is the actor model. Limiting the actors to a set of functions such as, creating other actors, sending messages or deciding what to do with the next message will help to avoid overwhelm and encourage a communicative environment.

## Round Up


To say going serverless is without its challenges and cause for confusion would be untruthful as there are plenty of unknowns in this now very accessible, fast moving technology. With so many large organizations using it today who have the budget for vast resources and teams and yet are still subject to security breaches and architectural failures, the new serverless world can seem daunting and unworthy.

However, in equal measure to the many questions and concerns are their solutions. The most prominent advice we can give from our own experience is to start and continue small for configurations and deployment, make use of monitoring platforms such as [Dashbird](http://dashbird.io) to expand visibility, increase insights and continuously encourage best practice, and keep simplicity throughout to avoid overly complex systems.

It won't be perfect straight away but Rome wasn't built in a day either! At its core, the benefits of serverless are so vast that the operational and financial rewards could significantly outweigh the older, clunky and chunkier alternative making the switch highly valuable and incredibly worthy.
