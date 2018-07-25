---
title: Creating a Serverless website. Part two
description: After creating your first serverless website you'll want to add a way for your viewers to contact you. Here's what you need to know.
date: 2018-07-23
frontImage: "2018-07-23/pexels-photo-1061141.jpeg"
thumbnail: "images/blog/2018-07-23/pexels-photo-1061141.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Serverless", "Node.js", "Lambda"]
---
Creating a [website on serverless](https://dashbird.io/blog/create-your-first-website-in-15-minutes/) is easy, so easy in fact that you can launch a site in under 15 minutes. I won’t bore you with the details but I will however share a link for those that want to start small and move up slowly. 

I was conflicted trying to figure out what is the one thing that every website has that would work great on serverless and after careful consideration I realized that contact forms are found on about 99% of the websites I’ve visited in the past years.

Before serverless you’d have to use php to send emails, at least that was the most popular ways of creating a form that sends a message. The code that sends out the form looks something like this: 

```php
<?php
$to      = 'nobody@example.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
```

It seems straightforward, right? On paper is does, but with the php mail() method you’ll inevitably run into problems so you’ll be stuck debugging and looking at logs for a uncomfortably long time. Even after you got it to work the first time, there’s a number of factors that are almost always out of your control that will cause your form to not work, things like ports closing or changing, the host might limit or disable the email system, etc. 

Serverless solves these issues with ports and avoids any hosting issues by having everything work from the “almighty” cloud. 

I’ll assume you already have node installed. Let’s open your terminal and install a simple boilerplate template: serverless create --template aws-nodejs

Next up we get all the packages we need installed. First we generate our package.json with npm init -y  and then we install our dependencies with npm i -s body-parser cors express serverless-http aws sdk

Once that completes you’ll have to load your project in an editor and open your handler.js file and and invoke the SES - Simple Email Service from AWS. Invoking SES is simple enough and looks something like this: `ses.sendEmail(params,function(err,data){})`. Checkout their documentation to learn [more](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html). 

What we’ll need to do is sign up for AWS SES and you do that by going to AWS Console, click on SES(you can use the search bar to search for SES), go to the left sidebar and click on email address. Add your email and verify it. It’s a two minute process.

Now let’s gets back to coding the contact form. In your project folder create a new folder called “form”. In that folder we’ll create our form assets. Create a file called script.js and style.css. We’ll go over each of them individually.

Our script.js looks like this:
```
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let error = document.querySelector(".error");
let btn = document.querySelector("button");
let success = document.querySelector(".success");

btn.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "remeberThisEndpoint", true);

  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
  };
  var data = {
    name: name.value,
    email: email.value,
    message: message.value
  };

  if (name.value && email.value && message.value) {
    success.style.display = "block";
    success.innerHTML = "Thanks for submitting";
    document.querySelector(".all").style.display = "none";
    xhr.send(JSON.stringify(data));

  } else {
      error.style.display = "block";
      error.innerHTML = "Please Fill  All Details";
  }
}
```


You’ll probably see familiar things in here, as you should. There’s no Lambda “black magic” in here. We are defining our parameters that we’ll use in the form, create the submit function that will call our endpoint. Yes, the endpoint(line 14) is where the magic is. Make a note of that because we’ll get back to it in a second.

Since we are here let’s create the .css too, just to get it out of the way. 
```
*{
box-sizing: border-box;
padding: 0;
margin: 0
}

body{
    font-family: sans-serif;
}

.items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-size: 1.1rem;

    padding: 1rem;
}

input{
    padding: 1rem;
    margin: .8rem;
    width: 25rem;
    height: 3rem;
    font-size: 1.1rem;
    border: 3px solid rgb(31, 121, 255);
    outline: none;
}

textarea{
    width: 25rem;
    height: 10rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
     outline: none;
 border: 3px solid rgb(31, 121, 255);
    font-size: 1.1rem;
}

.area{
    display: flex;
}

.area-label{
    margin-left:-2rem;
}

.txt{
    margin-left:.6rem;
}

button{
padding: 1rem;
width: 10rem;
margin-top: 2rem;
text-align: center;
background-color: rgb(75, 224, 75);
font-size: 1.3rem;
color: rgb(2, 2, 15);
box-shadow: 0 .2rem .2rem black;
}

.success{
   background-color: rgb(75, 214, 224);
   font-size: 1.2rem;
   text-transform: capitalize;
    text-align: center;
    margin-top: 10rem;
    padding: 2rem;
    box-shadow: 0 .2rem .2rem rgb(0, 0, 0);
   display: none;
}

.error{
    display: none;
    animation: move .2s ease-in ;
}
@keyframes move{

    0%{
        opacity: 0;
        transform: translateY(-80%);
    }
    50%{
        opacity: .6;
        transform: translate(-20%);
    }

    70%{
        opacity: .7;
        transform: translate(20%);
    }

    100%{
        opacity: 1;
        transform: translate(0);
    }

}
```

I’m not going to insist on the .css file but if you think I need to explain anything please leave a comment.

Now that we have our form assets created let’s load them in a html. Go to the root of your project and create a new file named index.html.
Since the code is straight forward just paste the following and you are all set.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name= "viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact us</title>
    <link rel="stylesheet" href="form/style.css">

</head>
<body>

<div class="all">
  <form action="" class="items">
    <h1>Contact Us</h1>

      <div class="error-items">
<p style="color:red"  class="error"></p>
</div>
<div>
    <label for="name">Name</label>
    <input type="text"  id="name"  required  placeholder="Enter Your Name" class="name" />
</div>

<div>
    <label for="email">Email</label>
<input type="email"  required placeholder="Your Email" id="email"  class="normal" />
</div>

<div class="area">
<label for="message" class="area-label">Message</label>
<textarea type="text" placeholder="Message" required id="message" class="txt"></textarea>
</div>
<button>Send</button>
  </form>
</div>

<p class="success"></p>
    <script src="./form/script.js"></script>
</body>
</html>
```

I know you got bored following the article up until now, nothing cool has happened. Well, hold on to your seat because we are going to write our serverless code up next.


We’ll have to first address the handler.js file. Open it from the root of your project and paste in the following code:

```
const serverless = require("serverless-http");
const AWS = require("aws-sdk");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

if (!AWS.config.region) {
  AWS.config.update({
    region: "us-east-1"
  });
}

const ses = new AWS.SES();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const emailParams = {
    Source: "yourname@mail.com", // Your Verified Email
    Destination: {
      ToAddresses: ["yourname@mail.com"] // Your verfied Email
    },
    ReplyToAddresses: [req.body.email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `${message}  from  ${req.body.email}`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "You Received a Message from www.domainname.com"
      }
    }
  };

  ses.sendEmail(emailParams, (err, data) => {
    if (err) {
      res.status(402).send(`${err} ${err.stack}`);
    }
    if (data) {
      res.send(data);
    }
  });
});

module.exports.form = serverless(app);
```

What we just did is to create the method that calls SES and sends the message. Pretty straightforward stuff.

Next up we are going to have a look at the serverless yml. This is where we are just going to select what region we’ll be using, defining the actual function that the Lambda will execute and the action, which is ses:SendEmail.

```
service: contact-form

provider:
  name: aws
  runtime: nodejs8.10
  region: us-east-1
  iamRoleStatements:
    - Effect: "Allow"
      Action:
        - "ses:SendEmail"
      Resource: "*"

functions:
  app:
    handler: handler.form
    events:
        - http: ANY /
        - http: 'ANY {proxy+}'

```



Next stop: delopyment. Sounds complicated but it’s actually a simple task. All you do is open your terminal and run: sls deploy.

You’ll see the log on the screen and when it’s done you’ll have to copy the endpoint and paste it in your script.js file I mentioned earlier. Open script.js and on line 14 replace the word “remeberThisEndpoint” with the endpoint supplied. That’s it! Open your html and test out your contact form.

<center>![Serverless contact form](/images/blog/2018-07-23/contact-form-serverless.gif)</center>

Nicely done! High five all around! It's been quite a journey but it's worth it. You are the proud owner of a brand new website.

<h3>Congratulations!</h3>

Before I let you go, I’ve got to tell  you about monitoring your app which is very important when working with serverless. You'll want to keep an eye out for health problems, invocations time and any errors you might have. Not keeping tabs on your serverless app might cost a lot and it’s not something startups can afford. Or even if they could afford the cost what they simply can’t do is have their service interrupted because a Lambda is taking too long to execute creating a bad experience for their customers.

You can check on your app either via the AWS Console but this is not something that can be easily understood or through a third party like [Dashbird.io](http://dashbird.io), a service that monitors your AWS Lambda providing insights on what happens behind the scenes.

---

<center><i>To see the first part of this tutorial click [here](https://dashbird.io/blog/create-your-first-website-in-15-minutes/).</i></center>