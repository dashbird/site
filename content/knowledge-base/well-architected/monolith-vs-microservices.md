---
date: 2020-03-30T00:00:00+03:00
title: "Monolith vs. Microservices"
description: "The pros and cons of each architecture and insights to choose the best option for your projects"
learning: ["AWell Architected"]
learning_weight: 200
---

<div class="youtube-embed-container">
    <iframe src="https://www.youtube.com/embed/LBT6KzpmSWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>



### Video Script

Should you start your application development as a monolith or follow a microservices architecture?

This is Monolith vs. Microservices. My name is Renato and I welcome you to our Serverless Well Architected series.

Before we dive into it, go to [dashbird.io/subscribe](https://dashbird.io/subscribe) and make sure you will not miss the next videos.

Let's start with an example. Consider an e-commerce backend system with the following features:

* Catalog
* Shopping cart
* Payment
* Shipping

In a monolithic architecture, all features would be bundled as single unit, which simplifies the development and operation of the system. The communication latency between components is very low since they can share CPU and memory from the underlying hardware.

Monolith is simple to develop and implement, making it ideal for prototypes and to validate market demand before investing too much into the software. This architecture design fits well into projects with  a reatively low complexity and a small team of developers.

A Monolith usually leads to a higher level of coupling in the codebase, are harder to scale, since we cannot customize resource allocation for each component, and can only be deployed as a unit, which can make deployment slower and riskier.

A Microservices architecture, on the other hand, allows teams to develop, test and deploy services independently. In Microservices, teams can work on different services without interfering with eachother. 

But microservices has its downsides as well:

* It enhances the serverless trilemma, sacrificing architectural best practices in some cases
* Data consistency becomes difficult to enforce
* The operational side becomes more complex and difficult to maintain

Which one to choose? A popular and recommended approach is to start with a monolith and migrate gradually to microservices as it makes sense. We may need heavy machine learning processing to prevent credit card fraud in the payment processor, for example, which would require a custom infrastructure. Parts of the system are gradually pulled off from the monolith, which reduces in size and gives room to independent microservices.

In future videos we'll cover this decision-making process and the migration from monolith to microservices in more details. Stay tuned and [subscribe](https://dashbird.io/subscribe) to make sure you will not miss anything!
