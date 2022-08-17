/* 
    1. add event handler with withdraw button
    2. get the withdraw amount from the withdraw input field




    7. clear the withdraw input field
*/

// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(withdrawAmount);

       // step 7 
       withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please enter a valid amount');
        return;
    }

    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   


    // step 5

    const previousTotalBalance = document.getElementById('total-balance');
    const currentTotalBalanceString = previousTotalBalance.innerText;
    const currentTotalBalance = parseFloat(currentTotalBalanceString);

    

    if(withdrawAmount > currentTotalBalance){
        alert('You do not have enough balance to withdraw');
        return;
    }

     // step 4
     const currentWithdrawTotal = withdrawAmount + previousWithdrawTotal;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // step 6
    const newTotalBalance = currentTotalBalance - withdrawAmount ;
    previousTotalBalance.innerText = newTotalBalance;


})