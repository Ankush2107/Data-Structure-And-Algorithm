// Find the total number of pairs in the array whose sum is equal to the given value x.
// arr = [4, 6, 3, 5, 8, 2]
// target = 7, ans = 2 [4,3]

function targetSum(arr, target) {
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) 
                ans++;
        }
    }
    return ans;
};
let nums = [4, 6, 3, 5, 8, 2];
let target = 10;
let res = targetSum(nums, target);
console.log(res);
