


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





