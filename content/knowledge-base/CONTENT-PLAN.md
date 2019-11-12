# Knowledge Base Content Plan

## Serverless Systems

### Basic Concepts
* :white_check_mark: [What is serverless](https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/)
* :white_check_mark: [Types of serverless systems](https://dashbird.io/knowledge-base/basic-concepts/types-of-serverless-systems/)
* :white_check_mark: [Advantages & suitable use cases](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)
* :white_check_mark: [Challenges & solutions](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)

### Lambda (Compute)

* :white_check_mark: [Introduction to AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/)
* :black_square_button: Use cases for AWS Lambda
* :black_square_button: Getting started with AWS Lambda
* :black_square_button: Advantages, Challenges & Solutions
* :black_square_button: Programming Model (micro-container, runtime, handler, event, context, logging, stateless, limits)
* :black_square_button: Invocation methods & integrations
* :black_square_button: Scalability and concurrency
* :black_square_button: Layers
* :black_square_button: Cold starts
* :black_square_button: Retries & Idempotency
* :black_square_button: Function versioning
* :black_square_button: Resource allocation & performance
* :black_square_button: Methods for automating deployment

### API Gateway

* :black_square_button: Overview and main concepts
* :black_square_button: API Gateway use cases and benefits
    * Security and access control
    * REST API to encapsulate backend services
    * Loose-coupling internal microservices
    * Real-time apps with socket connections
* :black_square_button: Integrating backend services with API Gateway
    * Lambda, S3, Kinesis, DynamoDB, HTTP
* :black_square_button: Getting started with API Gateway
* :black_square_button: Monitoring API health and performance

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

* :black_square_button: Platform, Runtime & Custom errors
* :black_square_button: What should be logged
* :black_square_button: Application objects
* :black_square_button: Privacy concerns

### Debugging

* :black_square_button: Error alerting
* :black_square_button: Log navigation & issue discovery
* :black_square_button: Tracing
* :black_square_button: Live tailing
* :black_square_button: Debugging microservices functions

### Monitoring

* :black_square_button: Setting expected performance thresholds
* :black_square_button: Policy violation alerting
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
