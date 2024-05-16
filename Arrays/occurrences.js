// Count the number of occurrences of an element in the array.

function countOccurrences(arr, x) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) 
            count++;
    }
    return count;
};

let nums = [1, 2, 1, 5, 9, 1];
let x = 1;
// let ans = countOccurrences(nums, x);
// console.log(ans);


// Last occurrence of the element

function lastOccurrence(arr, x) {
    let lastIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == x)
            lastIndex = i;
    }
    return lastIndex;
};

let number = [1, 3, 1, 2, 1, 5];
let a = 5;

let res = lastOccurrence(number, a);
console.log(res);

// strictly greater