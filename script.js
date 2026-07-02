const correctPin = "1234";
let balance = 5000;

const loginScreen = document.getElementById('loginScreen');
const mainScreen = document.getElementById('mainScreen');
const pinInput = document.getElementById('pinInput');
const loginMessage = document.getElementById('loginMessage');
const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const atmMessage = document.getElementById('atmMessage');

function checkPin() {
  if (pinInput.value === correctPin) {
    loginScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
    updateBalanceDisplay();
    loginMessage.textContent = '';
  } else {
    loginMessage.textContent = 'Incorrect PIN. Try again.';
  }
  pinInput.value = '';
}

function updateBalanceDisplay() {
  balanceDisplay.textContent = `₹${balance}`;
}

function deposit() {
  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    atmMessage.textContent = 'Enter a valid amount to deposit.';
    return;
  }

  balance += amount;
  updateBalanceDisplay();
  atmMessage.textContent = `₹${amount} deposited successfully.`;
  amountInput.value = '';
}

function withdraw() {
  const amount = Number(amountInput.value);

  if (!amount || amount <= 0) {
    atmMessage.textContent = 'Enter a valid amount to withdraw.';
    return;
  }

  if (amount > balance) {
    atmMessage.textContent = 'Insufficient balance.';
    return;
  }

  balance -= amount;
  updateBalanceDisplay();
  atmMessage.textContent = `₹${amount} withdrawn successfully.`;
  amountInput.value = '';
}

function checkBalance() {
  atmMessage.textContent = `Your current balance is ₹${balance}.`;
}

function logout() {
  mainScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
  atmMessage.textContent = '';
  amountInput.value = '';
}