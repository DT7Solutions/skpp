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
      showMessage("success", "Thank you, " + params.name + "! Your message has been sent successfully.");
    }, function(error) {
      console.error("Email sending failed:", error);
      showMessage("error", "Sorry, " + params.name + ". Oops! Something went wrong. Please try again later.");
    });

  return false;
}

// Show message box
function showMessage(type, message) {
  const messageBox = document.getElementById('form-msg-box');
  const icon = type === "success" ? "✔️" : "❌";
  const alertClass = type === "success" ? "alert-success" : "alert-error";
  
  messageBox.innerHTML = `<div class='${alertClass}'><span class='alert-icon'>${icon}</span>${message}</div>`;
  
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

  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById('error-msg').innerHTML = "";

  if (name == "" || name == null) {
    document.getElementById('error-msg').innerHTML = "*Please enter a Name*";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById('error-msg').innerHTML = "*Please enter an Email*";
    fadeIn();
    return false;
  }
  if (phone == "" || phone == null) {
    document.getElementById('error-msg').innerHTML = "*Please enter a Phone Number*";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById('error-msg').innerHTML = "*Please enter a Subject*";
    fadeIn();
    return false;
  }
  if (message == "" || message == null) {
    document.getElementById('error-msg').innerHTML = "*Please enter a Message*";
    fadeIn();
    return false;
  }
  return true;
}

function fadeIn() {
  var fade = document.getElementById("error-msg");
  var opacity = 0;
  var intervalID = setInterval(function() {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
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