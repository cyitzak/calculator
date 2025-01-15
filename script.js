let calculation = '';
const output = document.querySelector('.output');

function addCalculation(value) {
  // Add the number to calculation variable
  calculation += value;

  // Show the number everytime i click it on output.
  output.innerHTML = calculation;
}