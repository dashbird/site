---
date: 2017-06-05
title: Step by step tutorial for Dashbird integration
linktitle: Setting up Dashbird
description: Setting up Dashbird
kbSeries: ["BGet Started"]
kbSeries_weight: 100
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /docs/getting-started/get-started/
 - /help/basic/get-started
---


This is a step-by-step tutorial for setting up Dashbird for your AWS account.

### Register your account

If you haven't already, start by filling out the [registration form](/register). In case you've already done that plese <a href='https://app.dashbird.io/auth/login' target='_blank'>sign in here</a> and continue to the next step.

### Deploy Dashbird's client-side code to your AWS account

![onboarding](/images/docs/onboarding.png)

*Dashbird works by collecting logs, metrics and listing resources under your AWS account. To do that, we need limited access to your account. After completing the registration form a custom CloudFormation template is generated for you. For details of what this template contains, check out this <a href='https://s3.amazonaws.com/dashbird-cf/cloudformation.yml' target='_blank'>cloudformation template</a>.*


#### Steps

- **Make sure you are logged into your AWS account**
- Click `create a new CloudFormation stack` on the onboarding screen
- *AWS console opens with a pre-filled S3 template URL* (currently must be created to `us-east-1`)
- Click **Next** on the Select template page
- Insert stack name (e.g. `dashbird-connector`)
- Click **Next** on the Specify details page
- Mark as checked: **I Acknowledge that AWS CloudFormation might create IAM resources box**
![tick the checkbox](/images/docs/checkbox.png)
- Click **Create**

*It can take a few minutes until the stack creation completes.*

### Reference Role back to Dashbird

- Once it's finished, open the stack from the list and scroll down to the Outputs section.

![cloudformation](/images/docs/cloudformation.png)

- Copy the Value field of `DashbirdIntegrationRole` and copy it to the onboarding screen.


- Click **Finish**
- If everything is valid your account will activate.


**It can take up to 3-4 minutes for data to start appearing.**

---
Learn more about account configuration by checking out the [next section](/docs/get-started/setting-up-your-account/), or take a look at the [account overview](/docs/account-settings/overview/) for a complete guide.
