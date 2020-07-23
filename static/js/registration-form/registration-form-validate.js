// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        let emailInput = document.getElementById('registration-form-email').value
        console.log(emailInput)
        let splitFormEmail = emailInput.split('@')
        console.log(splitFormEmail)
        let isForbiddenEmail = mailserversBlacklist.includes(splitFormEmail[1])
        console.log(isForbiddenEmail)
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } 
        if (isForbiddenEmail) {
          console.log('Is forbidden email')
          event.preventDefault()
          event.stopPropagation()
          document.getElementById('registration-form-email').setCustomValidity('Please add business e-mail')
        } else {
          document.getElementById('registration-form-email').setCustomValidity('')
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())

function onSubmit(token) {
  document.getElementById('register-form').submit();
}

function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6LfJ_LIZAAAAAD-3eadaF9hzHlHIp-btwtSi85bV', {action: 'submit'}).then(function(token) {
        console.log(token)
        console.log('triggered click')
    });
  });
}