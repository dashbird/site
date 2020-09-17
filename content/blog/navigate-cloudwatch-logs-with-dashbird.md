---
title: Navigating CloudWatch Logs Effectively with Dashbird
description: How to navigate your AWS CloudWatch logs effortlessly with Dashbird?
date: 2020-09-17T00:00:00.000Z
frontImage: "2019-03-12/activity-adult-adventure-1308751.jpg"
thumbnail: "images/blog/2019-03-12/activity-adult-adventure-1308751.jpg"
canonical: https://dashbird.io/blog/navigate-cloudwatch-logs-with-dashbird/
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
featpop: most-popular
blog: ["Serverless", "DevOps", "AWS", "Cloudwatch"]
---

To get some serious work done, we usually need to prepare for it. _Baby steps first_, they say. In our niche, these “baby steps” would be countless small jobs that need to be done before we can start with our main project. Proper preparation (try saying this 5 times fast) is the key to success, but after we’ve achieved our primary goal, there will always be something to do to keep it steady and flowing. 

What does it take to keep your application working flawlessly? Well, among many other things, navigating AWS CloudWatch logs is undoubtedly one of them, and today we’ll talk more about how to navigate CloudWatch logs effectively with Dashbird.

## What is AWS CloudWatch?

<a href="https://dashbird.io/blog/dashbird-vs-aws-cloudwatch/">CloudWatch</a> is the AWS monitoring service for AWS Cloud resources for all the applications that you run on your AWS Cloud. Therefore, CloudWatch will provide you with alerts in case something goes down the rails. CloudWatch allows you to collect and track metrics so that you can get the system-wide visibility, resource usage, application performance along with the overall operational health. These insights will allow you to stay ahead of potential problems and to keep your application running smoothly. 

With CloudWatch, you are able to collect as well as have access to all your operational data and performance in the form of logs and metrics from a single platform. This means that you can overcome the challenge of monitoring individual apps and systems in a server, network, database, etc. CloudWatch enables you to track all of it together (applications, services, infrastructure) and to set alarms, logs, and events data to take actions automatically.

## Logs

There are three main types of logs within the Amazon CloudWatch services:

   <b>1. Vended logs</b> - are logs published by AWS services on the customer behalf. Amazon VPC Flow Logs and Amazon Route 53 logs are the two supported types.
   <b>2. Logs released by AWS services</b> - there are over 30 AWS services that publish logs to CloudWatch like AWS CloudTrail, AWS Lambda, Amazon API Gateway, and many others.
   <b>3. Custom logs</b> - these usually come from your application as well as from on-premise resources.
You are able to utilize the AWS System Manager in order to install a CloudWatch Agent or even use the PutLogData API action for a secure log publishing.

## Dashbird’s Role

Dashbird is a custom-made service that provides a syntactic analysis of the pre-formatted AWS CloudWatch logs which are emitted from all Lambda functions after every invocation. Every piece of data coming from these logs is formatted into different Lambda invocation events and is further compiled into an easily understandable bird-eye view dashboard. Attaching a module or extra bits of code to your monitored function( which will furthermore cause execution delays) is <b>not</b> needed like it is within some alternative services. 

What's interesting with Dashibrd, is the way it structures logs in a manner that makes them extremely easy to navigate. Other perks provided by Dashbird are live tailing logs from CloudWatch as well as full-text searches. Directly speaking, Dashbird collects important CloudWatch logs and sorts out actionable and meaningful metrics and <a href="https://dashbird.io/features/insights-engine/">insights</a>, which is very important for making your service an excellent one. 

All that’s important is already captured in the dashboard view, which is of immense help for developers since it provides them with quick and easy the overall health and an excellent overview of their functions as well as function utilization.

Dashbird gives you a whole new way of compiling individual invocations in an easy-to-find view which is an experience on its own. If you're working with Lambda functions every day you know how annoying it can be to search through the entire log streams to discover that in most cases only a single line is what’s causing problems in your services. 

An essential part of Dashbird services is that it also provides daily updates along with key points of interest brought all together from the invocation logs in the last 24 hours. All of this means that even if everything is going flawlessly, in case something happens, Dashbird’s alert system will let you know instantly via email or Slack. 


![Dashbird serverless monitoring and AWS Lambda logging](/images/blog/2020-05-vacation-buffer/dashbird-serverless-monitoring-aws.png "Dashbird serverless monitoring and AWS Lambda logging")


Visual noise is something most of us are thinking of when it comes to CloudWatch logs, but <a href="http://dashbird.io">Dashbird</a> offers something different. Dashbird is quick and easy to set up, to use, and above all, <b>to understand</b>. Custom made services, like Dashbird, will cut a big piece of execution logs leaving you only with the small important parts, in which you can quickly and efficiently search for the specific invocation within the particular function.

## Let’s Wrap It Up

From what we’ve already said, we know that Dashbird’s ease-of-use and friendly UI will for sure make your every day log navigation much easier than what you’re used to by now. In case you’ve spent countless hours searching for something to help you stop wasting your time searching through the logs, you might want to <a href="https://dashbird.io/register">get your free account now</a> and give Dashbird a try to see how it can work for you, help you save valuable time and bucks on your nexy cloud bill.
