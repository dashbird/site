---
date: 2019-02-13
title: Best Practices - Error Handling With AWS Lambda And Python
linktitle: Python
description: Catching and troubleshooting AWS Lambda errors when using AWS Lambda with Python. 
kbSeries: ["EBest Practices"]
kbSeries_weight: 100
aliases:
 - /help/python/error-handling-python-lambda/
 - /docs/python/error-handling-python-lambda/
---

If you are running Python on AWS Lambda, you can catch and get alerted for all errors with Dashbird.

Dashbird detects the following types of errors

 *  Exceptions
 *  Errors
 *  Configuration errors
 *  Timeouts

Errors are detected and parsed Python exceptions and runtime errors from CloudWatch logs, meaning that developers do not need to attach any agents inside their code.

In addition, with each error, you get the context. Logs of the whole invocation, along with memory usage, duration and other meaningful metrics.

On top of that, Dashbird groups similar errors, making it possible to estimate the scope of the problem and make debugging easier. For example, it might help to better observe the problem if you find some commonalities in the executions.

Here's how a Python error looks like in Dashbird.
![Python Error Dashbird](/images/docs/python-error.png 'Python Error')


## Exceptions

You can find <a href='https://docs.python.org/3/library/exceptions.html' target='_blank'>the complete list of Python exceptions here</a>.

Exceptions are parsed out automatically in Dashbird, and include a rundown of traceback and logs of the specific invocation.

## Missing module

Another scenario for errors in AWS Lambda is when you have a third-party module imported in your function code but not found in your Lambda deployment package.

_Obs.: Python built-in modules are available out-of-the-box in the Lambda environment, you obviously don't need to worry about them. Also, <a href="https://boto3.readthedocs.io">boto3</a> is available in all Python functions by default, there's no need to include in your Lambda packages._

Here's how it looks like:

```
START RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Version: $LATEST

Unable to import module 'lambda_funxction': No module named 'lambda_funxction'

REPORT RequestId: db1e9421-724a-11e7-a121-63fe49a029e8  Duration: 15.11 ms Billed Duration: 100 ms  Memory Size: 128 MB  Max Memory Used: 18 MB
```

### AWS Lambda errors

Apart from Python specific errors, programmers have to think about failures that are specific to Lambda functions. In <a href="/best-practices-and-common-use-cases/runtime-agnostic/">Runtime-agnostic Best Practices</a> we have covered most of the problems that cause headaches to serverless developers.

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_