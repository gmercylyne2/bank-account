function BankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = intialDeposit;
}
BankAccount.prototype.deposit = function(cash) {
    this.balance = this.balance + cash;
}
BankAccount.prototype.withdrawal = function(cash) {
    this.balance = this.balance - cash;
}
BankAccount.prototype.balance = function() {
    return this.balance;
}
