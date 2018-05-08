---
title: Migrating your AWS Lambda functions to Node.js version 8.10
description: A best practices walkthrough of how to write efficient Node.js v.8.10 code on AWS Lambda. This is packed with examples of how to re-write your existing Node.js v.6.10 code as well!
date: 2018-05-08
frontImage: "08-05-2018/aws-lambda-node-8.jpeg"
thumbnail: "images/blog/08-05-2018/aws-lambda-node-8.jpeg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
---
![AWS Lambda With Node.js v.8.10](/images/blog/08-05-2018/aws-lambda-node-8.jpeg)
_Quite literally shows my happiness after AWS stated they would support Node.js version 8.10 in AWS Lambda._

___

With the state of serverless growing at an exponential rate during the last year it's no surprise developers across the globe have flocked to use **AWS Lambda as their main serverless compute engine**. AWS has a steady track record of covering all the main needs of developers, devops engineers and even C-level tech executives. Hell, I've been using it for a couple of years, and still haven't come close to check out even half of their offering. 

## Disappointment turned to joy 
So, after all that, tell me, why haven't we had the joy of using the newest version of Node.js on AWS Lambda? Strange indeed. The _de facto_ goto compute service for serverless has limited Node.js developers to use outdated versions of their favorite language **(_insert sad face, with tears..._)** . That all changes now. **With the [public release](https://aws.amazon.com/blogs/compute/node-js-8-10-runtime-now-available-in-aws-lambda/) of a new supported version of Node.js, more precisely version `8.10`, we finally have the beauty of using beloved features natively in the runtime of AWS Lambda.** Praise all things holy!

## Out with the old, in with the new
Remember that clunky `callback` parameter every lambda function has? Here's some pseudo code showing a generic login function.

_**Note**: Examples are written in Node.js using the Serverless Framework._

<script src="https://gist.github.com/adnanrahic/693516c84cdb318b6335a1dd82a51a2e.js"></script>

Yeah, well now you don't need them anymore! Because `Promises` are totally native in the new Node.js version, we can now just return the whole `Promise` chain instead! Don't believe me? Check it!

<script src="https://gist.github.com/adnanrahic/e8b45fb452f5ce53d3907b9f184b22c8.js"></script>

How amazing is this!? No more fiddling with annoying callbacks. Using `Promises` natively and chaining them in the same way you're already used to in your day-to-day life is just a breath of fresh air for serverless developers worldwide. 

My life has just become **40% more joyful**, just by starting to use `Promises` in my lambda functions. If you want to know why exactly 40%, hit me with a comment below **(_points at comment section_)** . I may be joking, just a bit. **\*wink\* \*wink\***

Okay, but that's not all. You know about my good friend `async` and his twin brother `await`? Yeah, I had a chat with them a while back and to be honest, they're thrilled to finally be invited on to the serverless hype train **(_crowd cheers_)**.

Now you can make your lambda function `async` and `await` every particular asynchronous piece of code within the lambda itself! Have a look below.

<script src="https://gist.github.com/adnanrahic/8e0ddd50e5e9197ad9ca4028c295381e.js"></script>

That is so sexy! Finally a reason to use `try catch` blocks in JavaScript! I haven't seen one of those since 2015 when I last tortured myself with C#. Good times. Hope to forget them as soon as possible.

## Make sure to specify the new version
While configuring the [Serverless Framework](https://serverless.com/) for local development, like every other sane human being, you need to specify the runtime underneath the `provider` section. Like this.

```yaml
# serverless.yml
...
provider:
  name: aws
  runtime: nodejs8.10
  stage: dev
  ...
```

Or if you like torture, and create your lambda function throught the AWS Console, specify the version during the actual creation.

## Having an overview of your Node.js versions
We at [Dashbird](https://dashbird.io/) have done our best to give you the ability to see which language and runtime is running inside your lambda functions. 

![Dashbird Lambdas showing Node.js versions](/images/blog/08-05-2018/app-node-versions.png)




Hope you liked reading this short product update. Feel free to let us know in the comments below if you have any questions or remarks!