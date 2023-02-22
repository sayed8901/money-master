// step 1: addEventListener to the calculate button
document.getElementById('btn-calculate').addEventListener('click', function(){
    const income = getDataFromInputFieldById('income');
    const foodCost = getDataFromInputFieldById('food');
    const rentCost = getDataFromInputFieldById('rent');
    const clothCost = getDataFromInputFieldById('cloth');

    const totalCost = foodCost + rentCost + clothCost;
    const balance = income - totalCost;

    console.log(typeof income, typeof foodCost, typeof rentCost, typeof clothCost, typeof totalCost, typeof balance);


    if(totalCost > income){
        alert('You do not have enough money!');
        const totalCost = foodCost + rentCost + clothCost;
        // update expenses amount
        updateTextData('total-cost', totalCost);

        const balance = 0;
        // update balance amount
        updateTextData('balance', balance)
    }
    else if(income<0 || foodCost<0 || rentCost<0 || clothCost<0){
        alert('please input valid amount!');
        if(foodCost < 0){
            const totalCost = rentCost + clothCost;
            // update expenses amount
            updateTextData('total-cost', totalCost);

            const balance = income - totalCost;
            // update balance amount
            updateTextData('balance', balance)
        }
        else if(rentCost < 0){
            const totalCost = foodCost + clothCost;
            // update expenses amount
            updateTextData('total-cost', totalCost);

            const balance = income - totalCost;
            // update balance amount
            updateTextData('balance', balance)
        }
        else if(clothCost < 0){
            const totalCost = foodCost + rentCost;
            // update expenses amount
            updateTextData('total-cost', totalCost);

            const balance = income - totalCost;
            // update balance amount
            updateTextData('balance', balance)
        }
    }
    else{
        const totalCost = foodCost + rentCost + clothCost;
        // update expenses amount
        updateTextData('total-cost', totalCost);

        const balance = income - totalCost;
        // update balance amount
        updateTextData('balance', balance)
    }
})


// step 6: addEventListener to the save button
document.getElementById('btn-save').addEventListener('click', function(){
    const income = getDataFromInputFieldById('income');
    const foodCost = getDataFromInputFieldById('food');
    const rentCost = getDataFromInputFieldById('rent');
    const clothCost = getDataFromInputFieldById('cloth');

    const totalCost = foodCost + rentCost + clothCost;
    const balance = income - totalCost;


    // get save percent amount
    const savePercent = getDataFromInputFieldById('save-percent');

    // calculate & update save amount based on income amount
    const saveAmount = income * savePercent / 100;
    updateTextData('save-amount', saveAmount);

    if(income < 0 || savePercent < 0){
        alert('You do not have enough income!!!');
        // updating saving amount
        const saveAmount = 0;
        updateTextData('save-amount', saveAmount);

        // calculate & update remaining balance amount
        const remainingBalance = 0;
        updateTextData('remaining-balance', remainingBalance);
    }
    else if(saveAmount > balance){
        alert('You do not have enough money left to save!!');
        // updating saving amount
        const saveAmount = 0;
        updateTextData('save-amount', saveAmount);

        // calculate & update remaining balance amount
        const remainingBalance = balance - saveAmount;
        updateTextData('remaining-balance', remainingBalance);
    }
    else if(savePercent > 100){
        alert('It is not possible to save more than 100%');
    }
    else{
        // calculate & update remaining balance amount
        const remainingBalance = balance - saveAmount;
        updateTextData('remaining-balance', remainingBalance);
    }
})

