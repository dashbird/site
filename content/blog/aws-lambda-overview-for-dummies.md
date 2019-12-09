---
title: Introduction To AWS Lambda For Dummies
description: Best practices and need-to-knows for understanding and using AWS Lambdas.
date: 2018-03-19
frontImage: "19-03-2018/introduction-aws-lambda.png"
thumbnail: "images/blog/19-03-2018/introduction-aws-lambda.png"
author: Ranvir Singh
blog: ["Lambda"]
---

There’s something really human about software. It grows not in the direction that is most efficient, in terms of resource utilization, but it seeks simplicity. AWS Lambda offers a completely different paradigm for you to design/run your apps. Before we delve deeper into the core of AWS Lambda let’s put, in simpler terms, what it will help us achieve.

Your application, or at least a certain part of it, involves doing a set of simple operations preceded by a real-world event. For example, there’s a request to view an html page and there’s a bit of Node.js code that executes in response to it. If that’s the case, then it is wasteful to have a web server like apache or nginx running 24/7 waiting for that event to occur and then perform an action in response to it.

This is illustrated rather well in this <a href='https://www.smbc-comics.com/comic/rendering' target='_blank'>smbc comic.</a>

![Developer rendering himself comic strip](/images/blog/19-03-2018/developer-rendering-comic.png)

AWS Lambda is a solution to reduce this wastage of resources. It essentially spins up the service in response to an event. That is to say, your code sits out there as just a file and AWS keeps a lookout for a trigger event, which you are interested in. When that event occurs, then the code is executed and the required operations are carried out by your code. You are billed only for the amount of resources your program consumes, and for the time for which it runs.


The server doesn’t exist until the user goes out there to look for it! Which is termed as ‘serverless’ compute. A more proper term would be Function-as-a-Service (FaaS).


Needless to say, this is a really price-effective way of designing your application and as an added bonus you don’t have to think about scaling the infrastructure either. AWS manages all of that for you. When there’s a lot of requests the function automatically scales to accommodate the growing needs. Similarly, when the need dies down, the service scales down as well, to conserve resources.


### Prerequisites
If you wish to closely follow the steps as they are described below, and get a hands-on experience with AWS Lambda, you would need to have only one thing in place -- An AWS account with console access.


### Anatomy of a Lambda function
The Lambda function in itself is not capable of storing persistent information, this is what we call statelessness. For example, if you define a variable as a counter and make your function increase the counter’s value, by one, every time it is invoked, that would not work. Because the variable is defined and initialized within the confines of your code and would be reinitialized again the next time the code is run.


This basic statelessness might be frustrating for the new users, but it actually serves an important purpose -- Separating data from the software. Of course, Lambda has a very good integration for S3 bucket, DynamoDB and other services from Amazon which offers persistent storage when needed.


The function itself has the following important aspects associated with it:


1. **Trigger:** A set of activities which invokes the function (runs the code you provide).
The activity could be anything like a new object coming to your S3 bucket, a website or a service going down, an API call, etc.


2. **The actual function:** This is the run-time code that constitutes the function. AWS supports Python, Node.js, C#, Go and Java8 as runtime environment, at the time of this writing.


3. **Resources:** Each function can be assigned certain Roles, which in AWS that grants the function certain privileges such as reading S3 bucket contents, writing results to a database and so on.

![AWS Lambda anatomy](/images/blog/19-03-2018/lambda-anatomy.png)

The triggers are shown to the left, and in this case an API gateway trigger is active. The resources are shown on the right, which in this case, are CloudWatch Logs and DynamoDB.

### Creating a simple Lambda function

Let’s create a very straight-forward Lambda function which gets invoked by an API call. In simpler terms, we generate a URL which when entered in the browser would invoke the function.


Our input would be passed into the function via this URL and the output would be returned and shown in the browser.


### Step 1: Creating the function

In the Lambda console panel, click on create function. Give your function a name, in our case, it is *DemoFunction.* Also select the runtime as Python3, as we will be using that particular language for this example. Lastly, give your function’s role a name and, from Policy Templates, select *Simple Microservice permissions.*

![AWS Lambda Author From Scratch](/images/blog/19-03-2018/author-from-scratch.png)

Click on *Create Function* and you will be taken to the next screen where you can provide the actual code. We are authoring this API from scratch, but there are tons of templates from Amazon that you can explore.

The next page will have an inline text editor with a simple python function in there. Replace that with the following content:


```
import json
print('Loading function')

def lambda_handler(event, context):

    firstName = event['first']
    lastName = event['last']
    return 'Greetings, ' + firstName + ' ' + lastName +'!'

```


The first line is for parsing the JSON using the *json* library in python. The *lambda_handler* function gets *event* as one of its parameter. This *event* brings along a set of data with it. The *first* and *second* line inside the function extracts whatever data is labeled first and second and stores them into the respective variables.


The last line returns a message back and that’s what we will see in our browser.

![Creating AWS Lambda function](/images/blog/19-03-2018/creating-function.png)


We can add an API gateway trigger right here, but for the sake of clarity, let’s do it separately. For now, we can click on Save and move into the testing phase.

### Step 2: Testing your function

To test your function, just click on the top right corner where it says *‘TestEvent’*, then click on configure test event.

![Testing AWS Lambda function](/images/blog/19-03-2018/testing-lambda-function.png)


Here we will have our first encounter with a JSON payload. In the template *TestEvent.*


![Testing AWS Lambda JSON function](/images/blog/19-03-2018/test-JSON-function.png)

Replace the file’s content with the following lines:

```
{
  "first": "Jane",
  "last": "Doe"
}

```

Now that we have saved the test event. Click on *Test* in the previous menu. Upon successful execution you should see:

![AWS Lambda function output](/images/blog/19-03-2018/lambda-function-output.png)

### Step 3: Setting up a trigger


As mentioned before, our user would invoke the function by accessing a certain URL. To enable that go to the API Gateway Console under your AWS Services and click on *Get Started* or *New API* option.

Let’s create one from the scratch:

![AWS Lambda API creation](/images/blog/19-03-2018/lambda-api-creation.png)


Our API is named *dashbird-api*. After clicking on *Create API*. You will get the resources that the API has access to (listed in the next menu):


![AWS Lambda API resources](/images/blog/19-03-2018/lambda-api-resources.png)


Since there are no resources, we just get a forward-slash. But you can create new resource by using the *Actions* drop-down and picking *Create Resource* option there.


![AWS Lambda child resources](/images/blog/19-03-2018/lambda-child-resource.png)

And then in the resource list, you can select this new resource (named *greetings*), click on actions and select *Create Method*. Our HTTP request method is going to be GET request since our aim is to get an appropriate response from invoking the function.


![AWS Lambda GET request](/images/blog/19-03-2018/lambda-GET-request.png)


The method will have a Lambda integration option, select that and then enter function name chosen by you in the Step 2. Also from Step 2’s screenshot make note of the function’s <a href="https://dashbird.io/knowledge-base/aws-cloud/arn-amazon-resource-names/">ARN</a> (top-right corner) it has the string *eu-central-1* indicating the region it is at. Make sure that the same region is selected as Lambda region as shown above. It would then ask permission for invoking the function, grant that and now we are ready for the final modification.


The GET method execution is explained in this neat and diagram.


![AWS Lambda modify method](/images/blog/19-03-2018/lambda-modify-method.png)


We still need to make sure that the input parameters are passed on correctly. For that we need to modify the Integration Request stage from above. You can click on it to make modifications:


![AWS Lambda body mapping](/images/blog/19-03-2018/lambda-body-mapping.png)


Leave everything as it is, except at the very bottom of the menu where you will find the *Body Mapping Template* here we get to describe our input template.The template is going to be of type *application/json* :



```
{
    "first": "$input.params('first')",
    "last": "$input.params('last')"
}

```

The dollar sign and the input.params() part act as a placeholder and helps us define the structure of a proper request. Now we can save our changes, and click on *Actions* and select *Deploy API* option. It would ask for a stage name; Give it a suitable name (in our case it is called *prod*). All is set! We can now run this function in real-time.


### Running the function and <a href='https://dashbird.io/features/aws-lambda-serverless-monitoring/' target='_blank'>monitoring it</a>

The function can be invoked using a unique URL associated with it. In the API console, where we first selected *Resources*, select *Stage* submenu instead. Then drop down to *greetings* and then to GET option.


![AWS Lambda invoke URL](/images/blog/19-03-2018/lambda-invoke-URL.png)


It would give you an invoke URL, you can click on the URL and it would run the function. However, on the first try you might get an error message because you didn’t give any input. You can do so by modifying the URL like this:


*https://………amazonaws.com/prod/greetings?first=John&last=Doe*


Adding the last part to the URL would result in successful execution of the function:


![AWS Lambda success](/images/blog/19-03-2018/lambda-success.png)


To monitor such a function, you can go to the Lambda console, select a particular function and then click on monitoring tab:

![AWS Lambda monitoring](/images/blog/19-03-2018/monitoring.png)


That shows you not only the invocation rate, but the duration and the amount of memory used. There are more advanced options available with the <a href='https://dashbird.io' target='_blank'>Dashbird</a> console which integrates with your AWS account and securely gathers metrics and error reports that your organization can use to debug the code, predict costs, dedicate and mitigate DDoS attacks and much more.


If you have followed this so far, we are ready to go more in-depth from here in the next posts...
