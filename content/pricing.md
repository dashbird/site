---
title: Dashbird Pricing - Usage Based Serverless Observability Platform
description: Free and paid plans avaliable! Dashbird subscriptions are priced by usage and measured in GB. The plans currently cover AWS Lambda, AWS X-Ray and API Gateway and offer wide range of monitoring, alerting and debugging features. Great value for money!
date: 2019-04-30T17:50:03+02:00
---

<script>
  // document
  //   .querySelector('#navigation ul li.nav-item.pricing')
  //   .classList
  //   .add('active')

</script>

<section class="container-fluid triangle-bg pricing-page" >
  <div class="container">
    <div class="row">
      <div class="col text-center mt-5 mb-3">
        <h1 class="roboto-mono"></h1>
        <p class="h5 mt-3 mb-5 sf-ui-text"></p>
      </div>
    </div>
    <div class="row justify-content-md-center align-items-center sf-ui-text">  
      <div class="col-sm-12 col-md-12 mb-5">
        <div class="row">
          <div class="col-12 col-md-4 mw-240 mt-4 flex-order-2 free-box">
            <div class="pricing-box  top-lgreen text-center p-4 pb-md-0">
              
              <p class="pricing-val pricing-title">Basic</p>
              <h4 class="mt-md-2 mb-md-3 lgreen roboto-mono cost">Free</h4>
              <p class="pricing-val-spec">up to 1 million invocations</p>

            </div>
            <div class='text-center p-4 pt-0 '>
              <ul class='pricing-features pb-3'>
                <li>Unlimited functions</li>
                <li>7-day data retention</li>
                <li>Slack and e-mail alerts</li>
              </ul>
              <a class="btn cta-btn w-100" href='#register'>Get Started </a>
            </div>
          </div>
          <div class="col-12 col-md-4 mw-240 flex-order-1 pro-box">
            <div class="col-inner pricing-text">
              <div class="pricing-box top-lpurple text-center pt-4 pl-4 pr-4 pb-1">
                <h4 class="mt-2 mb-4 lpurple pricing-title ">Professional</h4>
                <div class='row' id='custom' style='display:none'>
                  <div class='col'>
                    <a class="btn cta-btn cta-secondary" role="button" href='/contact-us' target='_blank'>CONTACT US</a>
                  </div>
                </div>
                <div class='row has-price' >
                    <div class='col'>
                      <span class="h1 annual-cost cost">$<span id='annual-cost'>299</span><span class='text_smaller'>/mo</span></span>
                    </div>
                  </div>
                <div id='priced' class="pb-3">
                  <div class='row' >
                    <div class="priced-slider p-4 pt-7 pb-3 w-100">
                      <input id="price-slider" type="text" data-slider-ticks="[1, 2, 3, 4, 5]" data-slider-ticks-snap-bounds="6" style="display: none;" data-slider-value="1" data-slider-ticks-labels="['100 GBs', '200', '300M']"/>
                    </div>
                  </div>
                <div class='row d-none no-price' id='custom'>
                  <div class='col'>
                    <a class="btn cta-btn" href='/contact-us' target='_blank'>CONTACT US</a>
                  </div>
                </div>
                  
                <p class="pricing-val-spec"><span id="logsize">25</span>GB of log ingestion <br />or <span id="invocations">10</span>M invocations per month</p>
                </div>
              </div>
              <div class='text-center  p-4 pt-0'>
                <ul class='pricing-features pb-3'>
                    <li>X-ray support</li>
                    <li>Full-text search</li>
                    <li>14-day data retention</li>
                    <li>Technical support</li>
                  </ul>
                <a class="btn cta-btn w-100" href='#register'>Start Free Trial</a>
                <p class="text-center text-secondary small p-1 m-0">No credit card needed</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mw-240 mt-4 flex-order-3 custom-box">
            <div class="pricing-box top-lorange text-center p-4 pb-md-0 ">
              <h4 class="mt-2 mb-3 lorange roboto-mono pricing-title">Enterprise</h4>
              <p class="contact-us-title h4">Contact Us</p>
              
              <p class="pricing-val"></p>
              
            </div>
            <div class='text-center p-4 pt-0 '>
              <ul class='pricing-features pb-3'>
                <li>Enterprise level scale</li>
                <li>Serverless Advisory</li>
                <li>Custom data retention</li>
                <li>Training and onboarding</li>
                <li>Custom SLA-s</li>
              </ul>
              <a class="btn cta-btn w-100" role="button" href='/contact-us' target='_blank'>Contact Us</a>
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

<section class="container-fluid blue-bg pricing-page mb-5 pb-5" >
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 pb-5 m-auto">
        <h3 class='text-center mb-5 roboto-mono' style='margin-top: 80px;'>Frequently Asked Questions</h3>
        <div class='accordion' id='faqs'>
          <div class='card'>
            <div class="card-header" id="headingOne">
              <h5 class="mb-0"class="btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I know how many GB I'm using and what plan to choose?
              </h5>
            </div>
            <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body font-reno">
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
              <div class="card-body font-reno">
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
              <div class="card-body font-reno">
              The default data ingeston limit during the 14 day trial is 5GB. For complex proof of concept pilots of Dashbird, please contact the sales team to cater a greater data volume need for your trial.
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
              <div class="card-body font-reno">
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
              <div class="card-body font-reno">
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
              <div class="card-body font-reno">
                You will get a discount on all plans when you sign up for an annual subscription.
              </div>
            </div>
          </div>
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

<style>
  /* bootstrap override */

.slider-handle {
  background-color: #6c65ff;
  background-image: radial-gradient(#6c65ff 44%, #000 103%, #6c65ff 55%);
  background-clip: padding-box;
  box-shadow: 0 0 4px 2px #6c65ff;
  width: 15px;
  height: 15px;
  margin-top: 3px;
}

.slider-tick {
  position: absolute;
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-top: 3px;
  background: #000;
  filter: none;
  opacity: 1;
  border: 1px solid #232323;
}

.slider-track
{
  background: #232323;
}

.slider-tick.in-selection
{
  background-color: #6c65ff;
  background-image: -webkit-linear-gradient(top,#6c65ff 0,#6c65ff 100%);
  background-image: -o-linear-gradient(top,#6c65ff 0,#6c65ff 100%);
  background-image: linear-gradient(to bottom,#6c65ff 0,#6c65ff 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6c65ff',endColorstr='#6c65ff',GradientType=0);
  opacity: 1;
}

a.btn.cta-btn {
    color: #fff;
    font-family: 'Reno Mono', monospace;
}

.card{
  background: transparent;
}

.card-header [type=button] {
    -webkit-appearance: unset;
    border-bottom: 1px solid #191919;
    color: #FFFFFF;	font-family: "SF UI Text";	font-size: 14px;	letter-spacing: 0.5px;	line-height: 42px;
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
    opacity: 0.5;
    text-align: justify;
    color: #FFFFFF;
    letter-spacing: 0.43px;
    line-height: 21px;
}

.card-header h5:after {
    font-family: 'FontAwesome';
    font-style: normal;
    font-size: 1rem;
    content: "↓";
    color: #797979;
    float: right;
    margin-top: -12px;
}
.card-header h5.collapsed:after {
    content: "↑";
}

.slider.slider-horizontal .slider-tick-label-container .slider-tick-label
{
  padding-top: 4px;
    display: inline-block;
    text-align: center;
    height: 11px;	width: 44px;	opacity: 0.5;	color: #FFFFFF;	font-family: "Reno Mono";	font-size: 11.2px;	line-height: 14px;	text-align: center;
}

</style>
