---
title: Exploring AWS Lambda Deployment Limits
description: Knowing where those limits are and how to overcome the limitation is key for developing a successful serverless app
date: 2018-11-04T01:00:00.000Z
frontImage: "2018-11-04/ludovic-charlet-544834-unsplash.jpg"
thumbnail: "images/blog/2018-11-04/ludovic-charlet-544834-unsplash.jpg"
authorlink: 'https://twitter.com/@johndemian'
author: John Demian
author_image: '/images/team/john.jpg'
blog: ["Serverless", "E-commerce"]
---

In one of our last articles, we explored how we can deploy Machine Learning models using AWS Lambda. Deploying ML models with AWS Lambda is suitable for early-stage projects as there are certain limitations in using Lambda function. However, this is not a reason to worry if you need to utilize AWS Lambda to its full potential for your Machine Learning project.
When working with Lambda functions its a constant worry about the size of deployment packages for a developer.  

Let's first have a look at the AWS Lambda deployment limits and address the 50 MB package size in the AWS official documentation which is kind of delusive as you can make larger deployments of uncompressed files. 

<h2>AWS Lambda has the following limitations. </h2>

Runtime Environment limitations:

* The disk space is limited to 512 MB.
* The default deployment package size is 50 MB.
* Memory range is from 128 to 1536 MB.
* Maximum execution timeout for a function is 15 minutes*.
<br>
Requests limitations by lambda:

* Request and response body payload size are maximized to 6 MB.
* Event request body can be up to 128 KB.

The reason for defining the limit of 50 MB is that you cannot upload your deployment package to lambda directly with size greater than the defined limit. Technically the limit can be much higher if you let your lambda function pull deployment package from S3. AWS S3 allows for deploying function code with substantially higher deployment package limit as compared to directly uploading to lambda or any other AWS service. As a matter of fact, most of the AWS service default limits can be raised by [AWS Service Limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) support request. 

Still, it is a matter of doubt for many developers as to what is the actual limit. So to find an answer to that very question we are going to test by uploading deployment packages of different sizes.
 
<h2>Deployment Packages</h2>
We’ll be working with a Machine Learning model as our deployment package,§ creating a random data of specified size to test the limit with varying sizes. We’ll test the following limits as described in the documentation:
 
<strong>50 MB</strong>: Maximum deployment package size
<strong>250 MB</strong>: Size of code/dependencies that you can zip into a deployment package (uncompressed .zip/.jar size)

For this test, we’ll be using our machine learning model that we created in our <a href="https://dashbird.io/blog/machine-learning-in-aws-lambda/">last article</a>. It’s an image recognition deep learning model based on TensorFlow Inception-v3 model. Although our data is not so compressed. The overall file size is about 150 MB which is much beyond the specified limit of 50 MB.

<h2>Testing</h2>
Let’s test it by directly uploading to lambda function. Here are the main steps to be followed:
<strong>1 First we’ll zip our package.</strong> This zip package will contain all our files such as:

* classify_image.py
* classify_image_graph_def.pb
* MachineLearning-Bundle.zip

This model was created specifically for this project. However, Machine Learning models can be downloaded from the following sources.

<strong>Keras</strong>: https://github.com/fchollet/deep-learning-models

<strong>TensorFlow</strong>: [official release](https://github.com/tensorflow/models/tree/master/official), [performance models](https://www.tensorflow.org/performance/performance_models), [tensornets](https://github.com/taehoonlee/tensornets)

<strong>2 Lets call our package as MachineLearning.zip.</strong>

``` 
zip MachineLearning.zip MachineLearning 
```

<strong>3 Now check whether we could compress the file or not.</strong>

```
$ ls -lhtr | grep zip
-rw-r--r-- 1 john staff 123M Nov 4 13:05 MachineLearning.zip
```
Even after compressing and zipping the overall package size is about 132 MB.

<strong>4 In order to create a lambda function, we need to create IAM role.</strong> Since our primary objective is to test the limits we’ll skip over the role creation process. Login to IAM Management Console with your credentials and create a Test-role and attach AWSLambdaRole policy.

![AWSLambdaRole](/images/blog/2018-11-04/image5.png)

![AWSLambdaRole](/images/blog/2018-11-04/image4.png)


<strong>5 Next, we’ll create a lambda function via <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html">AWS CLI</a> and upload our deployment package directly to the function.</strong>

`
aws lambda create-function --function-name mlearn-test --runtime nodejs6.10 --role arn:aws:iam::XXXXXXXXXXXX:role/Test-role --handler tensorml --region ap-south-1 --zip-file fileb://./MachineLearning.zip
`

Replace XXXXXXXXXXXX with your AWS Account id. Since our package size is greater than 50 MB specified limit it throws an error.

``
An error occurred (RequestEntityTooLargeException) when calling the UpdateFunctionCode operation: Request must be smaller than 69905067 bytes for the UpdateFunctionCode operation
``

<strong>6 Since our deployment package is quite large we will load it again during AWS Lambda inference execution from Amazon S3. </strong>For this we need to create AWS S3 bucket from AWS CLI:

```
aws s3 mb s3://mlearn-test --region ap-south-1
```
 
This will create S3 bucket for us. Now we’ll upload our package to this bucket and update our lambda function with the S3 object key.

```
aws s3 cp ./ s3://mlearn-test/ --recursive --exclude "*" --include "MachineLearning.zip"
```
 
Once our package is uploaded into the bucket we’ll update our lambda function with the package’s object key.

```
aws lambda update-function-code --function-name mlearn-test --region ap-south-1 --s3-bucket mlearn-test --s3-key MachineLearning.zip
```

This time it shows no error even after updating our lambda function and we’re able to upload our package successfully. Which means that the package size can be greater than 50 MB if uploaded through S3 instead of uploading directly. Since our package size is about 132 MB after compression we are still not clear what is the maximum limit of the package to be uploaded. 

In order to get the maximum limit we’ll create a random data of about 300 MB and upload it through S3 and update our lambda function.

```
fsutil file createnew sample300.txt 350000000
```

This will create a sample file of about 300 MB. We’ll zip the file and upload it again through S3.  

```
aws s3 cp ./ s3://mlearn-test/ --recursive --exclude "*" --include "sample300.zip"
```

`
aws lambda update-function-code --function-name mlearn-test --region ap-south-1 --s3-bucket mlearn-test --s3-key sample300.zip
`

After updating our lambda function we get the following error:

`
An error occurred (InvalidParameterValueException) when calling the UpdateFunctionCode operation: Unzipped size must be smaller than 262144000 bytes
`

The error describes that the size of the unzipped package should be smaller than 262144000 bytes which is about <strong>262 MB</strong>. We can notice here that this size is just a little greater than the specified limit of <strong>250 MB</strong> size of code/dependences that can be zip into a deployment package (uncompressed .zip/.jar size).  So we discovered that the maximum limit of the size of uncompressed deployment package is 250 MB when uploaded via S3. However we can’t upload more than 50 MB package while uploading directly into lambda function. 

The important thing to notice here is that your code and its dependencies should be within <strong>250 MB</strong> size limit when in uncompressed state. Even if we consider a larger package size it may seriously affect lambda function’s cold start time. Consequently, the lambda function will take longer time to execute with larger package size. 



<italic>* The maximum execution time has been increased from 5 minutes to 15 in October 2018.</italic>

---
<center><h3>Congratulations!</h3></center>
Since you are reading this on Dashbird.io you might want to start monitoring your serverless website to make sure your lambdas are working properly.

