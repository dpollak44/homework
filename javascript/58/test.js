


(function () {
    'use strict';

    const nums = [2, 4, 6];

    function doubleValue(num) {
        return num * 2;
    }

    const newNums = nums.map(doubleValue);

    console.log(nums);
    console.log(newNums);
}());

////////////////

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








