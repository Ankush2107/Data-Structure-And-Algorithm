function findMax(arr) {
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
};

function findSecondMax(arr) {
    let max = findMax(arr);
    let secondMax = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i] 
        }
    }
    return secondMax === -Infinity ? null : secondMax // if there is no secondMax value exist.
}

let arr = [1, 8, 4, 11, 5];
// let ans = findMax(arr);
// console.log(ans);

let ans = findSecondMax(arr);
console.log(ans);