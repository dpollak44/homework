window.myApp = window.myApp || {};

window.myApp.dayUtils = (function (dayUtils) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDayIndex(day) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === day) {
                return i + 1;
            }
        }
        return -1;
    }

    dayUtils.getDayName = function (index) {
        return days[index - 1];
    };

    dayUtils.getDayIndex = getDayIndex;


    // dayUtils.getDayIndex = function (day) {
    //     for (let i = 0; i < days.length; i++) {
    //         if (days[i] === day) {
    //             return i + 1;
    //         }
    //     }
    //     return -1;
    // };







    return dayUtils;



}(window.myApp.dayUtils || {}));