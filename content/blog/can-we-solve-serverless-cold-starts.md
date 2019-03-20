---
title: Can We Solve Serverless Cold Starts?
description: What are cold starts and practical ways to solve them
date: 2019-03-20T12:00:00.000Z
frontImage: "https://thepracticaldev.s3.amazonaws.com/i/e8p8kfb3mn5hztrhh977.jpg"
thumbnail: "images/blog/2019-03-20/cold-ice-optimized-square.jpg"
authorlink: 'https://medium.com/@byrro'
author: Renato Byrro
author_image: '/images/team/renato.jpg'
featpop: most-popular
blog: ["Serverless", "Cold Start", "Lambda"]
---

As everything good in life, serverless also comes with its downsides. One of them is the infamous “cold start”. In this article, we’ll cover what they are, what influences serverless startup latency and how to mitigate its impacts in our applications.

# What is a cold start

Cold start refers to the state our function was when serving a particular invocation request. A serverless function is served by one or multiple micro-containers. When a request comes in, our function will check whether there is a container already running to serve the invocation. When an idle container is already available, we call it a “warm” container. If there isn’t a container readily available, the function will spin up a new one and this is what we call a “cold start”.

When a function in a cold state is invoked, the request will take additional time to be completed, because there’s a latency in starting up of a new container. That’s the problem with cold starts: they make our application respond slower. In the “instant-age” of the 21st century, this could be a big problem.

# How cold starts work

![Ice Cubes](https://thepracticaldev.s3.amazonaws.com/i/046keevie39wh4ds83wp.jpg)

Now that we know what is a “cold start”, let’s dig into how they work. The inner workings may differ from the service you’re using (AWS Lambda, Azure Functions, etc) or open source project (OpenFaas, Kubeless, OpenWhisk, etc), but in general, these principles apply to all serverless compute architecture.

After a request is served by a serverless container, it is usually kept alive and idle for some time. The container orchestration system will have its parameters to decide whether and when a container should be shut down. There’s a trade-off here: keeping the container alive will save startup resources and speed up subsequent requests, but will add up to idle time costs. AWS Lambda typically keeps containers alive for 30-45 minutes. Sometimes more than that (especially for Lambdas running inside VPCs), but it’s not a documented or committed parameter, so don’t trust it blindly.

When a container starts from a cold state, the function needs:
1. Get the package containing your code from external persistent storage;
2. Spin up the container;
3. Load your package code in memory;
4. Run your function’s handler method/function.

These steps take a while to complete, especially items 1 to 3. When a container is already warm, it jumps right to #4, which saves a lot of time and make our app respond faster.

# What can improve startup latency

![Heating Up Ice](https://thepracticaldev.s3.amazonaws.com/i/hoatgeadvkwmvfulemc6.jpg)

The “cold start” latency impact varies from a couple of hundred milliseconds to a few or several seconds. The main factors driving cold start latency are:

- **Memory size**: the more memory you allocate to your function, the faster it will start up;
- **Runtime**: usually scripting languages (Python, Ruby, Javascript) perform a lot better in startup time in comparison to compiled runtimes (Java, .NET, C#); I mean, up to 100x faster, this is a big deal;
- **VPC**: functions running inside a virtual private cloud will suffer additional latency, taking usually an extra second or two to startup; try to design your functions to run outside a VPC;
- **Code package size**: the larger the size, the more time it takes to spin up a new container, although this may be the least important factor impacting start-up latency;

# How to solve - or mitigate - container startup latency

We present below 6 strategies to solve or, at least, mitigate the impact of container startup latency on your serverless applications:

- Monitor performance and log relevant indicators
- Increase memory allocation
- Choose a faster runtime
- Keep shared data in memory
- Shrink package size
- Keep a pool of pre-warmed functions
- Use time-series forecasting

### Monitor performance and log relevant indicators

We touched the infrastructure factors that drive container startup latency, but our code is also a major contributor. We need to constantly monitor our application’s performance, in order to identify bottlenecks and what is driving execution time up or down.

In order to do that, it's recommended to always log timestamps during the execution of a function and monitor duration outliers in your function’s invocations history. Whenever it performs worse than expected, go to the logs and identify which parts of your code contributed to the bad performance.

Services such as [AWS X-Ray](https://aws.amazon.com/xray/) and [Dashbird](https://dashbird.io) support this type of analysis out-of-the-box, saving you a lot of time in this performance optimization journey. In case you’re running serverless functions in production for professional projects, using such a service is a must.

### Increase memory allocation

It’s been observed that functions with more memory allocated tend to start up new containers faster. If the cost implication is not an issue for your use case, consider allocating more memory to the functions you need the best startup performance.

### Choose a faster runtime for workloads that are sensitive to startup time

Scripting languages such as Python and Ruby can perform significantly better than compiled runtimes. Yan Cui did an [awesome comparison of laguage startup times](https://read.acloud.guru/does-coding-language-memory-or-package-size-affect-cold-starts-of-aws-lambda-a15e26d12c76) in AWS Lambda. Python was the best performer, with up to 100x faster startup time than other contenders such as Java, C# and NodeJS. Whenever possible, consider writing your serverless functions in a lightweight language such as Python. Although the execution of a Python script is slower (due to its interpreted nature), the reduced startup latency may offset and provide an overall better performance (and lower bills from your cloud provider).

### Keep shared data in memory by loading outside the main event handler function

Serverless functions usually have a handler method/function as the interface between the underlying infrastructure and our code. The function will usually pass an event and context as arguments to our function and from there, our magic happens.

What’s interesting is that we can have code running outside this method/function. Let’s say every time our function is invoked, it needs to import the same third-party libraries, or maybe fetch an object from external persistence storage. Instead of doing these things after the handler method/function is called, we can do it outside the handler, before it’s even called.

Everything declared and executed outside the handler will remain in the container’s memory for as long as the container is kept alive. When it’s invoked again (from a warm state), the importing or fetching of data won’t need to run again and they can be used directly from memory, speeding up your code execution time.

This will not speed up cold starts but will reduce startup time for subsequent requests. Overall, our application will have better performance.

### Shrink package size

When we package our code for a serverless function, it’s very common to put in the zipped file everything we have, from README files to unnecessary third-party libraries files. It’s important to clean up our package before deploying in production, removing everything that is not used or needed by our function to run. This will contribute to a shorter cold start time by reducing internal networking latency - the function will be fetching a smaller package file.

### Keep a pool of pre-warmed functions

If you are still experiencing unbearable cold start latency times, the last resort is setup regular jobs to keep a pool of pre-warmed functions. This works like this:

Configure your functions to identify warming calls to short-circuit and end the requests very quickly, without running the entire function code. This can be done by passing a pre-determined event to the function, such as: {“warm”: true}. When your function detects this event argument, just halt the execution as fast as you can.

Setup a regular job (e.g. CRON) to invoke your function every few minutes. The number of minutes will depend. AWS Lambda usually keeps containers alive for about 30-45 minutes, but it will vary a lot.

By invoking the function, the serverless underlying system will need to spin up a new container and keep it alive for some time. If there was a pre-warmed container, it will keep it for a longer period of time because of the latest warming call. When a real user requests your API, this container will be used for a quicker response.

Jeremy Dale [open-sourced and interesting package](https://github.com/jeremydaly/lambda-warmer) to help managing warming strategies for AWS Lambda, you might want to check it out. The [Serverless framework](https://serverless.com/) also has a [helpful plugin](https://www.npmjs.com/package/serverless-plugin-warmup).

Beware of concurrency implications: if you keep only one container alive for your function and two concurrent requests comes in, one will be served from a warm state, but the second will be a cold start. That’s because only one container is warm and it can only serve one request at a time. If your application typically serves multiple concurrent requests, consider this in your warming strategy.

### Get fancy with time-series forecasting for pre-warm strategy

In case you’re really worried about cold start latency and your application load shows a high variance in the number of concurrent requests, you might want to get a bit fancier. You could use time-series forecasting to anticipate how many containers should be warmed at each point in time. [StatsModels](https://github.com/statsmodels/statsmodels/) is an open-source project that offers the most common algorithms for working with time-series. Here’s a [good tutorial](https://machinelearningmastery.com/time-series-forecasting-methods-in-python-cheat-sheet/) to get you started.

What we need is basically a time-series sample with two axes:
1. A sequence of intervals across a certain period of time (e.g. intervals of 10 minutes over the past 3 months)
2. Maximum number of concurrent requests a function handled during that interval

On a regular basis (e.g. every 10 minutes), we’d run our time-series forecasting to predict how many containers should be needed, concurrently, during the next time interval (e.g. next 10 minutes). The warming strategy would be adjusted to make sure this number of containers are pre-warmed.

One positive side of using statistical forecasting is that it will return a standard deviation (SD). Considering the probabilistic distribution of your data and the SD, you could estimate the confidence level of your predictions. Say you want to be certain about your prediction 99% of the times; what you need to take the predicted number of containers needed and add the SD multiplied by a factor number. This factor will depend on the distribution of your data. If normally distributed, the factor will be 2.58, for example. Read more about [Confidence Interval](https://en.wikipedia.org/wiki/Confidence_interval) in case you want to get deeper into the topic.

 - - - - -

Renato is a Developer Advocate at [Dashbird.io](https://dashbird.io/), a monitoring and debugging service designed especially for serverless environments. You can follow me on [Twitter](https://twitter.com/@byrrorenato) and [Medium](https://medium.com/@byrro).