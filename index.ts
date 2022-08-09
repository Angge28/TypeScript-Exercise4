export const moveZeros = (array: any[]) => { // array will contain multiple types (number, string, boolean, others)
    
    let nonZero: any[] = []; // array of values not equal to zero; any type
    let zero: number[] = []; // array of zeros; number type

    for (let x = 0; x < array.length; x++) { // loop from index 0 to array.length - 1
        if (array[x] === 0) {
            zero.push(array[x]); // add all zeros to the 1st array
        } else {
            nonZero.push(array[x]) // add all non-zeros to the 2nd array
        }
    }
    array = nonZero.concat(zero); // merge the arrays

    console.log(array); // print all elements in the array
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // pass an array as argument and call out the function
