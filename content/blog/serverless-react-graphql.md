---
title: Build a serverless React + GraphQL app with Aws amplify and AppSync
description: Everything you needed to know about getting started with react, graphql, AWS amplify and AWS AppSync
date: 2019-01-25
frontImage: "2019-01-24/s-w-37942-unsplash"
thumbnail: "images/blog/2019-01-24/s-w-37942-unsplash"
authorlink: 'https://reactgo.com'
author: Sai  Gowtham
category: ["react", "Serverless","Appsync","Graphql"]
---

This post is going to be a tad different and longer than what you are used to but I promise, it's going to be an interesting one. We are going to  build a serverless React + GraphQL Web app with Aws amplify and AppSync.

## What is Aws AppSync?

Aws AppSync helps us create a serverless backend for Android or IOS or Web apps.
It integrates with Amazon DynamoDB, Elasticsearch, Cognito, and Lambda, enabling you to create sophisticated applications, with virtually unlimited throughput and storage, that scale according to your business needs.

AppSync also enables real-time subscriptions as well as offline access to app data.

When an offline device reconnects, AppSync will syncs only the updates occurred while the device was offline and not the entire database.


### How does AppSync Works?

![aws app sync works](/images/blog/2019-01-24/aws-appsync-work.png)


We'll create our GraphQL schema by using AppSync Visual editor or Amplify cli. Once that's done, AppSync takes cares of everything like enabling Dynamodb resources and creating resolver functions for our schema.

### Getting Started with the Amplify Framework

First, we need to install the Amplify command line tool which is used to used to create and maintain serverless backends on AWS.

Run the below command to install the `aws-amplify`.

```bash
npm install -g @aws-amplify/cli
```

Mac users need to use `sudo` before `npm`.

![aws-amplify-cmd-tool installation](/images/blog/2019-01-24/aws-amplify-cmd-tools.png)

Once you have successfully installed it, you need to configure your AWS account by running the following command.

```bash
amplify configure
```

<a href="https://s3.us-east-2.amazonaws.com/amplify-get-started-video/amplifyclisetup.mp4" target="_blank">Watch this video</a> to configure your cli with your Aws account.


### Create React App

Use the  `create-react-app`  to create the react app.

```bash
npx create-react-app awsgraphql-react
```
The above command will download the required files in the "awsgraphql-react" folder to start the react app.

`cd awsgraphql-react` change the working directory.


### Adding GraphQL Backend

Run the follow the command to initialize the new amplify project.

```bash
amplify init
```
It prompts with different questions like choosing your favorite code editor and type of app you are building.

![amplify-init](/images/blog/2019-01-24/amplify-init.png)


Now open your project folder in your code editor you will see a `amplify` folder and `.amplifyrc`  file is added to your react app.

![folder-structure-amplify.png](/images/blog/2019-01-24/folder-structure-amplify.png)


Once you successfully initialized the amplify project Its time to add an AppSync __graphql__ API to our project by running the following command.


```bash
amplify add api
```
This command will prompt with two options `Rest` or `GraphQL` choose GraphQL.

```bash
? Please select from one of the below-mentioned services (Use arrow keys)
❯ GraphQL
  REST
```
Name your GraphQL endpoint and choose authorization type `Api` key.

```bash
? Please select from one of the below mentioned services GraphQL
? Provide API name: awsgraphqlreact
? Choose an authorization type for the API (Use arrow keys)
❯ API key
  Amazon Cognito User Pool
```
Now you need to select the following options.

```bash
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: Single object with fields (e.g., “Todo” with
 ID, name, description)
? Do you want to edit the schema now? Yes
```

Let's edit our schema before pushing it to the aws open your graphql schema which is located in the following folder *amplify/backend/api/awsgraphqlreact/schema.graphql*.

Remove everything and add the schema below.

```graphql
type Post @model {
    id: ID!
    title: String!
    body:String!
    createdAt:String!
}
```

This a `Post` object type with four fields `ID`,`title`,`body` and `createdAt`.


__@model__ : This a model directive which tells amplify cli to store the following types in the dynamodb table.

Now run the below command to update your backend schema.

```bash
amplify push
```
This command will prompt with following questions and choose `yes` for every question.

```bash
| Category | Resource name   | Operation | Provider plugin   |
| -------- | --------------- | --------- | ----------------- |
| Api      | awsgraphqlreact | Create    | awscloudformation |
? Are you sure you want to continue? Yes

GraphQL schema compiled successfully. Edit your schema at /Users/saigowtham/Desktop/awsgraphql-react/amplify/backend/api/awsgraphqlreact/schema.graphql
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target javascript
? Enter the file name pattern of graphql queries, mutations
and subscriptions src/graphql/**/*.js
? Do you want to generate/update all possible GraphQL operations
- queries,mutations and subscriptions Yes
```

If you open your aws console https://console.aws.amazon.com/appsync/ you can see a complete  schema file with `queries` , `mutations` and resolver functions which is created by the `aws-amplify` cli by using our `Post` object type.

![backend-graphql-schema](/images/blog/2019-01-24/backend-graphql-schema.png)



### Connecting GraphQL Api  to React

Now we are connecting our GraphQL backend with the react app for this first we need to download the the following packages.

```bash
npm install aws-appsync graphql-tag react-apollo
```
Once you successfully installed, now open your `index.js` file in your react app and add the below configuration.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
```

After that we import the `AWSAppSyncClient` constructor, `AUTH_TYPE` from the `aws-appsync` package and `aws_config` from the `./aws-exports` file which is created automatically by the amplify cli.

Next, we'll have to instantiate the new `AWSAppSyncClient` client by passing the aws_config.


### Running the first query

In graphql 'query' is used to fetch the data from the `graphql` endpoint.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import gql from 'graphql-tag';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';

import { listPosts } from './graphql/queries';

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    }
});

client.query({
    query: gql(listPosts)
}).then(({ data }) => {
    console.log(data);
});

ReactDOM.render(<App />, document.getElementById('root'));

```

In the code above, we invoke the client.query method by passing a `listPosts` query which is generated automatically by the `aws-amplify` based on our graphql endpoint.

You'll find the data of this query logged inside your browser console.

![client-query](/images/blog/2019-01-24/client-query.png)

Since we don't have any data in our dynamodb table so that we got `0` items, which is what we should expect.


Let's use the 'react-apollo' to run the queries and mutations from the `UI`.

*index.js*

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { ApolloProvider } from 'react-apollo'

const client = new AWSAppSyncClient({
    url: aws_config.aws_appsync_graphqlEndpoint,
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: aws_config.aws_appsync_apiKey,
    }
});



ReactDOM.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));
```
Next we import an `ApolloProvider` component from the 'react-apollo' and wrap it in our `App` component by passing a `client` so that we can access the `client` anywhere from our react app.

### Creating a Post

We need to create a new component called `CreatePost` in the `createPost.js` file which helps us to run the `Mutation` and add data to our backend.


*createPost.js*

```js
import React from "react";
import { Mutation } from "react-apollo";
import { createPost } from "./graphql/mutations";
import gql from "graphql-tag";

class CreatePost extends React.Component {
  handleSubmit = (e, createPost) => {
    e.preventDefault();
    createPost({
      variables: {
        input: {
          title: this.title.value,
          body: this.body.value,
          createdAt: new Date().toISOString()
        }
      }
    }).then(res => {
      this.title.value = "";
      this.body.value = "";
    });
  };
  render() {
    return (
      <div>
        <h1>Create post</h1>

        <Mutation mutation={gql(createPost)}>
          {(createPost, { data, loading, error }) => {
            return (
              <div>
                <form
                  className="add-post"
                  onSubmit={e => this.handleSubmit(e, createPost)}
                >
                  <input
                    type="text" placeholder="Title"
                    ref={node => (this.title = node)}
                    required
                  />
                  <textarea
                    rows="3"
                    cols="40"
                    placeholder="Body"
                    ref={node => (this.body = node)}
                    required
                  />
                  <button>{loading ? "Yes boss..." : "Create Post"}
                  </button>
                </form>
                {error && <p>{error.message}</p>}
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default CreatePost;
```

In `CreatePost` we have imported a `Mutation` component from the 'react-apollo' and `gql` from the 'graphql-tag'. Then `createPost` mutation is imported from `./grahql/mutations` file.

The 'createPost' mutation takes three dynamic arguments which are `title`, `body`, `createdAt`.

**title:** The title of our post.

**body**: The body of our post.

**createdAt**: Post creation time and date.

In your `App.js` import the `createPost` component.

*App.js*

```js
import React, { Component } from 'react';
import CreatePost from './createPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
      </div>
    );
  }
}

export default App;
```

Let's test our createPost component by creating our first post.


![create-post-mutation](/images/blog/2019-01-24/create-post-mutation.gif)


Open your aws-console to see your data is stored inside the DynamoDB table.


### Fetching the Data

Currently, we are not rendering any data on the UI so let's query a data to GraphQL endpoint so that we can see newly created posts.

We'll need to create two new components.

*post.js*

```js
import React from 'react';

class Post extends React.Component {

    componentDidMount() {
        this.props.subscribeToMore();
    }


    render() {
        const items = this.props.data.listPosts.items;

        return items.map((post) => {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <time dateTime={post.createdAt}>
                    {new Date(post.createdAt).toDateString()}</time>
                    <br />
                </div>

            )
        })


    }

}


export default Post;
```


*displayPosts.js*

```js
import React from 'react'
import { Query } from 'react-apollo'
import { listPosts } from './graphql/queries';
import { onCreatePost } from './graphql/subscriptions'
import gql from 'graphql-tag';
import Post from './post'

class DisplayPosts extends React.Component {

    subsCribeNewPosts = (subscribeToMore) => {
        return subscribeToMore({
            document: gql(onCreatePost),
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newPostData = subscriptionData.data.onCreatePost;
                return Object.assign({}, prev, {
                    listPosts: {
                        ...prev.listPosts,
                        items: [...prev.listPosts.items, newPostData]
                    }
                })
            }
        })
    }


    render() {
        return (
            <div className="posts">
                <Query query={gql(listPosts)}  >
                    {({ loading, data, error, subscribeToMore }) => {

                        if (loading) return <p>loading...</p>
                        if (error) return <p>{error.message}</p>

                        return <Post data={data} subscribeToMore={() =>
                            this.subsCribeNewPosts(subscribeToMore)} />
                    }}
                </Query>



            </div>
        )
    }
}


export default DisplayPosts;
```


In the `DisplayPosts` component, we query the list of posts and also enable __real time__ subscriptions so that we can see newly created posts rendered first.

Inside the Query component, we access the `subscribeToMore` function and pass it to the `subscribeNewPosts` method.

<strong>subscribeToMore:</strong> it is invoked whenever the Post component is mounted to the dom and listen for the new posts added to our graphql API.

<strong>updateQuery:</strong> the updateQuery function is used to merge the previous data and current data.

Update your `App.js` file by importing the `DisplayPosts`component.

*App.js*

```js
import React, { Component } from 'react';
import CreatePost from './createPost';
import DisplayPosts from './displayPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
        <DisplayPosts />
      </div>
    );
  }
}

export default App;

```

Let's test our `DisplayPosts` component by creating new posts.


![real-time-subcriptions.gif](/images/blog/2019-01-24/real-time-subcriptions.gif)

In the above image, we tested it by opening two new browser windows.


### Edit Post

Let's create the `EditPost` component which helps us to edit the previously created post.



*editPost.js*

```js
import React from "react";
import { updatePost } from "./graphql/mutations";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class EditPost extends React.Component {
  state = {
    show: false,
    postData: {
      title: this.props.title,
      body: this.props.body
    }
  };

  handleModal = () => {
    this.setState({ show: !this.state.show });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  handleSubmit = (e, updatePost) => {
    e.preventDefault();
    updatePost({
      variables: {
        input: {
          id: this.props.id,
          title: this.state.postData.title,
          body: this.state.postData.body
        }
      }
    }).then(res => this.handleModal());
  };

  handleTitle = e => {
    this.setState({
      postData: { ...this.state.postData, title: e.target.value }
    });
  };

  handleBody = e => {
    this.setState({
      postData: { ...this.state.postData, body: e.target.value }
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <div className="modal">
            <button className="close" onClick={this.handleModal}>
              X
            </button>
            <Mutation mutation={gql(updatePost)}>
              {updatePost => {
                return (
                  <form
                    className="add-post"
                    onSubmit={e => this.handleSubmit(e, updatePost)}
                  >
                    <input
                      type="text"
                      required
                      value={this.state.postData.title}
                      onChange={this.handleTitle}
                    />
                    <textarea
                      rows="3"
                      cols="40"
                      required
                      value={this.state.postData.body}
                      onChange={this.handleBody}
                    />
                    <button>Update Post</button>
                  </form>
                );
              }}
            </Mutation>
          </div>
        )}
        <button onClick={this.handleModal}>Edit</button>
      </>
    );
  }
}

export default EditPost;

```

In `EditPost` we are going to import the `Mutation` component,`updatePost` mutation and `gql` tag then we use the Mutation component by passing the `mutation` prop.

In the Mutation component, we need to pass the function as children because it is using the render props pattern.

The first parameter of the function is the `mutation` function so that we passed this function as an argument to the `handleSubmit` method and invoked with the updated post `title` and `body`.


Open your `post.js` file and add the `EditPost` component.

*post.js*

```js
import React from 'react';
import EditPost from './editPost'

class Post extends React.Component {

    componentDidMount() {
        this.props.subscribeToMore();
    }


    render() {
        const items = this.props.data.listPosts.items;

        return items.map((post) => {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <time dateTime={post.createdAt}>
                    {new Date(post.createdAt).toDateString()}</time>
                    <br />
                    <EditPost {...post} />
                </div>

            )
        })


    }

}

export default Post;
```

Let's test our EditPost component by editing any previously created post.

![edit-post-mutation](/images/blog/2019-01-24/edit-post-mutation.gif)


### DeletePost

Now we are implementing `DeletePost` component with __Optimistic UI__.

#### What is Optimistic UI?

For example, if we delete a Post, it takes time to get the response from the server, and only then can we update the UI. With Optimistic UI we can render this component and once we got a response from the server we replace the optimistic result with actual server result.


Create a new file called `deletePost.js`.

*deletePost.js*

```js
import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import { deletePost } from './graphql/mutations';
import gql from 'graphql-tag';
import { listPosts } from './graphql/queries';


class DeletePost extends Component {

    handleDelete = (deletePost) => {
        deletePost({
            variables: {
                input: {
                    id: this.props.id
                }
            },
            optimisticResponse: () => ({
                deletePost: {
                    // This type must match the return type of
                    //the query below (listPosts)
                    __typename: 'ModelPostConnection',
                    id: this.props.id,
                    title: this.props.title,
                    body: this.props.body,
                    createdAt: this.props.createdAt
                }
            }),
            update: (cache, { data: { deletePost } }) => {
                const query = gql(listPosts);

                // Read query from cache
                const data = cache.readQuery({ query });

                // Add updated postsList to the cache copy
                data.listPosts.items = [
                    ...data.listPosts.items.filter(item =>
                     item.id !== this.props.id)
                ];

                //Overwrite the cache with the new results
                cache.writeQuery({ query, data });
            }
        })
    }

    render() {
        return (
            <Mutation mutation={gql(deletePost)}>
                {(deletePost, { loading, error }) => {
                    return <button onClick={
                       () => this.handleDelete(deletePost)}>
                        Delete Post</button>
                }}
            </Mutation>
        )
    }
}


export default DeletePost;
```

In  `optimisticResponse` function we passed exactly the delete Post data with `__typename:'ModelPostConnection'` then we update the cache by removing the deleted post.


Update your `post.js` file by adding `DeletePost` component.

*post.js*

```js
import React from 'react';
import EditPost from './editPost'
import DeletePost from './deletePost'

class Post extends React.Component {

    componentDidMount() {
        this.props.subscribeToMore();
    }

    render() {
        const items = this.props.data.listPosts.items;

        return items.map((post) => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <time dateTime={post.createdAt}>{
                        new Date(post.createdAt).toDateString()}</time>
                    <br />
                    <EditPost {...post} />
                    <DeletePost {...post} />
                </div>

            )
        })
    }
}

export default Post;
```

![delete-mutation](/images/blog/2019-01-24/delete-mutation.gif)

In the above, we have tested it in offline mode but we can see the UI is updated instantly through an “optimistic response” once we got online appsync send a `deletePost` mutation to update our backend.


### Hosting the React app

By using amplify-cli we can also host our react app in Aws s3 bucket and CloudFront.


Open your terminal and run following command.

```bash
amplify hosting add
```

![hosting-cmd](/images/blog/2019-01-24/hosting-cmd.png)

![published url](/images/blog/2019-01-24/published-url.png)


[Code repository](https://github.com/saigowthamr/Serverless-React-GraphQL-app)


For monitoring, debugging and error detection of AWS Lambdas we are using Dashbird.

### Why Dashbird?

- Dashbird helps us actively monitoring the health and errors.

- One main thing about Dashbird is its user-friendly Interface.

- Dashbird visualizes all your AWS Lambda metrics like
memory utilization, invocation count, and execution duration.

### DashBird Interface

![dashbird-interface](dashbird-interface.gif)

I know, this was an extremely long post and I have to congratulate you for sticking with it. Since you took the time to read all of it I'd love to hear your thoughts. Please leave a comment letting me know what you liked or disliked about it.

---

Mad props to Sai for creating such a massive and comprehensive tutorial. We look forwrd to reading his next one. Check out his website <a href="reactgo.com">here</a>.
