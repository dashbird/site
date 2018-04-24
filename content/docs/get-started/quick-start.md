---
date: 2017-06-05
title: Quick Start with Dashbird
<<<<<<< HEAD
linktitle: Quick start
=======
linktitle: Quick Start
>>>>>>> f6b62016e2f3ac98b710f135f0bc66f8fe44a7b6
description: Quick start
kbSeries: ["BGet Started"]
kbSeries_weight: 200
aliases:
 - /setup
 - /docs/getting-started/setting-up-dashbird/
 - /docs/getting-started/get-started/
 - /help/basic/get-started
---

#### _If you haven't already, [**sign up for Dashbird here**](https://dashbird.io/signup) to access the onboarding screen._

<h2>
  <span class="h2 underlined bold">Requirements for setting up Dashbird</span>
</h2>

##### **To set up Dashbird you need to have the following:**
- **Administrator access to your AWS account**

**Open the link to the onboarding screen from your e-mail.**

<br>

<h2>
  <span class="h2 underlined bold">1. Create a new <b>AWS policy</b> for Dashbird</span>
</h2>

- Open your <a href="https://console.aws.amazon.com" target="_blank">AWS console</a>.
- Navigate to `IAM` → `Policies` → `Create Policy`.
- Choose the **JSON** tab and paste the snippet below into the editor

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "logs:FilterLogEvents",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "logs:describeLogStreams",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "lambda:listFunctions",
            "Resource": "*"
        }
    ]
}
```

- Press **Review Policy** and move on to add a name and description
  - Name: `dashbird-policy`
  - Description: `Allow Dashbird to read CloudWatch logs.`
- Move on and press **Create Policy**

Great! You've created an access policy. Now you need to add an AWS role.
  
<br>

<h2>
  <span class="h2 underlined bold">2. Add a new <b>AWS role</b> for Dashbird</span>
</h2>


- Navigate to `IAM` → `Roles` → `Create New Role`.
- Select
  - `Another AWS account`
- Fill out the following:
 - Account ID: `458024764010` - This is Dashbird's AWS account.
 - Check the `Require external ID` checkbox
 - External ID: **copy from the onboarding app**
 - Require MFA: `false`
 - Click **Next: Permissions**
- Select previously created `dashbird-policy` from the policies list.
- Click **Next: Review**
- Fill out the following for role name and description
 - Role name: `dashbird-delegation-role`
 - Role description: `Access role for Dashbird to read CloudWatch logs.`
 - Click **Create role**
- Find the created role in the list and open it.
- If you have done everything correctly, the screen will look something like this.
![Correct result](/images/docs/result.png 'Role')
- **Copy the ARN** of the role

<br>

### 
<h2>
  <span class="h2 underlined bold">3. Setup Dashbird with the created role</span>
</h2>

Back on the onboarding screen:

- Insert your (company) name
- Select your target region.
- Paste the **Role ARN** you copied above.
- **Click Finish!**

Dashbird will check if it has access to your AWS account. If everything is set up correctly, you are redirected to the app.

**It should take approximately 3-4 minutes for the data to start coming in.**
