(function () {
    'use strict';

    for (let i = 0; i < 10; i++) {
        counter.increment();
    }

    // const counter1 = numTimes.createCounters();
    // const counter2 = numTimes.createCounters();
    const counter1 = createCounters();
    const counter2 = createCounters();




    for (let i = 0; i < 5; i++) {
        counter1.increment();
    }

    for (let i = 0; i < 15; i++) {
        counter2.increment();
    }

    console.log(counter.getCount());
    console.log(counter1.getCount());
    console.log(counter2.getCount());
    console.log(counter1.numCounters);
    console.log(counter2.numCounters);
    console.log(counter1.numCounters);

}());