window.myApp = window.myApp || {};

window.myApp.dayUtils = (function (dayUtils) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    dayUtils.getDayName = index => days[index - 1];

    dayUtils.getDayIndex = function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }

        return {
            getDayName: dayUtils.getDayName,
            getDayIndex: dayUtils.getDayIndex
        };



    };


}(window.myApp.dayUtils || {}));