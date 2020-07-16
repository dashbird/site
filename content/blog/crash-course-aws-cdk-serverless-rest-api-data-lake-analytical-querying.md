---
title: Crash Course on AWS CDK and Serverless with REST API and Data Lake Analytical Querying 
description: A hands-on course on how to deploy a fully serverless app using AWS CDK
date: 2020-07-16T12:00:00.000Z
frontImage: "2020-07-14/hands-on-crash-course-AWS-CDK-Serverless-REST-api-Data-lake-querying.png
"
thumbnail: "images/blog/2020-07-14/hands-on-crash-course-AWS-CDK-Serverless-REST-api-Data-lake-querying.png
"
canonical: https://dashbird.io/blog/crash-course-aws-cdk-serverless-rest-api-data-lake-analytical-querying
author: Renato Byrro
author_image: '/images/team/renato.jpg'
blog: ["Serverless", "Crash Course", "CDK"]
---

This is a hands-on course on how to deploy a fully Serverless web app using the [AWS CDK](https://aws.amazon.com/cdk/). You will learn how to:

*   Structure **CDK Stacks **to deploy an application from end-to-end
*   Deploy a **REST API** integrated with **AWS Lambda** for dynamic requests processing
*   Store data in a fast and cost-effective way with **DynamoDB**
*   Use **DynamoDB streams** as a source for **Lambda** in an event-driven architecture
*   Ingest and manipulate loads of data streams with **Kinesis Firehose**
*   Deploy and query a **Data Lake** with **Athena**, **S3** and **Glue**
*   **Monitor** your entire application health in a single place using [Dashbird](https://dashbird.io/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website)

You can use the resources declared in this demo application as a starting point to mix and adapt to your own architectures later, which should save you quite some time.

<h2>The App and Architecture</h2>

The demo app is a public blog where anyone can read, publish and like posts. It's available [on this link](https://d1qmte5oc6ndq5.cloudfront.net/). Go ahead and publish something in the top-left corner (yellow button) and also "like” articles already published. Check out the codebase on [this repo](https://github.com/byrro/serverless-website-demo).

<h3>Frontend</h3>

![Static website architecture diagram](/images/blog/2020-07-14/stack-architecture-diagram-static-website.png "Static website architecture diagram")

<h3>Backend</h3>

![Backend REST API and storage architecture diagram](/images/blog/2020-07-14/stack-architecture-diagram-backend-api.png "Backend REST API and storage architecture diagram")

<h3>Data Lake and Analytical Querying</h3>

![Data lake and analytical querying architecture diagram](/images/blog/2020-07-14/stack-architecture-diagram-analytical.png "Data lake and analytical querying architecture diagram")

<h2>What is the AWS CDK</h2>

CDK stands for Cloud Development Kit. Think of it as CloudFormation (CF) in your preferred language (Python, Typescript, C#, etc). Roughly speaking, it works like this:

1. You declare cloud resources using classes provided by the CDK libraries. Example:

```python
from aws_cdk import aws_s3
my_bucket = aws_s3.Bucket(self, 'MyBucket')
```

2. Run `cdk deploy`
3. CDK translates this to a CloudFormation template and deploy it on AWS for you

In case you would like to dig deeper, [AWS also has a workshop](https://cdkworkshop.com/) that will get your basics started. I also strongly recommend reading the [official CDK documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html).

<h2>Advantages using the AWS CDK</h2>

1. Use languages that are more expressive than YAML or JSON, for instance
2. Less - much less! - verbose than CloudFormation templates
3. Easier to apply reusability and inheritance principles to infrastructure code
4. Better integration with IDEs for code completion, IntelliSense, etc
5. Possible to test your infra code, just as any other software
6. Portable: since it's just a wrapper around CF, we can easily port it to JSON or YAML

<h2>Disadvantages of using the AWS CDK</h2>

Although released as a stable project by the AWS team, many parts (a lot of the good ones) are still experimental and APIs may change in backwards incompatible ways.

It's under constant development. During the preparation of this course, I had to upgrade my libraries three times.

Documentation is still lacking at some parts and you will need to look at the CDK code, occasionally, to understand how to declare certain things.

<h2>Deploy it yourself</h2>

Although we have provided an online demo, you can also deploy this app in your own AWS account:

1. Clone the repo: `git clone git@github.com:byrro/serverless-website-demo.git sls-demo; cd sls-demo`
2. Setup your virtual environment: `virtualenv -p /urs/bin/python3.8 .env; source .env/bin/activate; pip install -r requirements`
3. Specify an AWS account ID: `export AWS_ACCOUNT_ID=1234567890` **
4. Deploy all three stacks: `cdk deploy sls-blog; cdk deploy sls-blog-api; cdk deploy sls-blog-analytical`

** You can also hard code your Account ID in the CDK project, as I'll show in a minute;

When starting a new project from scratch, you would run `cdk init --language [python|typescript|...]`. This is not necessary for this demo, since the project is already created.

<h3>Monitoring</h3>

Deploying this architecture in the cloud and blindly believing it will work flawlessly is not reasonable. We want to be the first one to know when something is not right to act upon it as quickly as possible.

In this project, I used [Dashbird](https://dashbird.io/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website) for its ease of use and seamless integration. Instead of having to deploy an agent inside my code, Dashbird plugs into my Stacks [through a CloudFormation template](https://dashbird.io/docs/quickstart/setting-up-dashbird/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website) that I can deploy with the effort of one click. It not only monitors Lambda function errors, but also other resources that we're using, such as DynamoDB tables. They even suggest [insights for architectural improvements](https://dashbird.io/features/insights-engine/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website) cross-referenced against industry best practices.

Finally, Dashbird offers a free-forever plan. It's a no-brainer to try it out by [registering for free](https://dashbird.io/register/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website).

<h2>How a CDK project is structured</h2>

A CDK project creates an "Application”. This app may have one or more "Stacks”. A Stack is a group of cloud resources (Lambda functions, S3 buckets, etc) that are instantiated using CDK classes. It's also possible to have multiple applications in a single CDK project.

<h3>App Object</h3>

Creating a CDK app is as simple as:

```python
app = core.App()
```

> When you run `cdk init --language [language]`, an initial application with basic boilerplate code is created for you in the project root, under `app.py`.

The next thing we need is an environment, which is composed of an AWS Account ID and Region:

```python
env = env = core.Environment(
    account=1234567890,
    region='us-east-1',
)
```

Declaring an environment is not required (CDK can infer from your AWS credentials), but is a good practice. Most of us work with multiple AWS accounts. It's easy to mess around with several projects, accounts, credentials. When we explicitly set the environment in the CDK app, it's locked and prevents mistaken deployments.

Now we declare our stacks:

```python
from my_project.my_project_stack import MyStack

my_stack = MyStack(
    app,
    'my-stack',
    env=env,
)
```

This is how we _instantiate_ our stacks for deployment. In the next section we'll see how to _declare_ those stacks.

<h3>Stack Object</h3>

The Stack object is where we _declare_ our AWS resources. It inherits from the `core.Stack` CDK class and accepts a scope - which is our `app` object - a string identifier and an environment.

```python
class MyStack(core.Stack):
    def __init__(
            self,
            scope: core.Construct,
            id: str,
            env: core.Environment,
            **kwargs,
            ) -> None:
        super().__init__(scope, id, **kwargs)

        # Declare AWS resources here

```

<h3>Declaring AWS resources</h3>

To declare AWS resources, we need a specific library for each service. Here's a list of all [Python libraries](https://docs.aws.amazon.com/cdk/api/latest/python/index.html) and their [Typescript](https://docs.aws.amazon.com/cdk/api/latest/typescript/api/index.html) counterparts. Other flavors are [Java](https://docs.aws.amazon.com/cdk/api/latest/java/index.html) and [.NET](https://docs.aws.amazon.com/cdk/api/latest/dotnet/api/index.html).

Let's see how a basic REST API would be declared (typing expressions were removed for readability purposes):

```python
from aws_cdk import aws_apigateway, aws_lambda

class MyStack(core.Stack):
    def __init__(self, scope, id, env):
        super().__init__(scope, id, **kwargs)

        my_lambda = aws_lambda.Function(
            self,
            'MyLambda',
            runtime=aws_lambda.Runtime.PYTHON_3_8,
            code=aws_lambda.Code.asset('my_lambda_folder),
            handler='my_lambda.handler',
        )

        aws_apigateway.LambdaRestApi(
            self,
            'sls-blog-rest-api-gateway',
            handler=my_lambda,
        )
```

We first declare a Lambda function `my_lambda`. We point its code to the `my_lambda_folder`. Inside this folder, there should be a `my_lambda.py` file, containing a function called `handler`. This handler function should accept Lambda invocations normally (an `event` and `context` objects).

Next a `LambdaRestApi` is declared, using `my_lambda` as the handler (not to confuse with the Lambda's handler function). This will create a new API Gateway REST API integrated with `my_lambda` using an [`AWS_PROXY` integration type](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-integration-types.html). All HTTP requests will be routed to the Lambda function.

<h2>Our Project App & Stacks</h2>

[This project](https://d1qmte5oc6ndq5.cloudfront.net/) comprises one application with three Stacks. They're all declared in the `[app.py](https://github.com/byrro/serverless-website-demo/blob/master/app.py)` and `[sls_website_stack.py](https://github.com/byrro/serverless-website-demo/blob/master/sls_website/sls_website_stack.py)` files.

Below we'll walk through all Stacks in a high level. I encourage you to inspect the [stacks file](https://github.com/byrro/serverless-website-demo/blob/master/sls_website/sls_website_stack.py) to learn how these resources are declared and also integrated. For example: a Kinesis Firehose is created in one Stack and referenced in another to include its name as an environment variable for the Lambda function that will interact with it.

Except for the frontend static Stack - which is small - you will notice that resources are initialized with a `None` (null) value in the beginning. The reason is that, even though the CDK is generally more succinct than CloudFormation, it can still be lengthy enough to clutter the view of the entire Stack. Having each resource declared first in one line, I can provide a short summary of everything that's in the Stack and then instantiate the CDK classes in other methods.

```python
class SlsBlogApiStack(core.Stack):
    def __init__(self, scope, id, env, static_stack):
        super().__init__(scope, id, **kwargs)

        self.static_stack = static_stack

        # SQS Queues
        self.queue_ddb_streams_dlq = None  # Dead-letter-queue for DDB streams

        # DynamoDB Tables
        self.ddb_table_blog = None  # Single-table for all blog content

        # DynamoDB Event Sources
        self.ddb_source_blog = None  # Blog table streams source

        # DynamoDB Indexes
        self.ddb_gsi_latest = None  # GSI ordering articles by timestamp

        # Lambda Functions
        self.lambda_blog = None  # Serves requests to the blog public API
        self.lambda_stream_reader = None  # Processes DynamoDB streams

        # Continues with other resources...
```

Notice it takes another Stack object (`static_stack`) as an argument to its initialization. In the `[app.py](https://github.com/byrro/serverless-website-demo/blob/master/app.py)` file, you can see that the `SlsBlogApiStack` is initialized passing the `SlsBlogStack` as an argument.

We use it to reference the CloudFront distribution domain ([d1qmte5oc6ndq5.cloudfront.net](https://d1qmte5oc6ndq5.cloudfront.net)) in the Lambda environment variables. This variable can be used to customize the HTTP response header `Access-Control-Allow-Origin` to comply with [CORS standards](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html). This illustrates one way to easily integrate and reference information from one Stack into another within a CDK project.

At the end of the initialization, another method is called to instantiate the CDK classes for each resource and configure their parameters.

```python
self.create_cdk_resources()
```

Next we'll walk through each of our project's Stacks.

<h3>Stack 1: static website</h3>

Our focus is on the Serverless backend, so the frontend here is terribly rough and simple. It's stored in an S3 Bucket and distributed through a CloudFront CDN.

CDK has a helpful class called BucketDeployment. It takes the contents of a directory and sync to an S3 bucket. In this case, we stored the frontend code in the `website_static` folder.

```python
aws_s3_deployment.BucketDeployment(
    self,
    'SlsBlogStaticS3Deployment',
    sources=[aws_s3_deployment.Source.asset('website_static')],
    destination_bucket=static_bucket,
    distribution=cdn,
)
```

<h3>Stack 2: API/backend</h3>

Our backend consists of an API Gateway (REST) connected to a [monolithic Lambda function](https://dashbird.io/knowledge-base/well-architected/monolith-vs-microservices/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website). Microservices receives a lot of press, but you probably shouldn't always break your applications in several functions. A Monolith is just fine - [and sometimes recommended](https://www.martinfowler.com/bliki/MonolithFirst.html) -, really.

This API & Lambda support a single endpoint (with GET and POST methods) with a queryString "action”, which takes three parameters:

*   `get-latest-articles`: populates the latest blog posts
*   `like-article`: triggered when someone likes an article
*   `publish-article`: post a new blog article

Here's the power of the CDK model. We can create a REST API with 10 lines of code:

```python

rest_api_blog = aws_apigateway.LambdaRestApi(
    self,
    'sls-blog-rest-api-gateway',
    handler=lambda_blog,  # Previously declared Lambda function
    deploy_options=aws_apigateway.StageOptions(
        stage_name='api',
        throttling_rate_limit=lambda_param_max_concurrency,
        logging_level=aws_apigateway.MethodLoggingLevel('INFO'),
    ),
)
```

One nice little thing is that Lambda memory is used as a cache for the latest articles. We load the cache container outside the Lambda handler function. It remains in memory even after an invocation ends and is available for subsequent requests. Learn more here about [how to use Lambda as a cache mechanism](https://dashbird.io/blog/leveraging-lambda-cache-for-serverless-cost-efficiency/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website).

```python
MAX_CACHE_AGE: int = 120  # In seconds
CACHE_LATEST_ARTICLES: Dict[str, Union[int, list]] = {
    'last_update': time.time(),
    'articles': [],
}
```

All the data is stored in DynamoDB (DDB) using a [single-table design](https://www.alexdebrie.com/posts/dynamodb-single-table/), in [on-demand mode](https://aws.amazon.com/blogs/aws/amazon-dynamodb-on-demand-no-capacity-planning-and-pay-per-request-pricing/). The site only shows the latest blog articles and items get [auto-deleted by DDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html) after a few days by setting a `time-to-live` attribute.

```python
ddb_attr_time_to_live = 'time-to-live'
ddb_param_max_parallel_streams = 5

ddb_table_blog = aws_dynamodb.Table(
    self,
    'sls-blog-dynamo-table',
    partition_key=aws_dynamodb.Attribute(
        name='id',
        type=aws_dynamodb.AttributeType.STRING,
    ),
    billing_mode=aws_dynamodb.BillingMode.PAY_PER_REQUEST,
    point_in_time_recovery=True,
    removal_policy=core.RemovalPolicy.DESTROY,
    time_to_live_attribute=self.ddb_attr_time_to_live,
    stream=aws_dynamodb.StreamViewType.NEW_AND_OLD_IMAGES,
)

```

The DDB table also has a [GSI (Global Secondary Index)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html) that makes it easier to retrieve articles ordered by date for the site:

```python
self.ddb_table_blog.add_global_secondary_index(
    index_name='latest-blogs',
    partition_key=aws_dynamodb.Attribute(
        name='item-type',
        type=aws_dynamodb.AttributeType.STRING,
    ),
    sort_key=aws_dynamodb.Attribute(
        name='publish-timestamp',
        type=aws_dynamodb.AttributeType.NUMBER,
    ),
    projection_type=aws_dynamodb.ProjectionType.ALL,
)
```

Modifications to DDB items generate streams that are processed by a [second Lambda function](https://github.com/byrro/serverless-website-demo/blob/master/lambda_streams/streams_reader.py). These streams are then repackaged and sent to a Kinesis Firehose stream processor.

DDB doesn't provide the flexibility that SQL databases offer and many choose [Aurora Serverless](https://aws.amazon.com/rds/aurora/serverless/), for example. Although Aurora is a great service, personally I prefer DDB for its simplicity and reliable, consistent performance. But sometimes we do need to run analytical queries, those with aggregations and on-the-fly filters. For that, we'll be using Athena (more in the next Stack).

<h3>Stack 3: analytical querying</h3>


A Kinesis Firehose Stream is responsible for batching data inserted/modified in DDB, converting them to Apache Parquet format and storing in dedicated S3 buckets. From S3, we create a Data Lake with AWS Glue (used to declare our data schemas) and Athena (used to query the data).

Athena is extremely powerful. We can [use SQL SELECT](https://docs.aws.amazon.com/athena/latest/ug/select.html) statements ([with some limitations](https://docs.aws.amazon.com/athena/latest/ug/other-notable-limitations.html)) to query terabytes of data and pay on-demand ($0.005 per GB of data scanned). Using Parquet not only improves query speed, but also reduces cost by minimizing the amount of data Athena needs to scan for each query.

Queries that are impossible or expensive/slow in DynamoDB, such as aggregations and JOINs, are fast and cheap in Athena. The two services combine each other in a perfect way, so that your application has optimized transactional storage and flexible analytical querying capabilities.

We can use Athena to query all articles ever published and cross-reference with likes and HTTP metadata (source IP address, country, device type, etc). Even articles that were already expired by DynamoDB TTL (time-to-live) would continue to be available in the Data Lake.

For example, which countries are liking the most articles? In the AWS Console, we get something like this:

![Athena Query Results](/images/blog/2020-07-14/athena-query-results.png "Athena Query Results")

Queries can also be executed programmatically with [Athena API](https://docs.aws.amazon.com/athena/latest/APIReference/API_StartQueryExecution.html) or [AWS SDKs](https://aws.amazon.com/getting-started/tools-sdks/) (e.g. [Python's boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/athena.html#Athena.Client.start_query_execution)) to integrate anywhere we need this data.

Athena also supports JOINs. Here's an example joining articles and HTTP metadata to analyze the most popular authors among readers of a particular country:

![Athena Query Results with JOIN statement](/images/blog/2020-07-14/athena-query-results-join.png "Athena Query Results with JOIN statement")

<h3>Deployment</h3>


CDK can deploy one Stack at a time. Since we have three, it's necessary to specify which one when running the `cdk deploy` command. We do that by passing in the Stack ID as a CLI argument. For example, the following command will deploy the SlsBlogApiStack (id: `sls-blog-api`):

```shell

cdk deploy sls-blog-api

```

Since all Stacks involve some type of permission granting, CDK asks for confirmation before deploying those resources. You can review the permissions requested and hit `y` when it's good to go.

![CDK security confirmation message](/images/blog/2020-07-14/cdk-deploy-confirmation.png "CDK security confirmation message")

<h2>Wrapping up</h2>


We've covered how to structure CDK apps and add a bunch of AWS Resources to deploy with a simple `cdk deploy` command. If you're new to the CDK - and as suggested early in the article -, it's strongly recommended to follow AWS [CDK workshop](https://cdkworkshop.com/) and [documentation](https://docs.aws.amazon.com/cdk/latest/guide/home.html).

[Keep an eye on future publications](https://sls.dashbird.io/newsletter-sign-up?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website) as well, as [Dashbird](https://dashbird.io/?utm_source=dashbird-blog&utm_medium=article&utm_campaign=aws-cdk&utm_content=tutorial-serverless-website) is releasing other examples and tutorials to reap the most out of AWS serverless services with the power of infra automation with CDK or else.
