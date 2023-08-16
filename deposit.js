



document.getElementById('deposite').addEventListener('click', function () {

    const newDepositAmount = getInputValueById('depositValue');

    const previousDepositValue = getElementValueById('depositId');

    const newDepositTotal = previousDepositValue + newDepositAmount;

    setTextElementValuById('depositId', newDepositTotal);

    const previousBalance = getElementValueById('balanceId');

    const totalBalance = previousBalance + newDepositAmount;

    setTextElementValuById('balanceId', totalBalance);

})