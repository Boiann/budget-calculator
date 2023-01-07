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
        const incomeInputs = document.querySelectorAll('.income-item input[type="number"]');
        let totalIncomes = 0;
        for (let i = 0; i < incomeInputs.length; i++) {
            // Make the expense input mandatory
            if (incomeInputs[i].value <=0) {
                alert('Please enter a valid amount for all income, do not use negative numbers');
                return;
            }
            totalIncomes += parseInt(incomeInputs[i].value);
        }
        const expenseInputs = document.querySelectorAll('.expense-item input[type="number"]');
        let totalExpenses = 0;
        for (let i = 0; i < expenseInputs.length; i++) {
            // Make the expense input mandatory
            if (expenseInputs[i].value <=0) {
                alert('Please enter a valid amount for all expenses, do not use negative numbers');
                return;
            }
            totalExpenses += parseInt(expenseInputs[i].value);
        }
        const currency = document.getElementById('currency').value;
        const budget = totalIncomes - totalExpenses;
        document.getElementById('budget').innerHTML = `Budget: ${budget} ${currency}s`;
        document.getElementById('total-expenses').innerHTML = `Total expenses: ${totalExpenses} ${currency}s`;
        document.getElementById('total-income').innerHTML = `Total income: ${totalIncomes} ${currency}s`;
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

    // Get the add income button and add a click event listener
    const addIncomeBtn = document.getElementById('add-income-btn');
    addIncomeBtn.addEventListener('click', addIncome);
    
    // Add a new income item to the income container
    function addIncome() {
        const incomeContainer = document.getElementById('income-container');
        const newIncomeItem = document.createElement('div');
        newIncomeItem.classList.add('income-item');
        // Set the inner HTML of the new income item
        newIncomeItem.innerHTML = `
          <input type="text" placeholder="Income name" required>
          <input type="number" placeholder="Income amount" class="income" required>
          <button type="button" class="remove-income-btn">Remove</button>
        `;
        // Add a click event listener to the remove button
        newIncomeItem.querySelector('.remove-income-btn').addEventListener('click', removeIncome);
        // Append the new income item to the income container
        incomeContainer.appendChild(newIncomeItem);
    }
    
    // Remove an income item
    function removeIncome(event) {
        const incomeItem = event.target.parentElement;
        incomeItem.remove();
    }

    // Add a click event listener to the reset form button
    const resetFormBtn = document.getElementById('reset-form-btn');
    resetFormBtn.addEventListener('click', resetForm);

    // Reset the form, set the currency back to default (Euro)
    function resetForm() {
        document.querySelector('#total-income').textContent = '';
        document.getElementById('currency').value = 'Euro';
        document.querySelector('#total-expenses').textContent = '';
        // Clear inputs of all income
        const incomeInputs = document.querySelectorAll('.income-item input[type="text"], .income-item input[type="number"]');
        for (let i = 0; i < incomeInputs.length; i++) {
            incomeInputs[i].value = '';
        }
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
        // Remove added income containers
        const incomeContainer = document.getElementById('income-container');
        while (incomeContainer.firstChild) {
            incomeContainer.removeChild(incomeContainer.firstChild);    
        }
        //Clear the budget and add new and empty expense/income item
        document.getElementById('budget').innerHTML = '';
        addExpense();
        addIncome();
    }

    // Prevent the user to accidentally input the letter 'e' as the income/expense value
    document.getElementById('income').addEventListener('keydown', function (event) {
        if (event.key === 'e') {
            event.preventDefault();
        }
    });

    document.getElementById('expense').addEventListener('keydown', function (event) {
        if (event.key === 'e') {
            event.preventDefault();
        }
    });


});