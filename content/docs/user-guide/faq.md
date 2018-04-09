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


<h2>
  <span class="h2 underlined bold">
    1. How to set up Dashbird?
  </span>
</h2>
Setting up Dashbird takes under 5 minutes and requires no code changes.

To start, [sign up](/signup) and follow the on-screen instructions to link your AWS account with Dashbird.

Full instructions can be found [here](/docs/user-guide/get-started).


<h2>
  <span class="h2 underlined bold">
    2. Is there any overhead?
  </span>
</h2>
**Dashbird does <u>not</u> affect the performance of your Lambda functions.**

Dashbird gets all of the information from logs when they reach AWS CloudWatch, meaning that the service has no effect on the execution itself.


<h2>
  <span class="h2 underlined bold">
    3. Is there added cost for my AWS bill?
  </span>
</h2>
**There is <u>almost no added cost</u> to your AWS bill.**

AWS prices Data-transfer out of CloudWatch equivalently to Data-transfer from EC2.
<a href="https://aws.amazon.com/cloudwatch/pricing/" target='_blank'>CloudWatch pricing</a>

The first GB of the month is free, with every GB after that $0.09.

<h2>
  <span class="h2 underlined bold">
    4. What is the latency of Dashbird?
  </span>
</h2>
It normally takes about 1-2 minutes from execution data to be visible in Dashbird.

<h2>
  <span class="h2 underlined bold">
    5. How do I change my password?
  </span>
</h2>
Navigate to the user profile page, where you can press to change your password.
<br>To change your password: _**Menu -> Profile -> General settings -> Password -> Click here to change password**_

<h2>
  <span class="h2 underlined bold">
    6. How to invite team members?
  </span>
</h2>
You can invite as many team members to Dashbird as you like.

_**Menu -> Users -> Add +**_

Fill in the form:
![Invite user](/images/docs/inviteuser.png 'Invite user')

<h2>
  <span class="h2 underlined bold">
    7. Can I choose which Lambda Functions get monitored?
  </span>
</h2>
**Yes!**

You can control our log importer by specifying filters.
<br>Navigate to _**Menu -> Importer settings**_
![Lambda filtering](/images/docs/filtering.png 'Lambda filtering')

Filters are <a href='https://en.wikipedia.org/wiki/Glob_(programming)' target='_blank'>glob patterns</a>.

Use <code>some-service-*</code> to include and <code>!some-service-prod-*</code> to exclude lambda functions. You can also use the `name includes` or `name excludes` to filter functions.

By default, all Lambda Functions are imported to Dashbird.

Read more from [here](/docs/settings/configuring-dashbird/).

<h2>
  <span class="h2 underlined bold">
    8. How do I delete my account?
  </span>
</h2>
You can disable Dashbird from accessing your AWS by deleting the Role and Policy created on signup.
To delete your account, please contact support inside the app or via email at <a href='mailto: support@dashbird.io'>support@dashbird.io</a>.
