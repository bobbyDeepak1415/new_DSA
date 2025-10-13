// Basics questions

// 1.count odd nums

// function display(high, low) {
//   let nums = 0;

//   for (let i = low; i <= high; i++) {
//  if(i%2!=0) nums++
//   }

//   return nums;
// }

// console.log(display(10, 8));

// -------------------------------------------------------------------------------

// 2.(FizzBuzz) Given an integer n, return a string array answer (1-indexed) where:

// function display(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i.toString());
//     }
//   }

//   return arr;
// }

// console.log(display(15));

// --------------------------------------------------------------------------------------

// 3.(Power of Two) Given an integer n, return true if it is a power of two. Otherwise, return false.

// function display(n) {

//     return n>0 && (n&(n-1))===0

// }

// console.log(display(63));

// --------------------------------------------------------------------------------------

// 4.SqrRt

// function display(num) {

//    return Math.floor(Math.sqrt(num))

// }

// console.log(display(16));

// -----------------------------------------------------------------------------------

// Array questions

// 1.Two sum

// const nums = [2, 7, 11, 15];

// function display(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(display(nums, 17));

// -------------------------------------------------------------------------------------

// 2.Majority Element(Given an array nums of size n, return the majority element

const nums = [2, 2, 2, 1, 1, 1, 2,5, 5, 5, 5, 5, 5];

