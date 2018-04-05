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

Dashbird imports logs from your AWS CloudWatch API and stores them in a <u>dedicated</u> and <u>encrypted</u> bucket in S3. After that, logs are aggregated and analyzed into data metrics, which are then stored in a <u>secure database</u> hosted on AWS.

### What if things fail?

We have <u>overprovisioned</u> our importer stacks to a point that if half our servers fail for any reason, we could still carry on serving the whole production load for all our clients. Currently our main importing workflow is being hosted on **us-east-1**, but we also have idle backups ready on **us-east-2**.

### What if I have a question or a problem?

You can write to us from the app. The tiny chatbox in the bottom-right corner will send us an instant message. If you like email, shoot us a message at <a href='mailto: support@dashbird.io'>support@dashbird.io</a>. We are dedicated to supporting our users and aim to <u>respond in less than an hour</u>.