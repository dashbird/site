---
date: 2017-06-05
title: Dashbird Notification channels
linktitle: Dashbird Notification channels
description: Dashbird Notification channels
kbSeries: ["BQuickstart"]
kbSeries_weight: 800
---

<p>Notification channels provide a way for users to configure how alerts are sent. Dashbird currently supports Slack and email.</p>

<p>To set up notification channels, open the organisation menu (from the top right corner), and click on “<a href="https://app.dashbird.io/client/notifications" target="_blank">Notification settings”</a>.</p>

<p><img src="/images/docs/notification-channels.png" alt="Metric alerting"></p>

<h2 id="email-notification-channel">Email notification channel</h2>

<ul>
<li>In the right top corner, click  <code>+ ADD</code> -&gt; Email</li>
<li>Add your email</li>
<li>You can now choose the Slack notification channel when setting up policies</li>
</ul>

<h2 id="slack-integration">Slack integration</h2>

<ul>
<li>In the right top corner, click  <code>+ ADD</code> -&gt; Slack.</li>
<li>Follow the on screen instructions of Slack</li>
<li>You can now choose the Slack notification channel when setting up policies</li>
</ul>

<h2 id="webhooks">Webhooks</h2>

<p><strong>Webhooks can be set up separately for each lambda.</strong> To configure a webhook, open up <a href="https://app.dashbird.io/lambdas" target="_blank">lambda list</a> and select the function you want to integrate. You can access the configuration screen under <code>Webhooks</code> tab.</p>

<p>As a first request after configuring a webhook, Dashbird will try to validate the remote endpoint. For that a POST request with a following payload is made.</p>

<pre><code>{
    "ref": "1f3ac2f4-c25f-42c6-a131-08b7575abdb5",
    "createdAt": 1518048245419,
    "event": "VALIDATION"
}
</code></pre>

<p>The endpoint is considered valid when the remote endpoint responds with the following payload.</p>

<pre><code>{
  "status": "success"
}
</code></pre>

<p>If the remote endpoint fails to respond with this payload, the request will be retried with 30 second intervals for 3 times. After which, you can manually retry the webhook with the refresh button.</p>

<h3 id="supported-events">Supported events</h3>

<p>You can choose the events on which the requests are triggered. We will add more in the future.</p>

<p><code>INVOCATION_ERROR</code> - triggers each time a lambda execution fails</p>

<p><code>ERROR_GROUP_CREATED</code> - triggers each time a new error has occurred</p>

<p><code>ERROR_GROUP_UPDATED</code> - triggers if a new error occurrence was found in importing patch. A new importing patch is imported about every minute, given that the lambda function is active enough.</p>

<hr>

<p>Check out how you can <a href="https://dashbird.io/https://dashbird.io/docs/application-guide/errors-and-policies/">set up error alerting and daily account summaries via email</a> too!</p>
