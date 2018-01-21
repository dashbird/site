---
title: Top 3 Tools For Monitoring Python AWS Lambda
description: Here are your options to monitor your AWS Lambda functions in 2018.
date: 2018-01-21
frontImage: 21-01-2018/lambda-monitoring-python.jpeg
thumbnail: images/blog/21-01-2018/lambda-monitoring-python.jpeg
author: Andrei Popescu
---

![Monitoring Python AWS Lambda](/images/blog/21-01-2018/lambda-monitoring-python.jpeg)

### Lambda Functions
Serverless architectures, comprised of lambda functions, are an extension of the principles of the service-oriented architectures (<a href='https://en.wikipedia.org/wiki/Service-oriented_architecture' target='_blank'>SOA</a>) which popularized the approach where services (functions) communicate using messages (events). If implemented correctly, serverless architectures can reduce code complexity and provide an easier way to manage the application.

<a href='https://en.wikipedia.org/wiki/AWS_Lambda' target='_blank'>AWS Lambda</a> is a service that runs your code deployed to a container with pre-allocated CPU, disk and memory. Together, your code and its associated configuration, are generically called **“lambda function”**. It abstracts the actual infrastructure, allowing developers to focus solely on the code. The functions are called in response to external events or triggers. Lambda functions are **“stateless”**, with no affinity to the underlying infrastructure and your code must take into consideration that local **resources and processes will not survive current session.**

FaaS solves many problems that the previous architectural models had to cope with. From a developer point of view, the most important aspect is that **you just run your code without bothering with server administration, scalability and availability**. On the other side, there are aspects that have to be dealt with in a **different manner than before.**

One of this aspects is logging.

It is obvious that the old tools used for logging (daemons) are no longer an option since there is no “server” in the traditional sense. Also, since the actual infrastructure is abstracted, you don’t have access to any system-level metrics like RAM, CPU or disk usage.


However, the requirements for a good logging system are pretty much the same:

  - information should be granular
  - data should be available on the shortest amount of time
  - log collection should not impact application performance.

### Monitoring AWS Lambda Functions

Maybe you are asking yourself why should you monitor your Lambda Functions. Well… there are two equally important reasons to do it. First, if you are reading this you probably know AWS is not a free service and every cents counts, especially when you are trying to start your new business. Second, customers are demanding and expect nothing but the best in terms of responsiveness. If an application fails to deliver on this, it will not make any difference how nice is the design or how much marketing it gets, customers will go with the competition.

Monitoring Lambda functions allows developers to gain **important insight on what happens during each execution step.** You will be able to see the errors and also to measure resource consumption for each invocation. Simply put, there is no better way to **optimize the costs** and **performance** of your applications than using a **monitoring tool.**

### A Few Words on CloudWatch

![AWS CloudWatch](/images/blog/21-01-2018/cloudwatch.png)

Let’s start with what’s already in the box.

The built-in tool for Lambda, <a href='https://aws.amazon.com/cloudwatch/' target='_blank' rel='nofollow'>CloudWatch</a>, organises logs based on function, version and containers while Lambda adds metadata for each invocation. In addition, runtime and container errors are included in the logs.
CloudWatch provides two methods to write a log entry:

print statements:

```
print(‘You will see this in CloudWatch’)
```

logger functions available through the logging module:

```
logger.info(‘You will also see this in CloudWatch’)
```

Amazon advises developers to use logger function to get the additional info available like log levels, timestamps and so on.
When you start building your first FaaS application chances are you will begin with using CloudWatch. It is likely that logging will the most used of its features. CloudWatch will let you track issues and for some time you will rely on it. However, as your applications becomes more complex and eventually makes it into production you will become aware of its drawbacks.
Fortunately there are several tools that can make your life easier. In this article we’ll have an in-depth look at the top 3.

### <a href='https://dashbird.io' target='_blank'>Dashbird</a>

![Dashbird Serverless project view](/images/blog/21-01-2018/dashbird-project.png)

Dashbird excels in providing error alerting and monitoring support. It works by collecting and analyzing CloudWatch logs, and has **zero effect to your Lambda performance** or **AWS cost**. It also integrates with your Slack account, which brings alerting right to your `#development` chat. There are no third-party agents or wrappers and all the information is available on a single dashboard which includes:

  - an overview of all invocations
  - top active functions
  - recent errors
  - system health

The dashboard allows you to drill down to invocation level data and you can analyze each function individually. It is very easy to use, and it provides all the information you can ask for in an intuitively manner.

Dashbird provides detailed views for:

  - <a href='https://dashbird.io/python-lambda-performance-tracking/' target='_blank'>performance tracking</a>
  - <a href='https://dashbird.io/free-python-lambda-troubleshooting-tool/' target='_blank'>troubleshooting</a>
  - <a href='https://dashbird.io/python-lambda-activity-tracking-error-monitoring/activity' target='_blank'>tracking and error monitoring</a>
  - <a href='https://dashbird.io/python-lambda-optimization-error-handling/' target='_blank'>optimization and error handling</a>

If your application logic is distributed over large amounts of functions, it makes a lot more sense to collect info from the logs rather than sending telemetry at the execution time and this is exactly where Dashbird shines.

#### Code optimization and Error Handling

Dashbird includes a time-series view to provide developers with information regarding latency and memory usage. There are metrics available for invocation volumes, memory utilisation, duration and cost. Error handling is supported and lots details like stack traces, list of affected invocations, logs for each invocation are collected and analysed.

#### Failure Recognition and Debugging

![Dashbird error view](/images/blog/21-01-2018/dashbird-error.png)


A nice feature baked in Dashbird is failure recognition in logs. Dashbird detects all types of failures for Python, Node.js and Java. This includes crashes, early exits, timeouts and configuration errors. Dashbird detects errors in your Lambda functions and alerts you via Slack or email. Each error includes detailed stack-traces, logs and is linked to similar errors for easier debugging efforts.

<a href='/featues' target="_blank">Read more about the features of Dashbird</a>

### <a href='https://www.iopipe.com/' target='_blank' rel='nofollow'>IOPipe</a>

![IOPipe](/images/blog/21-01-2018/iopipe.png)

IOPipe works by adding decorators to your Python functions. Once wrapped, your functions will be injected with monitoring code:

```
@iopipe
    def handler(event, context):
        pass
```

#### Reporting Exceptions
The IOPipe decorator will automatically catch, trace and raise any uncaught exceptions in your function. If you want to trace exceptions raised in your case, you should use the .error(exception) method and the exception will be added to the current report.

#### Custom Metrics

IOPipe provides support for reporting custom metrics:

```
@iopipe
def handler(event, context):
  # the name of the metric must be a string
  # numerical (int, long, float) and string types supported for values
  context.iopipe.log("my_metric", 42)
```

Plugins
It is worth noting that IOPipe provides plugin support and it is shipped with a tracing plugin:

```
@iopipe
def handler(event, context):
    context.iopipe.mark.start('expensive operation')
    # do something here*
    context.iopipe.mark.end('expensive operation')
    context.iopipe.mark.measure('expensive operation')
```
The code between start and stop will be traced and you’ll have the collected information available in Dashboard. You can also implement your own plugins, by using the `iopipe.plugins.Plugin` interface.
IOPipe is easy to start with, it’s simple and… it could be fun! One thing to note here, is that since IOPipe sends telemetry inside the lambda execution, it adds a small (35-85ms) overhead to each invocation.

### <a href='https://datadoghq.com' target='_blank' rel='nofollow'>DataDog</a>

![DataDog](/images/blog/21-01-2018/datadog.png)

Datadog makes use of a helper function that lets developer send custom metrics as pre-formatted log messages:
```
MONITORING|unix_epoch_timestamp|metric_value|metric_type|my.metric.name|#tag1:value,tag2
```
There is no overhead or latency experienced by end user since data collection works in the background and it allows correlation between Lambda metrics and other operational data, providing context.

There are several metrics available out-of-the-box for function’s execution:

  - execution times
  - invocations
  - invocation errors
  - throttled functions

Datadog defines the following metric types that can be used:

  - gauge, used for instantaneous values,
  - count, a long running counter that can be incremented/decremented,
  - histogram, aggregate metrics with one-second granularity,
  - service check, integer value representing the state of the service

#### Customization

Additionally,  Datadog allows developers to define their own custom metrics by printing out of the Lambda functions following its predefined format.
Alerting
Once metrics are collected from the Lambda functions Datadog can send alerts using the most popular communication tools like Slack or OpsGenie. An interesting feature of  Datadog is their machine learning algorithms which can provide alerts for events like outlier or anomaly detection.

### Conclusion

There is a small price that you have to pay in order to fully enjoy the benefits lambda functions: abstraction, parallel execution, high scalability. You must learn and use the new approach to monitoring serverless architectures. FaaS doesn’t provide metrics in traditional sense but, with proper understanding of the AWS infrastructure you can achieve a great level of observability for your lambda functions. The easiest to get started and the most bang for the buck is offered by <a href='https://dashbird.io/monitor-aws-lambda' target='_blank'>Dashbird</a>.
