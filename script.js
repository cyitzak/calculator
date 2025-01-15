let calculation = '';
const output = document.querySelector('.output');

function addCalculation(value) {
  calculation += value;
  output.innerHTML = calculation;
}