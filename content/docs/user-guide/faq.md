---
date: 2017-06-05
title: FAQ For AWS Lambda Performance Monitoring With Dashbird - Dashbird Help
linktitle: FAQ
description: Frequently Asked Questions
kbSeries: ["AUser Guide"]
kbSeries_weight: 400
aliases:
 - /help/basic/faq/
---

## 1. How to set up Dashbird?
Setting up Dashbird takes under 5 minutes and requires no code changes.

To start, [sign up](/signup) and follow the on-screen instructions linking your AWS account with Dashbirds.

Full instructions can be found [here](/docs/user-guide/get-started).

## 2. Is there any overhead?
**Dashbird does not affect the performance of your Lambda functions.**

Dashbird gets all of the information from logs when they reach AWS CloudWatch, meaning that the service has no effect on the execution itself.

## 3. Is there added cost for my AWS bill?
**There is almost no added cost to your AWS bill.**

AWS prices Data-transfer out of CloudWatch equivalently to Data-transfer from EC2.
<a href="https://aws.amazon.com/cloudwatch/pricing/" target='_blank'>CloudWatch pricing</a>

The first GB of the month is free, with every GB after that $0.09.

## 4. What is the latency of Dashbird?
It normally takes about 1-2 minutes from execution data to be visible in Dashbird.

## 5. How do I change my password?
To change your password:
_User menu -> Preferences -> change password -> insert new password_

## 6. How to invite team members?
You can invite as many team members to Dashbird as you like.

_User menu -> Invite users -> Add +_

Fill in the form:
![Invite user](/images/docs/inviteuser.png 'Invite user')

## 7. Can I choose which Lambda functions get monitored?
**Yes.**

You can control our log importer by specifying filters.
Navigate to _User menu -> Importer settings_
![Lambda filtering](/images/docs/filtering.png 'Lambda filtering')

Filters are <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>.

Use <code>some-service-*</code> to include and <code>!some-service-prod-*</code> to exclude lambda functions.

By default, all lambdas are imported to Dashbird.

Read more from [here](/docs/settings/configuring-dashbird/).

## 8. How do I delete my account?
You can disable Dashbird from accessing your AWS by deleting the Role and Policy created on signup.
To delete your account, please contact support inside the app or via email at <a href='mailto: support@dashbird.io'>support@dashbird.io</a>.
