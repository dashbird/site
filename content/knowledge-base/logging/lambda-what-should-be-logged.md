---
date: 2019-11-13T19:28:00-03:00
title: "Lambda: What Should be Logged"
description: "Best practices for what to log in an AWS Lambda function"
learning: ["MLogging"]
learning_weight: 200
---

# Application errors

Exceptions that are the result of an error or unexpected issue should be logged, along with the stack trace containing details for where exactly the code failed.

Not all exceptions may be interesting to log. For example: if your user requests to delete an inexisting element in a database, your application may raise an exception that is handled for a nice response to the user. This exception is probably not necessary to log, unless there’s some value to it depending on the context.

# HTTP Headers

Lamdbas serving as a public API backend (perhaps integrated with API Gateway) can benefit from logging the request and response headers. Data POSTed or PUT by the API requesters are also important to log. Be sure to not log secrets or other datapoints that are potentially sensitive.

# Debugging info

For applications with complex data flows, logging messages manually may be helpful to debug potential issues later.

In the event of an error, instead of having to replay the invocation to identify the cause, simply inspecting the logs might be sufficient, if they provide enough information.

# Processes and threads

For projects that rely on concurrent and/or parallel execution, it may be interesting to place additional logs to help in identifying what is being executed in each thread and/or process.

# Critical Security Logs

Some types of information are critical to log so that they are available when it comes the time to act upon or prevent security breaches.

Having critical logs may help to:

* Identify which security flaws attackers explored (or are trying to explore)
* Insights about how to fix vulnerabilities
* Build a blacklist of IP addresses
* Spot compromised customer accounts

## Invocation/Event Inputs

When analyzing or acting on a possible security breach, it would be helpful to retrace the attacker's steps. That includes which parameters were provided in invocation payloads.

## Response Payload

Similarly, the response output should be logged. This will help to reveal which behaviors the attackers were leading the application into. It would also record which datapoints may now be in possession of a malicious third party.

## Database queries

Logging database queries also helps in identifying how attackers are trying to explore application data repositories. In a worst-case scenario, it will tell what information may have been exposed.

It's important to avoid logging sensitive data. Usually, query parameter values should be omitted in logs, (especially if they are user inputs), leaving only the basic query structure.

## Authentication Requests

Especially the failed authentication requests are essential to log. Additionally, developers should include in the logs every possible information about the requester and the context. IP addresses, user-agent, which areas of the application the user was trying to gain access to, etc.

## The 4 W's

Based on the OWASP Logging Cheat Sheet recommendations, four types of information should always be logged:

* When
* Where
* Who
* What

---

# Footnotes

[^1]:
     [OWASP Logging Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
