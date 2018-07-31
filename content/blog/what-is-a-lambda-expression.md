---
title: What Is Lambda Expression?
description: Lambda expressions have often been the subject of mystery for developers. Here's a short explanation on what they actually are.
date: 2018-07-31T00:00:00.000Z
frontImage: "2018-07-31/pexels-photo-240163.jpeg"
thumbnail: "images/blog/2018-07-31/pexels-photo-240163.jpeg"
author: Nemanja Novkovic
blog: ["Lambda", "Other"]
---

In today's modern age, the most crucial aspect of communication is the expression. Various groups express their thoughts or feelings through their work. For example, painters express themselves through their paintings as well as singers express themselves through the way they sing. Writers might make you feel their thoughts while reading some of the articles or books they knew how to write primarily for their readers so the readers will understand their feelings and thoughts. How do programmers express their feelings through their work? Can they do that? Are they able to code something that will make the users feel their coding? What is Lambda expression, and can programmers use it to reach the hearts of their users while transferring their feelings through their coding? Nope. But what is Lambda Expression exactly and how, why, where and when is it being used? I'll do my best to solve this tricky Lambda "emotional" question for you in the following article.
Just before I start, I'd also like to invite you to see the business benefits of using serverless and see for yourself how much development time does serverless save as well as how much delivery speed it increases. Is your AWS bill reduced by using serverless? Follow up [this](https://medium.com/@AnnikaHelendi/serverless-survey-77-delivery-speed-4-dev-workdays-mo-saved-26-aws-monthly-bill-d99174f70663
) link and find all the answers. 

## Defining The Expression

The expression itself is a particular concept in computer science where some variables or constants, operators, and functions are placed all together in a singular statement that is used by a single programming language. Expressions are written by developers and interpreted by computers and later "evaluated." The evaluation produces a result. Let's put it this way, expressions in the code are simple mathematical equations like 5+5, and they are usually called arithmetic expressions. There are also other kinds of numerical or arithmetical expressions, and they can use variables, so they'll look as algebra equations. I must add that various types of data like characters, integers, floating point numbers, strings and many others can be acted on in expressions as variables or constants. 

## Basics About Lambda Expressions And Associated Programming Languages

Lambda expression is an anonymous function which provides a very concise and functional syntax which is further used for writing anonymous methods. The programming of a function is a body concept, and it's used for creating expression tree types or delegates. Lambda expressions use the operator symbol "=," which is known as "goes to." The input parameters are found on the operator's left side while the statements or expressions are located on the right side. Lambda expressions are not directly used in the query syntax in general, but they are often used in method calls. It's a shorthand that is allowing you to write the method at the same place where you plan to use it. Significantly useful in situations where a method is being used only once while the method definition is short. It saves time and energy from writing a separate method for the containing class. Lambda expression can be found useful in various programming languages like C#, C++, Java, Python, LINQ, and others.

## Lambda Expression Syntax Features

For a better understanding of the syntax features and it all, I'll give you some of the rules you must comply to within Lambda expression syntax. We've already mentioned that Lambda expression is a function without a name in which there are no modifiers like overloads and overrides. The base of the function should have an expression, which is much better than a statement. Also, the Lambda expression might contain a "call to a function" procedure but it cannot contain a "call to a subprocedure." The return statements don't exist while the value returned by the function is just the value of the expression that is found in the function base. The End function statement as well doesn't exist, and the parameters must contain specific data types or be inferred. Generic parameters are not allowed as well as optional and ParamArray parameters. Lambda expressions offer a shorthand for the compiler which will enable it to emit the methods that are assigned to delegates, after which the compiler performs the automatic type inference on the Lambda arguments, therefore, making it a key advantage.

## Basic Questions About Lambda Expression

What is Lambda expression and why do we need it? Why would you want to write a method that doesn't have a name? The answer is simple. Lambda expression reduces the typing while there is also no need to name the function. The Lambda expression return type is a good reason why you might need to use it, while its access to a modifier is yet another plus. When you read the code, there is no need for you to look anywhere else for the method's definition. 

## An Example Of Lambda Expression

A simple example of Lambda expression would be: y => y % 2 == 1
In this example, the "y" would be an input parameter while "y % 2 == 1" would be an expression. We can read the example y => y % 2 == 1 like this: "input parameter which is named "y" is going to the anonymous function which will return true if the input in question is odd." I'll deliver you the same example, but this time executed in Lambda:

<code>

List`<int>` numbers = new List`<int>`{17, 43, 62};

List`<int>` oddNumbers = number.where(y => y % 2 == 1).ToList();

//Now oddNumbers is equal to 17 and 43

</code>

That's all the knowledge you need to have so you can say that you know the basics of Lambda expression.
In case I missed anything, please do me a favor and add your comment or start a discussion in our comment section below.
