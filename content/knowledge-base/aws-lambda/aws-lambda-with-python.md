---
date: 2019-11-27T12:00:00-03:00
title: "AWS Lambda With Python: Getting Started"
description: "Learn to implement, deploy and run large-scale Python functions in AWS Lambda"
learning: ["BAWS Lambda"]
learning_weight: 310
draft: true
---

<!-- https://docs.aws.amazon.com/lambda/latest/dg/python-programming-model.html
https://stackify.com/aws-lambda-with-python-a-complete-getting-started-guide/
https://towardsdatascience.com/introduction-to-amazon-lambda-layers-and-boto3-using-python3-39bd390add17
https://towardsdatascience.com/make-data-acquisition-easy-with-aws-lambda-python-in-12-steps-33fe201d1bb4
https://medium.com/faun/aws-lambda-serverless-framework-python-part-1-a-step-by-step-hello-world-4182202aba4a
https://github.com/nficano/python-lambda -->


> The [code examples]() used below are licensed under [MIT License](https://github.com/dashbird/knowledge-base-examples/blob/master/LICENSE)

# Overview

Lambda supports Python versions 2.7[^1], 3.6 and 3.7. The way it works is[^2]:

1. Create a file called `lambda_function.py`
2. Declare a function called `lambda_handler`, which should receive two arguments: `event` and `context`[^3] (in that order)
3. The function returns a JSON-serializable object (a dictionary is recommended) containing anything the requester should expect from the function (this is an optional step)
4. Create a deployment package: a ZIP file containing all project files (the `lambda_function.py` must be in the root of the ZIP archive)

All libraries and dependencies (except for Python native modules[^4]) must be added to the ZIP archive as well.

AWS already includes the latest version of the boto3[^5] library in all Python functions. It is not a good practice to rely on this version of boto3[^6]. Developers should override the default Lambda boto3 with their own version in the deployment package.

# Hands-on Demo

We will create a simple Lambda service that can return the Wonders of the World[^7] in multiple lists.

* Lambda function: contains the entry point handler to respond to Lambda invocations
* Dataset: provides information about the seven wonders

The code used in this example can be found in our [Github repository](https://github.com/dashbird/knowledge-base-examples/tree/master/python/lambda-getting-started).

## Lambda Function File

This is our main Lambda file that handles requests:

`lambda_function.py`:

```python
import logging
from dataset import WONDERS, CREDITS

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    '''Lambda function handler'''
    response = {
        'status': 200,
        'error': None,
        'data': None
    }

    try:
        wonder_list = event['wonder_list']

        if type(wonder_list) is not str:
            raise TypeError('"wonder_list" Lambda argument must be a string')

        logger.info('Wonder List requested: ', wonder_list)

        data = WONDERS[wonder_list.lower()]

        raise ValueError('123')

        logger.info('Data response: ', data)

        response['data'] = {
            'list': wonder_list,
            'wonders': data,
            'credits': CREDITS
        }

    except (KeyError, TypeError) as error:
        handle_error(response, error, 400, 'Wonder List was not recognized')

    except Exception as error:
        handle_error(response, error, 500, 'An unexpected error occurred')

    finally:
        try:
            print('Response object:')
            print(json.dumps(response))
        except Exception as error:
            logger.debug('It was not possible to serialize the response object')
            logger.error(msg)
            logger.exception(error)

        return response

def handle_error(response, error, status, msg):
    logger.error(msg)
    logger.exception(error)

    response['status'] = status
    response['error'] = msg

```

We start by setting a logging object. It is important to log all relevant information, so that the development team has visibility over the Lambda execution and is able to debug issues, if needed[^8]. For more information on logging and Lambda errors, check our [dedicated pages](/knowledge-base/logging/lambda-invocation-function-and-runtime-errors/?utm_source=dashbird-site&utm_medium=article&utm_campaign=knowledge-base&utm_content=aws-lambda).

Our `lambda_handler` sets a default response dictionary containing:

1. `status` can be set to:
    * `200`: request was successful (default)
    * `400`: the Wonder List requested was not recognized
    * `500`: an unexpected internal error occurred
1. `error` is set to `None` by default, but can be set to a string containing a description of the error (if any)
1. `data`: where the list of wonders is provided in the response

We then wrap our logic in a `try-except` statement that catches any kind of code exception. This is good practice for a couple of reasons:

1. Ensures consistency in Lambda responses
1. Avoids leaking internal implementation details[^9], which is a security risk

The `response` object is properly updated depending on whether the processing was successful or not. There is an auxiliary function called `handle_error` that allows to wrap logging and response update routines.

Observe that we are importing the `WONDERS` data from another module: `datasets`. This is the next file in our example, and should be included in the deployment package ZIP.

## Dataset File

The file basically contains information about three lists of Wonders of the World.

`dataset.py`:

```python

CREDITS = {
    'source': 'Wikipedia',
    'url': 'https://en.wikipedia.org/wiki/Wonders_of_the_World'
}

WONDERS = {
    'ancient world': [
        {
            'name': 'Great Pyramid of Giza',
            'Location': 'Giza, Egypt',
            'url': 'https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza'
        },
        {
            'name': 'Colossus of Rhodes',
            'location': 'Rhodes, Greece'
            'url': 'https://en.wikipedia.org/wiki/Colossus_of_Rhodes'
        },
        {
            'name': 'Hanging Gardens of Babylon',
            'location': 'Babylon (near Hillah, Babil province, in Iraq present-day)',
            'url': 'https://en.wikipedia.org/wiki/Hanging_Gardens_of_Babylon'
        },
        {
            'name': 'Lighthouse of Alexandria',
            'location': 'Alexandria, Egypt',
            'url': 'https://en.wikipedia.org/wiki/Lighthouse_of_Alexandria'
        },
        {
            'name': 'Mausoleum at Halicarnassus',
            'location': 'Halicarnassus, Achaemenid Empire (modern day Turkey)',
            'url': 'https://en.wikipedia.org/wiki/Mausoleum_at_Halicarnassus'
        },
        {
            'name': 'Statue of Zeus at Olympia',
            'location': 'Olympia, Greece',
            'url': 'https://en.wikipedia.org/wiki/Statue_of_Zeus_at_Olympia'
        },
        {
            'name': 'Temple of Artemis',
            'location': 'Ephesus (near the modern town of Selçuk in present-day Turkey)',
            'url': 'https://en.wikipedia.org/wiki/Temple_of_Artemis'
        },
    ],
    'natural': [
        {
            'name': 'Aurora in the high-latitude regions',
            'location': 'Arctic and Antarctica',
            'url': 'https://en.wikipedia.org/wiki/Aurora_(astronomy)'
        },
        {
            'name': 'Grand Canyon',
            'location': 'Arizona, USA',
            'url': 'https://en.wikipedia.org/wiki/Grand_Canyon'
        },
        {
            'name': 'Great Barrier Reef',
            'location': 'Queensland, Australia',
            'url': 'https://en.wikipedia.org/wiki/Great_Barrier_Reef'
        },
        {
            'name': 'Harbor of Rio de Janeiro',
            'location': 'Rio de Janeiro, Brazil',
            'url': 'https://en.wikipedia.org/wiki/Guanabara_Bay'
        },
        {
            'name': 'Mount Everest',
            'location': 'Nepal',
            'url': 'https://en.wikipedia.org/wiki/Mount_Everest'
        },
        {
            'name': 'Parícutin volcano',
            'location': 'Michoacán, Mexico',
            'url': 'https://en.wikipedia.org/wiki/Par%C3%ADcutin'
        },
        {
            'name': 'Victoria Falls',
            'location': 'Border of Zambia and Zimbabwe',
            'url': 'https://en.wikipedia.org/wiki/Victoria_Falls,_Zambia'
        },
    ],
    'new seven wonders': [
        {
            'name': 'Great Wall of China',
            'location': 'China',
            'url': 'https://en.wikipedia.org/wiki/Great_Wall_of_China'
        },
        {
            'name': 'Petra',
            'location': 'Jordan',
            'url': 'https://en.wikipedia.org/wiki/Petra'
        },
        {
            'name': 'Christ the Redeemer',
            'location': 'Rio de Janeiro, Brazil',
            'url': 'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)'
        },
        {
            'name': 'Machu Picchu',
            'location': 'Peru',
            'url': 'https://en.wikipedia.org/wiki/Machu_Picchu'
        },
        {
            'name': 'Chichen Itza',
            'location': 'Mexico',
            'url': 'https://en.wikipedia.org/wiki/Chichen_Itza'
        },
        {
            'name': 'Colosseum',
            'location': 'Rome, Italy',
            'url': 'https://en.wikipedia.org/wiki/Colosseum'
        },
        {
            'name': 'Taj Mahal',
            'location': 'India',
            'url': 'https://en.wikipedia.org/wiki/Taj_Mahal'
        },
    ]
}

```

# Deploying on Lambda

## Generate the ZIP deployment package

Zip the `lambda_function.py` and `datasets.py` into a single ZIP file, in the same directory[^10].

```shell
sudo apt install zip unzip
zip -r lambda_package.zip lambda_function.py datasets.py
```

## Create an IAM role for Lambda

Go to the [IAM roles](https://console.aws.amazon.com/iam/home#/roles) console. Click "Create role". Select "Lambda" service. Filter and select the policy "AWSLambdaBasicExecutionRole". Skip tags. Give the role a name: `lambda-cli-role`.

Copy the ARN for the role you just created.

## Create a Lambda function

Using the AWS CLI, we will now create our Lambda function:

```shell
aws lambda create-function
    --function-name world-wonders
    --runtime python3.7
    --role arn:aws:iam::532006216828:role/lambda-cli-role
    --handler lambda_function.lambda_handler
    --description 'Provides a list of Wonders of the World, location and URL for more details.'
    --timeout 10
    --memory-size 128
    --no-publish
    --zip-file fileb://./lambda_package.zip
```

A confirmation response should be prompted. To double check, use the `get-function` command:

```shell
aws lambda get-function --function-name world-wonders
```

It should return information about the function you just created.

## Test the function

To test whether the function is running properly, we'll use the `invoke` command:

```shell
aws lambda invoke --function-name world-wonders --region us-east-1 --profile conway --invocation-type RequestResponse --payload '{"wonder_list": "natural"}' lambda-response.json
```

The command above will invoke the function asking for the "natural" list of World Wonders and will output the results to the `lambda-response.json` file. Open this file to see the response from the Lambda function.

# Adding third-party libraries

As mentioned in the beginning, it is possible to add virtually any kind of third-party dependencies (modules downloaded from pip, for example). You just need to get add the library folder in the root deployment package ZIP file.

Consider, for example, you needed to include the Python Requests library. You would download it from pip, get the folder with all its files and place in the Lambda package. The structure would go like this:

```
world-wonders
|   lambda_function.py
|   dataset.py
|___requests
|   |   requests.py
|   |   another_file.py
|   |   ...
```

ZIP the package and deploy normally to Lambda. It will automatically add all folders in the package to the Python path.

# Final considerations

Lambda works almost exactly like any other environment running Python. One exception is when parallelism is necessary[^11], which requires a specific approach.

It is possible to query databases, invoke third-party HTTP APIs, or virtually anything else needed by your application.

In order to master AWS Lambda and all its benefits, keep reading other pages in our Knowledge Base (see table of contents below).

# Footnotes

[^1]:
     It is not recommended to use the Python 2.7 version, as it's [not going to be maintained](https://www.python.org/doc/sunset-python-2/) by the core Python team [for long](https://pythonclock.org/) anymore.

[^2]:
     [AWS Lambda Function Handler in Python](https://docs.aws.amazon.com/lambda/latest/dg/python-programming-model-handler-types.html)

[^3]:
     [Lambda Context Object in Python](https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html)

[^4]:
     [Python Module Index](https://docs.python.org/3/py-modindex.html)

[^5]:
     [Boto3](https://aws.amazon.com/sdk-for-python/) is an API wrapper library that makes it easier for Python developers to interact with all AWS services.

[^6]:
     When a new Boto3 version is released, AWS will automatically upgrade the package to all functions. The problem is that developers don't get the chance to test their systems properlly with the new library, which leads to an unreliable and unstable production environment.

[^7]:
     [Wikipedia: Wonders of the World](https://en.wikipedia.org/wiki/Wonders_of_the_World)

[^8]:
     [Lambda Function Logging in Python](https://docs.aws.amazon.com/lambda/latest/dg/python-logging.html)

[^9]:
     If Python runtime raises an unhandled exception, Lambda will [return details about the exception](https://docs.aws.amazon.com/lambda/latest/dg/python-exceptions.html) and its trace to the requester. This could leak internal implementation details that can compromise security and should not be available externally.

[^10]:
      [Lambda Deployment Package in Python](https://docs.aws.amazon.com/lambda/latest/dg/lambda-python-how-to-create-deployment-package.html)

[^11]:
     [Parallel Processing in Python with AWS Lambda](https://aws.amazon.com/blogs/compute/parallel-processing-in-python-with-aws-lambda/)
