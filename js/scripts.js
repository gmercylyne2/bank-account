function BankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
}
BankAccount.prototype.deposit = function(cash) {
    this.balance = this.balance + cash;
}
BankAccount.prototype.withdraw = function(cash) {
    this.balance = this.balance - cash;
}
BankAccount.prototype.checkBalance = function() {
    return this.balance;
}


$(document).ready(function() {
    var accounts = []; // Array to hold BankAccount objects

    // When the register button is clicked
    $('form#new-account').submit(function(event) {
        event.preventDefault();
        // Get the input from the name field and assign it to a variable
        var name = $('input#name').val();
        // Get the input from the initial deposit field, parse it to an integer, and assign it to a variable.
        var initialDeposit = parseInt($('input#initialDeposit').val());

        // use the details from the form to create a new BankAccount object using the BankAccount constructor
        var account = new BankAccount(name, initialDeposit);

        // insert the new object to the account array
        accounts.push(account);
        $("ul#accounts").append('<li><span class="account">' + account.name + "</span></li>");

        $('span.account').click(function() {
            $('#account-actions').show();
            var name = $(this).text();
            accounts.forEach(function(account) {
                if (account.name === name) {
                    $('#account-name').text(account.name);
                    $('#current-balance').text(account.checkBalance());
                }
            });

            $('form#deposits').submit(function(event) {
                event.preventDefault();

                var cash = parseInt($('input#deposit').val());

                var name = $('#account-name').text();
                accounts.forEach(function(account) {
                    if (account.name === name) {
                        account.deposit(cash);
                        $('#current-balance').text(account.checkBalance());
                    }
                });
                $('input#deposit').val("");
            });

            $('form#withdrawals').submit(function(event) {
                event.preventDefault();

                var cash = parseInt($('input#withdraw').val());

                var name = $('#account-name').text();
                accounts.forEach(function(account) {
                    if (account.name === name) {
                        account.withdraw(cash);
                        $('#current-balance').text(account.checkBalance());
                    }
                });
                $('input#withdraw').val("");
            });

        });
        //
        // $('#current-balance').text(accounts[0].checkBalance());
        $('input#name').val("");
        $('input#initialDeposit').val("");
    });
});
