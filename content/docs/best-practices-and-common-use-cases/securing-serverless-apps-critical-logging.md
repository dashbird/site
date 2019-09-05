---
date: 2019-02-13
title: Critical security logs
linktitle: Critical security logs
description: Securing serverless applications with critical logging.
kbSeries: ["EBest Practices"]
kbSeries_weight: 300
---

Some types of information are critical to log so that they are available when it comes the time to act upon or prevent security breaches.

Having critical logs will help, for example, understand which security flaws attackers explored (or are trying to explore), and how to fix them, or build a blacklist of IP addresses, or identify compromised customer accounts.

Below are some examples of items that may be interesting to log from a security standpoint. Beware that sensitive information should not end up in application logs. User personal data or identifying information, as well as database query statements and other internal aspects of your app could be very dangerous to be logged in an unprotected format.

### Invocation/Event Inputs
When analyzing or acting on a possible security breach, it would be helpful to retrace the attacker’s steps and having the invocation payload received by your Lambdas is certainly going to help on that.

### Response Payload
Similarly, the response output will not only understand which behaviors the attackers were leading your application into but also recording which datapoints may now be in possession of a malicious third party.

### Database queries
Logging database queries will also help to identify how attackers are trying to explore your data repositories. Worst-case scenario, it will tell you what information may have been breached.

Be sure to not log anything sensitive. Usually, query parameters should be omitted in logs, (especially if they are user inputs), leaving only the basic query structure.

### Authentication Requests
Especially the failed authentication requests are essential to log. Additionally, make sure to include in the logs everything you can about the requester and the context, such as the IP Address and which areas of the application the user was trying to gain access to.

### The 4 W’s
Based on the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html">OWASP Logging Cheat Sheet</a> recommendations, we should be logging: When, Where, Who and What in every function invocation. That’s applicable to all items we discussed above and any other logging scenario in our serverless app.


---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_
