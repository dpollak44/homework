window.myApp = window.myApp || {};

window.myApp.dayUtils = (function (dayUtils) {
    'use strict';




    dayUtils.stringCaseInsensitiveEquals = (name1, name2) => { return name1.toUpperCase() === name2.toUpperCase(); };

    return {
        stringCaseInsensitiveEquals: dayUtils.stringCaseInsensitiveEquals

    };
}(window.myApp.dayUtils || {}));





