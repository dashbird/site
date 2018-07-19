---
title: Solving invisible scaling issues with Serverless and MongoDB
description: Ever since software engineering became a profession, we have been trying to serve users all around the globe. With this comes the issue of scaling and how to solve it. Many times these thoughts of scaling up our software to unimaginable extents are premature and unnecessary.
date: 2018-07-03T01:00:00.000Z
frontImage: "2018-07-03/blind-cover.jpg"
thumbnail: "images/blog/2018-07-03/blind-cover.jpg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
category: "Serverless, Node.js, Lambda, MongoDB"
canonical: https://dev.to/adnanrahic/solving-invisible-scaling-issues-with-serverless-and-mongodb-4m55
---
![Solving invisible scaling issues with Serverless and MongoDB](/images/blog/2018-07-03/blind-cover.jpg)
_Don't follow blindly, weigh your actions carefully._

___

Ever since software engineering became a profession, we have been trying to serve users all around the globe. With this comes the issue of scaling and how to solve it. Many times these thoughts of scaling up our software to unimaginable extents are premature and unnecessary. 

This has turned into something else altogether with the rise of serverless architectures and back-end-as-a-service providers. Now we're not facing issues of how to scale up and out, but rather how to scale our database connections without creating heavy loads. 

With the reduced insight we have about the underlying infrastructure, there's not much we can do except for writing [sturdy, efficient code](https://serverless.com/blog/fantastic-serverless-security-risks-and-where-to-find-them/) and use [appropriate tools](https://dashbird.io/) to mitigate this issue.

Or is it? 🤔

### How do databases work with serverless?

With a traditional server, your app will connect to the database on startup. Quite logical, right? The first thing it does is hook up to the database via a connection string and not until that's done, the rest of the app will initialize. 

[Serverless](https://www.martinfowler.com/articles/serverless.html) handles this a bit differently. The code will actually run for the first time only once you trigger a function. Meaning you have to both initialize the database connection and interact with the database during the same function call. 

Going through this process **every** time a function runs would be incredibly inefficient and time-consuming. This is why serverless developers utilize a technique called connection pooling to only create the database connection on the first function call and re-use it for every consecutive call. Now you're wondering how this is even possible?

The short answer is that a lambda function is, in all essence, a tiny container. It's created and kept *warm* for an extended period of time, even though it is not running all the time. Only after it has been inactive for over 15 minutes will it be terminated.

This gives us a time frame of 15 to 20 minutes where our database connection is active and ready to be used without suffering any performance loss.

### Using Lambda with MongoDB Atlas

Here's a simple code snippet for you to check out.

```js
// db.js
const mongoose = require('mongoose')
const connection = {}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('=> using existing database connection')
    return
  }

  console.log('=> using new database connection')
  const db = await mongoose.connect(process.env.DB)
  connection.isConnected = db.connections[0].readyState
}
```

Once you take a better look at the code above you can see it makes sense. At the top, we're requiring `mongoose` and initializing an object called `connection`. There's nothing more to it. We'll use the connection object as a cache to store whether the database connection exists or not.

The first time the `db.js` file is required and invoked it will connect mongoose to the database connection string. Every consecutive call will re-use the existing connection.

Here's what it looks like in the `handler` which represents our lambda function.

```js
const connectToDatabase = require('./db')
const Model = require('./model')

module.exports.create = async (event) => {
  try {
    const db = await connectToDatabase()
    const object = Model.create(JSON.parse(event.body))
    return {
      statusCode: 200,
      body: JSON.stringify(object)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not create the object.'
    }
  }
}
```

This simple pattern will make your lambda functions cache the database connection and speed them up significantly. Pretty cool huh? 😊

All of this is amazing, but what if we hit the cap of connections our database can handle? Well, great question! Here's a viable answer.

### What about connection limits?

If capping your connection limit has you worried, then you might think about using a back-end-as-a-service to solve this issue. It would ideally create a pool of connections your functions would use without having to worry about hitting the ceiling. Implementing this would mean the provider will give you a REST API which handles the actual database interaction while you only use the APIs.

You hardcore readers will think about creating an API yourselves to house the connection pool or use something like GraphQL. Both of those solutions are great for whichever use case fits you best. But, I'll focus on using off-the-shelf tools for getting up and running rather quickly.

### Using Lambda with MongoDB Stitch

If you're a sucker for MongoDB, like I am, you may want to check out their back-end-as-a-service solution called [Stitch](https://www.mongodb.com/cloud/stitch). It gives you a simple API to interact with the MongoDB driver. You just need to create a Stitch app, connect it to your already running Atlas cluster and your set. In the Stitch app, you make sure to enable anonymous login and create your database name and collection.

Install the stitch npm module and reference your Stitch app id in your code then start hitting the APIs.

```js
const { StitchClientFactory, BSON } = require('mongodb-stitch')
const { ObjectId } = BSON
const appId = 'notes-stitch-xwvtw'
const database = 'stitch-db'
const connection = {}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('[MongoDB Stitch] Using existing connection to Stitch')
    return connection
  }

  try {
    const client = await StitchClientFactory.create(appId)
    const db = client.service('mongodb', 'mongodb-atlas').db(database)
    await client.login()
    const ownerId = client.authedId()
    console.log('[MongoDB Stitch] Created connection to Stitch')

    connection.isConnected = true
    connection.db = db
    connection.ownerId = ownerId
    connection.ObjectId = ObjectId
    return connection
  } catch (err) {
    console.error(err)
  }
}
```

As you can see the pattern is very similar. We create a Stitch client connection and just re-use it for every consequent request.

The lambda function itself looks almost the same as the example above.

```js
const connectToDatabase = require('./db')

module.exports.create = async (event) => {
  try {
    const { db } = await connectToDatabase()
    const { insertedId } = await db.collection('notes')
      .insertOne(JSON.parse(event.body))

    const addedObject = await db.collection('notes')
      .findOne({ _id: insertedId })

    return {
      statusCode: 200,
      body: JSON.stringify(addedObject)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Could not create the object.'
    }
  }
}
```

Seems rather similar. I could get used to it. However, Stitch has some cool features out of the box like authentication and authorization for your client connections. This makes it really easy to secure your routes.

### How to know it works?

To make sure I know which connection is being used at every given time, I use [Dashbird's invocation view](https://dashbird.io/features/aws-lambda-serverless-monitoring/) to check my [Lambda](https://aws.amazon.com/lambda/) logs.

![Lambda invocation log creating new](https://raw.githubusercontent.com/adnanrahic/cdn/master/invisible-scaling-issues/create-connection.png)

Here you can see it's creating a new connection on the first invocation while re-using it on consecutive calls.

![lambda invocation log using existing](https://raw.githubusercontent.com/adnanrahic/cdn/master/invisible-scaling-issues/existing-connection.png)

The service is free for 14 days, so you can [check it out if you want](https://dashbird.io/register/). [Let me know](mailto:adnan@dashbird.io) if you want an extended trial or just [join my newsletter](https://upscri.be/b6f3d5/). 😊

<p style="text-align:center;">
<img src="https://raw.githubusercontent.com/adnanrahic/cdn/master/invisible-scaling-issues/dashbird-stitch.gif" alt="Dashbird gif" width="100%" />
</p>

### Wrapping up

In an ideal serverless world, we don't need to worry about capping our database connection limit. However, the amount of users required to hit your APIs to reach this scaling issue is huge. This example above shows how you can mitigate the issue by using back-end-as-a-service providers. Even though [Stitch](https://www.mongodb.com/cloud/stitch) is not yet mature, it is made by [MongoDB](https://www.mongodb.com/cloud), which is an amazing database. And using it with [AWS Lambda](https://aws.amazon.com/lambda/) is just astonishingly quick.

To check out a few projects which use both of these connection patterns shown above jump over here:

- [Building a Serverless REST API with MongoDB](https://github.com/adnanrahic/building-a-serverless-rest-api-with-nodejs)
- [Building a Serverless REST API with Stitch](https://github.com/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-stitch)

If you want to read some of my previous serverless musings head over to [my profile](https://dev.to/adnanrahic) or [join my newsletter!](https://upscri.be/b6f3d5/)

Or, take a look at a few of my other articles regarding serverless:

- [How to deploy a Node.js application to AWS Lambda using Serverless](/blog/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/)
- [Getting started with AWS Lambda and Node.js](/blog/getting-started-with-aws-lambda-and-nodejs/)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. Until next time, be curious and have fun.*

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_