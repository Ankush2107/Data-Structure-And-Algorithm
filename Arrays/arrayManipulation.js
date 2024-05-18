// Find the unique number in a given array where all the element are being repeated twice with one value being unique.
// arr = [1, 2, 3, 4, 2, 1, 3]

function findUniqueNumber(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr[i] = -1;
                arr[j] = -1;
            }
        }
    }

    let res = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            res = arr[i]
        }
    }
    return res;
};

let arr = [1, 2, 3, 4, 4, 5, 2, 1, 3];
let ans = findUniqueNumber(arr);
console.log(ans);