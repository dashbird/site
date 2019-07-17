---
date: 2017-06-05
title: Configuring custom events from lambdas
linktitle: Custom events
description: Custom events
kbSeries: ["CUser Guide"]
kbSeries_weight: 250
---

Dashbird can catch custom events from lambda invocation logs.

### Creating a filter

After you have loaded your logs into Logbird by configuring a collector you will need to create a Filter to on the log sources to see relevant events.

Logbird allows creating filters from scratch or from a predefined template.


Each filter specifies a set of rules to filter the logs by and also the log sources - which are the logs you want this filter to be applied to.

After the filter is created you will be able to add rules and log sources.

### Adding a rule

Click on 'Add rule' button next to 'Rules'.

#### Query language

Query language is powerful way to parse your log lines and capture data for your events.

It is possible to pipe multiple parsers together and pick only the result you need.

```
// foo walks into a bar {"foo":"bar","abc":"xyz"}

walks
| parse "bar *" as data
| json field=data abc
| fields abc

// abc: xyz
```

##### Matching

It is possible to match any log line using complex query or just simple words. That can be only as first part of the query and it won't have any capture groups as result.

```
keyword AND keyword OR keyword NOT keyword
*keyword*
"This is a phrase"
```

```
report
// Matches all lines including word "report"

("billed duration" and end) or error
// Matches all lines including phrase "billed duration" and "end" or "report"

test and not unit
// Matches all lines including with "test" and ignoring with "unit"

foo bar xyz
// Matches all lines including all these words
```

##### Parsing

###### Anchor

Using start and stop anchor you can capture data from log lines.

Syntax:

```
| parse [field=<field_name>] "<start_anchor>*<stop_anchor>" as <field>
```

Examples:

```
parse "GET * HTTP/1.1 * * " as url, code, size

  parse "GET * " as url
| parse "HTTP/1.1 * " as code
```

###### Regex

Whenever simple anchor parsing doesn't work, you can use more powerful regular expression. You need to have at least 1 capture group.

Syntax:

```
| parse regex [field=<field_name>] "<start_expression>(?<field_name><field_expression>)<stop_expression>"
```

Examples:

```
parse regex "GET (?<url>(.*?)) "
// parses url from the logline
```

###### JSON

Syntax:

```
| json [field=<field_name>] "<name_or_key>"[, "<name_or_key>", ...] [as <field> ...]
```

Examples:

```
json
// parses logline as JSON and exports it as fields

  json log
| json field=log name, value

json accountId, accountName as id, name
```

###### Where

It is possible to filter based on captured groups.

Available operators are: `=`, `<>`, `<=`, `>=`, `<`, `>`

For comparing strings use quotes `field = "value"`

Syntax:

```
| where <boolean expression>
```

Examples:

```
| where foo = "bar"
| where status = 200
| where size < 30
```

###### Fields

Fields are capture groups from the parsed results. If you don't need all of them, then you can filter them.

Syntax:

```
| fields <name>[, <name>, ...]
```

Examples:

```
  json
| fields name
// Capture group only contains name instead of the whole JSON document


  parse "GET * HTTP/1.1 * * " as url, code, size
| fields code
// Capture groups only contains code
```


### Adding a log source

Click on 'Manage' button next to 'Log Sources'.
A list of log sources will be shown. You can search through the log sources.

Make sure you have checked all resources you want the Filter to be applied to and hit 'Save'.


