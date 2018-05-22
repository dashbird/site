---
title: A Quick Start with AWS Lambda and Node.js
description: A quick walkthrough of how to create a lambda functions with Node.js
date: 2018-05-21T01:00:00.000Z
frontImage: "08-05-2018/aws-lambda-node-8.jpeg"
thumbnail: "images/blog/08-05-2018/aws-lambda-node-8.jpeg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
---
![A Quick Start with AWS Lambda and Node.js](https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
_A guy floating in space because of reasons..._

Once upon a time, not so long ago, a word caught my ear. **Lambda**. That struck a chord, remembering the good old days of playing Half-Life as a kid. Little did I know what AWS Lambda was, and how incredibly awesome it is. If you're intrigued, stick around. I'll only take a few minutes out of your already busy day, and you surely won't mind.

### Function as a Service

Let's jump right in. The architecture AWS Lambda belongs to is called either <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Serverless_computing">Serverless Computing</a> or <a rel="nofollow" target="_blank" href="https://en.wikipedia.org/wiki/Function_as_a_service">Function as a Service</a>. It's groundbreaking because of the lack of servers. That sounds strange. Well the code is not running on potatoes, is it!? Okay, that's just a saying. What's actually going on is that you, the developer, don't need to worry about the infrastructure your code is running on. You deploy the code into the cloud and it handles the creation of all needed resources by itself. But how? Containers! 

<img src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" class="img-responsive">

No, not those. These!

<blockquote><a rel="nofollow" target="_blank" href="https://www.docker.com/what-docker"><img src="https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/docker.png" width="250px" style="float:left;margin-right: 20px;"></a><h2 style="margin-top: 0px;font-style: normal;">Docker</h2>Docker is the world’s leading software container platform. Developers use Docker to eliminate “works on my machine” problems when collaborating on code with co-workers. Operators use Docker to run and manage apps side-by-side in isolated containers to get better compute density. Enterprises use Docker to build agile software delivery pipelines to ship new features faster, more securely and with confidence for both Linux, Windows Server, and Linux-on-mainframe apps.</blockquote>

Every time an AWS Lambda function is created, a container is spun up to serve it. The code is deployed into the container and then executed. Hence making every subsequent request faster because AWS is skipping the initial creation of the container if it already exists.

### Creating your First Function

Before you can even see the code you need to create a new function in the AWS console. Which means you need an AWS account. If you don't have an account, don't hesitate to create one, they have incredible free tiers that include various services and last up to 12 months. 

Moving on, fire up a browser and navigate to your account. From there you need to find Lambda. Press the services dropdown and select Lambda.

![AWS Services](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_056.png)

You'll land on the Lambda homepage with a big orange button prompting you to create a new function. Well, don't keep it waiting any longer, press it.

![Create a Function](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_057.png)

This will take you to the function blueprint picker. As this example will cover a basic function that will simulate a dice throw, let's forget about the blueprints and just author one from scratch.

![Author from Scratch](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_058.png)

Awesome! Now you just need to add a name and <a rel="nofollow" target="_blank" href="http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">role</a> for the function and finally start writing some code. Regarding the role, feel free to just pick an existing role such as `lambda_basic_execution`. It will more than suffice for this simple example. Finally, go ahead and create the function.

![Function Basic Info](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_059.png)

Great! Now you're finally seeing some code. Much better. Let's dive in. There are several options to take into consideration. The code entry type option sets how you will add code to the function. It can either be _inline_, _upload a .zip file_, or _upload from S3_. We'll be using the first option, editing inline. For small functions, it's totally fine to write code inline. But when you have more code, it gets very tiresome. That's why there is a .zip upload option which we will touch upon later as well.

Leave the runtime as Node.js 6.10, which is the latest supported version of Node.js for Lambda at the time of this writing. The handler can stay the same as well. "index" stands for the name of the file, while `handler` is the name of the function.

![Function Inline Editor](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_060.png)

Check out the parameters the function takes. A bit strange, are they not? Let's break it down.

- The `event` parameter contains the current event info. That means the event that triggers the function will send along information to the function to use. An example would be the data an HTTP request sends along to the endpoint, such as whether it has request parameters or a body.
- The `context` contains all the information about the function itself. How long it has been running, how much memory it's consuming among other things. This is viewed as the runtime information.
- The `callback` is pretty self-explanatory. When you want to tell the function to end its execution, you invoke the callback. It takes two parameters, the first is an error, the second is the data you wish to send back as the response of the Lambda function.

### Writing Some Logic

That's enough with the setting up for now. Let's code something.

We're starting out with this snippet of code. The goal is to write a piece of code that will mimic the roll of a dice.

```js
exports.handler = (event, context, callback) => {
  // TODO implement
  callback(null, 'Hello from Lambda');
};
```

Here goes nothing.

```js
exports.handler = (event, context, callback) => {
    var min = 1;
    var max = 6;    
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    var message = 'Your dice throw resulted in: ' + randomNumber;
    callback(null, message);    
};
```

Nice! That does the trick. Now the function will return a random number between 1 and 6. With that out of the way let's test it. Press the orange test button and proceed to create a "Hello World" test event. Give it a funky name for no particular reason. Just for the fun of having a test event named `FunkyName`. Now you can go ahead and test the function. After pressing the test button you'll see something like this.

![Function Testing](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_067.png)

The section bordered with the dashed outline shows the function output, more precisely the value that got sent back by the callback function.

That was fun! You now have a **roll a dice** function, but no way of triggering it outside of AWS, yet.

### Connecting an API

Here comes the crucial part. How do you think the Lambda functions know how to start its execution? Voodoo? Magic? No, sadly not. Every function invocation is triggered by an event. It can be an when an image gets uploaded to S3, it can be an Amazon Alexa skill, or just a regular HTTP request.

Let's create an HTTP event and tell it to invoke our function. To be able to do this you first need to jump over to <a rel="nofollow" target="_blank" href="http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">API Gateway</a> on the AWS console. In the services dropdown pick API Gateway, and you'll land here.

![Get Started API Gateway](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_062.png)

You'll immediately be prompted to create an API. Ignore all the suggestions and just pick **New API** and input a name for your API. I'm going to stick with **FunkyApi**, it just sounds right. Go ahead and hit create.

![Create API](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_063.png)

Now comes the fun part. Finally get to hook up the API to the function. First press the **Actions** dropdown and pick **Create method**. You'll see another smaller dropdown show up. Press it, and pick **GET**. Set the integration type to Lambda Function, select the region where you created the function and write the name of your function.

![Create Method and Hook Lambda](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_064.png)

Hit save and rejoice!

The API is set up and ready. You now only need to deploy it. Press the **Actions** dropdown once again and and hit **Deploy API**. Pick a new Deployment Stage, write down **dev** as the stage name and you're ready to deploy the API.

![Deploy API](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_065.png)

Finally! The API endpoint is ready. You now have access to the **Invoke URL** on the **dev Stage Editor**.

![API has been Deployed](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_066.png)

Feel free to open up the API endpoint in a browser window and check the output. What do you see? No really, what do you see? A random number between 1 and 6 should be returned back. How awesome is this!? In less than 5 minutes you've created a Lambda function, connected it to API Gateway and created an endpoint to be consumed whenever you like.

### Uploading Code with a ZIP

What if you need to use some modules from npm? You can't add them inline. There has to be a way of running code with dependencies. Well, there is, but it's a bit tricky to get right. Nevertheless, let's get on with it!

First of all, create a directory and initialize npm.

```bash
$ mkdir roll-a-dice && npm init
```

Once you've done this, go ahead and install [moment](/moment-js-a-better-date-library-for-javascript/), a simple datetime library.

```bash
$ npm install moment --save
```

This will create a node_modules folder with the required dependencies. To include them you need to compress all the files and upload the .ZIP file to Lambda. 

**Important Note**: Only compress the files and folders inside of the project directory. Do **NOT** zip the whole folder. If you do it will break the configuration and the Lambda function will fail!

Before you go ahead and compress the files add some code with the new npm module you just installed to make sure the Lambda function uses it.

Create a new file in the project directory and name it `index.js`. Paste the existing Lambda function from AWS into the file and edit it slightly.

```js
var moment = require('moment');

exports.handler = (event, context, callback) => {
  var min = 1;
  var max = 6;
  
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var now = moment().format();
  
  var message = 'Your dice throw resulted in ' + 
  randomNumber + ' and was issued at ' + now;
  
  callback(null, message);
};
```

Save all the files and go ahead and zip them up. Remember, only the files and folders within the **roll-a-dice** directory.

You now have a .ZIP file. Go ahead and jump back to the AWS Console.

![Upload ZIP](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_068.png)

Change the **Code entry type** to **Upload a .ZIP file** and upload the file you just recently compressed. Great! Now, scroll back to the top of the page and press the big orange button once again to Save and Test the function.

![Test Function](https://raw.githubusercontent.com/adnanrahic/cdn/master/getting-started-with-aws-lambda-and-nodejs/Selection_069.png)

Nice! It works and it's showing the current date and time. You zipped the function and npm module correctly. Just in case, jump back to a browser window and try the endpoint once again. It should now show the updated message.

### What now? Start coding!

Lambda is an incredible tool which works well with an abundance of other services on AWS. Lambda functions can be invoked in response to an event like file uploads, they can be used for chatbots, REST APIs and much, much more.

This simple API example we coded above is just the beginning. But you can see the point. So much overhead is avoided with just worrying about the code, not caring about the underlying infrastructure. I urge you to continue playing with this technology as it will only get more popular in the time to come. Just start coding. Whatever it may be, it doesn't matter. Just start writing code, because you will learn the most by doing it yourself.

If you missed any of the steps above, <a rel="nofollow" target="_blank" href="https://github.com/adnanrahic/getting-started-with-aws-lambda-and-nodejs">here's the repository</a> with all the code.

Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. Until next time, be curious and have fun.

_Do you think this tutorial will be of help to someone? Do not hesitate to share. If you liked it, let me know in the comments below._