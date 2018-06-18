---
title: AWS Lambda Failure Diagnostics, Error Alerts & Debugger - Dashbird
description: Track your FaaS system performance, memory usage, estimated costs and error logs. Real-time debugging, tracing, live tailing and Slack error alerts.
thumbnail: "/images/screens/twitter.png"
date: 2017-11-06T10:50:03+02:00
---

<section class="container-fluid dark-bg">
  <div class="row">
    <div class="col text-center mt-5 d-none d-md-block">
      <h1>AWS Lambda Error Tracking and Debugging</h1>
    </div>

    <div class="col text-center mt-5 d-md-none">
      <span class="h3 underlined">How it works?</span>
    </div>
  </div>

  <div class="row justify-content-md-center align-items-center">
    <div class="col-10 p-3 mb-4 mt-5 mx-auto">
      <div class="row">
        <div class="col text-center text-md-right pt-3">
          <h3>No error is left behind</h3>
          <p class="lato h4 mt-4 lh-2">Dashbird detects all types of failures for all programming languages. This includes crashes, early exits, timeouts and configuration errors in Node.js, Python and Java.</p>
        </div>
        <div class="col col-md-auto">
          <div class='cloudwatch-imitation bg-white' style="width: 600px;">
          <span class="h3 bg-dark d-block text-white">CloudWatch</span>
          <pre class='demo-trace p-0'><span class='p-2'>START RequestId: b7d0ea17 Version: $LATEST</span>
<span class='p-2'>launching rockets</span>
<span class='p-2'>rockets launched</span>
<span class='p-2'>aligning satellites</span>
<span class='error-line d-block p-2'>{
  "errorMessage": "Cannot read property 'length' of undefined",
  "errorType": "TypeError",
  "stackTrace": [
    ...
  ]
}</span><span class='p-2'>satellites not aligned <span class='h4 align-middle'>😬</span></span>
<span class='p-2'>END RequestId: b7d0ea17</span>
<span class='p-2'>REPORT RequestId: b7d0ea17 Duration: 1078.39 ms  ...</span></pre>
        </div>
      </div>
    </div>
  </div>
  </div>

  <div class="row justify-content-md-center align-items-center">
    <div class="col-10 p-3 mb-4 mt-5 mx-auto">
      <div class="row">
        <div class="col col-md-7 imgs-fluid">
          <img src='/images/features/slack.png'>
        </div>
        <div class="col text-center text-md-left pt-3">
          <h3>Instant notifications</h3>
          <p class="lato h4 mt-2 lh-2">Get notified to Slack or e-mail.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-md-center align-items-center">
    <div class="col-10 p-3 mb-4 mt-5 mx-auto">
      <div class="row">
        <div class="col text-center text-md-right pt-3">
          <h3>All the data for troubleshooting</h3>
          <p class="lato h4 mt-2 lh-2">Stacktraces, previous occurences, logs and trends for each error. </p>
        </div>
        <div class="col col-md-6 imgs-fluid">
          <img src='/images/features/error-view.png'>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid">
  <div class="row justify-content-md-center">
    <div class="col justify-content-md-center text-center cta-blue bg-cta br-7 mb-8 mt-5 pt-5 pb-5 mx-auto" style="max-width: 832px;" >
      <span class="h1 pt-5">No code changes, no re-deploys.</span>
      <h3 class="mt-3">Catch errors before your users do, always.</h3>
      <div class="row justify-content-md-center">
        <div class="pt-5 pr-5 col-lg-7 mx-auto">
          <form method="get" action="register">
            <label class="input-group">
              <input type="text" class="form-control" placeholder='Email' name='email' required>
              <button class="input-group-addon">Start Free Trial</button>
            </label>
          </form>
          <p class="text-center small">No credit card required</p>
        </div>
      </div>
    </div>
  </div>
</section>
