// Get the button element with the ID 'startBtn'
const btn = document.getElementById('startBtn'); 

// Get the div where messages will be displayed (ID 'mensaje')
const mensajeDiv = document.getElementById('mensaje');

// Add a click event listener to the button
btn.addEventListener('click', () => {

  // Prompt the user for their name
  let nombre = prompt("What is your name?");
  // Prompt the user for their age (as text)
  let edadInput = prompt("How old are you?");

  // Convert the age input from string to number
  let edad = Number(edadInput);
  // Clear any previous message
  mensajeDiv.textContent = "";
  // Remove the 'error' CSS class in case it was added before
  mensajeDiv.classList.remove("ERROR");

  // Check if the converted age is not a number
  if (isNaN(edad)) {
    // Show an error message if the input was invalid
    mensajeDiv.textContent = "Error: you must enter a valid number for age.";
    // Add a CSS class to style the error (note: case-sensitive)
    mensajeDiv.classList.add("ERROR");

  // If the age is a number but less than 18
  } else if (edad < 18) {
    // Display a message encouraging them to keep learning
    mensajeDiv.textContent = 
      `Hello ${nombre}, you are under 18. Keep learning and enjoying coding!`;
  
  // If the age is 18 or older
  } else {
    // Display a congratulatory message and encourage exploration
    mensajeDiv.textContent = 
      `Hello ${nombre}, congratulations on your age! Take this opportunity to explore new horizons`;
  }
});
