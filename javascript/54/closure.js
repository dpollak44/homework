
'use strict';

// function ourFilter(theArray, callback) {
//     const results = [];

//     for (let i = 0; i < theArray.length; i++) {
//         if (callback(theArray[i])) {
//             results.push(theArray[i]);
//         }
//     }

//     return results;
// }

// const mixed = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log('ourFilter(mixed, number => number % 2 !== 0)', ourFilter(mixed, number => number % 2 !== 0));

// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log('ourFilter(mixed, isEven)', ourFilter(mixed, isEven));
// console.log('ourFilter(mixed, number => !isEven(number))', ourFilter(mixed, number => !isEven(number)));




function ourEvery(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i]) != true) {
            return false;
        }
    }
    return true;
}

function uppercase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}


let lowerLetters = ['a', 'b', 'c'];
let upperLetters = ['A', 'B', 'C'];

console.log('ourEvery(upperLetters,uppercase)', ourEvery(upperLetters, uppercase));
console.log('ourEvery(lowerLetters,uppercase)', ourEvery(lowerLetters, uppercase));


function ourSome(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i]) === true) {
            return true;
        }
    }
    return false;
}

function uppercase(letter) {
    if (letter === letter.toUpperCase()) {
        return true;
    }
    return false;
}

let mixedLetters = ['a', 'B', 'c']


console.log('ourSome(lowerLetters,uppercase)', ourSome(lowerLetters, uppercase));
console.log('ourSome(upperLetters,uppercase)', ourSome(upperLetters, uppercase));
console.log('ourSome(mixedLetters,uppercase)', ourSome(mixedLetters, uppercase));



function lowercase(letter) {
    letter = letter.toLowerCase();
    return letter;
}

function ifOnly(theArray, test, action) {
    let newArray = [];
    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i]) === true) {
            newArray[i] = action(theArray[i]);
        }
        else {
            newArray[i] = theArray[i];
        }
    }
    return newArray;

}





console.log('ifOnly(upperLetters,uppercase,lowercase)', ifOnly(upperLetters, uppercase, lowercase));

function ifOnly2(theArray, callback, action) {
    theArray.forEach(element => {
        element.filter(callback);
        action(element);
    });




}

console.log('ifOnly2(mixedLetters,uppercase)', ifOnly2(mixedLetters, uppercase, letter => letter = letter.toLowerCase));