"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = void 0;
const moveZeros = (array) => {
    let nonZero = []; // array of values not equal to zero; any type
    let zero = []; // array of zeros; number type
    for (let x = 0; x < array.length; x++) { // loop from index 0 to array.length - 1
        if (array[x] === 0) {
            zero.push(array[x]); // add all zeros to the 1st array
        }
        else {
            nonZero.push(array[x]); // add all non-zeros to the 2nd array
        }
    }
    array = nonZero.concat(zero); // merge the arrays
    console.log(array); // print all elements in the array
};
exports.moveZeros = moveZeros;
//moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
(0, exports.moveZeros)([1, false, 0, 0, 4, 0, 0, 3, 2]);
