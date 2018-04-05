---
date: 2017-06-05
title: Security and reliability
linktitle: Security & Reliability
description: Overview of reliability and security
kbSeries: ["AUser Guide"]
kbSeries_weight: 350
aliases:
 - /help/basic/security-reliability/
---

### How is my data stored in Dashbird?

Dashbird imports logs from your AWS CloudWatch API and stores them in a dedicated, encrypted bucket in S3. After that, logs are aggregated and analyzed into metrics and other data, which is then stored to a secure database hosted in AWS.

### What if things go down?

We have overprovisioned our importer stacks to a point that if half of our servers fail for any reason we could still carry the whole production load for all clients. Currently our main importing workflow is being hosted on **us-east-1**, but we also have idle backups ready on **us-east-2**.

### What if I have a question or a problem?

You can write to us from the app (there's a little chatbox on the bottom-right corner) or via email (<a href='mailto: support@dashbird.io'>support@dashbird.io</a>). We are very dedicated to supporting our users and aim to always respond in less than an hour.
