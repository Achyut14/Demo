function createAccount(pin, amount) {
    let accountPin = pin;
    let balance = amount;

    return {
        checkBalance: function(inputPin) {
            if (inputPin === accountPin) {
                return `The balance is $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit: function(inputPin, depositAmount) {
            if (inputPin === accountPin) {
                balance += depositAmount;
                return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw: function(inputPin, withdrawAmount) {
            if (inputPin === accountPin) {
                if (withdrawAmount <= balance) {
                    balance -= withdrawAmount;
                    return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            } else {
                return "Invalid PIN.";
            }
        },
        changePin: function(inputPin, newPin) {
            if (inputPin === accountPin) {
                accountPin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";
            }
        }
    };
}

module.exports = { createAccount };