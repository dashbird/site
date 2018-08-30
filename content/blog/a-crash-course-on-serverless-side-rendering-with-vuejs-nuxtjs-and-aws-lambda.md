---
title: Serverless-side rendering with Vue.js, Nuxt.js and AWS Lambda
description: We want the best of both worlds. The SEO boost server-side rendering provides, and the speed of a Single Page Application. All this while hosted basically for free in a serverless environment on AWS Lambda.
date: 2018-08-21T00:00:00.000Z
frontImage: "2018-08-20/heading.jpg"
thumbnail: "images/blog/2018-08-20/heading.jpg"
authorlink: 'https://medium.com/@adnanrahic'
author: Adnan Rahić
author_image: '/images/team/adnan.png'
canonical: https://dev.to/adnanrahic/a-crash-course-on-serverless-side-rendering-with-vuejs-nuxtjs-and-aws-lambda-1nk4
blog: ["Serverless", "Node.js", "Lambda", "Vue.js", "Nuxt.js"]
---

That's a mouthful of a title right there. Don't let it scare you away. What it boils down to is rather simple.

We want the best of both worlds. The SEO boost server-side rendering provides, and the speed of a Single Page Application. All this while hosted basically for free in a serverless environment on AWS Lambda.

#### TL;DR

Here's a quick overview of what we'll be building for you to get up to speed. Feel free to jump to the step that interests you the most. Don't mind me guilt tripping you into reading the whole thing... * _stares guilt trippingly_ * 😐

- What're we building?
- Configure and install dependencies
- Build the app with the [Serverless Framework](https://serverless.com/) and [Nuxt.js](https://nuxtjs.org/)
- Deploy the app to [AWS Lambda](https://aws.amazon.com/lambda/)
- Test the app with [Dashbird](https://dashbird.io/)

_**Note**: The [code we will write is already on GitHub](https://github.com/adnanrahic/serverless-side-rendering-vue-nuxt) if you need further reference or miss any steps, feel free to check it out._

### What're we building?

Well, first thing's first. We want a super fast Single Page Application. But, this usually comes with a cost. Lousy SEO capabilities. That won't do, meaning we also want the app to have server-side rendering. Okay, sounds simple. We'll grab [Nuxt.js](https://nuxtjs.org/guide), which is a framework for creating universal [Vue.js](https://vuejs.org/) applications, and configure it to server-side render our pages.

To accomplish this we need to spin up a simple Express server and configure the Nuxt renderer to serve files through Express. It is way simpler than it sounds.

However, the key takeaway here is the word _server_. Ew, we don't like mentioning that word. So, what do we need to do? Well, deploy this whole application to [AWS Lambda](https://aws.amazon.com/lambda/)! It is a tiny Node.js instance after all. 

But this raises a concern. How to monitor and debug it if everything goes horribly wrong? I usually have [Dashbird](https://dashbird.io/) opened in a separate tab to monitor all my serverless resources in real time.

Phew, with that out of the way, let's get crackin'!

### Configure and install dependencies

As always, we're starting with the boring part, setting up the project and installing dependencies.

#### 1. Install the Serverless Framework

In order for serverless development to **not** be absolute torture, go ahead and install the [Serverless framework](https://serverless.com/).

```bash
$ npm i -g serverless
```

**Note:** *If you’re using Linux or Mac, you may need to run the command as `sudo`.*

Once installed globally on your machine, the commands will be available to you from wherever in the terminal. But for it to communicate with your AWS account you need to configure an IAM User. Jump over [here for the explanation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html), then come back and run the command below, with the provided keys.

```bash
$ serverless config credentials \ 
    --provider aws \ 
    --key xxxxxxxxxxxxxx \ 
    --secret xxxxxxxxxxxxxx
```

Now your Serverless installation knows what account to connect to when you run any terminal command. Let’s jump in and see it in action.

#### 2. Create a service

Create a new directory to house your Serverless application services. Fire up a terminal in there. Now you’re ready to create a new service.

What’s a service you ask? View it like a project. But not really. It’s where you define AWS Lambda functions, the events that trigger them and any AWS infrastructure resources they require, all in a file called **serverless.yml**.

Back in your terminal type:

```bash
$ serverless create --template aws-nodejs --path serverless-side-rendering-vue-nuxt
```

The create command will create a new **service**. Shocker! But here’s the fun part. We need to pick a runtime for the function. This is called the **template**. Passing in `aws-nodejs` will set the runtime to Node.js. Just what we want. The **path** will create a folder for the service.

#### 3. Install npm modules

Change into the **serverless-side-rendering-vue-nuxt** folder in your terminal. There should be three files in there, but for now, let's first initialize npm.

```bash
$ npm init -y
```

After the `package.json` file is created, you can install a few dependencies.

```bash
$ npm i axios nuxt express serverless-http serverless-apigw-binary
```

These are our production dependencies, and I'll go into more detail explaining what they do a bit further down. Apart from them, we need one more as a development dependency. This one will let us tie a domain to our endpoints. Sweet!

```bash
$ npm i --save-dev serverless-domain-manager
```

Now, your `package.json` should look something like this.

```json
{
  "name": "serverless-side-rendering-vue-nuxt",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": { // <= add these scripts
    "dev": "nuxt",
    "deploy": "nuxt build && sls deploy"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.18.0",
    "express": "^4.16.3",
    "nuxt": "^1.4.2",
    "serverless-apigw-binary": "^0.4.4",
    "serverless-http": "^1.6.0"
  },
  "devDependencies": {
    "serverless-domain-manager": "^2.6.0"
  }
}
```

We also need to add two scripts, one for running `nuxt` on our local dev machine and one for building and deploying the app. You can see them in the `scripts` section of the `package.json`.

#### 4. Configure the serverless.yml file

Moving on, let's finally open up the project in a code editor. Check out the **serverless.yml** file, it contains all the configuration settings for this service. Here you specify both general configuration settings and per function settings. Your **serverless.yml** will be full of boilerplate code and comments. Feel free to delete it all and paste this in.

```yaml
# serverless.yml

service: serverless-side-rendering-vue-nuxt

provider:
  name: aws
  runtime: nodejs8.10
  stage: ${self:custom.secrets.NODE_ENV}
  region: eu-central-1
  environment: 
    NODE_ENV: ${self:custom.secrets.NODE_ENV}

functions:
  nuxt:
    handler: index.nuxt
    events:
      - http: ANY /
      - http: ANY /{proxy+}

plugins:
  - serverless-apigw-binary
  - serverless-domain-manager

custom:
  secrets: ${file(secrets.json)}
  apigwBinary:
    types:
      - '*/*'
  customDomain:
    domainName: ${self:custom.secrets.DOMAIN}
    basePath: ''
    stage: ${self:custom.secrets.NODE_ENV}
    createRoute53Record: true
```

The `functions` property lists all the functions in the service. We will only need one function because it will run the Nuxt rendering. It works by spinning up a tiny Express app, connecting the Nuxt renderer middleware to the Express router and passing the app to the **serverless-http** module. In turn, this will bundle the whole Express app into a single lambda function and tie it to an API Gateway endpoint. Under the functions property, you can see a **nuxt** function that will have a handler named `nuxt` in the `index.js` file. API Gateway will proxy any and every request to the internal Express router which will tell the Nuxt renderer to render our Vue.js pages. Woah, that sounds complicated! But it's really not. Once we start writing the code you'll see how simple it really is.

We've also added two plugins, the `serverless-apigw-binary` for letting more mime types pass through API Gateway and the `serverless-domain-manager` which lets us hook up domain names to our endpoints effortlessly.

We also have a `custom` section at the bottom. The `secrets` property acts as a way to safely load environment variables into our service. They're later referenced by using `${self:custom.secrets.<environment_var>}` where the actual values are kept in a simple file called `secrets.json`.

Apart from that, we're also letting the API Gateway binary plugin know we want to let all types through, and setting a custom domain for our endpoint.

That's it for the configuration, let's add the `secrets.json` file.

#### 5. Add the secrets file

 We all know pushing private keys to GitHub kills baby penguins. Let's not do that. Handling this with the Serverless Framework is simple. Add a `secrets.json` file and paste this in.

```json
{
  "NODE_ENV": "dev",
  "DOMAIN": "vue-ssr.your-domain.com"
}
```

Now, only by changing these values you can deploy different environments to different stages and domains. Pretty cool.

### Build the app with the Serverless Framework and Nuxt.js

We'll use Nuxt.js to build our universal Vue.js app. What does this mean? Well, let's keep it simple, it's just a server-side rendered single page application. Meaning you don't need to worry about SEO because it'll render the JavaScript before sending it to the client. But, once it's loaded in on the client side, it won't ask for the file again, and cache it instead. More speed! I love it.

Let's jump in.

#### 1. Setting up the Nuxt.js server(less)-side rendering

For Nuxt to work at all we need a `nuxt.config.js` file to add our build configuration.

```js
// nuxt.config.js
module.exports = {
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  build: {
    vendor: ['axios'],
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
  },
  srcDir: 'client/',
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false
}
```

You can see we required the **secrets.js** file in order to load our stage in the `publicPath` URL to the static files. You'll see why this is important once we add the route in the Express router below. Also, check the `srcDir`, it specifies the name of the folder where our client-side files are located.

Once this is added, create another file named **nuxt.js**. Really intuitive, I know.

```js
// nuxt.js
const express = require('express')
const app = express()
const { Nuxt } = require('nuxt')
const path = require('path')

app.use('/_nuxt', express.static(path.join(__dirname, '.nuxt', 'dist')))
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

module.exports = app
```

This is pretty straightforward. We're grabbing Express and Nuxt, creating a static route with `express.static` and passing it the directory of the bundled JavaScript that Nuxt will create. Here the path is `/_nuxt` but because API Gateway adds the stage as a postfix, we needed to specify it in the `publicPath` in the above mentioned `nuxt.config.js` file.

Once the configuration is loaded, there's nothing left to do except pass the `nuxt.render` middleware to the Express app.

Now, the app needs to be hooked up to `serverless-http` and exported as a lambda function. Create an `index.js` file and paste this in.

```js
// index.js
const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')

const nuxt = require('./nuxt')
module.exports.nuxt = sls(nuxt, {
  binary: binaryMimeTypes
})
```

As you can see we also need to create `binaryMimeTypes.js` file to hold all the mime types we want to enable. It'll just a simple array which we pass into the `serverless-http` module.

```js
// binaryMimeTypes.js
module.exports = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]
```

Sweet, that's it regarding the Nuxt setup. Let's jump into the client-side code!

#### 2. Writing client-side Vue.js

In the root of your project create a new folder and name it `client`. If you scroll up we set the `srcDir` in the `nuxt.config.js` file to point to a directory named `client`.

In this `client` folder, create three more folders named, `components`, `layouts`, `pages`. Once inside`layouts` folder, create a new file with the name `default.vue`, and paste this in.

```vue
// client/layouts/default.vue
<template>
  <div>
    <navbar/>
    <nuxt/>
  </div>
</template>
<script>
import navbar from "~/components/navbar";

export default {
  components: { navbar }
};
</script>
```

The default view will have the `<navbar/>` component and the `<nuxt/>` component with rendered content from Nuxt.

Now add the `navbar.vue` file in the `components` folder.

```vue
// client/components/navbar.vue
<template>
  <nav class="nav">
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dogs">Dogs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/dogs/shepherd">Only Shepherds</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
```

This is an incredibly simple navigation that'll be used to navigate between some cute dogs. It'll make sense once we add something to the `pages` folder.

In the `pages` folder create an `index.vue` file and add the code below.

```vue
// client/pages/index.vue
<template>
  <div>
    <h1>This is the Front Page.</h1>
    <h3>Random dog of the day:</h3>
    <img :src="dog.url" alt="">
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://api.thedogapi.com/v1/images/search?limit=1"
    );
    return { dog: data[0] };
  }
};
</script>
```

The `index.vue` file will be rendered on the root path of our app. It calls a dog API and will show a picture of a cute dog. To create more routes, create a sub-folder called `dogs` and create an `index.vue` file and a `_breed.vue` file in there. The `index.vue` will be rendered at the `/dogs` route while the `_breed.vue` will be rendered at `/dogs/:breed` where the `:breed` represents a route parameter.

Add this to the `index.vue` in the `dogs` directory.

```vue
// client/pages/dogs/index.vue
<template>
<div>
  <h1>Here you have all dogs.</h1>
  <ul>
    <li v-for="dog in dogs" v-bind:key="dog.id">
      <img :src="dog.url" alt="">
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      "https://api.thedogapi.com/v1/images/search?size=thumb&limit=10"
    );
    return { dogs: data };
  },
  head() {
    return {
      title: "Show all dogs!",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Hello Dogs 👋`
        }
      ]
    };
  }
};
</script>
```

And, another snippet in the `_breed.vue` file in the `dogs` folder.

```vue
// client/pages/dogs/_breed.vue
<template>
<div>
  <h2>Dog breed: {{ breed }}</h2>
  <ul>
    <li v-for="dog in dogs" v-bind:key="dog.id">
      <img :src="dog.url" alt="">
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ store, route }) {
    const { data } = await axios.get(
      "https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50"
    );

    const reg = new RegExp(route.params.breed, "g");
    const filteredDogs = data.filter(dog => 
      dog.breeds[0]
        .name
        .toLowerCase()
        .match(reg)
    );

    return { dogs: filteredDogs, breed: route.params.breed };
  },
  head() {
    return {
      title: `${this.breed} Dog`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `You are ${this.breed} hello 👋`
        }
      ]
    };
  }
};
</script>
```

As you can see in these files there's a `head()` function. It will add custom fields in the `<head>` of your page, giving it proper SEO support!

_**Note**: If you're stuck, [here's what the code looks like in the repo](https://github.com/adnanrahic/serverless-side-rendering-vue-nuxt)._

Let's deploy it and see if it works.

### Deploy the app to AWS Lambda

At the very beginning, we added a script to our `package.json` called `deploy`. It'll build the Nuxt app and deploy the serverless service as we specified in the `serverless.yml`.

All you need to do is run:

```bash
$ npm run deploy
```

You'll see the terminal return some output with the endpoint for your app. But, there's one more thing for us to do. We need to add the domain. We've already added the configuration in the `serverless.yml` but there's one more command we need to run.

```bash
$ sls create_domain
```

This will create a CloudFront distribution and hook it up to your domain. Make sure that you've added the certificates to your AWS account. It usually takes around 20 minutes for AWS to provision a new distribution. Go have a coffee.

Back? Okay, go ahead and deploy it all once again.

```bash
$ npm run deploy
```

You'll still be able to use the default endpoints, but now you also have it tied up to your domain. Here's what it should look like.

![Terminal output from npm run deploy](/images/blog/2018-08-20/deploy.png)

Sweet, your app is up-and-running. Go ahead and try it out.

### Test the app with [Dashbird](https://dashbird.io/)

I usually look at my Dashbird metrics while testing an app to make sure it all works as expected. If it does, there shouldn't be any errors in the browser console, nor in the Dashbird app. What's cool is that [Dashbird](https://dashbird.io/features/) is [free, and doesn't require a credit card](https://dashbird.io/pricing/) to [sign up](https://dashbird.io/register/). That's a win-win by my book.

![Dashbird dashboards monitoring gif](/images/blog/2018-08-20/vuessrdashbird.gif)

The logs on my end are showing all green, so it’s working perfectly! That’s in, the app is done. You've created a server-side rendered Vue.js app with Nuxt.js, hosted it in a serverless environment on AWS Lambda, and added a way to monitor and debug your app before your users start complaining. Doesn't get any better than that.

### Wrapping up

This is a whole new way of thinking about creating fast and responsive websites. There are absolutely no servers you need to worry about. Just deploy the code and rest assured it'll work. If something breaks, you have [Dashbird](https://dashbird.io/features/lambda-error-tracking/) watching your back, alerting you in Slack if something is wrong. Damn, I love Slack integrations.

If you got stuck anywhere take a look at the [GitHub repo](https://github.com/adnanrahic/serverless-side-rendering-vue-nuxt) for further reference, and feel free to give it a star if you want more people to see it on GitHub.

Or, take a look at a few of my articles right away:

- [Building a serverless contact form with AWS Lambda and AWS SES](/blog/building-a-serverless-contact-form-with-aws-lambda-and-aws-ses)
- [A crash course on Serverless APIs with Express and MongoDB](/blog/a-crash-course-on-serverless-apis-with-express-and-mongodb/)
- [Solving invisible scaling issues with Serverless and MongoDB](/blog/solving-invisible-scaling-issues-with-serverless-and-mongodb/)
- [How to deploy a Node.js application to AWS Lambda using Serverless](/blog/how-to-deploy-a-nodejs-application-to-aws-lambda-using-serverless/)
- [Getting started with AWS Lambda and Node.js](/blog/getting-started-with-aws-lambda-and-nodejs)
- [A crash course on securing Serverless APIs with JSON web tokens](https://dev.to/adnanrahic/a-crash-course-on-securing-serverless-apis-with-json-web-tokens-22fa)
- [Migrating your Node.js REST API to Serverless](https://dev.to/adnanrahic/migrating-your-nodejs-rest-api-to-serverless-3gej)
- [Building a Serverless REST API with Node.js and MongoDB](https://dev.to/adnanrahic/building-a-serverless-rest-api-with-nodejs-and-mongodb-43db)
- [A crash course on Serverless with Node.js](https://dev.to/adnanrahic/a-crash-course-on-serverless-with-nodejs-5jp)

I also highly recommend checking out [this article](https://css-tricks.com/routing-route-protection-server-rendered-vue-apps-using-nuxt-js/) about Nuxt.js, and [this tutorial](https://serverless.com/blog/serverless-api-gateway-domain/) about the serverless domain manager.


*Hope you guys and girls enjoyed reading this as much as I enjoyed writing it. If you liked it, feel free to share so more people will see this tutorial. Until next time, be curious and have fun.*

___

_We aim to improve [Dashbird](https://dashbird.io/features/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_