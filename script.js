// Define an empty string to hold the current user input

let string = "";

// Get all the elements with the class "button" and convert them to an array
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {

  // Add a click event listener to each button

  button.addEventListener('click', (e) => {

    // Check which button was clicked based on its innerHTML

    // If the "=" button is clicked, calculate the result using the 'eval' function

    if (e.target.innerHTML == '=') {

      string = eval(string); // Evaluate the mathematical expression stored in 'string'

      document.querySelector('input').value = string; // Display the result in the input field
    }
    // If the "AC" button is clicked, clear the input string

    else if (e.target.innerHTML == 'AC') {

      string = ""; // Reset the input string

      document.querySelector('input').value = string; // Clear the input field
    }
    // If the "C" button is clicked, remove the last character from the input string

    else if (e.target.innerHTML == 'C') {

      string = string.slice(0, -1); // Remove the last character from 'string'

      document.querySelector('input').value = string; // Update the input field
    }
    // For other buttons (numbers and operators), append their innerHTML to the input string
    else {
      console.log(e.target);
      string = string + e.target.innerHTML; // Append the clicked button's value to 'string'
      
      document.querySelector('input').value = string; // Update the input field
    }
  });
});
