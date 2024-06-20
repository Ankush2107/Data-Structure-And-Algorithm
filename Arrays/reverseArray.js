function reverseArray(arr) {
    let ans = [];
    let i = arr.length - 1;
    let j = 0;
    while(i >= 0) {
        ans[j] = arr[i];
        j++;
        i--;
    }
    return ans;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));