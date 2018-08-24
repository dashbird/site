---
title: What Are AWS Lambda Triggers? (Explained for dummies)
description: Events can be anything, really. For a lambda function to execute, an event must occur.
date: 2018-08-24T12:00:00.000Z
frontImage: "2018-08-12/pexels-photo-767197.jpeg"
thumbnail: "images/blog/2018-08-12/pexels-photo-767197.jpeg"
author: Nemanja Novkovic
blog: ["AWS", "Lambda", "Events"]
---

Like in every aspect of life, we tend to learn new things straightforward. Skipping some steps when learning something new might get you confused, it tends to get annoying, or it can even make you frustrated. Why? Well, to be able to understand how something works appropriately and later on to know how to implement your knowledge practically without any kind of stress involved, you must master everything about there is regarding the particular subject in particular order. Let me put it this way... 

> You can’t calculate how fast is subatomic particle moving in space if its 300 light-years away from the closest planet if you don’t know the basic math like 3.14 times 42, right?

Baby steps first. So, going back to our topic here, what are AWS Lambda triggers?

### AWS Lambda And Amazon DynamoDB Integration

DynamoDB is an AWS product just as AWS Lambda and therefore you're able to create triggers with ease. Triggers are pieces of code that will automatically respond to any events in DynamoDB Streams. 

Triggers allow you to build applications which will then react to any data modification made in DynamoDB tables. By enabling DynamoDB Streams on a table, you will be able to associate an ARN with your Lambda function. Instantly after any item in the table is modified, a new record will appear in the table’s stream. When AWS Lambda detects a new stream record, it will invoke your Lambda function synchronously. 

Lambda functions are able to perform any actions you specify, like sending notifications or a workflow initiation. A simple example of that would be if we suppose you have a mobile gaming app that’s writing on a GameScores table, so, each time the TopScore attribute of the GameScores table is updated, a corresponding stream record will be written to the table’s stream. This means that this event can trigger a Lambda function that will post a message of social media sites.

### Event-Driven Lambda And How To Trigger It

Up until recently, our knowledge of triggering lambda functions was based around using API Gateway as a trigger, but that’s not entirely correct. 

Lambda will be triggered if an event happens. Events can be anything, really. For a lambda functions to execute, an event must occur. Lambda can’t trigger another Lambda directly. To be able to connect two Lambdas together, what you need to do is you need to make the first Lambda generate an event that the second Lambda will understand in order to be triggered.

> _**Note**: To bypass this you need to use the AWS CLI to trigger a lambda function from another lambda function. However, this is a huge anti-patter you should never use._

### Three Ways To Trigger Lambda

To trigger a lambda function, you can choose between many different ways. Here are the 3 most common ways.

- **API Gateway event** is one way to trigger Lambda. These events are considered as classic events. Simply put, it means that when somebody is calling an API Gateway, it will trigger your lambda function. For Lambda to know which kind of event will trigger it, first, you need to define it in the configuration, or `serverless.yml` if you're using the <a href="https://serverless.com/" target="_blank">Serverless Framework</a>.

- **S3 events** occur when someone (or something) modifies the content of an S3 bucket. Altering the content can be achieved by either creating, removing, or updating a file. While you’re defining an event, you’re able to specify what sort of action will trigger the lambda function, whether it’s creating, removing, or updating a file. 

- **DynamoDB events** will be explained shortly, but first, let’s start with Dynamo Table streams and what those are. Dynamo table stream is like a line or a queue through which the data flows. In this particular case, the “data” is actually the change made to a specific table. This means that when someone updates a record in a specific DynamoDB table, it will instantly publish all of these changes in a stream and it further implies that the lambda will be triggered because there is data in the stream. This way is a little bit more complicated since we need to connect the lambda to a DynamoDB stream. But nothing is impossible! When there’s data in the stream, there are two different ways lambda will get triggered by it. First, when there is any kind of data in the stream, which means that at a certain time there is a single change to the database, the lambda will be executed only once. The second way that Lambda will be triggered is when there is a batch of events in the stream which will all be processed together. This way saves the execution time a lot since processing streams are pretty fast. 

### The Conclusion

Essentially, AWS Lambda triggers are merely actions caused by specific events that will further trigger the lambda function. For a lambda function to be executed, something (in this case triggers) need to jump-start it. Leaving your comments in the section below in case you’d like to leave your mark on this topic will for sure help us learn something new, probably. Spreading the knowledge is the greatest power of all, so let’s share.

---

Once you have finished reading about triggers you will probably start to wonder about the observability aspect of your serverless app or to better put it, the lack thereof. You wouldn't be the first one to think like that, but luckily there are a number of services that can help you in that regard. 

Take <a href="http://dashbird.io" target="_blank" rel="noreferrer noopener">Dashbird.io</a> for example, they can help you monitor your serverless environment, set up alerts and keep track of costs without adding any strain to your application. Furthermore, they have a pretty decent free tier that is more than enough to get you started. You can <a href="https://dashbird.io/register/">sign up</a> right now to start monitoring your serverless app for free!