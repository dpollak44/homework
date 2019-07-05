// SL - -25 - you were supposed to implement map like we did foreach, every, some, etc.. not use the built in one
// Not sure how you could have assumed otherwise given the wording of the test and the discussion as we went over it
// SL - comment - I get 1 warning in jshint with my settings
(function () {
    'use strict';

    const nums = [2, 4, 6];

    // SL - comment - would be a nice candidate for an arrow function
    function doubleValue(num) {
        return num * 2;
    }

    const newNums = nums.map(doubleValue);

    console.log(nums);
    console.log(newNums);
}());

////////////////

// SL - 5 - nice but its supposed to be in app, not top level scope.
const counter = (function () {
    'use strict';

    let count = 0;

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return {
        increment: increment,
        getCount: getCount
    };

}());








