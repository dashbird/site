---
title: "The Complete AWS Lambda Handbook for Beginners (Part 1)"
description: "In the first part of our Complete AWS Lambda Handbook for Beginners, we explain the terminology you will be seeing when you first start out with AWS Lambda and show you how to create a simple AWS Lambda function."
date: 2020-09-14T00:00:00.000Z
frontImage: "2020-05-vacation-buffer/complete-aws-lambda-handbook-beginners.png"
thumbnail: "images/blog/2020-05-vacation-buffer/complete-aws-lambda-handbook-beginners.png"
canonical: "https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-1/"
author: Taavi Rehemägi
author_image: '/images/team/taavi.jpg'
authorLink: "https://twitter.com/rehemagi"
blog: ["AWS Lambda", "serverless"]
---

Welcome to the Serverless world. One of the first things you'll hear about is AWS Lambda - and you'll continue to keep hearing about it! While architecture can be serverless without Lambdas involved, it's very often the key component within a serverless application. In the first post of this 3-part AWS Lambda Handbook series, we run through what is AWS Lambda, dialling back to basics with the various terminology, how to create a Lambda function and how to run it. 

> Read [Part 2](https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-2/) and [Part 3](https://dashbird.io/blog/complete-aws-lambda-handbook-beginners-part-3/)


## What is AWS Lambda, and what does it do?

AWS Lambda is an event-driven serverless compute platform, spinning up the service in response to an event - find out more about Lambda triggers in [part 1](https://dashbird.io/blog/complete-guide-lambda-triggers-design-patterns-part-1/) and [part 2](https://dashbird.io/blog/complete-guide-lambda-triggers-design-patterns-part-2/) of our Complete Guide to Lambda Triggers series. Your code simply sits there as a file while AWS keeps a lookout for the trigger event you've set. When that event occurs, your code is executed and the required operations are carried out. It's deemed 'serverless' because the server doesn't exist until the user goes out to look for it - this is the epitome of [Function-as-a-Service (FaaS)](https://dashbird.io/blog/what-is-faas-function-as-a-service/).

Another bonus to Lambda is it's auto-scalability managed by AWS, meaning you don't need to think about infrastructure. The service will automatically accommodate growing needs and likewise, will scale down to conserve resources. All of this makes AWS Lambda a great solution to reduce waste of resources and budget. 


## AWS Lambda Definitions Explained

Before getting into how to set up and configure Lambda, below are definitions and terminology commonly used and spoken about.

Lambda Function: a group of related statements that perform a specific task in your application. It consists of code and any dependencies that are associated with it. Each Lambda function has its associated configuration information (name, description, entry point, and resource requirements).

The function itself has the following important aspects associated with it:

1.  Trigger: A set of activities which invokes the function (runs the code you provide). The activity could be anything like a new object coming to your S3 bucket, a website or a service going down, an API call, etc.

2.  The actual function: This is the run-time code that constitutes the function. AWS supports Python, Node.js, C#, Go and Java8 as runtime environments. 

3.  Resources: Each function can be assigned certain Roles, which grants the function certain privileges such as reading S3 bucket contents, writing results to a database and so on.

![AWS Lambda anatomy](/images/blog/2020-05-vacation-buffer/1aws-lambda-api-gateway-trigger.png "AWS Lambda anatomy")

The triggers are shown to the left, and in this case an API gateway trigger is active. The resources are shown on the right, which in this case, are CloudWatch Logs and DynamoDB.

Event Sources: an entity that publishes events. An event source can be an AWS service or developer-created application that produces events that trigger a function to run.

Invocation: an invocation is called up to execute a specific Lambda function. These are triggers for the code of the function to start running. Invocations can be either [synchronous or asynchronous](https://docs.aws.amazon.com/lambda/latest/dg/invocation-options.html).

Event Source Mapping: a configuration of AWS services in which an event source is tied to a specific Lambda function. It enables automatic invocation of a Lambda function when specific events occur.

Lambda Execution Model: When you create a Lambda function, you can specify configuration information, such as the amount of memory and maximum execution time that you allow for your function. When that function is invoked, AWS Lambda launches an [Execution Context](https://docs.aws.amazon.com/lambda/latest/dg/running-lambda-code.html) based on the configuration settings you have provided.

Cold Starts: A cold start happens when a Lambda function is invoked after not being used for an extended period of time, which results in increased invocation latency (more on this later).


## AWS Lambda Configuration Elements

A Lambda function consists of the code and associated dependencies, and it also has configuration information within it. An API is also provided so you can update some of the configuration data. Lambda function configuration information comes with these critical elements:

-   Calculating the required resources: specifying the amount of memory that you wish to allocate for your Lambda function. AWS Lambda allocates CPU power in proportion to the memory by the same ratio as a general-purpose AWS EC2 instance type, like an M3 type. 

-   Maximum execution time (timeout): specified to prevent the Lambda function from running non-stop. Since you're paying for the AWS resources that are used to run your Lambda function, this is particularly important. Upon reaching the timeout, AWS Lambda is terminating the execution of your Lambda function. The recommended setting is valued upon the expected execution time.

-   IAM role (execution role): the role that AWS Lambda performs on your behalf when executing a Lambda function.

-   Handler name: the method of entry point that runs your code with any event source dependencies included as a part of your Lambda function. You will be able to discover more details, and the quality features of monitoring and debugging AWS Lambda using this. 


## Creating a Simple AWS Lambda Function

Let's create a simple Lambda function that is invoked by an API call, i.e. we generate a URL, which when entered in the browser would invoke the function. Our input would be passed into the function via this URL and the output would be returned and shown in the browser.

Step 1: Creating the function

In the Lambda console panel, click on create function. Give your function a name, in our case, it is DemoFunction. Also select the runtime as Python3, as we will be using that particular language for this example. Lastly, give your function's role a name and, from Policy Templates, select Simple Microservice permissions.

![AWS Lambda Author From Scratch](/images/blog/2020-05-vacation-buffer/2creating-new-aws-serverless-function.png "AWS Lambda Author From Scratch")

Click on Create Function and you will be taken to the next screen where you can provide the actual code. We are authoring this API from scratch, but there are tons of templates from Amazon repository that you can explore.

The next page will have an inline text editor with a simple python function in there. Replace that with the following content:

```
import json

print('Loading function')

def lambda_handler(event, context):

    firstName = event['first']

    lastName = event['last']

    return 'Greetings, ' + firstName + ' ' + lastName +'!' 
```

The first line is for parsing the JSON using the JSON library in Python. The lambda_handler function gets the event as one of its parameters; this event brings along a set of data. The first and second line inside the function extracts whatever data is labeled first and second, and stores them into the respective variables.

The last line returns a message back and that's what we will see in our browser.

![Creating AWS Lambda function](/images/blog/2020-05-vacation-buffer/3creating-new-aws-serverless-function.png "Creating AWS Lambda function")

We can add an API Gateway trigger right here, but for the sake of clarity, let's do it separately. For now, we can click Save and move into the testing phase.

Step 2: Testing your function

To test your function, just click on the top right corner where it says 'TestEvent', then click on Configure Test Event.

![Testing AWS Lambda function](/images/blog/2020-05-vacation-buffer/4creating-new-aws-serverless-function.png "Testing AWS Lambda function")

Here we will have our first encounter with a JSON payload. In the template TestEvent.

![Testing AWS Lambda JSON function](/images/blog/2020-05-vacation-buffer/5test-new-aws-serverless-function.png "Testing AWS Lambda JSON function")

Replace the file's content with the following lines:


```
{

  "first": "Jane",

  "last": "Doe"

}
````

Now that we have saved the test event. Click on Test in the previous menu. Upon successful execution you should see:

![AWS Lambda function output](/images/blog/2020-05-vacation-buffer/6creating-new-aws-serverless-function.png "AWS Lambda function output")

Step 3: Setting up a Trigger

As mentioned before, our user would [invoke the function](https://dashbird.io/blog/what-are-aws-lambda-triggers/) by accessing a certain URL. To enable that go to the API Gateway Console under your AWS Services and click on Get Started or New API option.

Let's create one from scratch:

![AWS Lambda API creation](/images/blog/2020-05-vacation-buffer/7creating-new-aws-serverless-function.png "AWS Lambda API creation")

Our API is named dashbird-api. After clicking on Create API. You will get the resources that the API has access to (listed in the next menu):

![AWS Lambda API resources](/images/blog/2020-05-vacation-buffer/8creating-new-aws-serverless-function.png "AWS Lambda API resources")

Since there are no resources, we just get a forward-slash. But you can create a new resource by using the Actions drop-down and picking Create Resource.

![AWS Lambda child resources](/images/blog/2020-05-vacation-buffer/9creating-new-aws-serverless-function.png "AWS Lambda child resources")
In the resource list, you can select this new resource (named greetings), click on actions and select Create Method. Our HTTP request method is going to be a GET request since our aim is to get an appropriate response from invoking the function.

![AWS Lambda GET request](/images/blog/2020-05-vacation-buffer/91creating-new-aws-serverless-function.png "AWS Lambda GET request")

The method will have a Lambda integration option, select that and then enter the function name chosen by you earlier Step 2. Also, from Step 2's screenshot, make note of the function's [ARN](https://dashbird.io/knowledge-base/aws-cloud/arn-amazon-resource-names/) (top-right corner), it has the string eu-central-1 indicating the region it is in. Make sure that the same region is selected for the Lambda region also, as shown above. It would then ask permission for invoking the function; grant that and now we are ready for the final modification.

The GET method execution is explained in this diagram:

![AWS Lambda modify method](/images/blog/2020-05-vacation-buffer/92-GET-method-execution-aws-serverless.png "AWS Lambda modify method")
We still need to make sure that the input parameters are passed on correctly. For that we need to modify the Integration Request stage from above. You can click on it to make modifications:

![AWS Lambda body mapping](/images/blog/2020-05-vacation-buffer/93-GET-method-execution-aws-serverless.png "AWS Lambda body mapping")

Leave everything as it is, except at the very bottom of the menu where you will find the Body Mapping Template here we get to describe our input template.The template is going to be of type application/json :

```{

    "first": "$input.params('first')",

    "last": "$input.params('last')"

}
```

The dollar sign and the input.params() part act as a placeholder and helps us define the structure of a proper request. Now we can save our changes, and click on Actions and select Deploy API option. It will ask for a stage name; give it a suitable name (in our case it is called prod). All is set! We can now run this function in real-time.


## Running the Function 

The function can be invoked using a unique URL associated with it. In the API console, where we first selected Resources, select Stage submenu instead. Then drop down to greetings and then to the GET option.

![AWS Lambda invoke URL](/images/blog/2020-05-vacation-buffer/94-GET-method-execution-aws-serverless.png "AWS Lambda invoke URL")

It will give you an invoke URL, which you can click on for the function to run. However, on the first try you might get an error message if you didn't give any input. You can rectify this by modifying the URL like this:

https://.........amazonaws.com/prod/greetings?first=John&last=Doe

Adding the last part to the URL would result in successful execution of the function:

![AWS Lambda success](/images/blog/2020-05-vacation-buffer/95-trigger-new-serverless-aws-function.png "AWS Lambda success")


## Options to Creating Lambda 

Of course, the above is just one example using one method, so when creating Lambda for your own application it's important to remember the other options available.

-   Writing Code: the supported languages are Node.js, Java, C#, Python and Go. These languages use specific tools for authoring code. Some of them are AWS Lambda console, Eclipse IDE, etc.

-   Deployment Packages: Deploying code and creating a Lambda function requires you to first package your code and dependencies in a deployment package in order to develop a Lambda function. Once done, you need to upload the deployment package to AWS Lambda, so it will allow you to create a Lambda function. Organizing your code and dependencies in specific ways is the first step towards building the deployment package. Deployment package instructions may vary depending on the language you have chosen to author the code.

-   Creating Lambda: You can choose between AWS Lambda console, [AWS CLI](https://aws.amazon.com/cli/), and [AWS SDKs](https://aws.amazon.com/tools/#sdk) to create a Lambda function.


In the next part of our AWS Lambda Handbook for Beginners series, we'll be explaining AWS Lambda pricing, sharing some facts that you may not have known about and great use cases. Stay tuned!
