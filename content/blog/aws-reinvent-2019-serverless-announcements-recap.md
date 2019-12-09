---
title: "AWS re:Invent 2019 - Serverless Announcements Recap"
description: All re:Invent 2019 serverless announcements you absolutely need to be aware of
date: 2019-12-09T00:00:00.000Z
frontImage: "2019-12-09/aws-reinvent-recap.jpg"
thumbnail: "images/blog/2019-12-09/aws-reinvent-recap.jpg"
author: Renato Byrro
blog: ["aws", "reinvent", "serverless"]
---

We did a compilation of all announcements from the AWS re:Invent 2019 that are relevant for Serverless teams, broken down by services:

# Lambda: Provisioned Concurrency

Cold Starts have been an issue since Lambda was launched, years ago. Many attempts by the development community have tried to mitigate it with various degrees of success. Now AWS launched Provisioned Concurrency.

In short: instead of waiting for requests to come in before instantiating resources to serve them, developers can _tell_ AWS to keep a certain number of function instances _warm_ and ready to serve invocations.

To learn more, read our [blog article](https://dashbird.io/blog/aws-lambda-provisioned-concurrency/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) and complete [guide on the Provisioned Concurrency](https://dashbird.io/knowledge-base/aws-lambda/provisioned-concurrency/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) feature.


# S3: Access Points

Instead of concentrating all bucket access policies in a single place, AWS S3 now allows to distribute access rules across multiple Access Points.

Each access point is an HTTP endpoint that can be shared with one or more internal services, or even publicly. Through the access point, the requester can only perform the type of operations and to the objects allowed by the access point policy.

To learn more, read our [blog article](https://dashbird.io/blog/how-to-secure-your-data-with-serverless-access-points/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) about the feature.


# Managed Cassandra

Although DynamoDB is a perfect-fit for serverless applications, many teams and companies have been wary of using it due to lock-in fears.

Now AWS offers a similar database engine with Cassandra Managed. It combines the high-throughput, highly scalable capabilities of DynamoDB with the portability of an open-source API.

To learn more, read our [blog article](https://dashbird.io/blog/why-cassandra-managed-is-a-game-changer-for-serverless/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap).

> We're publishing a thorough comparison of Cassandra Serverless and DynamoDB this week. [Subscribe here](https://dashbird.io/subscribe-knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) to receive an alert when it's live!


# API Gateway: HTTP APIs

On top of an HTTP proxy service, API Gateway offers a wide range of features: API Keys management, SDK generation, throttling, etc. All these extra features come with a cost, though.

Many projects only require the HTTP proxy service and don't enjoy the benefits of the other features listed. This used to make API Gateway cost-prohibitive for some use cases.

Now AWS has launched a simplified version of API Gateway that acts as an HTTP proxy that can work in connection with Lambda functions, for example. It costs 1/3 the price of the fully-featured version.

To learn more, read our [blog article](https://dashbird.io/blog/reinvent-2019-api-gateway-http-proxy/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap).

> We're publishing a thorough guide on the new HTTP APIs feature. [Subscribe here](https://dashbird.io/subscribe-knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) to receive an alert when it goes live!


# Amplify Support for iOS/Android

Amplify is an open-source framework for building cloud-native web/mobile applications integrated with various AWS services.The AWS team released a preview of libraries to support native iOS and Android application development.

To learn more, read the [official AWS announcement](https://aws.amazon.com/about-aws/whats-new/2019/12/introducing-amplify-for-ios-and-android/).


# Amplify Datastore

Datastore is a new feature for AWS Amplify that allows to store and query data on-device, making it easier to manage application state locally. It works with web, IoT and mobile (iOS, Android, React Native).

To learn more, read the official [AWS announcement](https://aws.amazon.com/about-aws/whats-new/2019/12/introducing-amplify-datastore/).


# Kinesis support for WebRTC

Now it is possible to provide two-way media streaming with Kinesis using [WebRTC](https://webrtc.org/) standards. WebRTC stands for _Web Real Time Communications_ and provides the main components used in voice and video chat on-line: network, audio and video.

It is supported by all major browsers. The project itself is supported by the organizations behind most modern browsers: Google, Mozilla and Opera.

Read the [official AWS announcement](https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-kinesis-video-streams-adds-support-for-real-time-two-way-media-streaming-with-webrtc/) for more information.


# Fargate Spot

Many fault-tolerant projects have been benefiting from EC2 spot instances for a long time. Now AWS brings the cost savings (+70%) of spot instances to Fargate, the serverless container management service.

Background computation jobs, batch processing, CI/CD workflows, are all examples of use-cases that can benefit from Fargate Spot.

Read the [official AWS announcement](https://aws.amazon.com/about-aws/whats-new/2019/12/aws-launches-fargate-spot-save-up-to-70-for-fault-tolerant-applications/) to learn more about it.


# EventBridge Schema Registry

"_The EventBridge Schema Registry allows you to discover, create, and manage OpenAPI schemas for events on EventBridge. You can find schemas for existing AWS services, create and upload custom schemas, or generate a schema based on events on an event bus. For all schemas in EventBridge you can generate and download code bindings to help quickly build applications that use those events_". ([AWS docs](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-schemas.html))

Read more in the [official announcement](https://aws.amazon.com/about-aws/whats-new/2019/12/introducing-amazon-eventbridge-schema-registry-now-in-preview/) page.


# Serverless Machine Learning

AWS announced three new serverless machine learning offerings. Click on the links below to read more details in the official announcements:

* [Recognition of medical clinician-to-patient communications](https://aws.amazon.com/about-aws/whats-new/2019/12/aws-announces-amazon-transcribe-medical-medical-speech-recognition?trk=ls_card)
* [Custom object recognition on images](https://aws.amazon.com/about-aws/whats-new/2019/12/aws-launches-amazon-rekognition-custom-labels-enable-customers-find-objects-scenes-unique?trk=ls_card)
* [Fraud Detection](https://aws.amazon.com/about-aws/whats-new/2019/12/introducing-amazon-fraud-detector-now-in-preview?trk=ls_card)

### We are covering all these services and many more with detailed guides and step-by-step tutorials in our [Cloud Knowledge Base](https://dashbird.io/knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap). [Subscribe](https://dashbird.io/subscribe-knowledge-base/?utm_source=dashbird-site&utm_medium=blog&utm_campaign=reinvent&utm_content=announcements-recap) to receive alerts as soon as we publish new content there.
