document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('DOMContentLoaded', adjustHeaderPosition);
  window.addEventListener('resize', adjustHeaderPosition);
  window.addEventListener("load", phaseInText);

  var submitButton = document.getElementById("submit-comment");
  submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("comment").value = "";
  });

  var submitButton = document.getElementById("create-booking");
  submitButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    var form = document.getElementById("form-booking"); // Replace "myForm" with the actual ID of your form
    submitButton.classList.add("spinner-border");
    submitButton.innerHTML = "";

    // Delay the form action by 2 seconds
    setTimeout(function() {
      form.submit(); // Submit the form after the delay
    }, 2000);
  });
});


function adjustHeaderPosition() {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelector('h1').style.marginTop = navbarHeight + 'px';
}

function phaseInText() {

  var text = document.getElementById("homer");
  text.style.opacity = 0;
  document.getElementById("homer").classList.remove("hidden");

  var interval = setInterval(function() {
    text.style.opacity = Number(text.style.opacity) + 0.05;
    if (text.style.opacity >= 1) {
      clearInterval(interval);
    }
  }, 25);
}



