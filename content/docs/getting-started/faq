---
date: 2017-06-05
title: Frequently Asked Questions
linktitle: Frequently Asked Questions
description: Frequently Asked Questions
kbSeries: ["ALearn"]
kbSeries_weight: 900
---

### How do I set up Dashbird?
Setting up Dashbird takes under 5 minutes and requires no code changes.

To start, [sign up](/register) and follow the on-screen instructions to link your AWS account with Dashbird.

### Is there any overhead?
**Dashbird does <u>not</u> affect the performance of your lambda functions.**

Dashbird gets all of the information from logs when they reach AWS CloudWatch, meaning that the service has no effect on the execution itself.

Read more about **overhead** and how Dashbird avoids it [here](/docs/learn/overhead/).

### Is there added cost to my AWS bill?

Dashbird relies on CloudWatch logs to gather data of your Lambda functions.

AWS prices Data-transfer out of CloudWatch equivalently to Data-transfer from EC2. <br>Check it out for yourself on AWS at <a href="https://aws.amazon.com/cloudwatch/pricing/" target='_blank'>CloudWatch pricing</a>. The amount added to your bill is insignificant. [Here's](/blog/saving-money-switching-serverless/) an article explaining it in more detail.

### What is the latency of Dashbird?
It usually takes under 30 seconds after the execution for invocations to be visible in Dashbird.

### How do I change my password?
Navigate to the user profile page, where you can press to change your password.
<br>To change your password: _**Menu -> Profile -> General settings -> Password -> Click here to change password**_. You'll be taken to a [change password page](https://app.dashbird.io/profile/password).

### How do I invite my team members?
You can invite as many team members to Dashbird as you like. _**Menu -> Users -> Add +**_



### Can I choose which lambda functions to monitor?

Yes, you can control our log importer by specifying filters.
<br>Navigate to _**Menu -> Importer settings**_

![Lambda filtering](/images/docs/filtering.png 'Lambda filtering')

Filters are <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>.

Use <code>some-service-*</code> to include and <code>!some-service-prod-*</code> to exclude lambda functions. You can also use the `name includes` or `name excludes` to filter functions.

By default, all lambda functions are imported to Dashbird. Check out our [**step by step guide**](/docs/get-started/step-by-step-guide) to read about it in more detail!

### How do I delete my account?
To delete your Dashbird account, first exclude all Lambda functions from being monitored at the <a href='https://app.dashbird.io/client' target="_blank">Lambda filtering page.</a> Wait until all log-group subscriptions to Dashbird Kinesis stream have been removed from under you AWS account. After that it's safe to delete the CloudFormation stack under your AWS. Notify Dashbird support from the support bubble to swipe data from our system.
