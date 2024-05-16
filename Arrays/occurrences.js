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
let ans = countOccurrences(nums, x);
console.log(ans);