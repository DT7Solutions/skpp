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

  emailjs.send(serviceID, templateID, params)
      .then(function(response) {
          console.log('Email sent successfully:', response.status, response.text, params);
          showMessage("Thank you, " + params.name + "! Your message has been sent successfully.");
      }, function(error) {
          console.error("Email sending failed:", error);
          showMessage("Sorry, " + params.name + ". Oops! Something went wrong. Please try again later.");
      });

  return false;
}

// Show message box
function showMessage(message) {
  const messageBox = document.getElementById('form-msg-box');
  messageBox.innerHTML = `<div class='alert alert-success'>${message}</div>`;
  document.getElementById('contact-info').reset();

  setTimeout(() => {
      messageBox.innerHTML = "";
  }, 5000);
}

// Form validation function
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  var errorMessages = [];

  if (!name) {
      errorMessages.push("Please enter a Name.");
  }
  if (!email) {
      errorMessages.push("Please enter an Email.");
  }
  if (!phone) {
      errorMessages.push("Please enter a Phone Number.");
  }
  if (!subject) {
      errorMessages.push("Please enter a Subject.");
  }
  if (!message) {
      errorMessages.push("Please enter a Message.");
  }

  if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return false;
  }

  return true;
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