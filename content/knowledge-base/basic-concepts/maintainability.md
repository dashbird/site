---
date: 2019-11-18T14:00:00-03:00
title: "Maintainability"
description: "Making systems easy to operate, manage and evolve"
learning: ["ABasic Concepts"]
learning_weight: 520
draft: true
---

# Overview

Systems maintenance and expansion cost much more than the initial development. As the project grows and technology evolves, complexity and the list of issues grow. Technical debt haunts developers and the longer it takes, the more _'interest rates'_ accrue over this debt.

This is why future maintainability should be at the top of developers minds when architecting and developing software applications.

# Maintaining Systems

As most things in the software industry, there is no easy, one-size-fits-all solution to keeping systems maintainable. What is known to be a good practice is to face it from three different perspectives: operations, complexity, evolution.

## Operations

Operability is about making it easy for system administrators and DevOps teams to keep the system running in a reliable way.

Although it's true that modern cloud services, such as [serverless](/knowledge-base/basic-concepts/what-is-serverless/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts), simplify operations by a great deal. Nevertheless, a considerable amount of responsibility still bear at the developers' hands.

How simple it is to patch a security update to a system library, for example? Highly coupled architectures, or the lack of an automated and test-based deployment strategy, will make it harder for operations.

Tracking the root cause of issues or performance bottlenecks also depend on good development practices. When developers make [clever use of logging](/knowledge-base/logging/lambda-what-should-be-logged/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts) capabilities of their runtimes, operations find easier paths to understand what may be impacting the system performance.

Having a good system monitoring in place provides visibility to the system inner workings. It makes a lot easier for operations to keep on top of it.

Documentation that is always up-to-date and concise can also be invaluable. Providing contextual expectations for the system or one of its components can be very helpful. "If **X** is done in the context of **Y**, the result will be **Z**".

## Complexity



## Evolution


---

# Footnotes


