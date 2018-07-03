---
title: A crash course on Serverless APIs with Express and MongoDB
description: Today, I'll walk you through creating a production-ready Express API running on AWS Lambda with a persistent MongoDB data store. Yes, that's a thing, you can build Express apps on AWS Lambda. Amazing, I know! And yes, you can use MongoDB without batting an eye!
date: 2018-07-03T02:00:00.000Z
frontImage: "2018-07-03/crash-cover.jpg"
thumbnail: "images/blog/2018-07-03/crash-cover.jpg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
---
![A crash course on Serverless APIs with Express and MongoDB](/images/blog/2018-07-03/crash-cover.jpg)
_I don't think that's a crash course._
___

Serverless has become an amazing tool for various use cases. Data processors, chatbots, APIs, you name it is now developed using serverless architectures.

Today, I'll walk you through creating a production-ready Express API running on AWS Lambda with a persistent MongoDB data store. Yes, that's a thing, you can build Express apps on AWS Lambda. Amazing, I know! And yes, you can use MongoDB without batting an eye!

It's pretty straightforward when you think about it. Using AWS Lambda is pretty much the same as using a tiny Node.js runtime. It just abstracts away everything except for the code.

Let's jump in.

### TL;DR
You can severely hurt my feelings and jump to the section you're interested in, or just keep reading.

- [Project setup](#accosaweam-1)
- [Creating the database on MongoDB Atlas](#accosaweam-2)
- [Installing dependencies](#accosaweam-3)
- [Writing code](#accosaweam-4)
- [Testing](#accosaweam-5)
- [Deployment](#accosaweam-6)
- [Load testing](#accosaweam-7)
- [Monitoring](#accosaweam-8)
- [Wrapping up](#accosaweam-9)

<h3 id="accosaweam-1">Project setup</h3>

The setup itself will be bare bones minimum. But, it will still have everything you need to continue adding features for your future production apps. Here's a diagram of the final layout so you can get an overview.

![project-setup.png](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/project-setup.png)

As you can see it's rather simple API for notes with CRUD logic, but it get's the job done. Enough talk, let's get the project up and running.

#### 1. Install the Serverless Framework

First of all you need to install and configure the [Serverless Framework](https://serverless.com/). It's a simple CLI tool to make development and deployment incredibly easy.

```bash
$ npm i -g serverless
```

You've now installed the Serverless framework globally on your machine. The Serverless commands are now available to you from wherever in the terminal.

_**Note:** If you’re using Linux, you may need to run the command as sudo._

#### 2. Create an IAM User in your AWS Console

Open up your AWS Console and press the services dropdown in the top left corner. You’ll see a ton of services show up. Go ahead and write IAM in the search box and press on it.

![img](https://cdn-images-1.medium.com/max/880/1*1BKK9Uf_iZg5aQMggHkFAw.png)

You’ll be redirected to the main IAM page for your account. Proceed to add a new user.

![img](https://cdn-images-1.medium.com/max/880/1*2W0uhicsEKt274A-UFQsNQ.png)

Give your IAM user a name and check the  **programmatic access** checkbox. Proceed to the next step.

![img](https://cdn-images-1.medium.com/max/880/1*HpGc2GUbMlpxngt_ovSQXA.png)

Now you can add a set of permissions to the user. Because we are going to let Serverless create a delete various assets on our AWS account go ahead and check AdministratorAccess.

![img](https://cdn-images-1.medium.com/max/880/1*iVJjs6_pqyNz-s8KFrZWvg.png)

Proceeding to the next step you will see the user was created. Now, and only now will you have access to the users **Access Key ID** and Secret **Access Key**. Make sure to write them down or download the .csv file. Keep them safe, don’t ever show them to anybody. I’ve pixelized them even though this is a demo, to make sure you understand the severity of keeping them safe.

![img](https://cdn-images-1.medium.com/max/880/1*q4aHTY0FCsHIlAdZP9qPcA.png)

With that done we can finally move on to entering the keys into the Serverless configuration.

#### 3. Enter IAM keys in the Serverless configuration

Awesome! With the keys saved you can set up Serverless to access your AWS account. Switch back to your terminal and type all of this in one line:

```bash
$ serverless config credentials --provider aws --key xxxxxxxxxxxxxx --secret xxxxxxxxxxxxxx
```

Hit enter! Now your Serverless installation knows what account to connect to when you run any terminal command. Let’s jump in and see it in action.

#### 4. Create a service

Create a new directory to house your Serverless application services. Fire up a terminal in there. Now you’re ready to create a new service. 

What’s a service you ask? View it like a project. But not really. It's where you define AWS Lambda Functions, the events that trigger them and any AWS infrastructure resources they require, all in a file called **serverless.yml**.

Back in your terminal type:

```bash
$ serverless create --template aws-nodejs --path sls-express-mongodb
```

The create command will create a new **service**. Shocker! But here’s the fun part. We need to pick a runtime for the function. This is called the **template**. Passing in `aws-nodejs` will set the runtime to Node.js. Just what we want. The **path** will create a folder for the service. In this example, naming it **sls-express-mongodb**.

#### 5. Explore the service directory with a code editor

Open up the **sls-express-mongodb** folder with your favorite code editor. There should be three files in there, but for now we'll only focus on the **serverless.yml**. It contains all the configuration settings for this service. Here you specify both general configuration settings and per function settings. Your **serverless.yml** will be full of boilerplate code and comments. Feel free to delete it all and paste this in.

```yaml
# serverless.yml

service: sls-express-mongodb

custom:
  secrets: ${file(secrets.json)}

provider:
  name: aws
  runtime: nodejs8.10
  stage: ${self:custom.secrets.NODE_ENV}
  region: eu-central-1
  environment: 
    NODE_ENV: ${self:custom.secrets.NODE_ENV}
    DB: ${self:custom.secrets.DB}

functions:
  app:
    handler: server.run
    events:
      - http:
          path: /
          method: ANY
          cors: true
      - http:
          path: /{proxy+}
          method: ANY
          cors: true

plugins:
  - serverless-offline
```



The `functions` property lists all the functions in the service. We will only need one function though, because our whole Express app will be packaged into this single function. The **handler** references which function it is. Our final app will have a `server.js` file with a `run` function. Simple enough.

Take a look at the events now. They are acting as a proxy. Meaning every request to hit any HTTP endpoint will be proxied into the Express router on the inside. Pretty cool.

We also have a `custom` section at the top. This acts as a way to safely load environment variables into our app. They're later referenced by using `${self:custom.secrets.<environment_var>}` where the actual values are kept in a simple file called `secrets.json`.

Lastly, we also have the `serverless-offline` plugin for offline testing.

<h3 id="accosaweam-2">Creating the database on MongoDB Atlas</h3>

Ready for some more configuration? Yeah, nobody likes this part. But bare with me. Jump over to [MongoDB Atlas and sign up](https://www.mongodb.com/cloud/atlas).

It’s free and no credit card is required. It’ll be the sandbox we need for playing around. Once you have your account set up, open up your account page and add a new organization.

![create organization](https://cdn-images-1.medium.com/max/880/1*hM21Qo6sum_Bcj98giFYzQ.png)

Pick a name you like, any will do. Press next and go ahead and create the organization.

![img](https://cdn-images-1.medium.com/max/880/1*-JBOmTjNK0iSLb3VZEKwsw.png)

Nice. That’ll take you to the organization page. Press on the new project button.

![img](https://cdn-images-1.medium.com/max/880/1*sOxiyVzJjVFF_cV5V7oO6w.png)

This will open up a page to name your project. Just type in whichever name you like and hit next.

![img](https://cdn-images-1.medium.com/max/880/1*SSSzcsD2g9z0JhFtAaWnBQ.png)

MongoDB cares about permissions and security so Atlas will show you another manage permissions page. We can just skip that for now, and create the project.

![img](https://cdn-images-1.medium.com/max/880/1*yCM_HJiy-Qw42CxxF-LBpg.png)

Phew, there we have it. Finally, we can create the actual cluster! Press on the huge green **“Build a new cluster”** button. This will open up a huge cluster creation window. You can leave everything default, just make sure to pick the **M0** instance size, and disable backups. As you can see the price for this cluster will be **FREE**. Quite nice. That’s it, hit **“Create Cluster”**.

![create-db-7](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/create-db-7.png)

After all that, add an admin user for the cluster and give him a really strong password.

![create-db-9](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/create-db-9.png)

Now, you just need to enable access from anywhere. Go to IP whitelist.

![create-db-8](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/create-db-8.png)

Your cluster will take a few minutes to deploy. While that’s underway, let’s start installing some dependencies.

<h3 id="accosaweam-3">Installing dependencies</h3>

This has to be my favorite part of any project... said nobody ever. But hey, we need to make sure this step is done properly so we can have smooth sailing down the road.

```bash
$ npm init -y
$ npm i --save express mongoose body-parser helmet serverless-http
$ npm i --save-dev serverless-offline
```

First of all we're installing production dependencies, of which you surely know about Express, Mongoose, and BodyParser. Helmet is a tiny middleware for securing your endpoints with appropriate HTTP headers. However, the real power lies in the Serverless HTTP module. It'll create the proxy into the Express application and package it into a single lambda function.

Lastly, we need Serverless Offline for testing our app locally. How about we finally write some code now?

<h3 id="accosaweam-4">Writing code</h3>

About time! Let's jump in without any further ado.

#### 1. Creating the server.js

First of all, we need to rename our `handler.js` file to `server.js`. Here we'll put only the logic for running our lambda function with the `serverless-http` module.

```js
// server.js
const sls = require('serverless-http')
const app = require('./lib/app')
module.exports.run = sls(app)
```

As you can see we're requiring `serverless-http`, and exporting a function named `run`. This will hold the value of the `serverless-http` instance with our app passed as a parameter. That's everything we need to package our Express app into a lambda function! Amazingly simple.

#### 2. Adding secrets

Create the `secrets.json` file next for holding the environment variables.

```json
// secrets.json
{
  "NODE_ENV": "dev",
  "DB": "mongodb://<user>:<password>@<clustername>.mongodb.net:27017,<clustername>.mongodb.net:27017,<clustername>.mongodb.net:27017/<database>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
}
```

To get the connection string for your Atlas cluster, navigate to the cluster dashboard and press the **gray connect button**. Follow the instructions and make sure the URL looks somewhat like the string above.

#### 3. Creating the Express app

Now we can start writing our actual Express app.

Create a new folder in the root directory called `lib`. Here you'll want to create an `app.js` file and `db.js` file to start with.

```js
// ./lib/db.js
const mongoose = require('mongoose')
mongoose.connect(process.env.DB)
```

Having `mongoose` installed simplifies connecting to the database significantly. This is all we need.

_**Note**: The `process.env.DB` was set in the `secrets.json` and referenced in the `serverless.yml`._

Once you've added the `db.js` switch over to the `app.js` file. Paste in the snippet below.

```js
// ./lib/app.js
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const helmet = require('helmet')
app.use(helmet())

require('./db')
const routes = require('./routes')
app.use('/api', routes)

module.exports = app
```

If you've ever written any code at all with Express, this will feel familiar to you. We're requiring all the modules, using middlewares, requiring the database connection we just created above and binding routes to the `/api` path. But we don't have any routes yet. Well, let's get going then!

#### 4. Adding routes

While in the `lib` folder, create a new folder named `routes`. It will be the base for all routes in the app. Create an `index.js` file in the `routes` folder and paste this snippet in.

```js
// ./lib/routes/index.js
const express = require('express')
const router = express.Router()
const notes = require('./notes/notes.controller')
router.use('/notes', notes)
// Add more routes here if you want!
module.exports = router
```

Now we can just add any additional routes to this file and won't have to touch anything else. That's just so much easier.

#### 5. Writing the CRUD logic

We've reached the fun part. As you can see in the `index.js` file from above, we want to require a `notes.controller.js` file where we should have CRUD operations defined. Well, let's create it!

However, not to get ahead of ourselves, we first need a model for our Notes API. Create a `notes` folder in the `routes` folder and inside of it create two more files named `note.js` and `notes.controller.js`. The `note.js` will have our model definition for a note. Like this.

```javascript
// ./lib/routes/notes/note.js
const mongoose = require('mongoose')
const NoteSchema = new mongoose.Schema({

  title: String,
  // this is a bug in the markdown - should not have the quotes ""
  description: String

})
module.exports = mongoose.model('Note', NoteSchema)
```

It's more than enough to only have a title and description for this example. Moving on, we're ready to add the CRUD. Open up the `notes.controller.js` and paste this in.

```js
// ./lib/routes/notes/notes.controller.js
const express = require('express')
const notesController = express.Router()
const Note = require('./note')

notesController
  .post('/', async (req, res, next) => {
    const note = await Note.create(req.body)
    res.status(200).send(note)
  })

notesController
  .put('/:id', async (req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true })
    res.status(200).send(note)
  })

notesController
  .get('/', async (req, res, next) => {
    const notes = await Note.find()
    res.status(200).send(notes)
  })

notesController
  .get('/:id', async (req, res, next) => {
    const note = await Note.findById(req.params.id)
    res.status(200).send(note)
  })

notesController
  .delete('/:id', async (req, res, next) => {
    const note = await Note.deleteOne({ _id: req.params.id })
    res.status(200).send(note)
  })

module.exports = notesController
```

Make sure not to forget requiring the Note model at the top of the file. Apart from that everything is rather straightforward. We're using the usual Mongoose model methods for creating the CRUD operation and of course, the syntax is so lovely with `async/await`. You should also think about adding try-catch blocks around the `await` operators. But this simple example will suffice like this.

That's it regarding the code. Ready for some testing!

<h3 id="accosaweam-5">Testing</h3>

I'm rather used to testing locally before deploying my apps. That's why I'll quickly run you through how it's done with `serverless-offline`. Because you already installed it and added it to the `plugins` section in the `serverless.yml` all you need to do is to run one command to start the local emulation of API Gateway and AWS Lambda on your local machine.

```bash
$ sls offline start --skipCacheInvalidation
```

_**Note**: In the root directory of your project run `sls` and you should see a list of commands. If you configured it correctly, `sls offline` and `sls offline start` should be available._

To make it easier for you to use this command, feel free to add it as an npm script in the `package.json`.

```json
// package.json
{
  "name": "a-crash-course-on-serverless-apis-with-express-and-mongodb",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "offline": "sls offline start --skipCacheInvalidation"
    // right here!
  },
  "keywords": [],
  "author": "Adnan Rahić",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.3",
    "helmet": "^3.12.1",
    "mongoose": "^5.1.7",
    "serverless-http": "^1.5.5"
  },
  "devDependencies": {
    "serverless-offline": "^3.20.2"
  }
}
```

Once added, you can run the command `npm run offline` instead. A bit shorter and a lot easier to remember. Jump back to your terminal and go ahead and run it.

```bash
$ npm run offline
```

You'll see the terminal tell you a local server has started on port 3000. Let's test it out!

To test my endpoints I usually use either Insomnia or Postman, but feel free to use whichever tool you like. First, start out by hitting the POST endpoint to add a note.

![insomnia post](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/insomnia-post.png)

Awesome! It works just as expected. Go ahead and try the GET request next.

![insomnia get all](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/insomnia-get.png)

It works like a dream. Now, go ahead and try out all the other endpoints as well. Make sure they all work, and then, let's get ready to deploy this to AWS.

<h3 id="accosaweam-6">Deployment</h3>

Would you believe me if I told you all it takes to deploy this API is to run a single command? Well, it does.

```bash
$ sls deploy
```

Back in the terminal, run the command above and be patient. You'll see a few endpoints show up in the terminal. These are the endpoints of your API.

In the same way, as I showed you above, test these deployed endpoints once again, making sure they work.

Moving on from this, you may notice you have only deployed your API to the `dev` stage. That won't cut it. We need to change the `NODE_ENV` and deploy to production as well. Open up the `secrets.json` file and change the second line to:

```json
"NODE_ENV": "production",
```

This will propagate and set the environment of your Express API to `production` and the `stage` to production as well. Before deploying the production API let's just delete the `node_modules` folder and re-install all modules with the `--production` flag.

```bash
$ rm -rf ./node_modules && npm i --production
```

This will make sure to install only the dependencies specified in the `dependencies` list in the `package.json`, excluding the ones from the `devDependencies` list.

Go ahead and deploy this with the same command as above.

```bash
$ sls deploy
```

<h3 id="accosaweam-7">Load testing</h3>

This wouldn't be a proper tutorial for setting up a production API if we don't do any load tests. I tend to use a tiny npm module for doing load tests as well. It's called [loadtest](https://www.npmjs.com/package/loadtest) and can be installed with a simple command.

```bash
$ npm i -g loadtest
```

_**Note**: Linux users will need to prefix the command with `sudo`._

Let's start slow. The command we want to run is to hit the `/api/notes` path with a GET request 100 times with 10 concurrent users.

```bash
$ loadtest -n 100 -c 10 https://<id>.execute-api.eu-central-1.amazonaws.com/production/api/notes
```

It took roughly 5 seconds to serve all those requests, and it went flawlessly. You can rest assured that whatever scale of API you end up having it will auto-scale to the size you need and serve your users without any issues. Here's an overview of the logs from this load test.

![Dashbird function logs](https://raw.githubusercontent.com/adnanrahic/cdn/master/a-crash-course-on-serverless-apis-with-express-and-mongodb/dashbird-sls-express-mongo-2.gif)

This monitoring tool is called [Dashbird](https://dashbird.io/). Let's set it up so you can have a proper overview of your API too.

<h3 id="accosaweam-8">Monitoring</h3>

The issue of bad overview and not enough insight into what's happening in your app is a real problem with serverless architectures. There are a couple of products out there that can really help mitigate this. Some of them are [Dashbird](https://dashbird/features/), [Datadog](https://www.datadoghq.com/), [Serverless](https://serverless.com/), [IOPipe](https://www.iopipe.com/) among many others. 

You've already had a quick start with the Serverless framework above. Let's jump into setting up Dashbird as well. You can go to the [official docs and go through the quick start](https://dashbird.io/docs/get-started/quick-start/) or just follow along below.

#### 1. Sign up

This seems quite logical I'd say. Go ahead and create an account [here](https://dashbird.io/register/). No credit cards are required, create an account and you're set to go.

After you sign up you'll be redirected to an onboarding screen where you need to add a **IAM Role ARN**. Just like in the example of creating an IAM User for the Serverless framework let's create one for Dashbird as well.

#### 2. Create a new **AWS policy** for Dashbird

Once again open your [AWS console](https://console.aws.amazon.com/) and navigate to `IAM` → `Policies` → `Create Policy`. Choose the **JSON** tab and paste the snippet below into the editor.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "logs:FilterLogEvents",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "logs:describeLogStreams",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "lambda:listFunctions",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "lambda:listTags",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "xray:Get*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "xray:BatchGet*",
            "Resource": "*"
        }
    ]
}
```

Press **Review Policy** and move on to add a name and description. Let the name be `dashbird-policy` and the description  `Allow Dashbird to read CloudWatch logs`. Go ahead and press **Create Policy**.

#### 3. Add a new AWS role for Dashbird

Navigate to `IAM` → `Roles` → `Create New Role` and select  `Another AWS account`. 

Fill out the following:

- Account ID: `458024764010` - This is Dashbird’s AWS account.
- Check the `Require external ID` checkbox
- External ID: **copy from the onboarding app**
- Require MFA: `false` 

Then you can go ahead and press **Next: Permissions**.

- Select previously created `dashbird-policy` from the policies list.
- Click **Next: Review**
- Fill out the following for role name and description:
  - Role name: `dashbird-delegation-role`
  - Role description: `Access role for Dashbird to read CloudWatch logs.`
  - Click **Create role**

Find the created role in the list and open it. If you have done everything correctly, the screen will look something like the image below. Make sure to **copy the ARN** from here!

![IAM role dashbird](https://dashbird.io/images/docs/result.png)

#### 4. Setup Dashbird with the created role

All you need to do is **paste the Role ARN** you copied above, and you're ready to go. Dashbird will check if it has access to your AWS account. If everything is set up correctly, you are redirected to the app. Logs will start piling in withing a minute.

Make sure to check your functions and check if the testing you carried out is visible on the graphs. That's it, you've built a production-ready API, with an easy way to deploy and monitor your application. Give yourself a big pat on the back!

<h3 id="accosaweam-9">Wrapping up</h3>

This has been an adventurous journey! You've created a production-ready serverless API. Using serverless architectures can be scary. Mainly the services you're not used too, such as Lambda and API Gateway. 

The approach I showed above is the way I usually do it. Using Node.js and the frameworks, modules, and middlewares you're used to already makes the transition into serverless much easier. 

Luckily we have development tools like the [Serverless Framework](https://serverless.com/) and observability tools such as [Dashbird](https://dashbird.io/), which make it incredibly easy to be a developer.

If you missed any of the steps above, [here's the repository](https://github.com/adnanrahic/a-crash-course-on-serverless-apis-with-express-and-mongodb) with all the code.

If you want to read some of my previous serverless musings head over to [my profile](https://dev.to/adnanrahic) or [join my newsletter!](https://upscri.be/b6f3d5/)

Or, take a look at a few of my articles right away:

- [Solving invisible scaling issues with Serverless and MongoDB](/blog/solving-invisible-scaling-issues-with-serverless-and-mongodb/)
- [How to deploy a Node.js application to AWS Lambda using Serverless](/blog/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/)
- [Getting started with AWS Lambda and Node.js](/blog/getting-started-with-aws-lambda-and-nodejs/)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. If you liked it, slap that tiny heart so more people here on dev.to will see this tutorial. Until next time, be curious and have fun.*

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_