---
title: Responding to AWS Lambda Errors with Serverless Application Model (SAM) Tools
description: A quick guide of how to respond to AWS Lambda Errors with Serverless Application Model (SAM) Tools
date: 2018-05-22T01:00:00.000Z
frontImage: "2018-05-22/header.jpg"
thumbnail: "images/blog/2018-05-22/header.jpg"
authorlink: 'https://github.com/starpebble'
author: Alex Zumkhawala
---

![Responding to AWS Lambda Errors with Serverless Application Model (SAM) Tools](/images/blog/2018-05-22/header.jpg)

<p>When a lambda function errors, a developer can now respond with new tools.  Lambda developers can execute their lambda function off the cloud with Amazon Web Services (AWS) Serverless Application Model <a href="https://github.com/awslabs/aws-sam-cli">(SAM) tools</a>.  SAM tools execute your lambda function on your machine in <a href="https://github.com/lambci/docker-lambda">Docker containers</a> provided by AWS.</p>
<h4>Why Run Lambda Functions Locally</h4>
<p>This is very helpful because it is similar to the environment that AWS Lambda functions run in on the cloud &#8208; in containers managed by AWS Lambda.  The lambda functions generate logs locally to the console instead of sending them to AWS Cloudwatch.  SAM tools will also launch AWS API Gateway locally, which is helpful for developers who execute lambda functions through http endpoints hosted on AWS API Gateway.  SAM tools provide a richer execution environment on your laptop than running Node.js alone.</p>
<h4>Dashbird&#39;s Error Notifications</h4>
<p>Here&#39;s a developer operations (devops) scenario: Dashbird notifies a developer than a one of the company&#39;s lambda function called &#39;<a href="https://github.com/starpebble/edge-greenery">EdgeGreenery</a>&#39; errored.  The developer browses to <a href="https://dashbird.io/">Dashbird.io</a> to review the error. <b>Note</b>: the developer&#39;s lambda function logs stack traces to AWS Cloudwatch.  That&#39;s why Dashbird can extract the stack trace from the Cloudwatch logs and display it on the website.  After reviewing the stack trace, the developer also reviews the frequency of the error, which Dashbird helpfully counts.  Now, how does a developer efficiently respond?</p>
<h4>Responding to an Error</h4>
<p>To debug the error, the developer&#39;s strategy is to reproduce the problem locally on a laptop.  First, they install the Serverless Application Model (CLI) tools, a set of Python v2.7 compatible scripts.</p>
<code>pip install --user aws-sam-cli</code><br>
<br>

<p>The package <b>aws-sam-cli</b> is a <b>tool for local development and testing of Serverless applications</b>. In the <a href="https://github.com/awslabs/serverless-application-model/tree/master">SAM</a> template below, the developer describes an execution environment, more precisely Node.js 8.10 and launches the <b>index.js</b> file.</p>
<script src="https://gist.github.com/starpebble/cb6b1157fa5e7c518ab2e3736fc077bd.js"></script>
<p>The lambda function also uses DynamoDB.  So, the developer downloads DynamoDB and runs it locally with Java 8, with an endpoint at http://localhost:8000.</p>
<code>java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb</code>
<br>
<br>

<p>With AWS command line tools, the developer creates a table locally for the lambda function.</p>
<code>aws dynamodb create-table --endpoint-url http://localhost:8000 --cli-input-json file://edge-greenery-schema.json</code>
<br>
<br>

<p>They then invoke the lambda function locally with <b>sam local invoke</b>. Here's the final command with sending an empty JSON payload via stdin.</p>
<code>echo "{}" | sam local invoke</code>
<br>
<br>

<p>Have a look at the source code for the lambda function below:</p>
<script src="https://gist.github.com/starpebble/5dcba9e4387fe50e7e4cb1b7e480489e.js"></script>
<p>The console outputs a stack trace from the app. Let&#39;s fix it! The app errors. There is no data in the table.  The database and the lambda function are running on the laptop. The developer can efficiently improve the lambda function. For example, the app could gracefully handle an empty table. How easy!</p>
<h4>Summary</h4>
<p>In this simplified example, we show how to run a lambda function and DynamoDB locally. This shows an execution environment on a Macbook. It has lots of software including <a href="https://java.com/en/download/">Java v8</a>, <a href="https://store.docker.com/search?type=edition&offering=community">Docker v18.03</a>, <a href="https://pypi.org/project/aws-sam-cli/">SAM CLI v0.3.0</a>, <a href="https://golang.org/dl/">Go v1.10</a>, and <a href="https://www.python.org/downloads/">Python v2.7</a>. Hope you will have a benefit from this short guide. Please see the GitHub project <a href="https://github.com/starpebble/edge-greenery">edge greenery</a> to check out the code.</p>

___

_We aim to improve [Dashbird](https://dashbird.io/) every day and user feedback is extremely important for that, so [please let us know](mailto:support@dashbird.io) if you have any feedback about these improvements and new features! We would really appreciate it!_