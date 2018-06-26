/* eslint-env jquery */
/* global localStorage */
$(function () {
  // init values
  const $formArray = $('form[name="trial-form"]')
  if (!$formArray.length) { return }

  $.each($formArray, (i, form) => {
    const emailElement = form[0]

    form.addEventListener('submit', function (e) {
      e.preventDefault()

      const email = localStorage.getItem('email')
      if (email) {
        localStorage.removeItem('email')
      }

      localStorage.setItem('email', emailElement.value)
      window.location.href = '/register'
    })
  })
})
