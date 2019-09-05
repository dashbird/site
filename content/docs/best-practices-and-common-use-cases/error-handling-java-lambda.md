---
date: 2019-02-13
title: Java
linktitle: Java
description: Catching and troubleshooting AWS Lambda errors when using Java.
kbSeries: ["EBest Practices"]
kbSeries_weight: 400
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

### AWS Lambda errors

Apart from Java specific errors, programmers have to think about failures that are specific to Lambda functions. In <a href="/docs/best-practices-and-common-use-cases/runtime-agnostic/">Runtime-agnostic Best Practices</a> we have covered most of the problems that cause headaches to serverless developers.

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_
