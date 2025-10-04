const form = document.getElementById('location-form');
const input = document.getElementById('location-input');
const message = document.getElementById('delivery-message');

// Simple mock delivery area checker
const availableAreas = ["new york", "los angeles", "san francisco", "chicago", "houston"];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const userInput = input.value.trim().toLowerCase();
  
  if (userInput === "") {
    message.textContent = "Please enter a valid location.";
    message.style.color = "#ff4d4d";
    return;
  }

  if (availableAreas.includes(userInput)) {
    message.textContent = `✅ Great news! We deliver to ${input.value}!`;
    message.style.color = "#4BB543";
  } else {
    message.textContent = `❌ Sorry, delivery is not available in ${input.value} yet.`;
    message.style.color = "#ff4d4d";
  }

  input.value = "";
});
