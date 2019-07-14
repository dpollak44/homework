

// let numCounters = 0;


const createCounters = (function () {
    'use strict';

    return function () {
        let count = 0;
        function increment() {
            count++;
        }
        function getCount() {
            return count;
        }
    };

}());


    // let count = 0;

    // numCounters++;

    // return {


    //     // numCounters: numCounters,
    //     // create: function(){
    //     let count = 0;

    //     return{

    //     increment: function increment() {
    //         count++;
    //     },

    //     getCount: function getCount() {
    //         return count;
    //     };

    // }

// }());




