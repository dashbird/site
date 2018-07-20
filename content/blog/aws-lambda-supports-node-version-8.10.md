---
title: AWS Lambda Now Supports Node.js Version 8.10!
description: A best practices walkthrough of how to write efficient Node.js 8.10 code on AWS Lambda. This is packed with examples of how to re-write your existing Node.js 6.10 code as well!
date: 2018-05-09T01:00:00.000Z
frontImage: "08-05-2018/aws-lambda-node-8.jpeg"
thumbnail: "images/blog/08-05-2018/aws-lambda-node-8.jpeg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
featloc: blog-header
featpop: most-popular
blog: ["Serverless", "Node.js", "Lambda"]
---

With the state of serverless growing at an exponential rate during the last year, it's no surprise developers across the globe have flocked to use **AWS Lambda as their main serverless compute engine**. AWS has a steady track record of covering all the main needs of developers, DevOps engineers and even C-level tech executives. Hell, I've been using it for a couple of years, and still haven't come close to check out even half of their offering. 

## Disappointment turned to joy 
So, after all that, tell me, why haven't we had the joy of using the newest version of Node.js on AWS Lambda? Strange indeed. The _de facto_ go-to compute service for serverless has limited Node.js developers to use outdated versions of their favorite language **\*sad face\***. All that changes now, **with the [public release](https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/) of a new supported version of Node.js. To be more precise, it's version `8.10`. We now finally have beloved features at our disposal running natively in the AWS Lambda runtime.** Praise all things holy!

## Out with the old, in with the new
Remember that clunky `callback` parameter every lambda function has? Here's some pseudo code showing a generic login function.

_**Note**: Examples are written in Node.js using the Serverless Framework._

<script src="https://gist.github.com/adnanrahic/693516c84cdb318b6335a1dd82a51a2e.js"></script>

Yeah, well now you don't need `callback`s anymore! With this new Node.js version the Gods of AWS have given us the possibility to leverage `Promise` chains for lambda handlers. Remember those wrappers you used to write to handle promises? Yes, those... Well, you can throw them out and just return a `Promise` chain now. Don't believe me? Check it!

<script src="https://gist.github.com/adnanrahic/e8b45fb452f5ce53d3907b9f184b22c8.js"></script>

How amazing is this!? No more fiddling with annoying callbacks. Using `Promises` natively and chaining them in the same way you're already used to in your day-to-day life is just a breath of fresh air for serverless developers worldwide. 

My life has just become **40% more joyful**, just by starting to use `Promises` in my lambda functions. If you want to know why exactly 40%, hit me with a comment below. I may be joking, just a bit. **\*wink\* \*wink\***

## What about the fancy new ES6+ syntax?
Okay, so using `Promises` is amazing, but that's not all. You know about my good friend `async` and his twin brother `await`? Yeah, I had a chat with them a while back and to be honest, they're thrilled to finally be invited aboard the serverless hype train. **\*crowd cheers\***

Now you can make your lambda function `async` and `await` every particular asynchronous piece of code within the lambda itself! Have a look below.

<script src="https://gist.github.com/adnanrahic/8e0ddd50e5e9197ad9ca4028c295381e.js"></script>

That is so sexy! Finally a reason to use `try/catch` blocks in JavaScript! I haven't seen one of those since 2015 when I last tortured myself with C#. Good times. Hope to forget them as soon as possible.

With synchronous-looking code you get much better error handling and general visibility. The code is _flat_ without any excessive indents. Using the `try/catch` block inside an `async` function will make sure all errors are handled even if the scope of the function is awaiting asynchronous operations.

Porting your existing functions from **Version `6.10` to `8.10`** can cause some issues, but for the most generic use cases you'll be just fine. But to be safe, make sure to test your ported functions first, before you start routing production traffic to them. It also helps to write tests cases and even test things locally. Once you're confident, and deploy it all, [Dashbird](https://dashbird.io/) will help you get a bird's eye perspective of all your functions. You can rest assured we've got your back.

## Make sure to specify the new version
While configuring the [Serverless Framework](https://serverless.com/) for local development, like every other sane human being, you need to specify the runtime underneath the `provider` section. Like this.

<script src="https://gist.github.com/adnanrahic/e1ed89ea9e619214268511e59e0eb59d.js"></script>

Or if you like torture, and create your lambda function through the AWS Console, specify the version during the actual creation.

## Having an overview of your Node.js versions
We at [Dashbird](https://dashbird.io/) have done our best to give you the ability to see which language and runtime is running inside your lambda functions. 

![Dashbird Lambdas showing Node.js versions](/images/blog/08-05-2018/app-node-versions.png)
_With a clear overview of all your functions you can see key info including the runtime._

___

Another cool thing you can do is to deploy the same functions but with different runtimes. This will let you monitor their execution ([even in real-time](/docs/user-guide/debugging/)) and see where they fail because of differences in the runtime! Call me a nerd, but this is so cool.

## Why would you want the new runtime?
The key reasons are simple. New things are shiny and better. That would be the layman's explanation. But in all honesty, it often is the case. Compared to the **previous Node.js LTS version, Version 6.x, performance has been boosted by `~20%`**. Even [AWS themselves claim](https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/) the new V8 6.0 engine will lower memory consumption and guarantee a faster startup time across Node.js lambda functions! 

Apart from the engine itself, HTTP/2 has been introduced, making the web as a whole so much better. The new protocol fixes a vast number of workarounds and issues HTTP/1.1 had. We can now be confident our apps running on AWS Lambda will be simpler, and much faster! Unfortunately we still have to wait for AWS to provide us with HTTP/2 support for AWS API Gateway to fully leverage this feature.

I can't wait to start building with Node.js Version 8.10! My gut tells me you're eager too.

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_