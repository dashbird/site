---
title: Dashbird Pricing - Usage Based Serverless Observability Platform
description: Free and paid plans avaliable! Dashbird subscriptions are priced by usage and measured in GB. The plans currently cover AWS Lambda, AWS X-Ray and API Gateway and offer wide range of monitoring, alerting and debugging features. Great value for money!
date: 2018-07-17T17:50:03+02:00
---

<script>
  document
    .querySelector('#navigation ul li.nav-item.pricing')
    .classList
    .add('active')

</script>

<section class="container-fluid triangle-bg pricing-page" >
  <div class="container">
    <div class="row">
      <div class="col text-center mt-5 mb-3">
        <h1 class="roboto-mono">Pricing</h1>
        <p class="h5 mt-3 mb-5 sf-ui-text">Find a plan that fits your team or <a href='/contact-sales'>contact us</a> to customize</p>
      </div>
    </div>
    <div class="row justify-content-md-center align-items-center sf-ui-text">  
      <div class="col-sm-12 col-md-12 mb-5">
        <div class="row">
          <div class="col-12 col-md-4 mw-240 mt-4 flex-order-2">
            <div class="pricing-box bg-white top-lgreen text-center p-4 pb-md-0">
              <h4 class="mt-md-2 mb-md-3 lgreen roboto-mono">FREE</h4>
              <p class="h4">1 GB </p>
              <p class="pricing-desc"></p>
              <p class="pricing-val">$0</p>
              <p class="pricing-val-spec"></p>
            </div>
            <div class='text-center p-4 pt-0 bg-white'>
              <ul class='pricing-features pb-3'>
                <li>Failure detection & alerting</li>
                <li>Account and function metrics</li>
                <li>Invocation history</li>
                <li>X-ray tracing</li>
                <li>7-day data retention</li>
              </ul>
              <a class="btn cta-btn cta-pink w-100" role="button" href='/register' target='_blank'>Get started for free</a>
            </div>
          </div>
          <div class="col-12 col-md-4 mw-240 flex-order-1">
            <div class="col-inner">
              <div class="pricing-box bg-white top-lpurple text-center pt-4 pl-4 pr-4 pb-1">
                <h4 class="mt-2 mb-4 lpurple">PROFESSIONAL</h4>
                <div class='row' id='custom' style='display:none'>
                  <div class='col'>
                    <a class="btn cta-btn cta-secondary" role="button" href='/contact-us' target='_blank'>CONTACT US</a>
                  </div>
                </div>
                <div id='priced' class="pb-3">
                  <div class='row' >
                    <div class="priced-slider p-4 pt-7 pb-3 w-100">
                      <input id="price-slider" type="text" data-slider-ticks="[1, 2, 3, 4, 5, 6]" data-slider-ticks-snap-bounds="6" data-slider-value="3" data-slider-ticks-labels="['5 GB', '25', '100', 200', '300', '300+']"/>
                    </div>
                  </div>
                <div class='row d-none no-price' id='custom'>
                  <div class='col'>
                    <a class="btn cta-btn cta-secondary" role="button" href='/contact-us' target='_blank'>CONTACT US</a>
                  </div>
                </div>
                  <div class='row has-price' >
                    <div class='col'>
                      <span class="h1 annual-cost">$<span id='annual-cost'>24</span></span>
                    </div>
                  </div>
                  <p class="text-center text-secondary my-2 small has-price">per month, paid annually or $<span id='monthly-cost'>29</span> monthly</p>
                </div>
              </div>
              <div class='text-center  p-4 pt-0 bg-white'>
                <ul class='pricing-features pb-3'>
                    <li>Live tailing</li>
                    <li>Full-text search</li>
                    <li>30-day data retention</li>
                    <li>Technical support</li>
                  </ul>
                <a class="btn cta-btn cta-pink w-100" role="button" href='/register' target='_blank'>Start your 14 day free trial</a>
                <p class="text-center text-secondary small p-1 m-0">No credit card needed</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mw-240 mt-4 flex-order-3">
            <div class="pricing-box bg-white top-lorange text-center p-4 pb-md-0 ">
              <h4 class="mt-2 mb-3 lorange roboto-mono">ENTERPRISE</h4>
              <p class=" h4">Unlimited</p>
              <p class="pricing-desc" id="enterprise">Need to handle terabytes of data over millions of functions? We've got your back.</p>
              <p class="pricing-val"></p>
              <p class="pricing-val-spec"></p>
            </div>
            <div class='text-center p-4 pt-0 bg-white'>
              <ul class='pricing-features pb-3'>
                <li>Enterprise level scale</li>
                <li>Custom, multi-year data retention</li>
                <li>Training and onboarding</li>
                <li>SLA-s</li>
              </ul>
              <a class="btn cta-btn cta-pink w-100" role="button" href='/contact-us' target='_blank'>Contact Us</a>
            </div>
          </div>
        </div>
        <div class="row">
          <p class="price-vat text-center small w-100 pt-4">*VAT not included for EU customers</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid blue-bg pricing-page" >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 pb-5 m-auto">
        <h3 class='text-center mb-5 roboto-mono' style='margin-top: 80px;'>Frequently Asked Questions</h3>
        <div class='accordion' id='faqs'>
          <div class='card'>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0"class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I know how many GB I'm using and what plan to choose?
                <!-- </button> -->
              </h5>
            </div>
            <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                Just sign up for the free trial and check the Subscription page inside the webapp to get an overview of your usage. Don't worry, we don't require credit card information until the end of your trial.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0" class="btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  What features do I get to use during the free trial?
              </h5>
            </div>
            <div id="collapseTwo" class="collapse hide" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
              All of them!
              </div>
            </div>
          </div>
          <div class='card'>
            <div class="card-header" id="headingSix">
              <h5 class="mb-0" class="btn" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                 How much data volume do I get allocated during my 14 day trial? 
              </h5>
            </div>
            <div id="collapseSix" class="collapse hide" aria-labelledby="headingSix" data-parent="#accordionExample">
              <div class="card-body">
              The default data volume setting during the 14 day trial is 25GB. For complex proof of concept pilots of Dashbird, you can always contact the sales team to cater a greater data volume need for your trial.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class="card-header" id="headingThree">
              <h5 class="mb-0" class="btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  What happens when I have to upgrade in the middle of the pricing cycle?
              </h5>
            </div>
            <div id="collapseThree" class="collapse hide" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                Dashbird billing is transparent and fair. If you upgrade your plan in the middle of the billing cycle, you will be charged for the prorated amount.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class="card-header" id="headingFour">
              <h5 class="mb-0" class="btn" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  Do you offer refunds?
              </h5>
            </div>
            <div id="collapseFour" class="collapse hide" aria-labelledby="headingFour" data-parent="#accordionExample">
              <div class="card-body">
                No, we don't do refunds. When you are on a monthly or annual subscription, you can cancel that any time and won't be charged again, but you will still have access to your account until the end of that billing period.
              </div>
            </div>
          </div>
          <div class='card'>
            <div class="card-header" id="headingFive">
              <h5 class="mb-0" class="btn" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  Do you offer any discounts?
              </h5>
            </div>
            <div id="collapseFive" class="collapse hide" aria-labelledby="headingFive" data-parent="#accordionExample">
              <div class="card-body">
                You will get 10% discount on all plans when you sign up for an annual subscription.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid" style='background-image: url("/images/blake.jpg"); background-size: cover;box-shadow: inset 0 0 0 1000px rgba(35, 34, 61, 0.6); padding-top: 70px; padding-bottom: 70px;'>
    <div class="row justify-content-center">
      <div class="col-lg-6 center p-2 cta-black bg-cta text-center">
        <span class="h3 roboto-mono mt-5 mb-4 d-block">Over 700 companies trust Dashbird!</span>
        <p class="mt-3 lh-3 d-block">Failure detection, analytics and visibility for serverless applications in under 5 minutes.</p>
        <form class='form-inline justify-content-center mt-md-5 mb-5' name="trial-form">
            <button class="d-block d-md-inline cta-btn cta-pink w-md-auto" id='signup' type="submit">Get started for free</button>
            <a href='/contact-us' class="btn btn-default d-block d-md-inline cta-btn cta-transparent w-md-auto request-demo">Request Demo</a>
        </form>
      </div>
    </div>
</section>

<section class="container-fluid dark-bg">
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

<script>
  fbq('track', 'ViewContent', {
    content_ids: 'pricing',
  });
</script>
