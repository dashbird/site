---
date: 2019-11-08T11:44:23+02:00
title: "Anatomy of a Lambda Function"
description: "What makes up a Lambda function?"
learning: ["BAWS Lambda"]
learning_weight: 100
---

All Lambda functions consist of three key elements: `event handler`, `event object` and the `context object`.

### Handler function

`handler` is the main function that will be executed each time an event occurs. Handler takes two required arguments: an `event object` and a `context object` and an optional `callback object`.

### Event Object

Event object is the first argument of the handler function and contains information about the event, for example an API request event holds the HTTP request object.

### Context object

Context object contains info about the runtime, 
