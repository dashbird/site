---
date: 2019-11-18T09:00:00-03:00
title: "Lambda Layers"
description: "What are Lambda Layers and how to use them"
learning: ["BAWS Lambda"]
learning_weight: 800
---

# Overview

A Lambda Layer works very similarly to a folder containing a library in a function code. The difference is that, instead of having to package this library within the function code, it can be packaged separately. Lambda will load the Layer together with the function when its invoked.

# Why Layers are Useful

## Re-use code across multiple functions

Isolating common features in Layers makes it easier to share the same codebase across multiple functions. This avoids having to replicate the same code in different places, which is a bad practice.

The previous solution to avoid replicating code was to implement common features as isolated functions. In some cases, that might be the ideal solution. The problem is that it required an additional function invocation. Sometimes, this invocation needed to run in parallel, increasing function coupling and costs.

With Layers, it's possible to share common libraries without an additional invocation. Consider a simple validation that processes JSON strings used across an application, checking against a structured template. Instead of replicating the code in multiple functions, the validator could be implemented as a Layer. Each function requiring it can have the Layer attached.

## Keeping function's package code smaller

Having a large codebase per function can be a problem. It can make it more difficult to maintain and test the application, for example. It can make deployment slower as well.

This is especially true for large dependencies, such as mathematical/statistical packages, video processing libraries, etc. Also when the same code features are replicated in multiple functions.

To keep packages smaller, Layers allow to isolate features that are commonly used by two or more functions. Instead of deploying the same code multiple times, the Layer is deployed only once. The Lambda platform will make sure it's loaded with the functions that depend on it.

## Simplifies management and deployment of the main function

By keeping function's package smaller, deployment times are faster. When using large dependencies, the main function code may have only a couple megabytes, while the entire package ends up with up to 50 MB.

Since these large dependencies rarely change, packaging them as Layers and deploying only once will relief from having to deploy every time the main function changes.

Having Layers isolating features in single places also makes it easier to manage code. Whenever a feature needs to change, only one Layer has to be updated. Its consumers may also choose to upgrade when it best suits.

# Getting Started with Layers

AWS Lambda allows each function to have up to five Layers. There is no limit into how many times the same Layer can be reused across different functions.

> Beware that the Lambda code package limits apply to Layers as well. The function must stay below 50 MB (250 MB uncompressed), which is counted **including** the size of its layers.

## Creating a Lambda Layer

With the AWS CLI, use the `publish-layer-version` to publish a new Layer (or a new version of an existing one):

```shell
aws lambda publish-layer-version --layer-name hello-world-layer --description "Hello World Layer" --license-info "MIT" --content S3Bucket=lambda-layers-us-east-1-1234567890,S3Key=hello-world-layer.zip
```

## Add Layer to a function

Use the AWS CLI (command line interface), as demonstrated below. Use the `update-function-configuration` option with the `--layers` argument. Pass as many Layer ARNs needed (observing the limit of five in total).

```shell
aws lambda update-function-configuration --function-name hello-world --layers arn:aws:lambda:us-east-1:1234567890:layer:helloworld-layer:1 arn:aws:lambda:us-east-1:1234567890:layer:foobar-layer:2
```

## Remove Layers from a function

Every time the `update-function-configuration` option is used with the `--layers` argument, Lambda will replace the entire list of current layers with the new ones.

To remove all Layers from a function, provide an empty list:

```shell
aws lambda update-function-configuration --function-name hello-world --layers []
```

In case only one Layer needs to be removed, it's necessary to call the `update-function-configuration` option with the list of existing Layers except the one to be removed.

## Using a Layer

Layers are loaded in the `/opt` directory within a Lambda MicroVM[^1]. All runtimes supported natively by Lambda (node.js, Python, Go, etc) will include paths to everything in the `/opt` folder. The function's code can access libraries provided by Layers normally.

## Sharing Layers

Layers can be shared by functions inside an AWS account, within an organization or even across multiple accounts[^2]. To access a Layer, the Lambda function will need permission to call `GetLayerVersion` on the verion of Layer attached to it.

---

# Footnotes

[^1]:
     Check the [Programming Model](/knowledge-base/lambda/programming-model/#lLambda-vVirtualization-technology) page for more information on Lambda MicroVM.

[^2]:
     The [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html#permissions-resource-xaccountlayer) provides more information on how to share Layers with different accounts.
