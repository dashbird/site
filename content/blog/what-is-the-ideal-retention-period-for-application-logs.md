---
title: What is the ideal retention period for application logs
description: A list of criteria to take into consideration when setting up your log retention policies
date: 2020-03-24T00:00:00.000Z
frontImage: "2020-03-24/what-is-the-ideal-retention-period-for-application-logs.jpg"
thumbnail: "images/blog/2020-03-24/what-is-the-ideal-retention-period-for-application-logs.jpg"
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
blog: ["Serverless", "Logs", "Debugging", "AWS Lambda", "CloudWatch"]
---

# What is the Ideal Retention Period for Application Logs?

That is a common question I see [among developers](https://twitter.com/DavidWells/status/1240007302091911168). Most of the time, nobody cares about system logs. But when things go south, we absolutely need them. Like water in the desert, sometimes!

At [Dashbird](https://dashbird.io), we have a list of criteria compiled to determine a reasonable retention policy for application logs. There is no one-size-fits-all, though. The analytical dimensions below will give a _relative_ notion of how long the retention period should be.


# Criticality

Different retention policies for each part of the system can be set depending on how important they are. Mission-critical components can have an extended period to provide extra peace of mind. Services with a marginal value may have logs dumped in two days, for example.


# Security

Applications that deal with sensitive or personal data, as well as high-risk processing, should also have an extended retention policy. Services taking care of credit card authorization and user authentication are some examples.

Each system requires its own analysis. A ride-hailing app, for instance, may need to keep trip logs for a certain period to act on any issues reported later. Services that track customer behavior on the app for improvement purposes, on the other hand, might not need a longer retention policy.


# Law-Enforcement

Internet services that can be used for illegal activity, such as payment processors or online gaming, would need an extended or even perpetual retention policy to comply with law enforcement.

That could also be true for companies processing personal data under privacy regulations, as they might need to produce evidence of consent.

Accounting and tax compliance software is also likely to be subject to longer retention policies - possibly for years - as government authorities and corporate auditors may be entitled to conduct retroactive analysis.


# Maturity

For systems that have been around for a while and are not under constant development of features, new issues will rarely happen. Therefore, in mature software systems, a shorter retention policy might be acceptable to reduce storage costs.


# Frequency

Applications that run infrequently (i.e. once every month) should have extended retention policies, as developers might need to verify multiple executions to track down the source of an issue. The low execution frequency would require going back further in time to conduct the debugging.


# Cost-effectiveness

Before settling on a retention policy, make sure the cost will be compatible with the project. Project how much data should be generated and how expensive storage is for the intended period. Even though we might want to be safe and store for a long time, it might be reasonable to settle on a more cost-effective option.


# Time to Discovery and Resolution

Track how long it usually takes for your development team to discover and resolve an issue. Make sure the log retention policy gives enough room for debugging.

One way to reduce the average time to discovery and resolution of application issues is by employing [automated alerting systems](https://dashbird.io/knowledge-base/monitoring/failure-detection-and-alerting/) and having an efficient way for developers to [quickly browse logs](https://dashbird.io/blog/navigate-cloudwatch-logs-with-dashbird/) and narrow down the root causes of errors.

