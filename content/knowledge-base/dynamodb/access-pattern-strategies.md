---
date: 2019-11-08T10:00:00-03:00
title: "Access Pattern Strategies"
description: "How to organize information and leverage DynamoDB features for advanced ways of accessing data"
learning: ["CDynamoDB"]
learning_weight: 400
---

# Overview

In comparison to relational databases (RDBMS), DynamoDB requires a different approach to data storage and access patterns modeling.

RDBMS support ad hoc queries that are computed on demand, allowing for flexible access patterns. Usually, developers don't have to think too much about how they will need to access the data in the future. This comes with a few disadvantges, though:

* Difficult to scale the volume of data and read/write throughput
* Query performance is usually unpredictable and highly variable
* As the volume of data grows, query performance can degrade rapidly

DynamoDB solves all these issues offering high scalability, fast and predicatable queries at any scale. It does require developers to think in advance about how data will need to be accessed later.

Adjusting DynamoDB to support different querying models later is possible. Nonetheless, this adjustment is usually more expensive in DynamoDB than developers are used to in an RDBMS.

The following items will cover strategies to enable flexible and advanced querying patterns in DynamoDB.

# Using Secondary Indexes

Consider a table that contains professional profiles (think of it as a version of [LinkedIn](https://www.linkedin.com)). The base table's `primary-key` is the user ID. People can be based in different cities. Retrieving all users based in _New York, NY, USA_, for example, would require a Scan, which is inefficient.

A global secondary index[^1] can arrange users by the `location` attribute. In this case, the _city, state, country_ values would become the `primary-key` in the index. Querying by `primary-key == "New York, NY, USA"` would return the results in a fast and efficient way.

# Querying Multiple Attributes

A combination of attributes are commonly needed when querying. Following the example above, suppose the application need to query by `location` and `employer`. Say someone needs to retrieve all professionals based in _New York, NY, USA_ that work for _Company XYZ_.

A simple secondary index as outlined above wouldn't be enough. There are two ways to support querying combined attributes:

1. Creating an additional attribute on each item combining the `location` and `employer` values
2. Inserting additional items in the table to support such query

## Combined Attribute

Each item has a `location_employer` attribute whose value is the original attribute values concatenated. This artificial attribute is then used as the `primary-key` of a secondary index. The following query returns what the application needs: `location_employer == "New York, NY, USA_Company XYZ"`.

DynamoDB does not build this type of attribute automatically. The logic to build and keep the `location_employer` attribute up-to-date must be implemented in the application backend.

Good programming practices must be followed in order to ensure data integrity. Especially [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): there must be only one place within the application responsible for inserting and updating the user object data. Developers only have to worry about that part of the application to keep `location_employer` perfect and up-to-date.

Some programming languages offer features such as [decorators](https://en.wikipedia.org/wiki/Decorator_pattern) and [property objects](https://stackoverflow.com/questions/30037692/what-is-a-property-object). In Python, for example, it's possible to create a user object that takes care of the artificial attribute by itself:

```python
class User():
    def __init__(self, user_id, name, location, employer, *args, **kwargs):
        self.user_id = user_id
        self.name = name
        self._location = location
        self._employer = employer
        self._location_employer = f'{location}_{employer}'
    
    @property
    def location(self):
        return self._location
    
    @location.setter(self, new_location):
        self._location = new_location

        # When a new location is set, it automatically updates the combined attribute
        self._location_employer = f'{new_location}_{self.employer}'

    @property
    def employer(self):
        return self._employer
    
    @employer.setter(self, new_employer):
        self._employer = new_employer
        self._location_employer = f'{self.location}_{new_employer}'

```

## Inserting additional items

Instead of using a secondary index based on an artificial attribute, developers may also insert additional items to support combined attribute queries.

Consider a new user is being created:

```javascript
{
    'primary_key': 123,  // User ID
    'sort-key': 1234567890,  // Timestamp of user registration
    'name': 'John Doe',
    'location': 'New York, NY, USA',
    'employer': 'Company XYZ'
}
```

The following additional item is inserted in the same table:

```javascript
{
    'primary_key': 'location_employer_New York, NY, USA_Company XYZ',
    'sort-key': 123,
}
```

Notice the `primary-key` pattern: it starts with what was the attribute name in the previous topic (`location_employer`), then concatenates the values for that particular user (`New York, NY, USA_Company XYZ`). The `sort-key` contains what is the User ID, serving as a reference to the original user item.

When querying this table, the application can use: `primary-key == "location_employer_New York, NY, USA_Company XYZ"`. One or multiple items are returned, it extracts the User IDs from the `sort-key`s and issue another read request to retrive the users information.

If the application is read-intensive, it might be a good idea to project (or copy) the entire user information in the additional items to spare the second read requests. This would increase storage space usage, thus should be thought carefully.

The same warning applies: the application must follow good practices - especially [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - in order to keep additional items integral and up-to-date with the base user item.

When writing to tables following this pattern, it is highly recommended to wrap requests in **transations**[^2]. A transactional query ensures that the user item will never be inserted/updated if the additional item failed to insert/update.


[^1] Refer to the [Secondary Indexes](/knowledge-base/dynamodb/secondary-indexes/) page

[^2] Refer to the [Operations and Data Access > Transactions and Conditional Updates](/knowledge-base/dynamodb/transactions-and-conditional-updates) page
