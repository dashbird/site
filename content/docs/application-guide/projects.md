---
date: 2017-06-05
title: Creating Projects for grouping Lambda Functions with Dashbird
linktitle: Project views
description: Projects
kbSeries: ["CUser Guide"]
kbSeries_weight: 700
---

Dashbird let's you create projects of hand-picked Lambdas to monitor. Want a dedicated dashboard only showing the functions you have in production? Easy, create a project.

## Monitor Limited Sets of Functions
We at Dashbird want to give you an experience you are already used to. Having multiple environments for development, staging and production is a requirement for any real-life system. **Projects** can make this a reality. 

You choose which functions to add to a project. This project will then get it's own dedicated dashboards where you can **monitor**, **analyze**, and **debug** your functions.

By pressing the [Project Views](https://app.dashbird.io/projects) button on the left navigation panel you'll reach the **Project Page** where you can see a list of your projects.

![Project List](/images/docs/project-list.png)

<br>

## Create a new Project
<div class="row">
    <div class="col-md-6 col-sm-12 col-xs-12 text-md-left pt-3">
        <p class="lato">By pressing the big green button at the top right part of the <b>Project Page</b> you'll open up a popup for creating a new Project.</p>
        <p class="lato">The way to add Functions is through a filtering process. By using <a href="https://en.wikipedia.org/wiki/Glob_(programming)">glob patterns</a> you choose which Functions to add.</p>
        <p>Use <code>some-service-</code> to <b>include</b> and <code>!some-service-prod-</code> to <b>exclude</b> Lambda Functions.</p>
    </div>
    <div class="col-md-6 col-sm-12 col-xs-12 imgs-fluid">
        <img src='/images/docs/create-project.png'>
    </div>
</div>


## Project Dashboard
Having dedicated dashboards for different environments can improve your team's separation of concerns. You can monitor and debug different environments and divide your system into multiple logical units.

![Project Dashboard](/images/docs/project-view.png)

<br>

---

Get started with [Projects](https://app.dashbird.io/projects) by adding them to your account!
