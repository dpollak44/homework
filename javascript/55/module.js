const dayUtils = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



    return {
        getDayName: function getDayName(index) {
            return days[index - 1];
        },


        getDayNumber: function getDayNumber(name) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i + 1;
                }
            }

            return 'try again';
        }
    };
}());

console.log('dayUtils.getDayName(5)', dayUtils.getDayName(5));
console.log('dayUtils.getDayNumber("Monday")', dayUtils.getDayNumber("Monday"));


//////////////////////////////


const interestCalc = (function () {
    'use strict';

    function setIntRate(rate) {
        let intRate = rate;
        return intRate;
    }

    function setNumYears(years) {
        let NumYears = years;
        return NumYears;
    }

    return {
        setIntRate: setIntRate,
        setNumYears: setNumYears,
        calculateInterest: function (amount, rate, years) {
            return (amount * rate * years);
        }
    };

}());

console.log(interestCalc.calculateInterest(100, interestCalc.setIntRate(0.10), interestCalc.setNumYears(5)));