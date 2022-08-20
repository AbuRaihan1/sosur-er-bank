let depositButton = document.getElementById("deposit_button");

depositButton.addEventListener("click", function () {
  let newgetInputValueValue = getInputValue("deposit_input");
  let previousDepositValue = depositElement("deposit_money");
  if (isNaN(newgetInputValueValue)) {
    alert("enter valid number");
    return;
  }
  let currentDepositValueFinal = newgetInputValueValue + previousDepositValue;
  let setFinalValueInDeposit = setDepositValue(
    "deposit_money",
    currentDepositValueFinal
  );

  // add deposite money, in main balance

  let previousBalanceTotal = depositElement("main_balance");
  let currentBalanceFinal = previousBalanceTotal + newgetInputValueValue;
  let setCurrentBalanceFinal = setDepositValue(
    "main_balance",
    currentBalanceFinal
  );
});
