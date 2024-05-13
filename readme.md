# Data Structure And Algorithm

### Time and Space Complexity

Time Complexity != time taken by a particular program to run 

Every platform and device takes a different amount of time to execute and complete different tasks. So, time complexity is not about the time taken by a program to run.

Then, What is Time Complexity ? 

- Time complexity is a concept in computer science that tells us how much time or resources an algorithm needs to solve a problem, based on the size of the input. It helps us understand how the runtime of an algorithm changes as we give it more data to work with, which means it shows how the number of operations performed by the algorithm increases as the input size grows.

For example: 
```
    // Function to find the sum of all elements in an array using a simple loop
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // Example usage
    const arr1 = [1, 2, 3, 4, 5];
    console.log("Sum of arr1:", sumArray(arr1)); // Output: Sum of arr1: 15

    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Sum of arr2:", sumArray(arr2)); // Output: Sum of arr2: 55
```

The time complexity of this function is O(n), where 'n' is the size of the array. As the size of the array increases, the number of iterations in the loop also increases linearly.