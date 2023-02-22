// step 1: addEventListener to the calculate button
document.getElementById('btn-calculate').addEventListener('click', function(){
    // step 2: get income amount
    const income = getDataFromInputFieldById('income');

    // step 3.1: get food expenses
    const foodCost = getDataFromInputFieldById('food');

    // step 3.2: get food expenses
    const rentCost = getDataFromInputFieldById('rent');

    // step 3.3: get food expenses
    const clothCost = getDataFromInputFieldById('cloth');

    // step 4: calculate & update total expenses
    const totalCost = foodCost + rentCost + clothCost;
    updateTextData('total-cost', totalCost);

    // step 5: calculate & update balance after totalCost
    const balance = income - totalCost;
    updateTextData('balance', balance)
})


// step 6: addEventListener to the save button
document.getElementById('btn-save').addEventListener('click', function(){
    // step 2: get income amount
    const income = getDataFromInputFieldById('income');

    // step 3.1: get food expenses
    const foodCost = getDataFromInputFieldById('food');

    // step 3.2: get food expenses
    const rentCost = getDataFromInputFieldById('rent');

    // step 3.3: get food expenses
    const clothCost = getDataFromInputFieldById('cloth');

    // step 4: calculate & update total expenses
    const totalCost = foodCost + rentCost + clothCost;

    // step 5: calculate & update balance after totalCost
    const balance = income - totalCost;

    // step 7.1: get save percent amount
    const savePercent = getDataFromInputFieldById('save-percent');

    // step 7.2: calculate save amount based on income amount
    const saveAmount = income * savePercent / 100;

    // step 7.3: update save amount
    updateTextData('save-amount', saveAmount);

    // step 8.1: calculate & update remaining balance amount
    const remainingBalance = balance - saveAmount;
    updateTextData('remaining-balance', saveAmount);
})