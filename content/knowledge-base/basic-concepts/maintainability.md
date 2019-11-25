---
date: 2019-11-18T14:00:00-03:00
title: "Maintainability"
description: "Making systems easy to operate, manage and evolve"
learning: ["ABasic Concepts"]
learning_weight: 520
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

A certain level of complexity is natural in any software, and some applications will be more complex than others. It depends the nature of the particular problem being solved. That is called **essential complexity**[^1].

Essential-complexity factors are the ones developer **have to** face. There is no way to avoid them without sacrificing the solution expected by the user.

There is also **inadvertent complexity**[^2]. It is introduced by causes unrelated to the problem solved by the software. An example would be performance caused by infrastructure or runtime limitations/issues.

Throughout an application's lifetime, many things tend to grow:

* Codebase size
* Number of dependencies
* Services connections
* New people joining the development team
* Age of the technologies used
* Etc...

All that contributes to decrease easyness for developers to understand the system. As the level of complexity grows, it also gets harder to maintain and extend the application with new features. Making any change to a complex system has a higher likelihood to introduce bugs as well.

Bad practices contribute to the problem, such as: tight coupling among modules or services, inconsistent or lack of conventions, poor code planning, breaking SOLID principles, etc.

Therefore, reducing complexity is positive to any application. It makes the software simpler to understand, easier to maintain and lighter to extend. Development teams must strive to reduce complexity whenever possible.

Each complexity factor must be confronted with the question:

> Is is possible to remove this factor without sacrificing the solution to the user's problem?

If the answer is yes, it is an **inadvertent** factor. Ideally, they should be minimized or removed.

Serverless architectures are the newest technologies with the target of removing complexity out of cloud applications. They abstract away the need to plan and manage infrastructure. Developers can build highly maintainable systems by relying upon APIs and SLAs and focusing on the user's problem, not the infrastructure.

## Evolution

Change can't be avoided in most - if not all - software projects. It is just a result of the real world: we learn new things, business and people needs change over time, technologies go obsolete.

Applications must account for change and keep in a good shape to accommodate them, when it becomes desired, necessary or inevitable to adapt.

**Evolvability**[^3] is the term we're looking for here. It is a characteristic of architectural and coding designs that enables efficient and reliable accommodation of changing requirements.

Characteristics of an evolvable system:

1. **Analyzable**: make it possible and easy to analyze which parts are influenced by a particular change possibility;
1. **Integral**: as the system evolves, it stays coherent and integral to its intended architectural designs, patterns and styles[^4];
1. **Modifyable**: allows for modifications or extensions to its features to be implemented without undesired and unintended side effects;
1. **Portable**: being able to port the system throughout different environments;
1. **Testable**: enables validation of modifications before implementation;

---

# Footnotes

_This article was heavily inspired by the [Designing Data-Intensive Aplications](http://shop.oreilly.com/product/0636920032175.do) book, by [Martin Kleppmann](https://www.linkedin.com/in/martinkleppmann/). The book itself is a compilation of a multitude of sources, some of which we link below in the footnotes_.

[^1]:
     ["No Silver Bullet - Essence and Accident in Software Engineering" - by Frederick P Brooks](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)

[^2]:
     The original term coined by Ben Moseley and Peter Marks in the ["Out of the Tar Pit"](http://curtclifton.net/papers/MoseleyMarks06a.pdf) article is **accidental complexity**. We deliberately chose **inadvertent** because accident is usually associated with chance. These complexity factors are a byproduct of decisions. Nevertheless the complexity byproducts might not have been considered in the decision-making processes, they were not a product of chance.

[^3]:
     [Analyzing Software Evolvability - by Hongyu Pei Breivold, Ivica Crnkovic, Peter J Eriksson](http://www.es.mdh.se/pdf_publications/1251.pdf)

[^4]:
     Keeping coherent to the initial designs, patterns and styles of a software project doesn't mean the architectural decisions cannot change over time. Such modifications are perfectly possible. The _integrity_ part of _evolvability_ aims at keeping the entire team on board and conforming, at any time, with the current architectural decisions.
