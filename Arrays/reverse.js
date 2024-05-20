// Reverse an array consisting of integers value.

function reverseArray(...arr) {
    let result = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
};

let ans = reverseArray(1, 2, 3, 4, 5);
console.log(...ans);