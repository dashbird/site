---
title: How to handle AWS Lambda cold starts
description: Cold starts are a necessary evil and the sooner you understand why, the sooner you can learn how to overcome them.
date: 2019-03-01T12:00:00.000Z
frontImage: "2019-03-01/jeremy-bishop-262119-unsplash.jpg"
thumbnail: "images/blog/2019-03-01/jeremy-bishop-262119-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["alerts", "Lambda"]
---

Smarter people than myself, once said that you should do things you don’t like first so that you can enjoy the things you’re doing later. Nobody wants cold starts. They’re annoying, and we continuously feel an itching sensation in our brains because of them. The serverless world would be a much better place to work in if they weren’t there. A great serverless advocate said something really smart about cold starts:

> You can't live with them , you can't live without them - Britney Spears reffering to coldstarts

<center><img src="https://media.giphy.com/media/1s3hDXdmi994c/giphy.gif"></center>


Basically what that means is that in order to scale your application as seamlessly as Lambda does new containers need to be created. But as you can imagine, there's a finite number of containers that can work at any given time so old ones need to be deleted to make room for the new ones. That's how those cold starts happen. Whenever you create a new one, it will take some time for it to spin up or warm up, hence the term cold start.


<h2>Basic Fighting Rules</h2>

The general impression is that cold starts are not very high after all, meaning that most of the applications can tolerate them just fine. If the situation is not being that kind on you, there are some ways to keep the function instances warm enough which will reduce the cold start frequency. This approach is the same for all providers. Once in “x” minutes, you should perform an artificial call to the function so it’ll prevent its expiration. Details of this implementation can be different because the expiration policies are different as well. You should fire up several parallel “warming” requests to make sure that enough instances are kept in the warm stock which applies to applications with the higher load profile.

## Cold Start Duration & Frequency Reduction

It is possible to cut down the time impact of cold starts if we write the functions by utilizing interpreted languages. Cold start latency with Python or Node.js is well below a second. A compiled language such as Go is yet another example of low cold start latency. Choosing higher memory settings for your functions is another way to go, and it will provide your PC with more CPU power. It is essential to avoid VPCs. VPCs are required to create ENIs, which need more than 10 seconds to initialize.

By keeping your function warm, you’ll reduce the cold start frequency. Simply, by doing this, you’re actually sending scheduled ping events to your functions to keep them idle, and ready to serve requests. Amazon CloudWatch Events allows you to trigger the functions in certain time periods so you’ll have a fixed number of AWS Lambda instances alive on a constant basis. Setting up a “periodic cron job” will trigger your function every 5 to 15 minutes, and it will stay idle.



## Is Handling The Concurrent Cold Starts Possible?

You can choose between different kinds of plugins and modules to utilize in this case. <a href="https://github.com/jeremydaly/lambda-warmer">Lambda Warmer</a> for Node.js will allow you to warm the concurrent functions while enabling you to choose the concurrency levels you wish. Lambda Warmer is compatible with both AWS SAM and Serverless Framework that has another plugin by the name of Serverless WARM-Up Plugin, and it doesn’t support the concurrent function warming.

Adding Lambda Warmer to your functions is simple. The call itself looks something long these lines:

```js
const warmer = require('lambda-warmer')

exports.handler = async (event) => {
  // if a warming event
  if (await warmer(event)) return 'warmed'
  // else proceed with handler logic
  return 'Hello from Lambda'
}
```

Some ways will allow you to warm up your functions properly. Consider producing a handler logic that won’t run all function logic while the warming is running which can be of great help, but you should consider not to invoke the functions more frequently than once per every 300 seconds. While you invoke your function, do it directly via Amazon CloudWatch Events.

## Cold Starts Within Dashbird

After a short and straightforward sign-up process you’ll be able to login to the app after which you should go to your lambdas. From this point, you’ll be able to observe the last invocation status as well as you’ll be able to specify cold start filtering. 

We already know that running a serverless framework can save you from a lot of trouble. Besides saving a lot of money and time for your company, it can surely put you in front of the following problems like cold starts and latency. But there is a way to handle them via Dashbird.io tool which will allow you to get out the most of your serverless application. 

Dashbird’s tailing functionality offers a nearly real-time insight of the functions you’re running, and it provides you with all the necessary logs and metrics which are needed for the mentioned invocation. But an option really worth mentioning that comes with Dashbird is that it can detect cold starts and retries in your lambda invocation. Therefore, you’ll be able to see in your lambda invocation list which invocations have been retried as well as which ones became coldstart invocations and it makes quite a big difference.

## Where does that leave us?

Cold starts are currently one of the biggest serverless issues with no permanent solution, and we can only hope it’ll be figured out as soon as possible so that we could do our magic without the stress involved. We’ve figured out some ways how to fight against it on different fronts, and that’s all we have for now until the providers give us a permanent solution. 

Until then, we’re able to share our experiences, ideas, and thoughts which we highly recommend to all our readers. If you think you have cracked it, let us know about your solution in our comment box below. We should discuss it since only together we can try and solve this puzzle. Or not? 


