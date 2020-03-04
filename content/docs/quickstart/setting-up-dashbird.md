---
date: 2017-06-05
title: Setting up of Dashbird
linktitle: Setting up of Dashbird
description: Setting up your Dashbird account takes only a few minutes and doesn't need any code changes or wrappers getting implemented.
kbSeries: ["BQuickstart"]
kbSeries_weight: 100
alias:
  - /help/settings/configuring-dashbird/
  - /docs/settings/configuring-dashbird/
---

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

Once you've configured your AWS account to connect to Dashbird, get ready to find out the basics about your account settings.

## User settings

<div class="row">
  <div class="col-md-7 col-sm-12 col-xs-12 text-md-left pt-3">
    <p class="lato">Navigating to the <a href="https://app.dashbird.io/profile">Profile</a> settings is super simple, just choose the <b>Profile</b> option from the dropdown menu in the top right corner of the navigation bar.</p>
  </div>
  <div class="col-md-5 col-sm-12 col-xs-12 imgs-fluid">
    <img src='/images/docs/profile-menu-dropdown.png'>
  </div>
</div>

After reaching the **User settings** you'll have the freedom to edit your general account settings, change your password if you so wish, and of course tweak your E-mail notification settings.

![User settings](/images/docs/profile-profile-tab.png)

<br>

## Session history
Another incredibly convenient feature is the ability to have an **overview of all user sessions** your account has been accessed with. But, it doesn't stop there, you can also revoke any session you want, giving you another layer of security regarding account access. Now that's just cool.

![User settings](/images/docs/profile-session-history.png)

<br>

## Start auto reload
<div class="row">
  <div class="col-md-7 col-sm-12 col-xs-12 text-md-left pt-3">
    <p class="lato">The final thing to learn about your account's basic setup is the <code>start auto reload</code> button in the top navigation bar.</p>
  </div>
  <div class="col-md-5 col-sm-12 col-xs-12 imgs-fluid">
    <img src='/images/docs/profile-auto-reload.png'>
  </div>
</div>
By toggling this to `on`, you'll have enabled the auto reload feature for all graphs across your entire account. **No need to hit** `F5`, just **let Dashbird reload everything automagically for you!**
