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
  const emailElement = $registerForm[0]
  const firstNameElement = $registerForm[1]
  const passwordElement = $registerForm[5]
  const confirmPasswordElement = $registerForm[6]

  // event handlers
  passwordElement.onchange = validatePassword
  confirmPasswordElement.onkeyup = validatePassword

  $registerForm.addEventListener('submit', function (e) {
    e.preventDefault()
    setTimeout(submitForm, 1000)
    var formSubmitted = false
    function submitForm () {
      if (!formSubmitted) {
        formSubmitted = true
        $registerForm.submit()
      }
    }

    gtag('event', 'signup-started', {
      'event_category': 'Signup',
      'event_label': emailElement.value
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
