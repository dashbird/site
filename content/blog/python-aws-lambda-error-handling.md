---
title: Python Error Handling in AWS Lambda
description: Best Practices and need-to-knows for error handling in Python AWS Lambdas.
date: 2018-01-04
frontImage: "04-01-2018/python-error-handling-aws-lambda.png"
thumbnail: "images/blog/04-01-2018/python-error-handling-aws-lambda.png"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
category: "Serverless, Python, Lambda"
---

Python, used in around 53% of all Lambda functions, is the most popular language for doing Serverless. Because of that, in the following weeks, I'm going to introduce you to the facts and best practices in building Lambda functions with Python. First up in the series is an overview of the need-to-knows for error handling Python in AWS Lambda.

### Failure types
There are a lot of different things that can go wrong in your Lambda so let's break each of them down.

![Python error handling](/images/blog/04-01-2018/python-error-handling-aws-lambda.png)

#### Syntax Errors
Syntax errors, also known as **parsing errors**, are perhaps the most common kind of failure. They get thrown before any program command is executed. Here's how one looks like: 

```
>>> while True print('Hello world')
  File "<stdin>", line 1, in ?
      while True print('Hello world')
                     ^
SyntaxError: invalid syntax
```

#### Exceptions
**Exceptions** occur if a statement or expression is syntatically correct but an error is caused when executing it. As a developer, you can handle exceptions and make them non-fatal to your program. However, most execptions are not handled and result in an error message like this:

```
>>> 10 * (1/0)
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
ZeroDivisionError: division by zero
>>> 4 + spam*3
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
NameError: name 'spam' is not defined
>>> '2' + 2
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
TypeError: Can't convert 'int' object to str implicitly
```

#### Failed to import module
Worth noting separately is the import module exception. In essence, this is an exception as every other, yet it requires some special attention in Lambdas. **It is raised before the execution reaches the function handler**, meaning it does not reach the execution wrapped by the function handler. This usually prevents this type of failure to be reported by error alerting agents.

```
START RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Version: $LATEST

Unable to import module 'lambda_funxction': No module named 'lambda_funxction'

REPORT RequestId: db1e9421-724a-11e7-a121-63fe49a029e8  Duration: 15.11 ms Billed Duration: 100 ms  Memory Size: 128 MB  Max Memory Used: 18 MB
```

Read more about <a href='https://docs.python.org/3.3/tutorial/errors.html' target='_blank'>how to handle exceptions in Python.</a>

### AWS Lambda errors

#### Resource constraint: TIMEOUT
When you are using <a href='https://serverless.com/framework/docs/providers/aws/guide/functions/' target='_blank'>The Serverless Framework</a> the default timeout is 6 seconds, but you can configure it up to 5 minutes. Here's how a timeout error looks in CloudWatch.
```
REPORT RequestId: 41a10717-e9af-11e7-892c-5bb1a4054ed6  Duration: 300085.71 ms  Billed Duration: 300000 ms Memory Size: 128 MB Max Memory Used: 92 MB
2017-12-25T20:12:38.950Z 41a10717-e9af-11e7-892c-5bb1a4054ed6 Task timed out after 300.09 seconds
```

#### Resource constraint: OUT OF MEMORY
Lambda executions can run into memory limits. You can recognise the failure when both the `Max Memory Used` and `Memory Size` values in the REPORT line are identical.

Example:
```
START RequestId: b86c93c6-e1d0-11e7-955b-539d8b965ff9 Version: $LATEST

REPORT RequestId: b86c93c6-e1d0-11e7-955b-539d8b965ff9 Duration: 122204.28 ms Billed Duration: 122300 ms Memory Size: 256 MB Max Memory Used: 256 MB

RequestId: b86c93c6-e1d0-11e7-955b-539d8b965ff9 Process exited before completing request
```

#### Configuration failures
In this case, the Lambda function handler that is referenced does not exist.

```
START RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Version: $LATEST

Handler 'lambda_handlerx' missing on module

REPORT RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Duration: 15.11 ms Billed Duration: 100 ms Memory Size: 128 MB Max Memory Used: 18 MB
```

## Handling Failures
Okay, so now we know what can go wrong. Fortunately, Lambda has a few tricks up its sleeve that we can use to remedy the situation.

### Retry behaviour in AWS

**Synchronous invocations:** (API Gateway, Amazon Alexa, etc.)

In this case, Lambda returns a 429 error to the invoking application, which is responsible for retries. Some synchronous event sources **might have retry logic built in**, so be sure the check the <a href='https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html' target='_blank'>Supported Event Sources</a> from AWS.


**Asynchronous invocations:** (AWS SNS, AWS SES, AWS CloudWatch, etc)

These events are queued before they are invoked and if the execution fails, **they are retried twice** with delays between invocations. Optionally, you can specify a <a href='https://docs.aws.amazon.com/lambda/latest/dg/dlq.html' target='_blank'>Dead Letter Queue</a> for you function and have the failed events go to AWS SQS or SNS. However, if you do not specify a DLQ, the event is discarded after two retries.

##### **Stream-based event sources** (Amazon Kinesis Data Streams and DynamoDB streams):
In this case, Lambda polls your stream and invokes a Lambda function. If the invocation fails, Lambda will try to process the batch again until the data expires.
To ensure that stream events are processed in order, the exception is blocking and the function will not read any new records until the failed batch is either successfully processed or expired.

### Idempotent functions
Depending on the flow of your system, retries can be harmful. For instance, lets imagine a function that is responsible for adding user row to the database and sending a welcome email. If the function fails after creating the user, and gets retried, you will have a duplicate row in the database.

A good way to overcome this is to design your functions to be <a href='http://www.restapitutorial.com/lessons/idempotency.html' target='_blank'>idempotent</a>.

**Idempotent functions** are functions with a single task, which either succeeds or can be retried without any damage to the system. You could redesign the aforementioned function using step-functions. First being the function responsible for adding the user to the database and as a second step, another function sends the email. Read more about step functions <a href='https://aws.amazon.com/step-functions/' target='_blank'>here</a>.


### Improved logging

For later ease of debugging, I recommend logging out useful information like the **event object** (mind not logging out passwords etc.), fishy db and network requests and other possible points of failures. Also, make sure if you handle a critical exception, to log the trace out. This makes it possible for log based monitoring solutions like <a href='https://dashbird.io' target='_blank'>Dashbird</a> to catch and process.

### Log based monitoring & alerting

It's important to note here, that most of these errors don't get reported by default. In the best case scenario, you will notice them in the CloudWatch metrics dashboard, if you happen to have it open. Also, failures that happen outside the program execution are difficult or impossible to be picked up by agents, since the execution is halted before it reaches the handler or from an upper level. A good solution to that problem is detecting these problems from CloudWatch logs. I recommend
using <a href='https://dashbird.io' target='_blank'>Dashbird</a> - an easy to set up Serverless monitoring tool. The good thing about Dashbird is that it has zero effect to your Lambda performance or AWS cost. It also integrates with your Slack account, which brings alerting right to your development chat.

### Conclusion

This covers much of what you need to know about error handling in AWS Lambdas. Let me know in the comments if I missed anything. In the next article, I'm going to go over how to optimise python for peformance and cost. Stay tuned!
