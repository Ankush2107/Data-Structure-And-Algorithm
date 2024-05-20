/*
* Given an array of 'a' consisting of integers. Return the first value that is repeating in this array, if no value is being repeated, return -1.
* arr = [1, 5, 3, 4, 6, 3, 4]
* ans = 3
*/

function returnFirstRepeatingElement(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

let arr = [1, 5, 3, 4, 6, 3, 4];
let ans = returnFirstRepeatingElement(arr);
console.log("First repeating number:", ans);