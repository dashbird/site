---
date: 2019-11-08T10:00:00-03:00
title: "Invocation, Function and Runtime Errors"
description: "Types of possible errors in a Lambda function and how to handle them"
learning: ["MLogging"]
learning_weight: 100
---

# Invocation Errors

The invocation can raise errors for a variety of reasons[^1]. A few examples are listed below. Invocation errors will make Lambda return a 400-series or 500-series HTTP status code.

For a complete list of invocation errors, please refer to the AWS documentation[^2].

## Event Payload

* Larger than the Lambda limit[^3]
* Contains a parameter with invalid type

## Request

* Trying to invoke an inexistent function
* Client doesn't have permissions to invoke the required function

## AWS Account

* Account services are suspended
* Reached the limit of concurrent Lambda microVMs running

# Function Errors

Function errors happen when, for example:

* Developer's code raises an exception
* There is a syntax error in the code preventing the execution
* The execution reaches the timeout limit

AWS Lambda will automatically add the `X-Amz-Function-Error` header and a JSON as the response with details about the function error. Because of that, it is a good practice to avoid the code from raising exceptions, since it will expose internal implementation details. This could potentially compromise the application security.

# Runtime Errors

AWS provides guidance on handling function exceptions for all runtimes supported by Lambda. Below is list with reference pages for each runtime:

* [Python](https://docs.aws.amazon.com/lambda/latest/dg/python-exceptions.html)
* [Node.js](http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-mode-exceptions.html)
* [Java](http://docs.aws.amazon.com/lambda/latest/dg/java-exceptions.html)
* [C#](http://docs.aws.amazon.com/lambda/latest/dg/dotnet-exceptions.html)
* [Ruby](http://docs.aws.amazon.com/lambda/latest/dg/ruby-exceptions.html)
* [Go](http://docs.aws.amazon.com/lambda/latest/dg/go-programming-model-errors.html)

---

# Footnotes

[^1]:
     [Error Handling and Automatic Retries in AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/retries-on-errors.html)

[^2]:
     [Lambda API Invoke Errors](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html#API_Invoke_Errors)

[^3]:
     [Lambda accepts event payloads with up to 6 MB in synchronous invocations and 256 KB for asynchronous mode](https://docs.aws.amazon.com/lambda/latest/dg/limits.html)
