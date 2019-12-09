---
date: 2019-11-13T15:09:00-03:00
title: "Lambda Programming Languages"
description: "Quick guide for Lambda applications in Nodejs, Python, Ruby, Java, Go, C# / .NET"
learning: ["BAWS Lambda"]
learning_weight: 530
---

# Overview

As we covered in the Lambda Programming Model[^1] page, Lambda functions run inside a microVM, which is launched with a particular runtime (in crude terms, a programming language environment).

Lambda allows developers to implement custom runtimes[^2], but also offer a list of execution environments available out-of-the-box. Implementing applications in these '_default_' environments are the ones this guide is going to cover.


# Runtimes and Programming Languages

## NodeJs

### Overview

Developers can run Javascript code in AWS Lambda by using NodeJS environment.

At the time of writing this piece, the NodeJS versions supported were:

* 12.13.0
* 10.16.3
* 8.10

The underlying operating system depends on the version. Lambda uses Amazon Linux 2 for versions 10+ and Amazon Linux 1 for version 8.

### Anatomy of a Lambda NodeJS function

By default, the main file in a NodeJS Lambda function is `index.js`. It should export a function with the name `handler`. The Lambda environment will passes two arguments to this function:

* `event`: contains data about the request and custom information provided by the requester
* `context`: provides information about the function and the request context[^3]

The names of the `index.js` file and `handler` function can be customized in the AWS Console or through the Lambda CLI.

A _hello-world_ NodeJS function in Lambda would be:

**Example `index.js` file:**

```javascript
exports.handler = async function(event, context) {
    console.log('Event: ', event)
    console.log('Remaining time: ', context.getRemainingTimeInMillis())
    console.log('Function name: ', context.functionName)
    return {
        'logStreamName': context.logStreamName
    }
}
```

### Logging & Debugging

Use the `console` to log errors, debugging or informational messages in the application:

```javascript
exports.handler = async function(event, context) {
    console.info("Event:\n" + JSON.stringify(event, null, 2))
    console.warn("A warning message goes here.")
    console.log("ENV variables:\n" + JSON.stringify(process.env, null, 2))
    return {
        'logStreamName': context.logStreamName
    }
}
```

All logs and messages output by the Lambda function will be available in CloudWatch[^4].

### Error Handling and Tracing




## Python

### Overview


### Anatomy of a Python Lambda function


### Logging & Debugging


### Error Handling and Tracing


## Ruby



## Java



## Go



## C# / .NET



---

# Footnotes

[^1]:
     [Lambda Programming Model](/knowledge-base/aws-lambda/programming-model/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda)

[^2]:
     [AWS Lambda execution environments and custom runtimes](/knowledge-base/aws-lambda/introduction-to-aws-lambda/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda#execution-environment-and-available-runtimes)

[^3]:
     [NodeJS context object](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html)

[^4]:
     
