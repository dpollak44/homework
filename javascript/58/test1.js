// SL - -5 - also good but not in app
// SL - comment - I get 2 warnings in jshint with my settings

const createCounter = function () {
    'use strict';

    return {
        count: 0,

        increment: function increment() {
            this.count++;
        },

        getCount: function getCount() {
            return this.count;
        }
    };
}





