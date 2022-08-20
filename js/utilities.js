function getInputValue(getInputId) {
  let getInput = document.getElementById(getInputId);
  let getInputString = getInput.value;
  let inputValue = parseFloat(getInputString);
  getInput.value = "";
  return inputValue;
}

function depositElement(depositElementId) {
  let getDepositELement = document.getElementById(depositElementId);
  let getDepositELementString = getDepositELement.innerText;
  let getDepositELementValue = parseFloat(getDepositELementString);
  return getDepositELementValue;
}

function setDepositValue(elementWhereItWillBePush, valueWhichWillBePush) {
  let previousValueWillBeChanged = document.getElementById(
    elementWhereItWillBePush
  );
  previousValueWillBeChanged.innerText = valueWhichWillBePush;
}
