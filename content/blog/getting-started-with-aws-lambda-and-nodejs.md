---
title: Getting Started with AWS Lambda and Node.js
description: ...Little did I know what AWS Lambda was, and how incredibly awesome it is. If you're intrigued, stick around. I'll only take a few minutes out of your already busy day, and you surely won't mind.
date: 2018-05-31T00:00:00.000Z
frontImage: "26-05-2018/getting-started-lambda-node.jpg"
thumbnail: "images/blog/26-05-2018/getting-started-lambda-node.jpg"
canonical: https://dev.to/adnanrahic/getting-started-with-aws-lambda-and-nodejs-1kcf
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
featpop: most-popular
blog: ["Serverless", "Node.js", "AWS API Gateway", "AWS Lambda"]
category: "Serverless, Node.js, AWS API Gateway, AWS Lambda"
---

Once upon a time, not so long ago, a word caught my ear. **Lambda**. That struck a chord, remembering the good old days of playing Half-Life as a kid. Little did I know what AWS Lambda was, and how incredibly awesome it is. If you're intrigued, stick around. I'll only take a few minutes out of your already busy day, and you surely won't mind.

### Function as a Service

Let's jump right in. The architecture AWS Lambda belongs to is called either <a href="https://en.wikipedia.org/wiki/Serverless_computing">Serverless Computing</a> or <a href="https://en.wikipedia.org/wiki/Function_as_a_service">Function as a Service</a>. It's groundbreaking because of the lack of servers. That sounds strange. Well the code is not running on potatoes, is it!? Okay, that's just a saying. What's actually going on is that you, the developer, don't need to worry about the infrastructure your code is running on. You deploy the code into the cloud and it handles the creation of all needed resources by itself. But how? Containers! 

<img src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" class="img-responsive">

No, not those. These!

<blockquote><a href="https://www.docker.com/what-docker"><img src="https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/docker2.png" width="100%" style="margin-bottom:10px;"></a><i>Docker is the world’s leading software container platform. Developers use Docker to eliminate “works on my machine” problems when collaborating on code with co-workers. Operators use Docker to run and manage apps side-by-side in isolated containers to get better compute density. Enterprises use Docker to build agile software delivery pipelines to ship new features faster, more securely and with confidence for both Linux, Windows Server, and Linux-on-mainframe apps.</i></blockquote>

Every time an [AWS Lambda Function](https://aws.amazon.com/lambda/) is created, a container is spun up to serve it. It's actually not a Docker container though, rather a proprietary container built by AWS. I just used the example so you would understand it a bit easier. 

The code is deployed into the container and then executed. Hence making every subsequent request faster because AWS is skipping the initial creation of the container if it already exists.

### Creating your First Function

Before you can even see the code you need to create a new function in the AWS console. Which means you need an AWS account. If you don't have an account, don't hesitate to create one, they have incredible free tiers that include various services and last up to 12 months. 

Moving on, fire up a browser and navigate to your account. From there you need to find Lambda. Press the services dropdown and select Lambda.

![AWS Services](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_056.png)

You'll land on the Lambda homepage with a big orange button prompting you to create a new function. Well, don't keep it waiting any longer, press it.

![Create a Function](https://github.com/adnanrahic/cdn/raw/1a312ff8d11c43b89606f9790fda3041995a6d02/getting-started-with-aws-lambda-and-nodejs/init-fun.png)

This will take you to the main function creation wizard. As this example will cover a basic function that will simulate a dice throw, let's forget about the blueprints and just author one from scratch.

Awesome! Now you just need to add a name and <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">role</a> for the function and finally start writing some code. Regarding the role, feel free to just pick an existing role such as `lambda_basic_execution`. It will more than suffice for this simple example. Make sure not to forget adding Node.js 8.10 as the runtime either. Finally, go ahead and create the function.

![Function Basic Info](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/create-function.png)

Great! Now you're finally seeing some code. Much better. Let's dive in. There are several options to take into consideration. The code entry type option sets how you will add code to the function. It can either be _inline_, _upload a .zip file_, or _upload from S3_. We'll be using the first option, editing inline. For small functions, it's totally fine to write code inline. But when you have more code, it gets very tiresome. That's why there is a .zip upload option which we will touch upon later as well.

Set the runtime to `Node.js 8.10`, which is the latest supported version of Node.js for Lambda at the time of this writing. The handler can stay the same as well. Here, the `index` stands for the name of the file, while `handler` is the name of the function.

![Function Inline Editor](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/created-function-with-default-code.png)

With previous versions of Node.js on AWS Lambda (6.10), there were 3 main parameters:

- The `event` parameter contains the current event info. That means the event that triggers the function will send along information to the function to use. An example would be the data an HTTP request sends along to the endpoint, such as whether it has request parameters or a body.
- The `context` contains all the information about the function itself. How long it has been running, how much memory it's consuming among other things. This is viewed as the runtime information.
- The `callback` is pretty self-explanatory. When you want to tell the function to end its execution, you invoke the callback. It takes two parameters, the first is an error, the second is the data you wish to send back as the response of the Lambda function.

Things have changed with `Node.js 8.10` because of the addition of `async/await` support. The `handler` can now accept a promise value. This is why we can now assign an `async function` to the `handler`, and return a promise directly. No more stupid `callback` parameters. So awesome!

### Writing Some Logic

That's enough with the set up for now. Let's code something.

We're starting out with this snippet of code. The goal is to write a piece of code that will mimic the roll of a dice.

```js
exports.handler = async (event) => {
  // TODO implement
  return 'Hello from Lambda';
};
```

Here goes nothing.

```js
exports.handler = async (event) => {
  const min = 1;
  const max = 6;    
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const message = 'Your dice throw resulted in: ' + randomNumber;
  return message;
};
```

Nice! That does the trick. Now the function will return a random number between 1 and 6. With that out of the way let's test it. Press the orange test button and proceed to create a simple test event. Give it a funky name for no particular reason. Just for the fun of having a test event named `FunkyName`. Now you can go ahead and test the function. After pressing the test button you'll see something like this.

![Function Testing](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/test-function.png)

The section bordered with the dashed outline shows the function output, more precisely the return value that got sent back by the function.

That was fun! You now have a **roll a dice** function, but no way of triggering it outside of AWS, yet.

### Connecting an API

Here comes the crucial part. How do you think a lambda function knows how to start its execution? Voodoo? Magic? No, sadly not. Every function invocation is triggered by an event. It can be an when an image gets uploaded to S3, it can be an Amazon Alexa skill, or just a regular HTTP request.

Let's create an HTTP event and tell it to invoke our function. To be able to do this you first need to jump over to <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">API Gateway</a> in the AWS console. In the services dropdown pick API Gateway, and you'll land here.

![Get Started API Gateway](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_062.png)

You'll immediately be prompted to create an API. Ignore all the suggestions and just pick **New API** and input a name for your API. I'm going to stick with **FunkyApi**, it just sounds right. Go ahead and hit create.

![Create API](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_063.png)

Now comes the fun part. Finally get to hook up the API to the function. First press the **Actions** dropdown and pick **Create method**. You'll see another smaller dropdown show up. Press it, and pick **GET**. Set the integration type to Lambda Function, select the region where you created the function and write the name of your function.

![Create Method and Hook Lambda](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_064.png)

Hit save and rejoice!

The API is set up and ready. You now only need to deploy it. Press the **Actions** dropdown once again and hit **Deploy API**. Pick a new Deployment Stage, write down **dev** as the stage name and you're ready to deploy the API.

![Deploy API](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_065.png)

Finally! The API endpoint is ready. You now have access to the **Invoke URL** on the **dev Stage Editor**.

![API has been Deployed](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_066.png)

Feel free to open up the API endpoint in a browser window and check the output. What do you see? No really, what do you see? A random number between 1 and 6 should be returned back. How awesome is this!? In less than 5 minutes you've created a Lambda function, connected it to API Gateway and created an endpoint to be consumed whenever you like.

### Uploading Code with a ZIP

What if you need to use some modules from npm? You can't add them inline. There has to be a way of running code with dependencies. Well, there is, but it's a bit tricky to get right. Nevertheless, let's get on with it!

First of all, create a directory and initialize npm.

```bash
$ mkdir roll-a-dice && npm init -y
```

Once you've done this, go ahead and install [moment](/moment-js-a-better-date-library-for-javascript/), a simple datetime library.

```bash
$ npm install moment --save
```

This will create a `node_modules` folder with the required dependencies. To include them you need to compress all the files and upload the **.ZIP** file to Lambda. 

**Important Note**: Only compress the files and folders inside of the project directory. Do **NOT** zip the whole folder. If you do it will break the configuration and the Lambda function will fail!

Before you go ahead and compress the files add some code with the new npm module you just installed to make sure the Lambda function uses it.

Create a new file in the project directory and name it `index.js`. Paste the existing lambda function from AWS into the file and edit it slightly.

```js
const moment = require('moment');
exports.handler = async (event) => {
  const min = 1;
  const max = 6;
  
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const now = moment().format();
  
  const message = 'Your dice throw resulted in ' + 
  randomNumber + ' and was issued at ' + now;
  
  return message;
};
```

Save all the files and go ahead and zip them up. Remember, only the files and folders within the **roll-a-dice** directory.

You now have a .ZIP file. Go ahead and jump back to the AWS Console.

![Upload ZIP](https://github.com/adnanrahic/cdn/raw/1a312ff8d11c43b89606f9790fda3041995a6d02/getting-started-with-aws-lambda-and-nodejs/zip-upload.png)

Change the **Code entry type** to **Upload a .ZIP file** and upload the file you just recently compressed. Great! Now, scroll back to the top of the page and press the big orange button once again to Save and Test the function.

![Test Function](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/test-zip-function.png)

Nice! It works and it's showing the current date and time. You zipped the function and npm module correctly. Just in case, jump back to a browser window and try the endpoint once again. It should now show the updated message.

### Monitoring
What about having insight into your function? Easy, there's a **Monitoring** tab! Here you can check out metrics about your function's behavior. 

![Monitoring](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/monitoring.png)

But, it can get a bit hard to have proper insight when you have multiple functions. In that case, you might want to check out an [AWS Lambda monitoring](https://dashbird.io/monitor-aws-lambda/) reporting tool like [Dashbird](https://dashbird.io/features/), IOPipe, Datadog or something similar.

Here's an example of how Dashbird gives you a proper [dashboard of your AWS Lambda Functions](https://dashbird.io/features/aws-lambda-serverless-monitoring/).

![Monitoring](https://github.com/adnanrahic/cdn/raw/master/getting-started-with-aws-lambda-and-nodejs/dashbird-2.gif)

### What now? Start coding!

Lambda is an incredible tool which works well with an abundance of other services on AWS. Lambda functions can be invoked in response to events like file uploads, they can also be used for chatbots, REST APIs and much, much more.

This simple API example we coded above is just the beginning. But you can see the point. So much overhead is avoided with just worrying about the code, not caring about the underlying infrastructure. I urge you to continue playing with this technology as it will only get more popular in the time to come. Just start coding. Whatever it may be, it doesn't matter. Just start writing code, because you will learn the most by doing it yourself.

We at [Dashbird](https://dashbird.io/) want to create a more welcoming environment for creating serverless apps by making [tracking errors](https://dashbird.io/features/lambda-error-tracking/) a walk in the park. If you have any questions feel free to let me know in the comments below.

If you missed any of the steps above, <a rel="nofollow" target="_blank" href="https://github.com/adnanrahic/getting-started-with-aws-lambda-and-nodejs">here's the repository</a> with all the code.

_Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. Until next time, be curious and have fun._

___

_Feel free to join our newsletter, to stay up to date regarding all things serverless!_