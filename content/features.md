---
title: Dashbird Features - FaaS Performance Stats, Error Tracking & Alerts
description: Track your serverless system performance, memory usage and AWS costs. Real-time function tracing and live tailing make troubleshooting your lambdas truly effortless.
thumbnail: "/images/screens/twitter.png"
date: 2017-11-06T10:50:03+02:00
---
<script>
  document
    .querySelector('#navigation ul li.nav-item.product')
    .classList
    .add('active')
</script>
<div class='container-fluid text-white p-0 blog-slider mb-30' style='background-image: url("/images/features/img-hero-features-fade.jpg"); background-size: cover; position: relative;'>
  <section class="container" style='height: 100%; position: relative;'>
    <div class="row h-100">
      <div class="col-12 col-md-8 left px-xs-2 pt-xs-10 pt-sm-5 justify-content position-static header-feat-wrap">
        <h1 class="text-center roboto-mono features-title-h1 pb-5">Build robust serverless apps</h1>
        <div class="features-hdesc sf-ui-text">
          <p>
            The insight you want. The overview you deserve. Serverless observability done right. We let you know when something breaks. All this with absolutely no code changes or re-deploys. How? We collect data directly from your AWS account, through Cloudwatch APIs.
          </p>
        </div> 
        <!-- section services -->
        <div class="header-services bg-white col-sm-12 col-md-8 py-4 sf-ui-text">
          <div class="row">
            <div class="col-4">
                <a href='/features/aws-lambda-serverless-monitoring'>
                  <div class="features-himg"><img src="/images/features/logo-aws-xray@2x.png"></div>
                  <span>AWS X-Ray</span>
                </a>
            </div>
            <div class="col-4">
                <a href='/features/aws-lambda-serverless-monitoring'>
                  <div class="features-himg"><img src="/images/features/logo-api-gateway@2x.png"></div>
                  <span>Amazon API Gateway</span>
                </a>
            </div>
            <div class="col-4">
                <a href='/features/aws-lambda-serverless-monitoring'>
                  <div class="features-himg"><img src="/images/features/logo-aws-lambda@2x.png"></div>
                  <span>AWS Lambda</span>
                </a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </section>
</div>
<section class="container dark-bg">
  <div class="row">
    <div class="col text-center pb-5 pb-md-10">
      <span class="h2 underlined roboto-mono">Failure detection</span>
    </div>
  </div>
  <dl class="smart-tabs">
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6 mb-4 mb-sm-0 current">
        <a class="" href="#">
          <span class="tabs-title mb-2 mb-md-0">Real-time Insights</span>
          <span class="tabs-description sf-ui-text">See instant metrics regarding errors, invocations, duration, memory usage, and code execution. Get the observability you need to troubleshoot and analyze invocations with log and runtime data.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6 current">
        <img src="/images/features/real-time-insights@2x.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
    <dt class="col-12 col-md-6">
      <a class="" href="#">
        <span class="tabs-title mb-2 mb-md-0">Error Tracking</span>
        <span class="tabs-description sf-ui-text">Leave no error behind. We detect all types of failures for all programming languages. Including crashes, early exits, timeouts and configuration errors.</span>
      </a>
    </dt>
    <dd class="col-12 col-md-6">
      <img src="/images/features/error-tracking@2x.png">
    </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
    <dt class="col-12 col-md-6">
      <a class="" href="#">
        <span class="tabs-title mb-2 mb-md-0">Error Alerting</span>
        <span class="tabs-description sf-ui-text">Get instant notifications to either Slack, your E-mail, or both, whenever something breaks.</span>
      </a>
    </dt>
    <dd class="col-12 col-md-6">
      <img src="/images/features/error-alerting@2x.png">
    </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
    <dt class="col-12 col-md-6">
      <a href="#">
        <span class="tabs-title mb-2 mb-md-0">Seamless Tracing</span>
        <span class="tabs-description sf-ui-text">We seamlessly integrate with X-Ray, giving you proper insight into what your invocation is actually doing</span>
      </a>
    </dt>
    <dd class="col-12 col-md-6">
      <img src="/images/features/seamless-tracing@2x.png">
    </dd>
  </dl>
</section>
<section class="container dark-bg">
  <div class="row">
    <div class="col text-center py-5 pt-10 py-md-10">
      <span class="h2 underlined roboto-mono">Monitoring</span>
    </div>
  </div>
  <dl class="smart-tabs">
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6 current">
        <a class="nav-link active" href="#account-wide" data-toggle="tab" role="tab" aria-selected="true">
          <span class="tabs-title mb-2 mb-md-0">Account-wide</span>
          <span class="tabs-description sf-ui-text">Full account overview with real-time metrics and system health. Gain insight about invocation volumes, billed duration, resource usage, errors, and alerts, all in one place.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6 current">
        <img src="/images/features/account-wide@2x.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
        <a class="nav-link" href="#microservices" data-toggle="tab" role="tab">
          <span class="tabs-title mb-2 mb-md-0">Microservices</span>
          <span class="tabs-description sf-ui-text">We let you create projects of hand-picked functions to monitor - microservices. Want a dedicated dashboard only showing the functions you have in production? Easy, create a project.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6">
        <img src="/images/features/lambdas-view.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
        <a class="nav-link" href="#all-functions" data-toggle="tab" role="tab">
          <span class="tabs-title mb-2 mb-md-0">All Functions</span>
          <span class="tabs-description sf-ui-text">Gain overview of all your functions, with system performance metrics across the board</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6">
        <img src="/images/features/lambdas-view.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
        <a class="nav-link" href="#per-function" data-toggle="tab" role="tab">
          <span class="tabs-title mb-2 mb-md-0">Per-Function</span>
          <span class="tabs-description sf-ui-text">Check your invocation graphs, health, memory usage, and duration statistics. We show you all the invocations for a particular function, including errors, retries, cold starts, and per-invocation metrics.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6">
        <img src="/images/features/function-monitoring.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
        <a class="nav-link" href="#invocations" data-toggle="tab" role="tab">
          <span class="tabs-title mb-2 mb-md-0">Invocations</span>
          <span class="tabs-description sf-ui-text">Dig down to a particular invocation to see the raw logs! You'll get clear insight into memory usage, status information, duration, and potential errors of the invocation. Of course, if you need to save the logs, download them or check them out in Cloudwatch.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6">
        <img src="/images/features/invocations@2x.png">
        </ul>
      </dd>
    </div>
  </dl>
</section>
<section class="container dark-bg pb-10 pb-md-40">
  <div class="row">
    <div class="col text-center py-5 pt-10 py-md-10">
      <span class="h2 underlined roboto-mono">Debugging</span>
    </div>
  </div>

  <dl class="smart-tabs">
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6 current">
        <a class="nav-link active" href="#stack-traces" data-toggle="tab" role="tab" aria-selected="true">
          <span class="tabs-title mb-2 mb-md-0">Stack Traces</span>
          <span class="tabs-description sf-ui-text">Stack traces and context helps you troubleshoot errors quickly and easily.</span>
        </a>
      </dt>
      <dd class="col-12 col-md-6 current">
        <img src="/images/features/stack-traces@2x.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
            <a class="nav-link" href="#live-tailing" data-toggle="tab" role="tab">
              <span class="tabs-title mb-2 mb-md-0">Live Tailing</span>
              <span class="tabs-description sf-ui-text">We make debugging easy. Receive log streams for your functions in real-time.</span>
            </a>
      </dt>
      <dd class="col-12 col-md-6">
            <img src="/images/features/live-tailing@2x.png">
      </dd>
    </div>
    <div class="feat-item mb-5 mb-md-0">
      <dt class="col-12 col-md-6">
            <a class="nav-link" href="#log-search" data-toggle="tab" role="tab">
              <span class="tabs-title mb-2 mb-md-0">Log Search</span>
              <span class="tabs-description sf-ui-text">Search through the logs of one or multiple functions with little to no effort.</span>
            </a>
      </dt>
      <dd class="col-12 col-md-6">
        <img src="/images/features/log-search@2x.png">
      </dd>
    </div>
  </dl>
</section>
<section class="container-fluid py-8 py-md-10 freetrial" style='background-image: url("/images/bg-img-cta@1x.png"); background-size: cover;box-shadow: inset 0 0 0 1000px rgba(35, 34, 61, 0.6);'>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 center p-2 cta-black bg-cta text-center">
        <span class="h3 roboto-mono mb-4 d-block h3-mobile">Sign up for a free account!</span>
        <p class="mt-3 lh-3 d-block col-md-8 justify-content-center p-mobile">Save development time and money. Get your lambda performance analytics set up in 2-minutes.</p>
        <form class='form-inline justify-content-center pt-md-8' name="trial-form">
            <input type="email" class="cta-input mb-2 my-md-0 mt-5 mr-md-2 d-block d-md-inline w-md-auto" placeholder='Email address' name="email" required>
            <button class="d-block d-md-inline cta-btn cta-pink w-md-auto" id='signup' type="submit">Get started for free</button>
        </form>
      </div>
    </div>
</section>
<section class="container-fluid bg-white">
  <div class="row justify-content-center">
    <div class='col-12 col-md-7 text-center' style='padding-top: 30px;'>
        <span class='mx-auto roboto-mono text-light-gray'>Supported languages</span>
      <div class='row content-justify-center align-items-center' style='margin-top: 30px; margin-bottom: 40px;'>
        <div class='col-12 languages-icons '>
          <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  data-src='/images/socialproof/logo-python@2x.png'>
          <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  data-src='/images/socialproof/logo-java@2x.png'>
          <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  data-src='/images/socialproof/logo-csharp@2x.png'>
          <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  data-src='/images/socialproof/logo-nodejs@2x.png'>
          <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  data-src='/images/socialproof/logo-go@2x.png'>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="container dark-bg py-10">
  <div class="row">
    <div class="col text-center pb-6">
      <span class="h2 underlined roboto-mono">Killer features</span>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-slack@2x.png" class="feat-icons">
        <span>Slack integration</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        With our Slack integration you get instant notifications to your desired channel.
      </div>
    </div>
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-list@2x.png" class="feat-icons">
        <span>Live tailing</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        Receive log streams for your functions in real-time.
      </div>
    </div>
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-x@2x.png" class="feat-icons">
        <span>X-Ray</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        Seamless integration with X-Ray gives you proper insight into what your invocation is doing.
      </div>
    </div>
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-cloud-arrow@2x.png" class="feat-icons">
        <span>How we collect data?</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        By fetching data directly from CloudWatch APIs there is absolutely no overhead of using Dashbird.
      </div>
    </div>
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-database@2x.png" class="feat-icons">
        <span>Data retention</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        We store your data for 30 days, making sure you have access to all logs and invocations for the last month, while aggregations can last longer.
      </div>
    </div>
    <div class="col-sm-4 col-12 pt-5 pt-sm-8">
      <div class="feat-title">
        <img src="/images/features/icon-dollar@2x.png" class="feat-icons">
        <span>No additional AWS cost</span>
      </div>
      <div class="feat-desc sf-ui-text py-2 py-sm-3 h-uxs-auto">
        With Dashbird, no additional charges are added to your AWS bill.
      </div>
    </div>
  </div>
</section>
<section class="container-fluid py-8 py-md-10 freetrial" style='background-image: url("/images/bg-img-cta@1x.png"); background-size: cover;box-shadow: inset 0 0 0 1000px rgba(35, 34, 61, 0.6);'>
    <div class="row justify-content-center">
      <div class="col-12 col-lg-8 center p-2 cta-black bg-cta text-center">
        <span class="h3 roboto-mono mb-4 d-block h3-mobile">Sign up for a free account!</span>
        <p class="mt-3 lh-3 d-block col-md-8 justify-content-center p-mobile">Save development time and money. Get your lambda performance analytics set up in 2-minutes.</p>
        <form class='form-inline justify-content-center pt-md-8' name="trial-form">
            <input type="email" class="cta-input mb-2 my-md-0 mt-5 mr-md-2 d-block d-md-inline w-md-auto" placeholder='Email address' name="email" required>
            <button class="d-block d-md-inline cta-btn cta-pink w-md-auto" id='signup' type="submit">Get started for free</button>
        </form>
      </div>
    </div>
</section>
<script>
  fbq('track', 'ViewContent', {
    content_ids: 'features',
  });
</script>