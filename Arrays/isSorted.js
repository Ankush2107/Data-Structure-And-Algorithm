function isSorted(arr) {
    let check = true
    for (let i = 1; i <= arr.length; i++) {
        if(arr[i] < arr[i-1])
            check = false;
    };
    return check;
};

let nums = [1, 2, 4, 7, 9];
let ans = isSorted(nums);

console.log(ans);