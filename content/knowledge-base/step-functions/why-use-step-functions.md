---
date: 2020-02-02T00:00:00+03:00
title: "What is AWS Step Functions"
description: "Introduction to Step Functions and its features"
learning: ["FStep Functions"]
learning_weight: 200
---

While it is perfectly possible to write code to handle the conditions in workflow transitions, trigger each service, retry failures, etc. The problem is that this can be cumbersome and is likely to not add value to the end users of the application. The same stands for using an open-source[^1] Finite-State Machine software package.


## Reduce time-to-market

Instead of implementing it from scratch and having to deal with another piece of software to secure, deploy and maintain, using Step Functions can cut corners and reduce time-to-market.

The solution is ready to be used, the learning curve is quite flat and easy to get started with. Any development team can start leveraging Step Functions for a variety of use cases in little time, advancing the overall application development and delivering value in a faster pace.


## Resilience

As a serverless, managed service, developers are in fact outsourcing all infrastructure hassle to AWS, which has some of the best-in-class DevOps experts in the world and the largest cloud infrastructure on the planet.

Step Functions can be counted to take care of mission-critical processes. Although it is subject to failure as any technological solution, the likelihood is much lower than it would be in most if not any other in-house implementation.


## Potential cost savings

Depending on the level of usage, it might even be cheaper than implementing an in-house solution. Developer time is expensive nowadays and Step Functions will charge a very small fee for each workflow transition ($0.000025).

Consider an hourly cost of $25 for development services. Ten hours can cover 10 Million Step Functions transitions. Adding up the costs to run a custom solution (virtual machines, load balancing, caching, data persistence, etc), we start to see why Step Functions can actually save money from a project.


# Footnotes

[^1]:
     Many open-source libraries for FSM implementation are available, such as in [Python](https://github.com/pytransitions/transitions), [Javascript](https://www.npmjs.com/package/xstate), and [Java](https://sourceforge.net/projects/java-easyfsm/). (_This is not an endorsement, evaluate and use these software packages at your own risk._)