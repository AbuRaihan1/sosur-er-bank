// // start bank statement deposit and withdraw
// // bank.html
// let depositMoney = document.getElementById("deposit_money");
// let withdrawMoney = document.getElementById("withdraw_money");
// let balance = document.getElementById("main_balance");
// let getInputValue = document.getElementById("deposit_input");
// let depositButton = document.getElementById("deposit_button");
// let withdrawInput = document.getElementById("withdraw_input");
// let withdrawButton = document.getElementById("withdraw_button");

// depositButton.addEventListener("click", function () {
//   // converting string to number.
//   let getInputValueString = getInputValue.value;
//   let maingetInputValue = parseFloat(getInputValueString);
//   let depositMoneyString = depositMoney.innerText;
//   let mainDepositMoney = parseFloat(depositMoneyString);

//   if (isNaN(maingetInputValue)) {
//     alert("Enter a valid Number");
//     return;
//   }
//   let currentDepositMoney = mainDepositMoney + maingetInputValue;
//   depositMoney.innerText = currentDepositMoney;

//   // deposit money adding main balance
//   let balanceString = balance.innerText;
//   let mainBalance = parseFloat(balanceString);
//   let currentMainBalance = mainBalance + maingetInputValue;
//   balance.innerText = currentMainBalance;
//   getInputValue.value = "";
// });

// withdrawButton.addEventListener("click", function () {
//   // converting string to number.
//   let withdrawInputString = withdrawInput.value;
//   let mainWithdrawInput = parseFloat(withdrawInputString);
//   let withdrawMoneyString = withdrawMoney.innerText;
//   let mainWithdrawMoney = parseFloat(withdrawMoneyString);
//   let balanceString = balance.innerText;
//   let mainBalance = parseFloat(balanceString);

//   if (mainBalance < mainWithdrawInput) {
//     alert("Opps!! Baap er bank a eto taka nai!!");
//     withdrawInput.value = "";
//     return;
//   }

//   if (isNaN(mainWithdrawInput)) {
//     alert("Enter a valid Number");
//     return;
//   }
//   let currentWithdrawMoney = mainWithdrawMoney + mainWithdrawInput;
//   withdrawMoney.innerText = currentWithdrawMoney;
//   let currentMainBalance = mainBalance - mainWithdrawInput;
//   balance.innerText = currentMainBalance;
//   withdrawInput.value = "";
// });

// same work doing with function




