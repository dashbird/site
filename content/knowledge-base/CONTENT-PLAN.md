# Knowledge Base Content Plan

## Serverless Systems

### Basic Concepts
* :white_check_mark: [What is serverless](https://dashbird.io/knowledge-base/basic-concepts/what-is-serverless/)
* :white_check_mark: [Types of serverless systems](https://dashbird.io/knowledge-base/basic-concepts/types-of-serverless-systems/)
* :white_check_mark: [Advantages & suitable use cases](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)
* :white_check_mark: [Challenges & solutions](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)

### Lambda (Compute)

* :white_check_mark: [Introduction to AWS Lambda](https://dashbird.io/knowledge-base/aws-lambda/introduction-to-aws-lambda/)
    * :black_square_button: Move the anatomy page to this one
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

### API Gateway

* :black_square_button: Overview and main concepts
* :black_square_button: API Gateway use cases
    * Security and access control
    * REST API to encapsulate backend services
    * Loose-coupling internal microservices
    * Real-time apps with socket connections
* :black_square_button: Integrating backend services with API Gateway
    * :black_square_button: Lambda, S3, Kinesis, DynamoDB, HTTP
* :black_square_button: Getting started with API Gateway
* :black_square_button: Monitoring API health and performance

### AppSync (Graph API)

* Pending list of topics...

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

### S3 (Object Storage) (RENATO)

* Pending list of topics...

### Athena (Analytics) (RENATO)

* Pending list of topics...

### SQS (Queue)

* Pending list of topics...

### SNS (Pub/Sub)

* Pending list of topics...

### Kinesis (Streams)

* Pending list of topics...

### EventBridge (Event Bus)

* Pending list of topics...

### Cognito (Auth & User Management)

* Pending list of topics...

---

## Getting Started

### Tooling

* Local environment
* IDE config & plugins
* AWS CLI
* AWS SAM
* Frameworks, CloudFormation, CDK
    
### Organization & Architecture

* Microservices vs. Monolith (RENATO)
* Mono vs. Multi-repo
* Function composition strategies (RENATO)
* Scalable API modelling
* Preserving maintainability & extensibility

### Logging

* Platform, Runtime & Custom errors
* What should be logged
* Application objects
* Privacy concerns

### Debugging

* Error alerting
* Log navigation & issue discovery
* Tracing
* Live tailing
* Debugging microservices functions

### Monitoring

* Setting expected performance thresholds
* Policy violation alerting
* Tracking scalability issues

### Compute & Data Flow

* Asynchronous processing
* Function composition
* Workflow orchestration

### DevOps

* Deployment strategies
* Rolling back changes
* CI/CD

### Data Storage Strategies

* Data lakes
* Multi-DB implementations

---

## Security

### Attack Vectors

* DDoS, Low & Slow DoS, Financial exhaustion
* Event-injection
* Dependency-injection
* Flow manipulation
* Over-privilege exploitation
* Stateless breach, cross-execution data persistency
* CSRF
* Identify theft

### General Good Practices

* Adequate logging & monitoring
* Input validation
* Response sanitization
* Dependency check
* Access control, least privilege principle
* Encryption
* Secrets management
* Throttling policies
