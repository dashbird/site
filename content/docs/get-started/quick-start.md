---
date: 2017-06-05
title: Quick Start Tutorial For Dashbird Serverless Monitoring
linktitle: Quick start
description: Quick start
kbSeries: ["BGet Started"]
kbSeries_weight: 100
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /docs/getting-started/get-started/
 - /help/basic/get-started
---

<h2>
  <span class="h2 underlined bold">Requirements for setting up Dashbird</span>
</h2>

##### **To set up Dashbird you need to have the following:**
- **Administrator access to your AWS account**

<br>

<h2>
  <span class="h2 underlined bold">1. Sign up</span>
</h2>

Go to the register page and [create an account](/register/). No credit cards are required. Once you create an account and you're set to go.

![register](/images/docs/dashbird-register.png)

<br>

<h2>
  <span class="h2 underlined bold">2. Create a new <b>AWS IAM Role</b> for Dashbird</span>
</h2>

After you sign up you'll be redirected to an onboarding screen where you need to add a **IAM Role ARN**. Lucky for you, our devs have created a CloudFormation stack that makes it stupidly easy to create the IAM Role.

![onboarding](/images/docs/onboarding.png)

Click on the `create a new CloudFormation stack` link and follow along with the steps. 

![select template](/images/docs/select-template.png)

Everything you need to do is just keep on pressing next until you reach a checkbox named **I Acknowledge that AWS CloudFormation might create IAM resources box**. Check it and create the stack.

![tick the checkbox](/images/docs/checkbox.png)

Once the CloudFormation stack is created you'll see it in the console. Here you'll just copy the ARN of the **DashbirdIntegrationRole**.

![cloudformation](/images/docs/cloudformation.png)

Well, that was simple.

<h2>
  <span class="h2 underlined bold">3. Setup Dashbird with the created role</span>
</h2>

All you need to do is **paste the Role ARN** you copied above, press the **All set** button, and you're ready to go. Dashbird will check if it has access to your AWS account. If everything is set up correctly, you are redirected to the app. Logs will start piling in within a minute.

![finished onboarding](/images/docs/finish-onboarding.png)

**It should take approximately 3-4 minutes for the data to start coming in.**

---

Learn more about account configuration by checking out the [next section](/docs/get-started/setting-up-your-account/), or take a look at the [account overview](/docs/account-settings/overview/) for a complete guide.
