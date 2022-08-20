// withdrawal system.

let withDrawButton = document.getElementById("withdraw_button");
withDrawButton.addEventListener("click", function () {
  let getWithDrawInputValue = getInputValue("withdraw_input");
  let previousWithdraw = depositElement("withdraw_money");
  if (isNaN(getWithDrawInputValue)) {
    alert("enter valid number");
    return;
  }
  let currentWithDraw = getWithDrawInputValue + previousWithdraw;
  let setCurrentWithdraw = setDepositValue("withdraw_money", currentWithDraw);

  // main balance system
  let previousMainBalance = depositElement("main_balance");
  let MainBalanceWith_Withdraw = previousMainBalance - getWithDrawInputValue;
  let setMainBalanceWithdraw = setDepositValue(
    "main_balance",
    MainBalanceWith_Withdraw
  );
});
