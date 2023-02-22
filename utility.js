// function 1: to get data from input field
function getDataFromInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

// function 2: to set & update the value to a field
function updateTextData(inputFieldId, updateData){
    const inputField = document.getElementById(inputFieldId);
    inputField.innerText = updateData;
}
