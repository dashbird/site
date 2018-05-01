---
date: 2017-06-05
title: Debugging with Dashbird
linktitle: Debugging
description: Debugging
kbSeries: ["CUser Guide"]
kbSeries_weight: 250
---

Dashbird is built so that developers can detect and understand failures quickly and easily. Sometimes it takes a bit of digging to understand what went wrong with a particular piece of code.

Here are the features/views for effective debugging in Dashbird:

 *  Error views
 *  Log searching
 *  Function view
 *  Live tailing
 *  Tracing

### Error views

Error view is often the point of failure discovery. It shows you the **stack trace**, **occurence count**, **logs** and **a list of reoccurences**. Usually developers are able to figure out what went wrong from this view.

<a href='/images/docs/python-error.png' target="_blank"><img alt='Error view' src='/images/docs/python-error.png'></a>

### Log searching

With Dashbird, you can search through the logs of all Lambda functions. This is useful for finding specific invocations that are relevant to you.
<a href='/images/docs/search.png' target="_blank"><img alt='Search' src='/images/docs/search.png'></a>

### Function view
To debug why a certain function is misbehaving, you can look at the perfomance, resource usage, cost and invocation history of that function, along with all the different errors that function has had. Basically you can put any function under a magnifier glass and work on it. It's a good fit to work with a function view also when developing a function and iterating between deploys.

<a href='/images/docs/functionview.png' target="_blank"><img alt='Function view' src='/images/docs/functionview.png'></a>

### Live tailing
Use this to observe function activity in almost real time. Our UI also detect errors and failures on the fly so it's super easy to observe the life of one function that's particularly important.

<a href='/images/docs/livetailing.png' target="_blank"><img alt='Live tailing' src='/images/docs/livetailing.png'></a>

### Tracing
Our integration with X-Ray connects each invocation with an trace and gives you a breakdown of execution. <a href='/docs/user-guide/tracing'>Read about tracing from here.</a>
