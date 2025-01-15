// Initialize an empty string to store the current calculation
let calculation = '';

// Select the DOM element where the calculation result will be displayed
const output = document.querySelector('.output');

// Function to add a value to the ongoing calculation
function addCalculation(value) {
  // Append the clicked value (number or operator) to the calculation string
  calculation += value;

  // Update the content of the output element to show the current calculation
  output.innerHTML = calculation;
}
