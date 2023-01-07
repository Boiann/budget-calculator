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
document.addEventListener('DOMContentLoaded', function () {

    // Get the calculate budget button and add a click event listener
    const calculateBudgetBtn = document.getElementById('calculate-budget-btn');
    calculateBudgetBtn.addEventListener('click', calculateBudget);

    // Calculate the budget and display it on the page
    function calculateBudget() {
        // Make the income input mandatory
        const income = document.getElementById('income').value;
        if (!income) {
            alert('Please enter your income');
            return;
        }
        const expenseInputs = document.querySelectorAll('.expense-item input[type="number"]');
        const currency = document.getElementById('currency').value;
        let totalExpenses = 0;
        for (let i = 0; i < expenseInputs.length; i++) {
            // Make the expense input mandatory
            if (!expenseInputs[i].value) {
                alert('Please enter a valid amount for all expenses');
                return;
            }
            totalExpenses += parseInt(expenseInputs[i].value);
        }
        // Make at least one expense mandatory
        if (expenseInputs.length === 0) {
            alert('Please enter at least one expense');
            return;
        }
        const budget = income - totalExpenses;
        document.getElementById('budget').innerHTML = `Budget: ${budget} ${currency}s`;
    }


    // Get the add expense button and add a click event listener
    const addExpenseBtn = document.getElementById('add-expense-btn');
    addExpenseBtn.addEventListener('click', addExpense);

    // Add a new expense item to the expense container
    function addExpense() {
        const expenseContainer = document.getElementById('expense-container');
        const newExpenseItem = document.createElement('div');
        newExpenseItem.classList.add('expense-item');
        // Set the inner HTML of the new expense item
        newExpenseItem.innerHTML = `
    <input type="text" placeholder="Expense name">
    <input type="number" placeholder="Expense amount">
    <button type="button" class="remove-expense-btn">Remove</button>`;
        // Add a click event listener to the remove button
        newExpenseItem.querySelector('.remove-expense-btn').addEventListener('click', removeExpense);
        // Append the new expense item to the expense container
        expenseContainer.appendChild(newExpenseItem);
    }

    // Remove an expense item
    function removeExpense(event) {
        const expenseItem = event.target.parentElement;
        expenseItem.remove();
    }
    
    // Add a click event listener to the reset form button
    const resetFormBtn = document.getElementById('reset-form-btn');
    resetFormBtn.addEventListener('click', resetForm);
    
    // Reset the form, set the currency back to default (Euro)
    function resetForm() {
        document.getElementById('income').value = '';
        document.getElementById('currency').value = 'Euro';
        // Clear inputs of all expenses
        const expenseInputs = document.querySelectorAll('.expense-item input[type="text"], .expense-item input[type="number"]');
        for (let i = 0; i < expenseInputs.length; i++) {
            expenseInputs[i].value = '';
        }
        // Remove added expense containers
        const expenseContainer = document.getElementById('expense-container');
        while (expenseContainer.firstChild) {
            expenseContainer.removeChild(expenseContainer.firstChild);
        }
        //Clear the budget and add new and empty expense item
        document.getElementById('budget').innerHTML = '';
        addExpense();
    }


});