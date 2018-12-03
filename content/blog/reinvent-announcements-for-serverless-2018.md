---
title: Serverless announcements at re:Invent 2018
description: AWS is pushing serverless a lot with exciting releases. Check them out here!
date: 2018-12-02
frontImage: "2018-12-02/aws-lambda-layers.jpg"
thumbnail: "images/blog/2018-12-02/aws-lambda-layers.jpg"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: https://twitter.com/rehemagi
blog: ["reInvent", "serverless", "AWS", "news"]
---

AWS re:Invent, the biggest cloud-computing event of the year, ended on Friday and left behind a slew of exciting new features and products for building serverless applications. Let's summarize what was announced and how those updates can be significant for you.


## All serverless announcements

 * [Lambda Layers](#lambda-layers)
 * [Lambda Runtime API](#lambda-runtime-api)
 * [Ruby and Python support](#ruby-and-python-support)
 * [AWS IDE integration](#aws-ide-integration)
 * [Websocket support (coming soon)](#websocket-support)
 * [CloudWatch Logs Insights](#cw-log-insights)
 * [AWS Firecracker virtualization technology](#firecracker-vm)
 * [DynamoDB transactions](#dynamodb-transactions)
 * [DynamoDB On-Demand](#dynamodb-ondemand)
 * [Aurora Data API](#aurora-data-api)
 * [Aurora PostgreSQL Serverless (Preview)](#postgresql-aurora)
 * [Lambda ALB Support](#lambda-alb-support)
 * [More Step-Function Integrations](#step-fn-integrations)
 * [Enchanched Lambda + Kinesis Data Streams] (#enchanced-lambda-kinesis)
 * [Amplify Console](#amplify-console)


## <a name='lambda-layers'></a>Lambda Layers (AMIs for Lambda)

**<u>What is it?</u>** Lambda Layers are a new type of artifact that can contain arbitrary code and data, and may be referenced by zero, one, or more functions at the same time. With layers, you can centrally manage common components across multiple functions enabling better code reuse.

**<u>Why is it important?</u>** Lambda functions in serverless applications often use the same data, SDKs and packages across functions. This allows developers to use and manage the commmon code separately from the core logic in your code. <a href='https://aws.amazon.com/blogs/aws/new-for-aws-lambda-use-any-programming-language-and-share-common-components/' target='_blank'>Read how to use Lambda Layers.</a>

## <a name='lambda-runtime-api'></a>Lambda Runtime API

**<u>What is it?</u>** The Runtime API for AWS Lambda defines a standardized HTTP-based specification which codifies how Lambda and a function’s runtime communicate. It enables you to build custom runtimes that integrate with Lambda to execute functions in response to events. By leveraging the Runtime API, you can use binaries or shell scripts, and your choice of programming languages and language versions.

**<u>Why is it important?</u>** You can bring your language of choice and build serverless applications with it. The Serverless Framework has also released their <a href='https://github.com/serverless/open-runtime-poc'>Open Runtime repository</a> on GitHub which enables developers to share common solutions for complex problems before the they even get to your business logic. <a href='https://serverless.com/blog/introducing-serverless-open-runtime/' target='_blank'>Read more about it at their blog</a> or read more about custom runtimes from <a href='https://docs.aws.amazon.com/lambda/latest/dg/runtimes-custom.html' target='_blank'>AWS' blog.</a>

## <a name='ruby-and-python-support'></a>Ruby and Python 3.7 support

**<u>What is it?</u>** AWS Lambda not supports Ruby and Python 3.7. With the Python update you get the latest Python features like <a href='https://docs.python.org/3/library/dataclasses.html' target='_blank'>dataclasses</a>. Check out the AWS announcement for <a href='https://aws.amazon.com/blogs/compute/announcing-ruby-support-for-aws-lambda/' target='_blank'>Ruby support for AWS Lambda.</a>

## <a name='aws-ide-integration'></a>AWS IDE integration

**<u>What is it?</u>** AWS toolkits to deeply integrate popular IDEs and speed up development processes.

**<u>Why is it important?</u>** Step-through debugging of Lambda functions, shortcuts and much easier deployments. Currently supports PyCharm, IntelliJ (preview) and Visual Studio Code. <a href='https://aws.amazon.com/blogs/aws/new-aws-toolkits-for-pycharm-intellij-preview-and-visual-studio-code-preview/' target='_blank'>Read more from AWS blog.</a>

## <a name='websocket-support'></a>Websocket support (coming soon)
**<u>What is it?</u>** <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' target='_blank'>Websockets</a> support for your AWS Lambda.

**<u>Why is it important?</u>** Websockets enable bi-directional interaction between client and server, making it easy to implement real-time functionality.

## <a name='cw-log-insights'></a>CloudWatch Log Insights
**<u>What is it?</u>** Faster and better support for log analytics in CloudWatch.

**<u>Why is it important?</u>** You can query and search through CloudWatch logs and visualize the results which makes it easier to understand what's going on in your serverless application. <a href='https://aws.amazon.com/blogs/aws/new-amazon-cloudwatch-logs-insights-fast-interactive-log-analytics/' target='_blank'>Read the announcement from AWS.</a>

## <a name='firecracker-vm'></a>AWS Firecracker virtualisation technology
**<u>What is it?</u>** An extremly lightweight virtual machine manager able to create a microVM in 125ms (on average). It can host Lambda functions and Fargate containers.

**<u>Why is it important?</u>** This doesn't concern most of the serverless users today as there's little reason to go back to managing low-level infrastructure. Firecracker could be useful for using Lambda and Fargate on-premises or building a container orchestration platform that needs to be super-performant.

## <a name='dynamodb-transactions'></a>DynamoDB transactions
**<u>What is it?</u>** DynamoDB transactions provide developers atomicity, consistency, isolation, and durability (ACID) across one or more tables within a single AWS account and region.

**<u>Why is it important?</u>** You can use transactions when building applications that require coordinated inserts, deletes, or updates to multiple items as part of a single logical business operation. DynamoDB is the only non-relational database that supports transactions across multiple partitions and tables. <a href='https://aws.amazon.com/blogs/aws/new-amazon-dynamodb-transactions/' target="_blank">Read the AWS' announcement.</a>

## <a name='dynamodb-ondemand'></a>DynamoDB On-Demand
**<u>What is it?</u>** No capacity planning and pay per-request billing model for DynamoDB.

**<u>Why is it important?</u>** You don't have to determine the read and write capacity ahead of time, meaning you'll not run into throughput exceeded issues and also cut costs by avoiding over-provisioning. <a href='https://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/' target="_blank">Read more about it from AWS blog.</a>

## <a name='aurora-data-api'></a>Aurora Data API
**<u>What is it?</u>** HTTP endpoint for accessing Serverless Aurora

**<u>Why is it important?</u>** Instead of the MySQL protocol that requires persistent connection and language specific libraries you can now use Aurora through API endpoints with Data API. It already has an integration with <a href='https://aws.amazon.com/tools/' target='_blank'>AWS SDK.</a> Read the <a href='https://aws.amazon.com/about-aws/whats-new/2018/11/aurora-serverless-data-api-beta/' target='_blank'>announcement from AWS</a>.

## <a name='postgresql-aurora'></a>Aurora PostgreSQL Serverless (Preview)
**<u>What is it?</u>** PostgreSQL support for Aurora Serverless

**<u>Why is it important?</u>** Something for PostgreSQL fans. <a href='https://aws.amazon.com/about-aws/whats-new/2018/11/sign-up-for-the-preview-of-amazon-aurora-postgresql-serverless/' target='_blank'>Sign up for early access here.</a>

## <a name='lambda-alb-support'></a>Lambda ALB support
**<u>What is it?</u>** Application load Balancer can now invoke Lambda functions to serve HTTP requests.

**<u>Why is it important?</u>** With the Application Load Balancers' support for content-based routing rules, you can also route requests to different Lambda functions based on the request content. Prior to this launch, you could only use EC2 instances, containers, and on-premises servers, as targets for Application Load Balancers, and you needed other proxy solutions to invoke Lambda functions over HTTP(S).

## <a name='step-fn-integrations'></a>More Step Functions integrations
**<u>What is it?</u>** AWS Step Functions support for ECS, Fargate, DynamoDB, SNS, SQS, Batch, Glue and Sagemaker.

**<u>Why is it important?</u>** Step Functions includes built-in error handling, parameter passing, recommended security settings, and state management, reducing the amount of code you have to write and maintain.

## <a name='enchanced-lambda-kinesis'></a>Enchanched Lambda + Kinesis Data Streams
**<u>What is it?</u>** Support the Kinesis Data Streams (KDS) enhanced fan-out and HTTP/2 data retrieval features for Kinesis event sources. Each registered event source can process records with a throughput of up to 2MB per second per shard. By registering your event sources as Kinesis data stream consumers, you can run multiple high performance, low-latency serverless stream processing applications on a single Kinesis data stream.

**<u>Why is it important?</u>** Great performance increase for Kiesis Data Streams and Enchanced Fan-Out gets you around limitations of previous Kinesis consumers.

## <a name='amplify-console'></a>Amplify Console
**<u>What is it?</u>** Continous deployment and hosting service for web applications with serverless backends. Think single page app frameworks like React, Angular, Vue and static-site generators like Jekyll, Hugo and Gatsby.

**<u>Why is it important?</u>** This can accelerate your application release cycle by deploying your frontend and backend code on every commit. On connecting a Git repository, Amplify automatically determines the build settings for both the frontend framework and any serverless backend resources configured with the Amplify CLI. <a href='https://aws.amazon.com/about-aws/whats-new/2018/11/announcing-aws-amplify-console/' target='_blank'>Read more about it from the AWS' blog.</a>
