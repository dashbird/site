---
date: 2019-11-13T15:09:00-03:00
title: "Programming Model"
description: ""
learning: ["BAWS Lambda"]
learning_weight: 500
---

# microVM

A Lambda function runs inside a microVM (_micro virtual machine_)[^1]. When an invocation is received, Lambda will launch a new microVM and load the code package in memory to serve the request. The time taken by this process is called startup time.

The microVM is **not terminated immediately** after it finishes serving its request. Lambda usually keeps the microVM alive from a few minutes up to an hour.

Each Lambda function may have multiple active microVMs at any given point in time. If Lambda receives ten concurrent requests for the same function, it will need to provision ten microVMs to serve all invocations in parallel. Those ten microVMs will remain active for some time after they finish serving the requests.

# Runtime

The microVM has to be launched with a particular runtime. Lambda supports multiple ones, such as Java, Python, NodeJS, .NET, Ruby, Go. It is also possible to implement a custom runtime, as covered in our introductory article[^2].

Lambda will load everything necessary to support code written in the specified runtime and version. The developer doesn't have to worry about operational system package installation and updating, installing runtime packages, etc. The only two things to take care of are the code that is supposed to be executed, and any third-party libraries not included in the runtime by default.

# Main objects

Each Lambda package must contain at least one file, which will serve as the entry point for all execution. By default, Lambda will be looking for a file named `lambda_function`, but it's possible to customize the name.

The `lambda_function` file must contain at least one method. The method is called `lambda_handler` by default. It is also possible to customize the method's name. This is the entry point within the `lambda_function` file to start executing the developer's code.

When an invocation is received by Lambda, it will run `lambda_function.lambda_handler`. From that point on, the developer's code can do virtually anything. When running the `lambda_handler` method, Lambda will provide two arguments:

* `event`: contains information about the invocation event and arguments provided by the requester, if there are any.
* `context`: ontains information about the Lambda runtime, such as the function name, version, memory limit, etc.

# Response and Errors

Lambda functions must return a **JSON serializable** value. Providing a non-serializable response will trigger a runtime error.

Errors raised and uncaught by the application will be returned to the requester in the following format:

```javascript
{
    'errorMessage': 'String',
    'errorType': 'String',
    'stackTrace': [
        'String 1',
        'String 2',
        '...',
        'String n'
    ]
}
```

This is not desirable because it leaks information about the runtime and app implementation. Especially from a security standpoint if untrusted third-party actors will be interacting with the function.

It is highly recommended to catch any exceptions raised by the application in the `lambda_handler`, log the error for later inspection and return a gentle and sanitized response to the client.

# Logging

Anything logged by an application running in AWS Lambda, including runtime errors and warnings, for example, are stored in AWS CloudWatch Logs[^3] by default. If the application is set to log informational messages or generates its custom logging messages, they will also be logged in CloudWatch Logs.

To disable CloudWatch logging, simply remove the write permission to CloudWatch Logs from the Lambda function IAM role. This **highly inadvised**, since there will be **no visibility** over the function execution.

Each Lambda function will have its own CloudWatch Log Group, and each microVM will have a corresponding CloudWatch Log Stream[^4]. Invocation requests logs will be stored inside Log Streams. In case multiple microVMs are needed, multiple Log Streams will be created, and logs from invocations served by each of them will be scattered across those Log Streams.

Developers quickly discover that this log organization model is not clever nor optimized for investigation and debugging. Professional services - such as [Dashbird](https://dashbird.io/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda) - will read from CloudWatch Logs and provide a well-crafted interface that improves issue discoverability and speeds up debugging, sometimes by multiple orders of magnitude[^5].

# Stateless

Lambda microVM environment is stateless, meaning that nothing remains persisted after the microVM is terminated. In order to store data permanently, it's necessary to use an external storage system, such as S3[^6] for blog storage or a database such as DynamoDB[^7].

It is possible to share data temporarily between one invocation and another inside the same microVM. Simply set a variable outside the `lambda_handler` and any information stored there will be available across invocations. Once the microVM is terminated, this data will be lost, though.

Sharing information across invocations is not recommended. It can lead to leaking information that opens up security issues. A request serving one user might store information and make it available to another user in a subsequent request without proper authorization.

Loading third-party libraries outside the `lambda_handler` is highly recommended, though. These libraries take time to load. Once loaded and available outside the `lambda_handler`, subsequent invocations can reuse them from memory, speeding up the execution time.


--- 

# Footnotes

[^1]:
     For more information, please check the [AWS announcement](https://aws.amazon.com/about-aws/whats-new/2018/11/firecracker-lightweight-virtualization-for-serverless-computing/) about [Firecracker](https://firecracker-microvm.github.io/), the underlying virtualization technology that manages microVMs for AWS Lambda.

[^2]:
     Refer to the [Introduction to AWS Lambda > Execution environment and available runtimes](/knowledge-base/aws-lambda/introduction-to-aws-lambda/#execution-environment-and-available-runtimes) page.

[^3]:
     [Accessing Amazon CloudWatch Logs for AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-functions-logs.html)

[^4]:
     [Amazon CloudWatch Logs Concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogsConcepts.html)

[^5]:
     As an example of issue discoverability and debugging improvements, we recommend reading the [case study of Blow Ltd](https://dashbird.io/blow-ltd-case-study/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda), whose team reduced debugging time from hours to seconds.

[^6]:
     [AWS S3](https://aws.amazon.com/s3/)

[^7]:
     [DynamoDB Overview and Main Concepts](https://dashbird.io/knowledge-base/dynamodb/overview-and-main-concepts/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda)
