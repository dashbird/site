---
title: Zappa - Serverless Python Web Services
description: On AWS Lambda, Zappa Serverless framework named after guitarist is popular for creating serverless applications.
date: 2018-08-04T12:00:00.000Z
frontImage: "2018-08-04/pexels-photo-210627.jpeg"
thumbnail: "images/blog/2018-08-04/pexels-photo-210627.jpeg"
authorlink: 'http://vizualize.me/bhagvank#.W2PkoiOB2_s'
author: Bhagvan Kommadi
blog: ["IaaS"]
---

Twelve-factor apps are becoming prevalent these days. Isolating dependencies, having backing services, disposability and stateless processes are common features of serverless applications. Serverless applications are triggered by external events and they invoke code deployed in the environment. The code is loosely coupled with other functional code and designed to perform a single task at a time. Serverless Frameworks orchestrate the code at the runtime.

AWS Lambda, Google Cloud, iron.io, IBM OpenWhisk, Azure Functions, Serverless Framework and Zappa are the serverless environments used as function as a service platform (FaaS). The serverless application might have functionality such as authentication, authorization, page navigation, searching, parsing json, transactions, scheduling, processing, and messages from stream or queue. The timeouts are configured for the serverless apps. Sometimes, maximum is around 5 minutes before being stopped. These limits are for functions as a service deployed on AWS Lambda, Microsoft Azure and Google Cloud Functions. AWS has a limit of 1000 concurrent executions for the functions. On special requests, AWS can raise the limit to a higher number in the order of thousands.

The architecture of serverless apps needs to have different coordinated FaaS functions. These functions will use API gateway for configuring routes and endpoints. The request handling, routing & response management processes are handled by API Gateway. CloudFront distribution can be configured as a content delivery network for caching responses and delivery attached to API Gateway. The serverless app lifetime is the time taken for request processing and response sent to API Gateway. On AWS Lambda, Zappa Serverless framework named after guitarist is popular for creating serverless applications. The processing time and the cost associated is cheaper than IaaS/PaaS hosts like Ec2, Heroku etc., The apps built can be scaled to billions of events and no additional effort is required. Lambda can handle large projects and Zappa can be set through slim_handler as true.

<center>![Zappa](/images/blog/2018-08-04/screenshot.13.png)</center>


Zappa has features of packaging, deployments, updates, rollbacks, scheduling, and un-deploying the applications on AWS Lambda. The serverless functions can be executed in response to AWS events synchronously and asynchronously. Direct and remote invocation is feasible with Zappa on AWS.  Serving static files and binary uploads through S3 and processing the content is supported by Zappa framework. Keep warm is a setting on the server to keep the lambda live for regularly occurring execution of the applications. Cross-origin resource sharing can be enabled for Zappa by setting CORS to true.
Zappa can be deployed on Docker (Zappa docker) and Lambda environment on Docker can be used as a development environment.  AWS Lambda’s Dead letter queues, SSL Certificates, IAM 
Roles and Policies are the key characteristics of security and messaging (SNS/SQS) modules in Zappa on AWS Lambda. Zappa integrated with Lamb CI open source project provides code checking out from GitHub through AWS SNS, running the suite and storage of the build on S3.
Zappa supports SQLite database, RDS, and DynamoDB for python and Django applications on AWS and Lambda. AWS X-Ray can be used for monitoring, troubleshooting, discovering root causes and diagnosing the issues of serverless applications. Zappa-Sentry is the open source glue to add sentry to a Zappa app deployed on AWS Lambda.
Serverless, Claudia JS, and Terraform are the other FaaS deployment frameworks. Serverless supports python and node.js apps. Claudia JS is used for Node.js app deployment. Terraform is used for deployment to multiple clouds and SaaS systems. All deployment frameworks support provisioning the cloud infrastructure for databases, queues and object storage which are required by the application. They support packaging and monitoring the applications deployed as functions as a service.

The roadmap for Zappa has many new capabilities yet to be released. The ability to schedule lambda events, celery-like event processing module, Let’s SSL Encryption and others are yet to be part of Zappa.  

To monitor your Zappa powered application you can use <a href="dashbird.io">Dashbird</a>. Sign up right now for a free account. It only takes two minutes and you will never have to add a credit card.