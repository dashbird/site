---
date: 2019-11-21T18:30:00-03:00
title: "Scalability"
description: "What is a scalable system and how to handle increasing loads"
learning: ["ABasic Concepts"]
learning_weight: 510
---

# Overview

A scalable system is one that can continue to perform in a [reliable manner](/knowledge-base/basic-concepts/reliability/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts) under different and increasing levels of load.

Considering a system's scalability is rarely a single variable analysis. It usually involves at least a two-dimentional problem: a load metric and time.

For example:

* How does the database system scales when IOPS[^1] increases from 1,000 to 10,000 over a period of one second?
* How load time is affected when website pageview requests grow from 200 to 5,000 over one minute?

# Load Profile

What developers first need to do is expressing what load means for each of their systems. 

Load could mean something different for each type of system. For a website, it can be visitors or pageviews per second. For a database, it could be concurrent queries, number of IO operations, or amount of data getting in and out of the database servers.

How load is described will also depend on the system architecture.

In an e-commerce website, for example, the system may scale to serve 100,000 people shopping at the same time across a thousand-item catalog. But what happens if 20% of those are shopping a single item?

This is the sort of circumstance that happens due to market trends and human behavior. Developers must account for these factors when thinking about load.

# Handling Load

The more developers strive to anticipate possible challenging load scenarios for the system, the better it will behave in reality.

It is necessary to consider:

* The load profiles and metrics mentioned above
* How much and how fast load can vary
* Which resources are needed to cope with these variations without hurting performance or reliability

Resources can scale:

* Vertically (_scale-up_): increasing CPU power or RAM memory, for example
* Horizontally (_scale-out_): adding more servers to a cluster, for instance

A great number of healthy architecture will mix both approaches. Sometimes, having many small servers is cheaper than a few high-end machines, especially for highly variable loads. Large machines can lead to increased over-provisioning and wasted idle resources. In other cases, perhaps a big machine would perform faster and cheaper than a cluster.

It really depends on the case and developers must try different approaches to find one that suits both performance requirements and project budget.

Using [serverless systems](/knowledge-base/basic-concepts/what-is-serverless/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=basic-concepts) greatly simplifies the level of responsibility developers have over how systems cope with load. These services abstracts away decision-making about _scaling-up_ or _out_, for example, and also provide SLAs that the development team can rely on.

# Load Metrics and Statistics

Metrics will need some sort of aggregation or statistical representation. Average (arithmetical mean) is usually a bad way to represent metrics, because they can be misleading. It doesn't tell how many users actually experienced that level of performance. In reality, no user might have experienced it at all.

Consider the following application load and user base:

| User | Response time |
|------|---------------|
| A    | 210 ms        |
| B    | 250 ms        |
| C    | 240 ms        |
| D    | 20 ms         |

The average response time would be 180 ms. But no user actually experienced that response time. In fact, 75% of the users experienced a performance that is worse than average. Arithmetic mean is highly sensitive to outliers, which is the case of the distribution above.

This is why percentiles are more commonly used to express systems performance. They are also the basis for service level objectives (SLOs)[^2] and aggrements (SLAs)[^3].

The most common percentiles are 95th, 99th and 99.9th (also often referred to as p95, p99 and p999).

A p95 level is a threshold with which at least 95% of the response times fell below. In the example above, our p95 would be 250. Since we have only a handful of request samples, it would be the same threshold for all percentiles. If we were to compute a p75, it would be 240 because 3 out of 4 requests were responded within 240 milliseconds.

---

# Footnotes

_This article was heavily inspired by the [Designing Data-Intensive Aplications](http://shop.oreilly.com/product/0636920032175.do) book, by [Martin Kleppmann](https://www.linkedin.com/in/martinkleppmann/). The book itself is a compilation of a multitude of sources, some of which we link below in the footnotes_.

[^1]:
     [IOPS: Input/Output Operations Per Second](https://en.wikipedia.org/wiki/IOPS)

[^2]:
     [SLO: Service Level Objective](https://en.wikipedia.org/wiki/Service-level_objective)

[^3]:
     [SLA: Service Level Agreement](https://en.wikipedia.org/wiki/Service-level_agreement)
