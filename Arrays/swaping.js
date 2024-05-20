// Given 2 integer 1 and b. Swap the two given values using temporary variables.

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log(a);
    console.log(b);
}

swap(10, 12);

