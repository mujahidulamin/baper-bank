//step 1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    // step 3: get the current deposit total
    //for non input (element other than input, textarea) use innerText to get the text.
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get the balance current total
    const previousTotalBalance = document.getElementById('total-balance');
    const currentTotalBalanceString = previousTotalBalance.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);
    // step:6 calculate current total balance
    const newTotalBalance = currentDepositTotal + currentTotalBalance;
    // set the deposit total
    previousTotalBalance.innerText = newTotalBalance;

    // step 7: clear the deposit field
    depositField.value = '';

})