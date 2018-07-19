---
title: Create your first website with serverless in 15 minutes
description: Create your first website with serverless in 15 minutes
date: 2018-06-11
frontImage: "2018-06-11/pexels-photo-707582.jpeg"
thumbnail: "images/blog/2018-06-11/pexels-photo-707582.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
blog: ["Serverless", "Node.js", "Lambda"]
---

Alright, we talked the "serverless is awesome" talk but now it about time to walk the walk. In the next 15 minutes, I'll take you through the entire process of creating your first website running on serverless and you better believe it's going to be awesome.

So without further ado let's start with what you'll need. First off you'll need to sign up for [Amazon](https://portal.aws.amazon.com/billing/signup?type=enterprise#/start). There are a few steps you'll have to take in order to be squared away but the entire process should take less than 5 minutes.

Now that that's squared away make sure you've got NodeJs installed on your computer. I'm using version 8 so you might want to have at least NodeJs v8+. 


# Prerequisite #

If you don't have it you can download NodeJs [here](https://nodejs.org/en/). You'll have to download the installer, run it following the onscreen instructions and then restart your computer. Once that's done let's test it to see if everything is running correctly. Open your terminal or favorite command-line tool and type in `node -v`. You should see a message saying v8.xx.x or something similar. Next up we need to double check our that npm is installed correctly. As you might have already guessed the command for that is `npm -v`. 

# Serverless setup #

Right, since everything is looking good let's start by installing the serverless framework. In your terminal type the following:

```
npm install -g serverless
```

You'll notice the '-g' in there. It stands for global. On my Windows machine, I've had problems installing serverless and had to install it globally in order to get it to work properly. 

Next up we'll login into our newly installed serverless platform

```
serverless login
//sls login is a shorthand that works too
```

You'll have a new browser window open up asking you to log in (you can use GitHub to do that)

After that's done we need to get our AWS credentials configured. The process is simple but requires multiple steps. Luckily there's an awesome [serverless tutorial](https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44) made by our very own [Adnan Rahic](https://twitter.com/adnanrahic). Focus on step 2 and 3. That's where the magic is. If that doesn't cut it here's a [video](https://www.youtube.com/watch?v=tgb_MRVylWw) showing with a play by play of the entire process.

Alright, now that we've got all our basic stuff out of the way let's get down to brass tacks.

Open your file explorer and create a new folder for the project. I'm calling mine 'serverless-app'. In the newly created folder open your terminal to create a simple serverless boilerplate.


```
//create the boilerplate mentioned above
sls create --template  hello-world

```
You'll end up with something like this:

![Terminal capture](/images/blog/2018-06-11/vTuYxVp.png "Serverless boilerplate")


# Project setup #

Before we start installing our dependencies we'll have to create our package.json file.


```
// generate a package.json file
npm init
```

You'll be asked to provide names and descriptions and a lot of other information. Since this is a test just press "Enter" and leave all the fields empty.


We are going to use [Expres](https://expressjs.com/) a minimalist web framework to get things going faster. You can basically use whatever you want to build your website. 

## Installing dependecies ##
```
//install express - a simple web framework
npm i --save express
//install the body-parser middleware
npm i --save body-parser
//install view engine for express
npm i --save  hbs
//you'll need serverless-http to connect your api to aws
npm i --save serverless-http
```

Now we're getting somewhere.

Open up the handler.js file on your computer and paste in the following code:


```
const serverless = require("serverless-http");
const hbs = require("hbs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.status(200).render("index");
});

module.exports.awesomesauce= serverless(app);
```

Next up: the part everyone is familiar with, the HTML code. You'll have to create a new folder in the root of your project called "views". Open the folder and create you handlebars template called index.hbs

Your project should look something like this:

![Terminal capture](/images/blog/2018-06-11/KCjjPfZ.png "Handlebars file")

# Create the website #

Here's the code I'm adding to my website. Creative, I know.

```
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>What's all the FaaS about?</title>
<style>
body
{
text-align:center;
}
</style>
</head>
<body>

<h1>What's all the FaaS about?</h1>
<p>Get it? It's a punn.</p>
<p>Unfunny joke brought to you by John Demian</p>

</body>
</html>

```
You can create js files, css files, basically whatever you want at this stage. 

# Create your service #

Almost done, bare with me. Open up your serverless.yml file and paste the following:

```
service: awesomesauce

# The `provider` block defines where your service will be deployed
provider:
  name: aws
  runtime: nodejs8.10

# The `functions` block defines what code to deploy
functions:
  app:
    handler: handler.awesomesauce
    # The `events` block defines how to trigger the http events
    events:
        - http: ANY /
- http: 'ANY {proxy+}'
```

What you just did is set our runtime environment, nodjs8.10, we specified the name of our app, intuitively called "app" and then we specified the handler which coincidentally is the name of our service: "awesomesauce".

# Deployment #

We've made it to the final step. Once you deploy this to AWS you'll have your own serverless website. How awesome is that? Back to the terminal for one more line:

```
sls deploy
```

You'll see the terminal doing all kind of geeky stuff but at the end, you'll see something like this:


![Terminal capture](/images/blog/2018-06-11/I6ZqTbL.png "Serverless website")

Copy and paste the endpoint in your browser and voila, you've got your first serverless website up and running.


Nicely done! High five all around! It's been quite a journey but it's worth it. You are the proud owner of a brand new website.

## Congratulations! ##

Since you are reading this on Dashbird.io you might want to start [monitoring your serverless website](https://dashbird.io/monitor-aws-lambda/) to make sure your lambdas are working properly.
