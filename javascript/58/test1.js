// wrapping in function prevented from calling so commented out.
// const numTimes = (function () {
//     'use strict';

let numCounters = 0;


const createCounters = function () {
    'use strict';

    numCounters++;

    return {


        numCounters: numCounters,

        count: 0,

        increment: function increment() {
            this.count++;
        },

        getCount: function getCount() {
            return this.count;
        }




    };

};






// }());




