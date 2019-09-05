---
date: 2019-02-13
title: What should be logged
linktitle: What should be logged
description: What should be logged
kbSeries: ["EBest Practices"]
kbSeries_weight: 200
---

### Application errors
Exceptions that are the result of an error or unexpected issue should be logged, along with the stack trace containing details for where exactly the code failed.


Not all exceptions may be interesting to log. For example: if your user requests to delete an inexisting element in a database, your application may raise an exception that is handled for a nice response to the user. This exception is probably not necessary to log, unless there’s some value to it depending on the context.

### HTTP Headers
In case your Lamdba is serving as a public API backend (perhaps connected to API Gateway), it is interesting to log the request and response headers, as well as data POSTed or PUT by the requesters - be sure to not log data that is potentially sensitive or secret.

### Debug info
If your application flow is complex enough, placing some manual logging messages may be helpful to debug potential issues later. Using a tracing system, such as <a href="https://aws.amazon.com/xray/">AWS X-Ray</a>, which also integrates with Dashbird, is also highly recommended in this case.

### Processes and threads
For projects that rely on concurrent and/or parallel execution, it may be interesting to place additional logs to help in identifying what is being executed in each thread and/or process.

### Security Logs
In the next section of best practices, we present a list of items that are important to log from a security perspective, be sure to check them out as a complement to the current section.

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_
