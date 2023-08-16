function getInputValueById(inputId) {
    const depositValue = document.getElementById(inputId);
    const depositValuestring = depositValue.value;
    const depositFildValue = parseFloat(depositValuestring);
    depositValue.value = '';
    return depositFildValue;
}

function getElementValueById(elementId) {
    const previousDepositValue = document.getElementById(elementId);
    const previousDepositValueString = previousDepositValue.innerText;
    const previousDepositValueFloat = parseFloat(previousDepositValueString);

    return previousDepositValueFloat;
}

function setTextElementValuById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}