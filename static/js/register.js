/* eslint-env jquery */
/* global gtag */
/* global fbq */
/* global localStorage */
$(function () {
  // init values
  const email = localStorage.getItem('email')
  if (email) {
    localStorage.removeItem('email')
  }
  const $formArray = $('form[name="register-form"]')
  if (!$formArray.length) { return }

  const $registerForm = $formArray[0]
  const emailElement = $('#registerEmail')
  const firstNameElement = $('input[name="firstName"]') // for honeypot
  const firstNameHoneyElement = $('input[name="firstname"]')
  const passwordElement = $('input[name="password"]')
  const confirmPasswordElement = $('input[name="confirmPassword"]')

  // event handlers
  passwordElement.onchange = validatePassword
  confirmPasswordElement.onkeyup = validatePassword

  $registerForm.addEventListener('submit', function (e) {
    e.preventDefault()
    setTimeout(submitForm, 1000)
    var formSubmitted = false
    function submitForm () {
      if (!formSubmitted && !firstNameHoneyElement.val()) {
        formSubmitted = true
        $registerForm.submit()
      } else {
        window.location.href = '/'
      }
    }

    gtag('event', 'signup-started', {
      'event_category': 'Signup',
      'event_label': emailElement.val()
    })
    fbq('track', 'Lead', {
      value: 'signup-started'
    })
  })

  // init functions
  initRegister()

  // function declarations
  function initRegister () {
    if (!email) {
      emailElement.focus()
      return
    }
    emailElement.value = email
    firstNameElement.focus()
  }
  function validatePassword () {
    if (passwordElement.value !== confirmPasswordElement.value) {
      confirmPasswordElement.setCustomValidity("Passwords Don't Match")
    } else {
      confirmPasswordElement.setCustomValidity('')
    }
  }
})
