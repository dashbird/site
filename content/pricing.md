---
title: Dashbird Pricing - Usage Based Serverless Observability Platform
description: Dashbird subscriptions are priced by usage and measured in GB. The plans currently cover AWS Lambda, AWS X-Ray and API Gateway and offer wide range of monitoring, alerting and debugging features. Great value for money!
date: 2018-07-17T17:50:03+02:00
---

<script>
  document
    .querySelector('#navigation ul li.nav-item.pricing')
    .classList
    .add('active')

</script>

<section class="container-fluid dark-bg" >

  <div class="row">
    <div class="col text-center mt-5 mb-3">
      <h1>Pricing</h1>
      <p class="h5 mt-3 mb-5 lato">Find a plan that fits your team or <a href='/contact-sales'>contact us</a> to customize</p>
    </div>
  </div>

  <div class="row justify-content-md-center align-items-center">  
    <div class="col-sm-12 col-md-10 mb-5">
      <div class="row">
        <div class="col mw-250 mt-4">
          <div class="pricing-box bg-white top-gray text-center p-4">
            <h4 class="mt-2 mb-3">FREE</h4>
            <p class="lato h4 mt-5 mb-5">1 GB / month</p>
         </div>
        <div class='text-center pt-3' style='background-color:#e4e7ea'>
          <a class="btn cta-btn cta-secondary" role="button" href='/register' target='_blank'>GET STARTED FOR FREE</a>
          <ul class='pricing-features mt-3 pb-3'>
            <li>Failure detection & alerting</li>
            <li>Account and function metrics</li>
            <li>Invocation history</li>
            <li>X-ray tracing</li>
            <li>7-day data retention</li>
          </ul>
        </div>

        </div>
        <div class="col mw-250">
          <div class="pricing-box bg-white top-yellow text-center pt-4 pl-4 pr-4 pb-1">
            <h4 class="mt-2 mb-4">PROFESSIONAL</h4>
            
            <div class='row' id='custom' style='display:none'>
              <div class='col'>
                <a class="btn cta-btn cta-secondary" role="button" href='/contact-us' target='_blank'>CONTACT US</a>
              </div>
            </div>

            <div id='priced'>
              <div class='row' >
                <div class='col'>
                  <span class="h1 lato">$<span id='annual-cost'>24</span></span>
                </div>
                <div class='col'>
                  <span class="h1 lato"><span id='volume'>5</span>GB</span>
                </div>
              </div>
              <p class="lato text-center text-secondary mt-2 small">per month, paid annually or $<span id='monthly-cost'>29</span> monthly</p>
            </div>
            <select class='custom-select mb-3 mt-3' id='price-selector'>
              <option value='24'>$24 - 5GB</option>
              <option value='99'>$99 - 25GB</option>
              <option value='299'>$299 - 100GB</option>
              <option value='595'>$595 - 200GB</option>
              <option value='990'>$990 - 300GB</option>
              <option value='custom'>More than 300GB</option>
            </select>
            <p class="lato text-center text-secondary small">VAT not included for EU customers</p>
          </div>

          <div class='text-center pt-3' style='background-color:#e4e7ea'>
            <a class="btn cta-btn cta-pink" role="button" href='/register' target='_blank'>START YOUR 14 DAY FREE TRIAL</a>
            <p class="lato text-center text-secondary small">no credit card required</p>
          <ul class='pricing-features pb-3'>
              <li>Live tailing</li>
              <li>Full-text search</li>
              <li>30-day data retention</li>
              <li>Technical support</li>
            </ul>
          </div>
        </div>

        <div class="col mw-250">
          <div class="pricing-box bg-white top-black text-center p-4 mt-4">
            <h4 class="mt-2 mb-3">ENTERPRISE</h4>
            <p class="lato mt-5 mb-5" id="enterprise">Need to handle terabytes of data over millions of functions? We've got your back.</p>
          </div>
          <div class='text-center pt-3' style='background-color:#e4e7ea'>
            <a class="btn cta-btn cta-secondary" role="button" href='/contact-us' target='_blank'>CONTACT US</a>
            <ul class='pricing-features mt-3 pb-3'>
              <li>Enterprise level scale</li>
              <li>Custom, multi-year data retention</li>
              <li>Training and onboarding</li>
              <li>SLA-s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="container-fluid blue-bg" >
    <div class="row">
      <div class="col-md-8 pb-5 m-auto">
      <h3 class='text-center mb-5' style='margin-top: 80px;'>Frequently Asked Questions</h3>

      <div class='accordion' id='faqs'>
        <div class='card'>
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                How do I know how many GB I'm using and what plan to choose?
              </button>
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
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                What features do I get to use during the free trial?
              </button>
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
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
               How much data volume do I get allocated during my 14 day trial? 
              </button>
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
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                What happens when I have to upgrade in the middle of the pricing cycle?
              </button>
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
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                Do you offer refunds?
              </button>
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
            <h5 class="mb-0">
              <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                Do you offer any discounts?
              </button>
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
</section>

<section class="container-fluid" style='background-image: url("/images/blake.jpg"); background-size: cover;box-shadow: inset 0 0 0 1000px rgba(35, 34, 61, 0.6); padding-top: 70px; padding-bottom: 70px;'>
    <div class="row justify-content-center">
      <div class="col-lg-6 center p-2 cta-black bg-cta text-center">
        <span class="h3 roboto-mono mt-5 mb-4 d-block">Over 700 companies trust Dashbird!</span>
        <p class="mt-3 lh-3 d-block">Save development time and money. Get full visibility into serverless in 2-minutes.</p>
        <form class='form-inline justify-content-center mt-md-5 mb-5' name="trial-form">
            <input type="email" class="cta-input mb-2 mb-md-0 mt-5 mt-md-0 mr-md-2 d-block d-md-inline" placeholder='Email address' name="email" required>
            <button class="d-block d-md-inline cta-btn cta-pink" id='signup' type="submit">Get started for free</button>
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
