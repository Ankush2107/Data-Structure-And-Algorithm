# Data Structure And Algorithm

### Time and Space Complexity

Time Complexity != time taken by a particular program to run 

Every platform and device takes a different amount of time to execute and complete different tasks. So, time complexity is not about the time taken by a program to run.

### Then, What is Time Complexity ? 

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

```

The time complexity of this function is O(n), where 'n' is the size of the array. As the size of the array increases, the number of iterations in the loop also increases linearly.

### But, What is O(n) ?
It is Big O notation, O(n) represents the time complexity of an algorithm that grows linearly with the size of the input. Here, 'n' represents the size of the input, such as the number of elements in an array.

### What is Notation ?
Notation means using symbols or characters to show ideas or information in a simple and standard way. In math and computer science, it helps express complicated ideas clearly and without confusion.

Big O notation uses the letter "O" followed by a mathematical expression, typically involving the variable "n" to represent the size of the input. For example, O(n) represents linear time complexity, O(n^2) represents quadratic time complexity, and so on.


#### Why understanding worst case scenario is crucial (Big O notation) ?
Big O notation, specifically focusing on the worst-case scenario, is crucial for several reasons:

1. Predictive Analysis: It helps predict how an algorithm will perform as the size of the input grows to infinity. Understanding the worst-case scenario allows developers to anticipate potential performance issues and plan accordingly.

2. Algorithm Comparison: Big O notation allows for easy comparison between different algorithms solving the same problem. By analyzing their worst-case complexities, developers can choose the most efficient algorithm for a given task.

3. Optimization: Recognizing the worst-case scenario prompts developers to optimize algorithms to perform better in those situations. This optimization can lead to more efficient code and better overall performance.

4. Resource Management: In addition to time complexity, Big O notation can also represent space complexity. Understanding how an algorithm consumes resources, such as memory or processing power, is essential for efficient resource management in applications and systems.

### Common Complexities

#### 1. O(1): Constant
`O(1) represents constant time complexity in Big O notation. This means that regardless of the size of the input, the algorithm will always take the same amount of time to execute. In other words, the runtime of the algorithm does not depend on the size of the input.`

```
    function totalSum(arr) {
        console.log("Hello world")
    }
    let arr = [1, 2, 3, 4, 5, 6]
    totalSum(arr)
```
![constant graph](./constant.png)

#### 2. O(n): Linear
`O(n) represents linear time complexity in Big O notation. This means that the runtime of the algorithm grows linearly with the size of the input. As the size of the input increases, the time taken by the algorithm to execute also increases proportionally.`

```
    // Function to find the maximum element in an array (linear search)
    function findMax(arr) {
        let max = arr[0]; // Initialize max to the first element of the array
        
        // Iterate through each element of the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // If the current element is greater than the current maximum, update max
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        
        return max; // Return the maximum element
    }

```
![linear graph](./linear.png)


#### 3. O(n^2): Quadratic
`O(n^2) represents quadratic time complexity in Big O notation. This means that the runtime of the algorithm grows quadratically with the size of the input. As the size of the input increases, the time taken by the algorithm to execute increases exponentially.`

`An example of an algorithm with O(n^2) complexity is the nested loop structure, where each iteration of an outer loop triggers another loop to iterate over the entire input. This results in a quadratic relationship between the input size and the time taken to execute`

```
    // Function to perform bubble sort on an array
    function bubbleSort(arr) {
        const n = arr.length;
        
        // Outer loop for each element in the array
        for (let i = 0; i < n; i++) {
            // Inner loop to compare and swap adjacent elements
            for (let j = 0; j < n - 1; j++) {
                // Swap if the current element is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    // Swap elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        
        return arr;
    }

```
![Quadratic graph](./q.png)


4. O(logn): Logarithmic
`O(log n), pronounced as "O log n," represents logarithmic time complexity in Big O notation. This means that the runtime of the algorithm grows logarithmically with the size of the input. As the size of the input increases, the time taken by the algorithm to execute increases at a much slower rate compared to linear or quadratic growth.`

```
    // Function to perform binary search on a sorted array
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            // If the target is found at the middle index, return its index
            if (arr[mid] === target) {
                return mid;
            }
            
            // If the target is greater than the middle element, search the right half
            if (arr[mid] < target) {
                left = mid + 1;
            }
            // If the target is smaller than the middle element, search the left half
            else {
                right = mid - 1;
            }
        }
        
        // If the target is not found, return -1
        return -1;
    }
```
![Logarithmic graph](./logarithmic.png)


5. O(nlogn): `O(n log n) represents a time complexity that combines both linear and logarithmic growth rates. This complexity is common in more efficient sorting algorithms, such as merge sort and quicksort, as well as in some other divide-and-conquer algorithms. The reason for the O(n log n) complexity often stems from the algorithm performing a logarithmic number of divisions or merges and performing a linear amount of work at each level of recursion or iteration.` 

```
    // Function to merge two sorted arrays
    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        // Compare elements from both arrays and merge them in sorted order
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Concatenate remaining elements
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    // Function to perform merge sort
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, middle));
        const right = mergeSort(arr.slice(middle));

        return merge(left, right);
    }

    // Example usage
    const numbers = [3, 7, 2, 9, 5];
    console.log("Sorted array:", mergeSort(numbers)); // Output: Sorted array: [2, 3, 5, 7, 9]

```