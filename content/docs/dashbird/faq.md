---
date: 2019-09-03
title: Frequently Asked Questions
linktitle: Frequently Asked Questions
description: Frequently Asked Questions
kbSeries: ["ADashbird"]
kbSeries_weight: 500
---

### How do I set up Dashbird?
Setting up Dashbird takes under 5 minutes and requires no code changes. To start, <a href="https://dashbird.io/%23register&sa=D&ust=1567587525025000">sign up</a> and follow the on-screen instructions to link your AWS account with Dashbird.

#### How is my data stored in Dashbird?
Dashbird imports logs from your AWS CloudWatch API and stores them in a dedicated and encrypted bucket in S3. After that, logs are aggregated and analyzed into data metrics, which are then stored in a secure database hosted on AWS.

### What if things fail?
We have over-provisioned our importer stacks to a point that if half our cloud infrastructure fail for any reason, we could still carry on serving the whole production load for all our clients. Currently, our main importing workflow is being hosted on us-east-1, but we also have idle backups ready on us-east-2.

### How long does it take for Dashbird to read Lambda logs?
It usually takes under 30 seconds after the execution for logs to be visible in Dashbird.

### Do I need to change my code to have Dashbird monitoring?
No, Dashbird does not require any code or configuration change. You will only need to deploy a pre-formatted CloudFormation stack, which takes less than 5 minutes.

### Is there any overhead or latency added to my Lambdas?
Dashbird does not affect the performance of your lambda functions. We get all the information we need from AWS CloudWatch Log groups.

### Is there added cost to my AWS bill?
Dashbird relies on CloudWatch logs to gather data of your Lambda functions.

AWS charges data transferred out of CloudWatch equivalently to data transferred out of an EC2 server. Check it out at <a href="https://aws.amazon.com/cloudwatch/pricing/">AWS CloudWatch pricing</a>. The amount added to your bill is insignificant. <a href="https://dashbird.io/blog/saving-money-switching-serverless/">Here</a> is an article explaining it in more detail.

### How do I invite my team members?
In the top right corner of the screen, go to your “Profile”. In the left side of the page, under “Organization”, go to “Users”. Click on the “Add user” button on the top-right corner to invite anyone you would like to your Dashbird account.
