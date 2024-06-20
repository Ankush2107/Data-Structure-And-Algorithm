/*
Q.1 Palindrome Number
An Integer is a palindrome when it reads both forward and backword.
For example: Input: x = 121 Output is true, x = 10 Output is false
*/

const palindrome = (n) => {
    return n === +n.toString().split("").reverse().join("")
}
console.log(palindrome(121));

