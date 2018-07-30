---
date: 2017-06-05
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
<!-- <img src="/images/docs/python-error.png" alt="Python Error"> -->
![Python Error Dashbird](/images/docs/python-error.png 'Python Error')


## Exceptions

You can find <a href='https://www.tutorialspoint.com/python/python_exceptions.htm' target='_blank'>the complete list of Python exceptions here</a>.

Exceptions are parsed out automatically in Dashbird, and include a rundown of traceback and logs of the specific invocation.

## AWS Lambda timeout

All calls made to AWS Lambda must complete execution within 300 seconds. The default timeout is 3 seconds, but you can set the timeout to any value between 1 and 300 seconds.

Normally, error handling agents are unable to catch timeout errors, because the execution is halted on an upper level. Dashbird, however, reports timeouts like any other type of error.

Timeouts are expressed in Lambda logs in the following way.

```
REPORT RequestId: 41a10717-e9af-11e7-892c-5bb1a4054ed6  Duration: 300085.71 ms  Billed Duration: 300000 ms Memory Size: 128 MB Max Memory Used: 92 MB
2017-12-25T20:12:38.950Z 41a10717-e9af-11e7-892c-5bb1a4054ed6 Task timed out after 300.09 seconds
```

## Configuration errors

### Missing module

Another scenario for errors in AWS Lambda is when you have a missing module included in your function code. In other types of programs, this isn't a very common occurence since a developer would catch that right away. However, with Lambdas, the container is started up on demand, masking the problem until the user encounters it.

What's important to note here, is that configuration errors are also not reported with agents, since the code execution does not reach the handler.

Here's how it looks like:

```
START RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Version: $LATEST

Unable to import module 'lambda_funxction': No module named 'lambda_funxction'

REPORT RequestId: db1e9421-724a-11e7-a121-63fe49a029e8  Duration: 15.11 ms Billed Duration: 100 ms  Memory Size: 128 MB  Max Memory Used: 18 MB
```

### Missing handler


```
START RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Version: $LATEST

Handler 'lambda_handlerx' missing on module

REPORT RequestId: db1e9421-724a-11e7-a121-63fe49a029e8 Duration: 15.11 ms Billed Duration: 100 ms Memory Size: 128 MB Max Memory Used: 18 MB
```
