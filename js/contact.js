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

  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('Email sent successfully:', response.status, response.text, params);
      successBox.innerHTML = "Thank you, " + params.name + "! Your message has been sent successfully.";
      successBox.style.display = 'block';
      errorBox.style.display = 'none'; // Hide error box if shown
    })
    .catch(function(error) {
      console.error("Email sending failed:", error);
      errorBox.innerHTML = "Sorry, " + params.name + ". Oops! Something went wrong. Please try again later.";
      errorBox.style.display = 'block';
      successBox.style.display = 'none'; // Hide success box if shown
    });

  return false;
}

// Show message box
function showMessage(message, type) {
  const form = document.getElementById('contact-info');
  form.style.display = "none";

  const messageBox = document.getElementById('form-msg-box');
  const alertClass = type === "success" ? "alert-success" : "alert-error";
  messageBox.innerHTML = `<div class='alert ${alertClass}' style='color: white;'>${message}</div>`;

  messageBox.style.display = "block";

  setTimeout(() => {
    messageBox.innerHTML = "";
    messageBox.style.display = "none";
    form.style.display = "block";
    form.reset();
  }, 5000);
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
    showError("name-error", "Please enter a Name. *");
    isValid = false;
  }
  if (!phone) {
    showError("phone-error", "Please enter a Phone Number. *");
    isValid = false;
  }
  if (!email) {
    showError("email-error", "Please enter an Email. *");
    isValid = false;
  }
  if (!subject) {
    showError("subject-error", "Please enter a Subject. *");
    isValid = false;
  }
  if (!message) {
    showError("message-error", "Please enter a Message. *");
    isValid = false;
  }

  return isValid;
}
// Clear error messages and adjust form group margins
function clearErrorMessages() {
  const errorElements = document.getElementsByClassName("error-msg");
  for (let element of errorElements) {
    element.innerHTML = "";
    element.style.display = "none";
  }
  adjustFormGroupMargins();
}

// Show error message and adjust form group margins
function showError(elementId, message) {
  const errorMsg = document.getElementById(elementId);
  errorMsg.innerHTML = message;
  errorMsg.style.display = "block";
  adjustFormGroupMargins();
}

// Adjust form group margins based on error message presence
function adjustFormGroupMargins() {
  const formgroupElements = document.getElementsByClassName("form-group");
  for (let element of formgroupElements) {
    const errorElement = element.querySelector(".error-msg");
    if (errorElement && errorElement.innerHTML !== "") {
      element.style.marginBottom = "15px";
    } else {
      element.style.marginBottom = "25px";
    }
  }
}

/* 
  // EMAIL JS CREDENTIALS
  // User: sekharababups@gmail.com 
  // PW: Dt7@2021
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