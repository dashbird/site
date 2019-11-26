---
title: Analyzing Data Using Serverless
description: A case study on how data is analyzed with Serverless technology
date: 2019-11-21T12:00:00.000Z
frontImage: "2019-11-22/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
thumbnail: "images/blog/2019-11-22/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
authorlink: 'https://www.linkedin.com/in/darius-bogdan-7a2700146/'
author: Darius Bogdan
author_image: '/images/blog/2019-11-22/darius.jpeg'
blog: ["ECS", "Lambda"]
---

The word serverless starts to become a hot topic in the world of Computer Programming. Maybe you heard the word _Serverless_ a couple of times, either by going to conferences or by talking with other people. 


## What will we learn today?



*   When to use serverless functions 
*   How to create a data processing pipeline
*   How to use Google Cloud technologies in order to process data 

We took the decision of using Google as our cloud provider, although everything that is presented in this article can be achieved using other cloud providers like Amazon, Azure etc.


## What we are going to build

In this article we will see how we can take advantage of serverless functions in order to build a _Processing Data Pipeline_ for analyzing and processing data.

Let’s imagine that we are working at an IT Company and every couple of weeks we receive files that contain information about issues (tasks) from our projects. Our managers looks from time to time into our application where they want to see statistics from all projects. 

The project managers look every month to see what is the status of the projects from the company, like seeing the number of issues that were done in total from when the project was started and the number of story points done on that project. Sometimes they also want to see all the issues that were not of type bugs and were finished when the file was received.

In order to fulfill their needs, we are going to build a pipeline that filters and aggregates the data they are interested in.

Why are serverless technologies good in this case?



*   Single event that starts our processing pipeline
*   Server not running 24/7
*   Small functions with a single purpose
*   Paying only while running


#### The pipeline:



1. Upload the file into the application
2. Upload the data into a data warehouse
3. Filter the data we uploaded and put that into another table
4. Aggregate the data and update the statistics

In this article we will see how we can implement a processing data pipeline using Google technologies. The same concept applies to any Cloud Provider that has Serverless technologies.


#### Technologies stack:



*   _Google Cloud Functions_ - Serverless functions used to process the data
*   _BigQuery - data warehouse_
*   _NodeJs 8_ - as our programming language

We are going to present the technologies we are going to use and then see how we can build this pipeline.


## Serverless functions

Serverless functions are isolated functions that have only one purpose. Keeping this in mind, we can think about our functions as being a _black box _with an **input **and an **output**.

<center><img src="/images/blog/2019-11-22/ServerlessFunction.png"></center>

Serverless functions shouldn’t be the replacement of a REST API, they should be additions to the main API that have a single, isolated dedicated purpose.

A good example would be when uploading a file into our system, we want to apply some filtering and do some calculations on that file.

There are multiple types of events that can trigger a serverless function. The types that we are going to use today are:



*   **Google Cloud Storage** - this type of event triggers when we upload a file into google cloud in a bucket that we specify
*   **Pub/Sub Triggers** - This will allow us to communicate between our functions

For communicating between our functions, we can have 2 approaches using services from google:



*   **Cloud Tasks** - this is a service that allows us to manage distributed tasks. We can use this to trigger the next function of our pipeline after a function finishes. All we need to do is to create a Cloud Task which will call our HTTP Serverless function.
*   **Pub/Sub **- this is a real-time messaging service that allows us to trigger a function that listens on a topic. In the example we are building today, we are going to us this technology.


## BigQuery

BigQuery is a serverless data warehouse. In BigQuery the data is organized in _datasets_ and _tables_.

We are going to use this service for storing our data and analyzing it.

<img src="/images/blog/2019-11-22/Data-Processing-Pipeline.png

In our system we are going to upload csv files that have the following structure:

<img src="/images/blog/2019-11-22/data.png">



## Pipeline implementation


#### Upload the data to BigQuery

Our first serverless function will get the data from the file uploaded to Cloud Storage and upload it to BigQuery.

**Trigger Type_ - Google Cloud Storage Finalize_**

This will be triggered when the file was uploaded successfully into our storage. This type of function will receive as parameters



*   data - the event payload
*   context - the event metadata

<img src="/images/blog/2019-11-22/function1.png">


A cool thing when working with multiple services from the same cloud provider is that we do not need to authenticate the services we are working with because they are automatically authenticated when deployed in the cloud.

In this function we are getting the reference of the file that we just uploaded and we load it’s content into a BigQuery table.

The function _bigQuerySafeName_ creates a table name from the file name that respects the following conditions: 



*   Contain up to 1,024 characters
*   Contain letters (upper or lower case), numbers, and underscores

After we loaded the data into the table we publish a message on the **filter-uploaded-data** in order to trigger the second function from our pipeline.

**Deploying the function **

We just wrote our first function, now all we need to do is deploy it in the cloud. Google provides a _cli _that can be used for achieving this.

_gcloud functions deploy upload-to-bigquery _

**_--region us-central1 _**

**_--entry-point uploadToBigQuery _**

**_--runtime nodejs8 _**

**_--trigger-resource projects_files _**

**_--trigger-event google.storage.object.finalize _**

**_--memory 2048MB _**

**_--timeout 540 _**

**_--project projectName_**

With this command we say that we want to deploy a function named _upload-to-bigquery  _in the region _us-central1. _The name of the function(entry point) in our application is _uploadToBigQuery. _We want this function to trigger when a new file finished uploading in the bucket _projects_files. _We give our function the maximum memory allowed by Google which is 2GB and we specify the maximum amount of time our function is allowed to run which is 9 minutes.


#### Filter the data

We are receiving **csv** files that contain a lot of data. Our analytics team is interested to see all the issues that are done and that are not bugs. 

This brings us to our second function of the pipeline which filters the data and saves it into another table in our data warehouse. The function listens to a Pub Sub topic and when a message it’s published, the function is run automatically.

BigQuery allows us to run queries and save the results into a table. The main thing that we are doing here is making a query, running an asynchronous job and waiting for the results. After the results are returned, we are publishing a message on the _update-final-table_ topic to trigger the last step of our pipeline.

<img src="/images/blog/2019-11-22/function2.png">


#### Update the final data

The last step we want to do in our pipeline is to update the data in the last table were we keep the number of issues done and the number of story points done from when the project began.

This function runs a Job to update the data in the final BigQuery table.

<img src="/images/blog/2019-11-22/function2.png">

## Conclusion

<a href="https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/">Serveless technologies</a> can be used in multiple cases and have many benefits from cost reduction to small, readable chunks of code. As we saw today in our implementation, the serverless functions should be small, isolated functions with a single purpose. With serverless functions we can also create complex data processing pipelines.