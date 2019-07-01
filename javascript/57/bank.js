(function () {

    'use strict';

    const checkingAct = {
        balance: 100.50
    };

    const savingsAct = {
        balance: 200.50
    };

    function transaction(amount) {
        this.balance += amount;
    }

    transaction.call(checkingAct, 100);
    transaction.apply(checkingAct, 105);
    const bigFatCheck = transaction.bind(checkingAct, 10000);

    transaction.call(savingsAct, 100);
    transaction.apply(savingsAct, -105);
    const bigFatLoss = transaction.bind(savingsAct);
    bigFatLoss(-5000);

}());