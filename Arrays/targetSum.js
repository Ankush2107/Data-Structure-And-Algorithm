// Find the total number of pairs in the array whose sum is equal to the given value x.
// arr = [4, 6, 3, 5, 8, 2]
// target = 7, ans = 2 [4,3], [8, 2]

function targetSum(arr, target) {
    let ans = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) 
                ans.push(arr[i], arr[j]);
        }
    }
    return ans;
};
let nums = [4, 6, 3, 5, 8, 2];
let target = 10;
// let res = targetSum(nums, target);
// console.log(res);


// Count the number of triplets whose sum is equal to the given value x.
// arr = [1, 4, 5, 6, 3] 
// target = 12, ans = 2 [1, 5, 6], [4, 5, 3]

function triplet(arr, target) {
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === target) {
                    ans++;
                }
            }
        }
    }
    return ans;
}