---
date: 2017-06-05
title: Creating and managing Integrations with Dashbird
linktitle: Integrations
description: Integrations
kbSeries: ["CUser Guide"]
kbSeries_weight: 500
alias:
  - /help/integrations/managing-webhooks/
  - /docs/integrations/managing-webhooks/
---

Webhooks are the foundation for all integrations out of Dashbird. To create an integration with other services, we recommend first integrating Dashbird with Zapier and then using an integration from Zapier to other services.

### Setting up webhooks

**Webhooks can be set up separately for each lambda.** To configure a webhook, open up <a href='https://app.dashbird.io/lambdas' target='_blank'>Lambda list</a> and select the function you want to integrate. You can access the configuration screen under `Webhooks` tab.

As a first request after configuring a webhook, Dashbird will try to validate the remote endpoint. For that a POST request with a following payload is made.

```
{
    "ref": "1f3ac2f4-c25f-42c6-a131-08b7575abdb5",
    "createdAt": 1518048245419,
    "event": "VALIDATION"
}
```

The endpoint is considered valid when the remote endpoint responds with the following payload.

```
{
  "status": "success"
}
```

If the remote endpoint fails to respond with this payload, the request will be retried with 30 second intervals for 3 times. After which, you can manually retry the webhook with the refresh button.

### Supported events

You can choose the events on which the requests are triggered. We will add more in the future.

`INVOCATION_ERROR` - triggers each time a lambda execution fails

`ERROR_GROUP_CREATED` - triggers each time a new error has occurred

`ERROR_GROUP_UPDATED` - triggers if a new error occurrence was found in importing patch. A new importing patch is imported about every minute, given that the lambda function is active enough.
