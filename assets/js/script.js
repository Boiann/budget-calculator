/*
Funcions needed:

- Add event listeners to clculate budget and reset form
-Calculate budget
-Reset form
-Have the option of adding more expense input fields
-Have the option of adding more income input fields
-Have the currency be selected and displayed in the final result (possibly use dropdown menu)
-Have the inputs be mandatory, add warnings if the inputs are empty
-Have a message display for the user after name input

Extra bits, add if possible:

- Add date to the page
- Add print option
- Add some sort of visual representation of the calculated budget ( look into charts, API-s etc)
- Option to store the data locally ( remember the budget when the user returns)
*/

// Wait for the DOM to load before running Javascript
document.addEventListener('DOMContentLoaded', function() {

// Get the calculate budget button and add a click event listener
const calculateBudgetBtn = document.getElementById('calculate-budget-btn');
calculateBudgetBtn.addEventListener('click', calculateBudget);

// Calculate the budget and display it on the page
function calculateBudget() {
  const income = document.getElementById('income').value;
  const expenseInputs = document.querySelectorAll('.expense-item input[type="number"]');
  let totalExpenses = 0;
  for (let i = 0; i < expenseInputs.length; i++) {
    totalExpenses += parseInt(expenseInputs[i].value);
  }
  const budget = income - totalExpenses;
  document.getElementById('budget').innerHTML = `Budget: ${budget}`;
}


  });