

document.getElementById('withdraw').addEventListener('click', function () {

    const previousWithdraw = getElementValueById('withdrawId');

    const newWithdraw = getInputValueById('withdrawValue');

    const totalWithdraw = previousWithdraw + newWithdraw;

    setTextElementValuById('withdrawId', totalWithdraw);

    const afterwithdrawBalance = getElementValueById('balanceId');

    const afterwithdrawBalanceTotal = afterwithdrawBalance - newWithdraw;

    setTextElementValuById('balanceId', afterwithdrawBalanceTotal);

})

