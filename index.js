
/* calculate button section stat here */

document.getElementById('calculate').addEventListener('click', function () {

    const totalIncome = document.getElementById('income').value;
    const foodCost = document.getElementById('food').value;
    const rentCost = document.getElementById('rent').value;
    const clothesCost = document.getElementById('clothes').value;
    const totalExpenses = document.getElementById('expense');
    const restBalance = document.getElementById('balance');

    /* error handling (if input section is null) */
    if (totalIncome == '' || foodCost == '' || rentCost == '' || clothesCost == '') {
        return alert('please fillup all the input field')
    }


    const total = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    totalExpenses.innerText = total;

    const balance = parseFloat(totalIncome) - total;
    restBalance.innerText = balance;

    /* error handling (negative number) */
    if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        return alert('please give a positive number')
    }
});

/* calculate button section ends here */

/* savings section added here */
document.getElementById('save-btn').addEventListener('click', function () {

    const totalIncome = document.getElementById('income').value;
    const parcentage = document.getElementById('parcentage').value;
    const restBalance = document.getElementById('balance').innerText;
    const savingAmount = document.getElementById('savings');
    const savingAfterBalance = document.getElementById('restBalance');


    const savings = (totalIncome * parcentage) / 100;

    savingAmount.innerText = savings;

    const monthlySave = restBalance - savings;
    savingAfterBalance.innerText = monthlySave;

    /* error handling (if savings > remaining balance) */
    if (savings > restBalance) {
        return alert('saving amount cannot large than remaining balance');
    }

});

/* savings section ends here */