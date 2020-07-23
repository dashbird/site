// Google recaptcha callback function

// function onSubmit (token) {
//   console.log('Triggered onSubmit before other stuff')
//   document.getElementById('register-form').submit()

// }

// function onSubmit(e) {
//   console.log('triggered onSubmit')
//   e.preventDefault();
//   grecaptcha.ready(function() {
//     console.log('gracaptcha ready')
//     grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
//         console.log('triggered through captcha')
//     });
//   });
// }
addEventListener('load', console.log('Loading'))
addEventListener('submit', console.log('Submit listener'))

$('#register-form').submit(function(e) {
  console.log('hit register-form')
  event.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LfJ_LIZAAAAAD-3eadaF9hzHlHIp-btwtSi85bV', {action: 'subscribe_newsletter'}).then(function(token) {
        console.log('Triggered execute')
    });;
});
})


// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function () {
//   'use strict'

//   window.addEventListener('load', function () {
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.getElementsByClassName('needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.filter.call(forms, function (form) {
//       form.addEventListener('submit', function (event) {
//         let emailInput = document.getElementById('registration-form-email').value
//         console.log(emailInput)
//         let splitFormEmail = emailInput.split('@')
//         console.log(splitFormEmail)
//         let isForbiddenEmail = mailserversBlacklist.includes(splitFormEmail[1])
//         console.log(isForbiddenEmail)
//         if (form.checkValidity() === false) {
//           event.preventDefault()
//           event.stopPropagation()
//         } 
//         if (isForbiddenEmail) {
//           console.log('Is forbidden email')
//           event.preventDefault()
//           event.stopPropagation()
//           document.getElementById('registration-form-email').setCustomValidity('Please add business e-mail')
//         } else {
//           document.getElementById('registration-form-email').setCustomValidity('')
//         }
//         form.classList.add('was-validated')
//       }, false)
//     })
//   }, false)
// }())