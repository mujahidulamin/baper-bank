//step 1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);

    // step 7: clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please enter a valid amount');
        return;
    }

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
    const newTotalBalance = newDepositAmount + currentTotalBalance;
    // set the deposit total
    previousTotalBalance.innerText = newTotalBalance;
}) 

/* document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please enter a valid amount');
        return;
    }

    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositTotalString = previousDeposit.innerText;
    const previousTotalDeposit = parseFloat(previousDepositTotalString);

    const newTotalDeposit = previousTotalDeposit + newDepositAmount;
    previousDeposit.innerText = newTotalDeposit;


    const previousTotal = document.getElementById('total-balance');
    const previousTotalBalanceString = previousTotal.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const newTotalBalance = previousTotalBalance + newDepositAmount;
    previousTotal.innerText = newTotalBalance;
});  */
