//step-1: add event listener with withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:  get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    //step: clear the deposit field
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid amount');
        return;
    }
    //step-3: get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

   

    //step-6:  get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalancetotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetotalString);

     

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank a eto taka nai');
        return;
    }
     //step-4: add number to set the total deposit
     const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
     //step-5: set the withdraw total
     withdrawTotalElement.innerText = currentWithdrawTotal;
    
    //step-6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
   
})