---
date: 2017-06-05
title: Best Practices - Error Handling With AWS Lambda And Java
linktitle: Java
description: Catching and troubleshooting AWS Lambda errors when using Java.
kbSeries: ["EBest Practices"]
kbSeries_weight: 300
---

Java, being the oldest and most popular programming language in the world (<a href='https://www.tiobe.com/tiobe-index/' target="_blank">according to TIOBE Index</a>) has some advantages and disadvantages for using AWS Lambda. One of the biggest problems being slow cold starts, yet it often outperforms other languages in consecutive executions (depending, of course, on what task is performed).

As with any piece of code, it's important to handle possible failures and to ensure that you get alerted as soon as problems occur. We're going to go through common failures of Java based AWS Lambda functions and how to handle them with Dashbird.

### Failure types

First off, let's go through the common failure types that we should acknowledge.

#### Parsing errors & checked exceptions

Since java applications must be compiled before they can be deployed to AWS, they are immune to a parsing errors happening during their executions - these get picked up while building the standalone jar file. This means you have one less thing to worry about.

#### Exceptions

An exception is a problem that arises during the execution of a program. When an Exception occurs the normal flow of the program is disrupted and the program/Application terminates abnormally, which is not recommended, therefore, these exceptions are to be handled.

Exceptions can be caused either user error, programmer error or by physical resources that have failed. Following are some scenarios where an exception occurs.

 * A user has entered an invalid data.

 * A file that needs to be opened cannot be found.

 * A network connection has been lost in the middle of communications or the JVM has run out of memory.


 **Unchecked exeptions**

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
  at Exceptions.Unchecked_Demo.main(Unchecked_Demo.java:8)Except
```

Dashbird is built to catches all exceptions automatically and reports them to the configured sources for you to pick up.
![Alerts](/images/docs/alerts.png)

<a href='/docs/user-guide/alerting/' target='_blank'>Read more about configuring alerts in Dashbird</a>

### AWS Lambda errors

Apart from Java specific errors, programmers have to think about failures that are specific to Lambda functions. Below we have covered most of the problems that cause headaches to serverless developers.

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

This covers much of what you need to know about error handling in AWS Lambdas. If you have further questions about serverless or this article, feel free to use the chat plugin to contact us or write at <a href='mailto: support@dashbird.io'>support@dashbird.io</a>.
