---
date: 2017-06-05
title: Dashbird Notification channels
linktitle: Notification channels
description: Integrate Dashbird with Slack or Zapier to get instant error alerts or build your own integration using webhooks.
kbSeries: ["CUser Guide"]
kbSeries_weight: 400
alias:
  - /help/integrations/managing-webhooks/
  - /docs/integrations/managing-webhooks/
---

Notification channels provide a way for users to configure how alerts are sent. Dashbird currently supports Slack and email.

To set up notification channels, open the organisation menu (from the top right corner), and click on "<a href='https://app.dashbird.io/client/notifications' target='_blank'>Notification settings"</a>.

![Metric alerting](/images/docs/notification-channels.png)

## Email notification channel

  * In the right top corner, click  `+ ADD` -> Email
  * Add your email
  * You can now choose the Slack notification channel when setting up policies

## Slack integration

  * In the right top corner, click  `+ ADD` -> Slack. 
  * Follow the on screen instructions of Slack
  * You can now choose the Slack notification channel when setting up policies


## Webhooks 

**Webhooks can be set up separately for each lambda.** To configure a webhook, open up <a href='https://app.dashbird.io/lambdas' target='_blank'>lambda list</a> and select the function you want to integrate. You can access the configuration screen under `Webhooks` tab.

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

---

Check out how you can [set up error alerting and daily account summaries via email](https://dashbird.io/docs/user-guide/alerting/) too!
