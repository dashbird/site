# Knowledge Base Content Plan

## Serverless Systems

### Basic Concepts
* What is serverless (Renato)
* Types of serverless systems (Renato)
* [Advantages & suitable use cases (Taavi)](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)
* [Challenges & solutions (Taavi)](https://dashbird.io/knowledge-base/basic-concepts/serverless-advantages-and-use-cases/)

### Lambda (Compute)

* Programming Model (micro-container, runtime, handler, event, context, logging, stateless, limits) (Taavi)
* Invocation methods & integrations (Taavi)
* Scalability and concurrency (Taavi)
* Layers (Taavi)
* Cold starts (Taavi)
* Retries & Idempotency (Taavi)
* Function versioning (Taavi)
* Resource allocation & performance (Taavi)
* Advantages, Challenges & Solutions (Taavi)

### API Gateway

* Pending list of topics...

### AppSync (Graph API)

* Pending list of topics...

### Dynamo (NoSQL DB)

* Main concepts: table, indexes, item, attributes, partition/sort keys, on-demand vs. reserved capacity, consistency models, query vs. scan
* CRUD operations in Dynamo
* AWS SDK, OSS libraries (Node, Python)
* Data distribution, scalability, limits, implications to app development

### Aurora Serverless (Relational DB)

* About Aurora MySQL distribution
* How Aurora serverless works, service limits, costs

### CloudDirectory (Graph DB)

* Main concepts: schema & facets, objects/nodes, edges/links, policies, access patterns
* Scalability, service limits

### S3 (Object Storage)

* Pending list of topics...

### Athena (Analytics)

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

*   Local environment
*   IDE config & plugins
*   AWS CLI
*   AWS SAM
*   Frameworks, CloudFormation, CDK
    
### Organization & Architecture

*   Microservices vs. Monolith
*   Mono vs. Multi-repo
*   Function composition strategies
*   Scalable API modelling
*   Preserving maintainability & extensibility

### Logging

*   Platform, Runtime & Custom errors
*   What should be logged
*   Application objects
*   Privacy concerns

### Debugging

*   Error alerting
*   Log navigation & issue discovery
*   Tracing
*   Live tailing
*   Debugging microservices functions

### Monitoring

*   Setting expected performance thresholds
*   Policy violation alerting
*   Tracking scalability issues

### Compute & Data Flow

*   Asynchronous processing
*   Function composition
*   Workflow orchestration

### DevOps

*   Deployment strategies
*   Rolling back changes
*   CI/CD

### Data Storage Strategies

*   Data lakes
*   Multi-DB implementations

---

## Security

### Attack Vectors
*   DDoS, Low & Slow DoS, Financial exhaustion
*   Event-injection
*   Dependency-injection
*   Flow manipulation
*   Over-privilege exploitation
*   Stateless breach, cross-execution data persistency
*   CSRF
*   Identify theft

### General Good Practices

*   Adequate logging & monitoring
*   Input validation
*   Response sanitization
*   Dependency check
*   Access control, least privilege principle
*   Encryption
*   Secrets management
*   Throttling policies

