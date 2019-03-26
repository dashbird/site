---
title: How to test serverless applications
description: Serverless applications are a special kind of breed of apps and testing them can be daunting at first.
date: 2019-03-26T12:00:00.000Z
frontImage: "2019-03-26/photo-1528845922818-cc5462be9a63.jpeg"
thumbnail: "images/blog/2019-03-26/photo-1528845922818-cc5462be9a63.jpeg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["serverless", "cloudwatch"]
---


Like any other creation in progress or in the making, serverless applications, need to be tested and monitored. How else would you know if what you’ve created is providing desired results? Before putting your “newborn child” out into the world, you must make sure that it’s ready for the world. Software or even hardware of any sort will first be tested before it goes to mass production, and the same goes for your serverless applications. 

Since you can’t just throw them out without making sure they are designed as they should be, we’ll cover the serverless applications testing processes, and we’ll bring you the insight of how and why it’s done the way it is.

When it comes to serverless applications, they are very complex, and this complexity constantly moves further out of the code. The complexity lies inside the function configuration - IAM permissions, memory, timeout, event source configuration, amongst many others. I know there are a lot of terms and acronym relating to serverless metrics so have a look at <a href="https://dashbird.io/blog/metric-based-alerting-for-aws-lambda/">this</a> post to learn what they all mean. Functions are stateless and they rely solely on external services which manage their application state. This gives us an idea of what’s happening with the number of integration points. 

## Testing Stages

When you start writing the code with the idea of implementing a new feature or even fixing an existing bug, there are various stages in which you’re able to test your code. Every testing stage covers a different angle of your application, while all of them put together will let you realize your serverless application is built the way it should be and it’ll work the way it should work.

### Local Tests

We’ll talk about tools which can be very useful to assess quickly if your code works. But be aware that they are also limited regarding how much confidence you can get from them. They will not simulate API authentication nor will they mimic IAM permissions, but they’ll continuously face the battle of keeping up with most recent changes in the platform. 

You can choose from several different ways of performing local testing of your code, and here are some:

- Utilizing <a href="https://aws.amazon.com/about-aws/whats-new/2017/08/introducing-aws-sam-local-a-cli-tool-to-test-aws-lambda-functions-locally/">local-stack</a> will simulate AWS services locally;
- Using <a href="https://serverless.com/blog/event-driven-serverless-app-local-dev-exp/">Serverless Framework</a> or AWS SAM local tools will allow you to invoke functions locally;
- Running a Node.js function within a custom wrapper;
- Stimulating AWS Lambda environment locally via <a href="https://www.npmjs.com/package/docker-lambda">docker-lambda</a>.

### Unit Tests

Since complexities aren’t something you need to worry about anymore within your code, the value of unit tests goes out the window. There’s less and less need for unit tests because the majority of complexities is usually found around how a function interacts with external services. In case you own a piece of complex business logic, what you should do is to put that logic into its own module, and that way you’ll be able to test it as a unit. You can utilize the same testing frameworks which you already know of like Jest, <a href="https://jasmine.github.io/">Jasmine</a>, and <a href="https://mochajs.org/">Mocha</a> since all of them work just fine.

### Integration Tests

When testing your code against external services you depend on, like S3 or DynamoDB, that’s what’s known as integration testing. Integration testing will allow you to catch errors since it’s considering how your code interacts with external services. 

In case your expectations of the response format are incorrect, or if there’s a bug in your DynamoDB query expression, integration testing will help you solve all of these issues. While performing integration testing, you’ll invoke the function locally by passing in a stubbed event as well as context objects. In case the function needs to integrate with the external services, then the function itself should be set to talk to the “real thing.”

### Acceptance Tests

All of the tests mentioned above can help you identify potential problems in your code. Is there anything else that might happen? Well, there is. Your functions might not have right IAM permissions set up or even it’s not allowed to communicate with DynamoDB table. Are you having troubles with function’s timeout setting being set too short? Even if not enough memory was allocated, that’s also another issue for you to resolve.

Take into consideration that there are a lot of opportunities that could lead to misconfiguration. You need to try out your functions after their deployment, so you’ll be sure if everything works perfectly and as expected end-to-end. In case you’re using API Gateway and Lambda, make an HTTP request against the deployed API and be sure to validate against the responses so you’ll accomplish an end-to-end test. That is the way you will be able to find permissions and other configuration errors that will almost certainly be missed by unit and integration tests.

### UI Testing

If a UI client is using your serverless application directly or not, you should make sure if the changes are compatible with the client. You’re able to run automated visual tests as well as automated tests against different devices and platforms that use services like AWS Device Farm. Also, these tests can be done manually by a Q&A team, or even automated tests via Selenium-like frameworks.

### Production Testing

We’ve been through all the testing steps, but there’s always something that can go wrong when it goes into production. AWS can experience an outage which will for sure have a significant impact on your serverless application. Since your serverless application depends on many external services, those services can suffer disruption as well. 

Scale-related bugs can show themselves only when the system is under load, which is yet another thing to worry about. Chaos Engineering is a discipline whose main focus on testing the application’s ability to endure turbulent conditions within production. A series of controlled experiments will inject small amounts of failures into the system which will furthermore help to discover the unknown failure modes, and therefore, giving you an opportunity to build a resilience inside your system.

This is where Dashbird shines especially. You can test, retest applications all you want but once that baby goes Live, s*#@ will happen. It's just how it is. You'll be able to use <a href="https://dashbird.io">Dashbird</a>'s function view to see exactly how your application is behaving and when the app goes sideways, you'll be able to use the Incident management platform you can see exactly what broke and where.

<img src="https://dashbird.io/images/docs/errorview-2019.02.13.png">

## Conclusion

After everything we’ve mentioned, we come to realize that the most important thing that you need is an excellent monitoring and error reporting tool for your serverless application, and Dashbird is precisely the tool what you’ve been looking for. Start using it for free(forever) or see all that it has to offer with our two-week Free trial. Also, feel encouraged to share your thoughts in our comment box below.

