const form = document.getElementById('newsletter-form');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    successMessage.textContent = "Please enter a valid email.";
    successMessage.style.color = "#ff4d4d"; // red
    return;
  }

  // Simple success simulation
  successMessage.textContent = "Thank you for subscribing! 🎉";
  successMessage.style.color = "#4BB543"; // green
  emailInput.value = "";
});
