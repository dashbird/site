# Knowledge Base Content Plan

## Serverless Systems

### Basic Concepts
* :white_check_mark: [What is serverless](https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/)
* :white_check_mark: [Types of serverless systems](https://dashbird.io/knowledge-base/basic-concepts/types-of-serverless-systems/)
* :white_check_mark: [Advantages & suitable use cases](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)
* :white_check_mark: [Challenges & solutions](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)

### AWS Cloud

* :black_square_button: AWS Overview
* :white_check_mark: [Global Infrastructure](https://dashbird.io/knowledge-base/aws-cloud/global-infrastructure/)
* :black_square_button: Well-Architected[^1]
* :black_square_button: AWS Tooling[^2]
* :black_square_button: Marketplace

### Lambda (Compute)

* :white_check_mark: [Introduction to AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/)
* :white_check_mark: [Use cases for AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/use-cases/)
* :black_square_button: Getting started with AWS Lambda
* :white_check_mark: [Advantages, Challenges & Solutions](https://dashbird.io/knowledge-base/aws-lambda/advantages-challenges-solutions/)
* :white_check_mark: [Programming Model](https://dashbird.io/knowledge-base/aws-lambda/programming-model/)
* :white_check_mark: [Invocation methods and integrations](https://dashbird.io/knowledge-base/aws-lambda/invocation-methods-and-integrations/)
* :white_check_mark: [Resilience](https://dashbird.io/knowledge-base/aws-lambda/resilience/)
* :white_check_mark: [Scalability and concurrency](https://dashbird.io/knowledge-base/aws-lambda/scalability-and-concurrency/)
* :white_check_mark: [Lambda Layers](https://dashbird.io/knowledge-base/aws-lambda/lambda-layers/)
* :white_check_mark: [Cold starts](https://dashbird.io/knowledge-base/aws-lambda/cold-starts/)
* :white_check_mark: [Retries & Idempotency](https://dashbird.io/knowledge-base/aws-lambda/retries-and-idempotency/)
* :white_check_mark: [Function versioning](https://dashbird.io/knowledge-base/aws-lambda/lambda-versioning/)
* :white_check_mark: [Resource allocation & performance](https://dashbird.io/knowledge-base/aws-lambda/resource-allocation-and-performance/)
* :black_square_button: Methods for automating deployment

### API Gateway

* :black_square_button: What is API Gateway (definition, basic example, pricing)
* :black_square_button: Getting started with API Gateway (setup with serverless framework, code examples)
* :black_square_button: Proxy integration vs. non-proxy integration
* :black_square_button: Authorization with API Gateway (authorizer lambda and how to use/set up/implications)
* :black_square_button: Monitoring and debugging API Gateway (logs, metrics, failure types and what they mean)
* :black_square_button: API Gateway vs AWS ALB (cheapness, performance, other differences)
* :black_square_button: API Gateway Limits https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html
* :black_square_button: Use cases for API Gateway https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-tutorials.html

### AppSync (Graph API)

* :black_square_button: Pending list of topics...

### Dynamo (NoSQL DB)

* :white_check_mark: Overview and main concepts
    * :black_square_button: [Renato] Review names: partition-key, primary-key, hash-key, range-key...
* :black_square_button: DynamoDB use cases
* :white_check_mark: Operations and data access
* :white_check_mark: Secondary indexes
* :white_check_mark: Access pattern strategies
    * :black_square_button: [Renato] Explain [relational](https://www.alexdebrie.com/posts/dynamodb-patterns-serverless/) [modeling](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-adjacency-graphs.html) in Dynamo
* :white_check_mark: Capacity modes
    * :black_square_button: [Renato] Mention that table and index capacity can be allocated separately
    * :black_square_button: [Renato] Cover buying reserved capacity
* :black_square_button: [Renato] Capacity planning and scalability
* :black_square_button: [Renato] Architecture and limits
* :black_square_button: [Renato] Tooling

### Aurora Serverless (Relational DB)

* :black_square_button: About Aurora MySQL distribution
* :black_square_button: How Aurora serverless works, service limits, costs
* :black_square_button: Pending list of topics...

### CloudDirectory (Graph DB)

* :black_square_button: Main concepts: schema & facets, objects/nodes, edges/links, policies, access patterns
* :black_square_button: Scalability, service limits
* :black_square_button: Pending list of topics...

### S3 (Object Storage))

* :black_square_button: Pending list of topics...

### Athena (Analytics)

* :black_square_button: Pending list of topics...

### SQS (Queue)

* :black_square_button: Pending list of topics...

### SNS (Pub/Sub)

* :black_square_button: Pending list of topics...

### Kinesis (Streams)

* :black_square_button: Pending list of topics...

### EventBridge (Event Bus)

* :black_square_button: Pending list of topics...

### Cognito (Auth & User Management)

* :black_square_button: Pending list of topics...

---

## Getting Started

### Tooling

* :black_square_button: Local environment
* :black_square_button: IDE config & plugins
* :black_square_button: AWS CLI
* :black_square_button: AWS SAM
* :black_square_button: Frameworks, CloudFormation, CDK
    
### Organization & Architecture

* :black_square_button: Microservices vs. Monolith (RENATO)
* :black_square_button: Mono vs. Multi-repo
* :black_square_button: Function composition strategies (RENATO)
* :black_square_button: Scalable API modelling
* :black_square_button: Preserving maintainability & extensibility

### Logging

* :white_check_mark: [Lambda: Invocation, Function and Runtime errors](https://dashbird.io/knowledge-base/logging/lambda-invocation-function-and-runtime-errors/)
* :white_check_mark: [Lambda: What should be logged](https://dashbird.io/knowledge-base/logging/lambda-what-should-be-logged/)
* :white_check_mark: [Lambda: Application objects](https://dashbird.io/knowledge-base/logging/lambda-application-objects/)
* :black_square_button: Privacy concerns

### Debugging

* :black_square_button: Log navigation & issue discovery
* :black_square_button: Tracing
* :black_square_button: Live tailing
* :black_square_button: Debugging Microservices Architectures

### Monitoring

* :white_check_mark: [Failure Detection and Alerting](https://dashbird.io/knowledge-base/monitoring/failure-detection-and-alerting/)
* :black_square_button: Policy and Performance Management
* :black_square_button: Tracking scalability issues

### Compute & Data Flow

* :black_square_button: Asynchronous processing
* :black_square_button: Function composition
* :black_square_button: Workflow orchestration

### DevOps

* :black_square_button: Deployment strategies
* :black_square_button: Rolling back changes
* :black_square_button: CI/CD

### Data Storage Strategies

* :black_square_button: Data lakes
* :black_square_button: Multi-DB implementations

---

## Security

### Attack Vectors

* :black_square_button: DDoS, Low & Slow DoS, Financial exhaustion
* :black_square_button: Event-injection
* :black_square_button: Dependency-injection
* :black_square_button: Flow manipulation
* :black_square_button: Over-privilege exploitation
* :black_square_button: Stateless breach, cross-execution data persistency
* :black_square_button: CSRF
* :black_square_button: Identify theft

### General Good Practices

* :black_square_button: Adequate logging & monitoring
* :black_square_button: Input validation
* :black_square_button: Response sanitization
* :black_square_button: Dependency check
* :black_square_button: Access control, least privilege principle
* :black_square_button: Encryption
* :black_square_button: Secrets management
* :black_square_button: Throttling policies

---

# Fotnotes

[^1]:
     [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) resources

[^2]:
     [Developer Center](https://aws.amazon.com/developer/)
