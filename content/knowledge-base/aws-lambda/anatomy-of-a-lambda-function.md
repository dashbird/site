---
date: 2019-11-08T11:44:23+02:00
title: "Anatomy of a Lambda Function"
description: "What makes up a Lambda function?"
learning: ["BAWS Lambda"]
learning_weight: 100
---

## Basic code example

The most simplest Lambda function consist of one handler function.

```
  exports.handler = async function(event, context) {
    console.log('Hello world!');
  }
```

As Lambda is an event driven service, the execution of the handler function is triggered by a user or system event.



## Handler function 

`handler` function will be executed each time a Lambda function is triggered. Handler takes two required arguments: an `event object` and a `context object` and an optional `callback object`. 


### Event and context

Event object is the first argument of the handler function and contains information about the event, for example an API request event holds the HTTP request object.

**Context object** contains information about the invocation, function configuration and execution environment.

## Execution order
Lambda functions can be divided into two parts: code inside the handler function and the code outside of it. Code outside the handler function only gets executed during the cold start, while the code inside the handler executes per each function call.

### Initialization

The code outside the handler is executed only during the cold start.

Cold starts

Warm starts
