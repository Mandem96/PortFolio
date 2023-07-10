const form = document.getElementById('myForm');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    // Form is valid, perform further actions (e.g., send data to server)
    console.log('Form submitted successfully!');
    form.reset();
    errorMessage.style.display = 'none'; // Hide error message after successful submission
  } else {
    // Form is not valid, display error message
    errorMessage.style.display = 'block';
  }
});

function validateForm() {
  const firstName = document.getElementById('firstName');
  const email = document.getElementById('email');
  const phoneNumber = document.getElementById('phoneNumber');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Perform validation checks
  if (firstName.value.trim() === '') {
    firstName.focus();
    return false;
  }

  if (email.value.trim() === '') {
    email.focus();
    return false;
  } else if (!isValidEmail(email.value.trim())) {
    email.focus();
    return false;
  }

  if (phoneNumber.value.trim() === '') {
    phoneNumber.focus();
    return false;
  }

  if (subject.value.trim() === '') {
    subject.focus();
    return false;
  }

  if (message.value.trim() === '') {
    message.focus();
    return false;
  }

  // All validation checks passed
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

  