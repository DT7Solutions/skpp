// Function to send form data using EmailJS
function Send() {
  if (!validateForm()) {
    return false;
  }

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_dolczhj";
  const templateID = "template_itewwbr";

  // Select the success and error message boxes
  const successBox = document.querySelector('.alert-success');
  const errorBox = document.querySelector('.alert-error');
  const formMsgBox = document.getElementById('form-msg-box');

  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text, params);
      document.getElementById('success-svg').style.display = 'block';
      document.getElementById('error-svg').style.display = 'none'; // Hide error card if shown
      formMsgBox.classList.remove('d-none'); // Show message box
    })
    .catch(function(error) {
      console.error("Email sending failed:", error);
      document.getElementById('error-svg').style.display = 'block';
      document.getElementById('success-svg').style.display = 'none'; // Hide success card if shown
      formMsgBox.classList.remove('d-none'); // Show message box
    });

  // Hide contact-info form after submission
  document.getElementById('contact-info').style.display = 'none';

  // Hide message box after 5 seconds
  setTimeout(function() {
    formMsgBox.classList.add('d-none');
    document.getElementById('contact-info').style.display = 'block'; // Show contact-info form again
    document.getElementById('contact-info').reset(); // Reset form fields
    document.querySelectorAll('.contact-card').forEach(function(card) {
      card.style.display = 'none'; // Hide both success and error cards
    });
  }, 50000); // 5 seconds timeout

  return false;
}

// Form validation function
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  clearErrorMessages();

  var isValid = true;

  if (!name) {
    showError("name-error", " * Please enter a Name. *");
    isValid = false;
  }
  if (!phone) {
    showError("phone-error", " * Please enter a Phone Number. *");
    isValid = false;
  }
  if (!email) {
    showError("email-error", " * Please enter an Email. *");
    isValid = false;
  }
  if (!subject) {
    showError("subject-error", " * Please enter a Subject. *");
    isValid = false;
  }
  if (!message) {
    showError("message-error", " * Please enter a Message. *");
    isValid = false;
  }

  return isValid;
}

// Clear error messages and adjust form group margins
function clearErrorMessages() {
  const errorElements = document.getElementsByClassName("error-msg");
  for (let i = 0; i < errorElements.length; i++) {
    const element = errorElements[i];
    element.innerHTML = "";
    if (element.innerHTML !== "") {
      element.style.marginBottom = "15px";
    } else {
      element.style.marginBottom = "25px";
    }
  }
}

// Show error message in the respective error-msg div
function showError(id, message) {
  document.getElementById(id).innerHTML = message;
  const element = document.getElementById(id);
  if (element.innerHTML !== "") {
    element.style.marginBottom = "-15px";
  } else {
    element.style.marginBottom = "25px";
  }
}

/* 
  // EMAIL JS CREDENTIALS
  // User: sekharababups@gmail.com 
  // PW: Dt7@2021
  // Email Send to Users: cmd@sikharanirmaan.com
  // Email js Template Form Design Code
  <p>&nbsp;</p>
  <p>You got a new message from {{name}}:</p>
      <p>Email: {{email}}</p>
  <p>Phonenumber: {{phone}}</p>
  <p>Subject: {{subject}}</p>
  <p>Message:</p>
  <p style="padding: 12px; font-style: italic;">{{message}}</p>
  <p>&nbsp;</p>
*/