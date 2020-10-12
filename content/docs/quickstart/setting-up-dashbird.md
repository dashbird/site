---
date: 2020-04-11
title: Setting up of Dashbird
linktitle: Setting up of Dashbird
description: Setting up your Dashbird account takes only a few minutes and doesn't need any code changes or wrappers getting implemented.
kbSeries: ["BQuickstart"]
kbSeries_weight: 100
aliases:
  - /help/settings/configuring-dashbird/
  - /docs/settings/configuring-dashbird/
  - /docs/get-started/quickstart/
---

### Register your account

If you haven’t already, start by filling out the <a href="/register">registration form</a>. In case you’ve already done that, please <a href="https://app.dashbird.io/auth/login" target="_blank">sign in here</a> and continue to the next step.



### Integrate Dashbird with your AWS account

<img src="https://dashbird.io/images/docs/onboarding.png">


<em>Dashbird works by collecting logs, metrics and listing resources under your AWS account. To do that, we need limited access to your account. After completing the registration form a custom CloudFormation template is generated for you. For details of what this template contains, check out this <a href="https://s3.amazonaws.com/dashbird-cf/cloudformation.yml">cloudformation template.</a> </em>

<em>It can take a few minutes until the stack creation completes.</em>
