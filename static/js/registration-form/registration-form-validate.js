let emailInput = document.getElementById('registration-form-email')
let emailInput.addEventListener('input', updateInputValue)

function addErrorClasses() {
  emailInput.classList.add('is-invalid')
}

function remove errorClasses() {
  emailInput.classList.remove('is-invalid')
}

function updateInputValue(e) {
  console.log(e.target.value)
}

//Get value from email input


//Check if domain is in blacklist
function checkEmailFromBlacklist () {
  let splitFormEmail = emailInput.split('@')
  let isForbiddenEmail = blacklist.includes(splitFormEmail[1])
  console.log(isForbiddenEmail)
}

function testValidation() {
  console.log('tervist')
}
// Add error classes if domain is in blacklist


// Remove errors if changing field


//Prevent submitting before email is okay
let registerSubmit = document.getElementById('register-form')