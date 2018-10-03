---
title: Machine Learning with AWS Lambda
description: We all know the latest trend in today’s technology and how Machine Learning is changing the way business decisions are made. Machine learning replaces old manual repeatable processes and provides the systems the ability to get into a mode of self-learning without being explicitly programmed.
date: 2018-10-03T01:00:00.000Z
frontImage: "2018-10-03/header.jpeg"
thumbnail: "images/blog/2018-10-03/header.jpeg"
author: Bhaskar Das
blog: ["Serverless", "Lambda", "Monitoring"]
---

We all know the latest trend in today’s technology and how Machine Learning is changing the way business decisions are made. Machine learning replaces old manual repeatable processes and provides the systems the ability to get into a mode of self-learning without being explicitly programmed. 

There are many online resources that provides enough information on machine learning, developing ML models, algorithm selection, validation and evaluation. 

While most of the time and resources are spent on developing models to achieve desired results, allocating additional computational resources to setup an infrastructure to replicate these models on a production environment can be a difficult task.

Machine learning models can be deployed into production in a wide variety of ways. However, AWS Lambda proves to be a suitable candidate when it comes to providing a scalable infrastructure to replicate the models. 

## AWS Lambda Architecture

AWS Lambda is a serverless computing service that executes your code based on the events from a user application and manages the compute resources for that application automatically. Here is a basic AWS lambda architecture.

![architecture](/images/blog/2018-10-03/lambda-architecture.png)

## Lambda execution model:

1. AWS Lambda works when a client makes a request by triggering the lambda functions through an event. 
2. When the function is invoked then it first checks to see if the function is already running on its servers or not. If not, then it loads the function from a data store such as AWS S3.
3. Once the function is retrieved then it configures the environment with resources required to run the function. Based on the configuration a server is created and the function is executed.
4. After the execution of the function the result is captured and returned to the client.

## Lambda Triggers

The core components of AWS Lambda are Lambda functions and event sources. An event source can be any AWS service, or a user created application that publishes events and a lambda function is the custom code that processes the events. A lambda function is invoked automatically when the event sources trigger the function through Invoke operation.

## Importing Deep Learning Models

The first step is to train your model based on the use case. You can also import open source models from Keras or TensorFlow. The most easy and efficient way is to use an existing model and fine tune them for your use case. TensorFlow is an open source library for high performance numerical computation that helps training models faster and easier whereas Keras is a high-level neural networks API, written in Python and capable of running on top of TensorFlow.

Model Source: https://github.com/tensorflow/models

The next step is to upload your models to Amazon S3. Machine Learning models can also be created using Amazon ML tools without having to learn complex ML algorithms and technology. 

## Using AWS Lambda with Amazon S3

Now since we’ve imported our ML models it’s now time to create a lambda function which can be invoked when an object is created in Amazon S3. 

When a user uploads an object to the source bucket Amazon S3 detects an object-created event. Then it publishes this event to AWS Lambda by invoking the lambda function and passing event data as a function parameter. 

## Architecture for ML using Lambdas

<p style="text-align: center;">
  <img style="box-shadow: 0 0 0 0;" src="/images/blog/2018-10-03/aws-account.png" alt="aws account">
</p>

<p style="text-align: center;">
  Source: Amazon AWS 
</p>

## Conclusion

There are other platforms and systems that provide a structured way to deploy your ML models. We’ve chosen to deploy our TensorFlow models with AWS Lambda because:

- It can execute multiple instances of your lambda function in parallel
- The concurrent executions may range from approximately 1000 to 10000
- An average of 20000 code execution can run for less than $1
- Since AWS lambda follows pay as you go model it is quite suitable for running ML models where large no. of code execution is a major concern.
- Despite all the benefits there are certain limitations in using lambdas for ML model execution which renders it suitable for early stage projects. 

Stay tuned for our next article in which we’ll be exploring the lambda deployment limits and how to overcome these limitations. 

---

_Dashbird provides failure detection and alert for enterprise level applications and thus help in reducing the cost of failure of these applications to a very large extent._