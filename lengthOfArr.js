//how to find length of string in javascript without using length method
//! Method 1: Using for of loop
/*
let array = [1, 5, 6, true, "string", ["subarray", 5], 6];
let length = 0;
for (let i of array) {
  length++;
}
console.log(length);
*/

//! Method 2: Using while loop
/*
let arr = [1, 5, 6, true, "string", ["subarray", 5], 6];
let length = 0;
while (arr[length] !== undefined) {
  length++;
}
console.log(length);
*/

//! Method 3:  Using reduce
let arr = [1, 5, 6, true, "string", ["subarray", 5], 6];
console.log([...arr].reduce((a) => a + 1, 0));
