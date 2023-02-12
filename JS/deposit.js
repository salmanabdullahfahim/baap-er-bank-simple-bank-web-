// step1 : add click event listener with the Deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2: get the deposit amount from deposit field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString)
   //step-3: get the current deposit total
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
   const  previousDepositTotal = parseFloat(previousDepositTotalString);
   
   //step-4: add numbers to set the total deposit
   const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total 
   depositTotalElement.innerText = currentDepositTotal;

   //step-5:  get ballance current total
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalancetotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalancetotalString);

   //step-6: calculate total balance
   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   // set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;
   //step: clear the deposit field
   depositField.value = '';
})