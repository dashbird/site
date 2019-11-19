---
date: 2017-06-05
title: Getting Started
linktitle: Getting Started
description: Dashbird is the leading serverless monitoring and troubleshooting platform that helps software engineers to launch agile serverless websites and software.
kbSeries: ["ADashbird"]
kbSeries_weight: 100
---

Dashbird is a service to **monitor**, **debug** and **improve** your lambda functions. **It's tailor made to help develop serverless apps.**

Serverless architecture fundamentally changes how we build, deploy and maintain software. Although AWS CloudWatch can be used to monitor Lambda functions, for example, it was not designed specifically for it, and Dashbird fills the gaps left by CloudWatch and other traditional tools.

### Register your account
If you haven’t already, start by filling out the <a href="/register">registration form</a>. In case you’ve already done that plese <a href="https://app.dashbird.io/auth/login" target="_blank">sign in here</a> and continue to the next step.

### Deploy Dashbird’s client-side code to your AWS account
<img src="https://dashbird.io/images/docs/onboarding.png">


<em>Dashbird works by collecting logs, metrics and listing resources under your AWS account. To do that, we need limited access to your account. After completing the registration form a custom CloudFormation template is generated for you. For details of what this template contains, check out this <a href="https://s3.amazonaws.com/dashbird-cf/cloudformation.yml">cloudformation template.</a> </em>

## Steps
* Make sure you are logged into your AWS account
* Click create a new CloudFormation stack on the onboarding screen
* AWS console opens with a pre-filled S3 template URL (currently must be created to us-east-1)
* Click Next on the Select template page
* Insert stack name (e.g. dashbird-connector)
* Click Next on the Specify details page
* Mark as checked: I Acknowledge that AWS CloudFormation might create IAM resources box tick the checkbox

* Click Create

<em>It can take a few minutes until the stack creation completes.</em>

### Reference Role back to Dashbird
* Once it’s finished, open the stack from the list and scroll down to the Outputs section.
cloudformation

<img src="https://dashbird.io/images/docs/cloudformation.png">

* Copy the Value field of DashbirdIntegrationRole and copy it to the onboarding screen.

* Click Finish

* If everything is valid your account will activate.

**It can take up to 3-4 minutes for data to start appearing.**
