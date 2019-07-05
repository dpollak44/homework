// SL - comment - I get 6 warnings in jshint with my settings
'use strict'

for (let i = 0; i < 10; i++) {
    counter.increment();
}


const counter1 = createCounter();
const counter2 = createCounter();



for (let i = 0; i < 5; i++) {
    counter1.increment();
}

for (let i = 0; i < 15; i++) {
    counter2.increment();
}

console.log(counter.getCount());
console.log(counter1.getCount());
console.log(counter2.getCount());
