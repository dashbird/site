---
date: 2017-06-05
title: Migrate to our new data importer
linktitle: Migrating data importer
description: 
kbSeries: ["EAccount Settings"]
kbSeries_weight: 500
---

The new importer works by streaming logs from CloudWatch with a Kinesis stream ensures that Dashbird does not miss a single invocation and that the delay is not dependant on the inner workings or Dashbird log-polling worker. 

### Improved data integrity and scalability
A major improvement is addressing the developers need for easy observability into their serverless applications. Now the latency has been shaved down to **under 30 seconds**. With the old importer you’d have to wait around 2 minutes to see function updates in the dashboard so getting that number lower was a big win. 

**What this means for you is that you will be able to basically monitor your app in real time.**

### Steps to migrate to the new importer

<div class="row justify-content-md-end">
  <div class="col-lg-8 col-md-6 col-xs-12">
    Migrating to our new importer and getting all the benefits is incredibly easy. The legends in our engineering team have created a CloudFormation stack for you that automates the migration process. Just press the pretty pink button!
  </div>
  <div class="col-lg-4 col-md-6 col-xs-12">
    <a href="https://app.dashbird.io/importer/migration" target="_blank" class="no-decoration">
      <button class="input-group-addon cta-btn cta-pink text-white d-block w-100-percent">
        Migrate to new importer!
      </button>
    </a>
  </div>
</div>
<br/>

### Start the migration

Here's how simple it really is. 

![](/images/docs/importer-migration.png)

- In Dashbird you press the `create new cloudformation stack` link, it will take you to your AWS account. 
- Following the instructions you'll see it creates a `DasbirdIntegrationRoleArn`. 
- Copy it, paste it in the field as specified, and press **Finish**.

---

If you have a complex use case for filtering, feel free to contact support from the chat bubble or write at <a href='mailto:support@dashbird.io'>support@dashbird.io</a>.