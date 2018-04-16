---
title: "Concurrency and Synchrony in AWS Lambda"
description: The consequences of not thinking about concurrency. Data loss and inconsistencies.
date: 2018-04-16
frontImage: "11-04-2018/dashbird-debugging.jpg"
thumbnail: "11-04-2018/dashbird-debugging.jpg"
author: Ranvir Singh
---

One of the many useful abstractions that AWS offers is scalability. Your function automatically scales up and scales down depending on the amount of workload that it
has to deal with. This is not only cost effective but now developers don't have to think about scaling. Because, of course, that's one of the nastiest
problems to think about. Thankfully, AWS takes care of that, if the traffic increases by ten-folds, then your function starts running in ten times
as many containers as before. The containers divide the workload among themselves and work together like numerous little ants lifting a heavy sugar cube.  

This is known as concurrency. By default, AWS throttles the number of concurrent executions to 1000 across all your functions, in a given region.
If your service encounters traffic more than your AWS throttle limit can allow, the newer requests get either queued for being processed later or they get
dropped. You can know more about throttling behavior <a href="https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html" target=\_blank>here</a>.

Essentially, the reason behind a certain function's throttle could come out of limitations set by your configurations or because of limitations imposed by AWS on your account.

Throttling aside, this kind of scaling, where you scale linearly as your workload increases or decreases, is what we desire. This gets difficult when considering stateful applications.

## The Stateful conundrum

Before we get into statefulness, let's begin with a simpler stateless scenario. Loosely speaking, a stateless application or service means that there is no persistent or changeable data stored somewhere in our infrastructure. The function is invoked by a trigger event and responds to that event in a predictable manner. If the exact same event happens twice, the response would be the same for both the cases. Any piece of information that your service might need is provided by the event itself.

Stateful applications, on the other hand, are written to be aware of multiple factors apart from the trigger event. Here's an example. If you have a database that a user is trying to access, then the outcome of that action is determined not only by the user's request but also by what is stored in the database.
The **state** of the database.

Throw concurrency into the mix and we have a bunch of edge cases to handle. Going back to the database example, if one user tries to read a particular record and another user tries to modify it then we can't do both the operations concurrently. Only after one user is done with the record does the other get to have their turn at it. The operations need to happen in sequence, one after the other. Even if processes are running concurrently we are still stuck waiting. The
benefits of concurrency are still there, but are limited by the design of your software. We have to take everything into account, including the sequence in which requests arrive and which kind of requests we receive. As you can see, there are too many moving parts.

>AWS tries to resolve this by segregating different types of event sources among different AWS services.

## Event source mapping
To get to the bottom of this, a short digression about event source mapping is needed. A Lambda function can be invoked by an event. For things to work out there must be an event source, and a mapping which connects this event source to your function. There are basically two approaches to this problem:

  1. __Push model__ : Used by most AWS services (notable exceptions being DynamoDB and Kinesis, more on this later). Where the service, with the necessary permissions, would do the invocation directly. This, in turn, is sub-classified into:  

     A. **Synchronous execution** : Where your functions can hit the throttle limit and after that the function returns an error code (Error 429) and tells your service whether it was AWS' limitations or the function execution cap set by you that caused the throttle. It is the responsibility of that particular service to respond to the error accordingly.

     B. **Asynchronous execution** : These events offer more flexibility. The events are queued up and can retry for up to 6 hours before they are dropped.

  >Note: You can find more about synchronous and asynchronous program execution
  <a href="https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/basics-async.html" target=\_blank>here</a>. It's shown through a Java example, but the general idea applies to all process execution models. Similarly, you can find whether an AWS service invokes Lambda <a href="https://docs.aws.amazon.com/lambda/latest/dg/invoking-lambda-function.html" target=\_blank> synchronously or asynchronously.</a>  

  2. __Pull model__ : In certain cases, like those of DynamoDB and Amazon Kinesis the responsibility shifts from the event source to AWS Lambda itself. AWS Lambda, the *service*, and **not** your specific Lambda function. You need to provide AWS Lambda with necessary permissions to poll your data streams. In response to data arriving on that stream, functions are invoked. Each stream of data is composed of multiple <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html" target=\_blank>shards</a>. Each shard carries an independent stream of data and can thus be treated separately. Meaning they can carry information from different clients. Breaking it down into more detail, we can note that each shard is composed of multiple sequential records.

  Lambda functions may get throttled on a particular shard, where the new records will keep getting queued up until the older records either get processed or expire. In the meantime, it can continue consuming data on other shards where no records are being queued up. The throttled batch of records may wait for up to 7 days, in case of Kinesis, before they expire.  


## Problems with Concurrency
Unless you are fortunate enough to have an asynchronous and stateless model for your app, concurrency limitations are going to haunt you. Not only do they trigger many cold starts crippling the responsiveness of your application, but they are also a serious threat due to blocked sessions and expired data. Issues like these can be potentially fatal to your business.

To make matters simple, people try to use **asynchronous execution** to their advantage. Services like S3 buckets are perfectly capable of invoking resources in async mode, letting you scale easily, despite having a lot of states to take into account.

Another important approach that you can adopt is to never modify data in place. Be smart, create a new file with the modified data before purging the old one. Try not to mutate state if it is not needed.

[Sign up](https://dashbird.io/signup/) to monitor your function's health. [Dashbird](https://dashbird.io) helps you every step of the way, from keeping track of subtleties like cold starts to knowing whether or not a new solution has made any difference. It sure makes debugging easy.

Stay tuned, have fun, and stick around to read more about Serverless Architecture in one of my next articles!.
