---
date: 2019-02-13
title: Best Practices - Error Handling With AWS Lambda And Node.js
linktitle: Node.js
description: Catching and troubleshooting AWS Lambda errors when using AWS Lambda with Node.js.
kbSeries: ["EBest Practices"]
kbSeries_weight: 200
---

Error handling with Node.js on AWS Lambda becomes incredibly simple with Dashbird. We detect all errors that fall into the next four categories.

- Exceptions
- Errors
- Configuration errors
- Timeouts


### Throwing an exception

Check out the example below.

```js
exports.handler = async (event) => {                
  const err = new Error('I am a dog')
  throw err
}
```

When this lambda function is invoked, it will notify [AWS Lambda](https://aws.amazon.com/lambda/) that function execution completed with an error and passed the error information to AWS Lambda. AWS Lambda sends the error information to [AWS CloudWatch](https://aws.amazon.com/cloudwatch/) where the logs are stored. Developers don't need to attach any agents inside their code. Which means, to start using [Dashbird](/register/), you don't need to do any code changes what-so-ever!

In addition, with each error, you get the context. Logs of the whole invocation, along with memory usage, duration and other meaningful metrics.

On top of that, Dashbird groups similar errors, making it possible to estimate the scope of the problem and make debugging easier. For example, it might help to better observe the problem if you find some commonalities in the executions.

Here's how a Node.js error looks like in Dashbird.

![Node.js Error Dashbird](/images/docs/node-error-crash.png)

Got to love those stack traces!

<br/>

### Errors

You can find <a href='https://nodejs.org/api/errors.html' target='_blank'>the complete list of Node.js errors here</a>.
Errors are parsed out automatically in Dashbird, and include a rundown of traceback and logs of the specific invocation.
Per function errors are visible on a dedicated list, shown below.

![per function erros](/images/docs/node-error-list.png)

<br/>

### AWS Lambda Timeouts

All calls made to AWS Lambda must complete execution within 15 minutes. The default timeout is 3 seconds, but you can set the timeout to any value between one second and 15 minutes.

Normally, error handling agents are unable to catch timeout errors, because the execution is halted on an upper level. Dashbird, however, reports timeouts like any other type of error.

Timeouts are expressed in Lambda logs in the following way.

```
REPORT RequestId: 41a10717-e9af-11e7-892c-5bb1a4054ed6  
Duration: 300085.71 ms  Billed Duration: 300000 ms Memory Size: 128 MB Max Memory Used: 92 MB
2017-12-25T20:12:38.950Z 41a10717-e9af-11e7-892c-5bb1a4054ed6 Task timed out after 300.09 seconds
```

<br/>

### Configuration errors
We make sure to tag `configuration errors` differently from regular `errors` so you can debug issues easier.

#### Missing module

Another scenario for errors in AWS Lambda is when you have a missing module included in your function code. In other types of programs, this isn't a very common occurence since a developer would catch that right away. However, with Lambdas, the container is started up on demand, masking the problem until the user encounters it.

What's important to note here, is that configuration errors are also not reported with agents, since the code execution does not reach the handler.

Here's how it looks like:

```
START RequestId: 89342c24-91a1-11e8-b8ce-2981c530381f Version: $LATEST

Unable to import module 'app': Error
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/var/task/app.js:1:79)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)

REPORT RequestId: 89342c24-91a1-11e8-b8ce-2981c530381f	
Duration: 3.98 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 20 MB	
```

<br/>

#### Missing handler

<a href="https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html">Handler</a> is a function in your code that is invoked by AWS Lambda when your service is executed. If the handler name provided in the Lambda configuration is different from the function in your code, this error will be produced upon Lambda execution and caught by Dashbird.

```
START RequestId: 5da69de5-91a2-11e8-8a9a-6d1e6b337909 Version: $LATEST

Unable to import module 'app': Error
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)

REPORT RequestId: 5da69de5-91a2-11e8-8a9a-6d1e6b337909	
Duration: 0.53 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 21 MB	
```

### AWS Lambda errors

Apart from NodeJS specific errors, programmers have to think about failures that are specific to Lambda functions. In <a href="/best-practices-and-common-use-cases/runtime-agnostic/">Runtime-agnostic Best Practices</a> we have covered most of the problems that cause headaches to serverless developers.

---

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about our features and error handling! We would really appreciate it!_
