
// Faq Accordians
let question = document.querySelectorAll(".question");
question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})

document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarIcon = document.getElementById('navbarIcon');

  navbarToggler.addEventListener('click', function() {
    const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      navbarIcon.classList.remove('mdi-menu');
      navbarIcon.classList.add('mdi-close');
    } else {
      navbarIcon.classList.remove('mdi-close');
      navbarIcon.classList.add('mdi-menu');
    }
  });
});
