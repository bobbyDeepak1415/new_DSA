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

// 2.(FizzBuzz) Given an integer n, return a string array answer (1-indexed)

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

// console.log(display(26));

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

// const nums = [2, 2, 2, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5];

// function display(nums) {
//   let count = {};

//   let maxNum = nums[0];
//   let maxCount = 0;

//   for (let n of nums) {
//     count[n] = (count[n] || 0) + 1;

//     if (count[n] > maxCount) {
//       maxCount = count[n];
//       maxNum = n;
//     }
//   }

//   return maxNum;
// }

// console.log(display(nums));

// -----------------------------------------------------------------------------------

// 3.Find no of unique elements in a sorted array
// we do this by all the unique elements forward and then count them. For this the array need to be a sorted array

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// function display(nums) {
//   let k = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// console.log(display(nums));

// --------------------------------------------------------------------------------

// 4.squares of sorted array

// let nums = [-4, -1, 0, 3, 10];

// function display(nums){

//     for(let i=0;i<nums.length;i++){
//         nums[i]=nums[i]*nums[i]
//     }

//     return nums.sort((a,b)=>a-b)

// }

// console.log(display(nums));

// ---------------------------------------------------------------------------------

// 5.Find Pivot Index(sum of numbers left of index should be equal to sum on the right)

// let nums = [1, 7, 3, 6, 5, 6];

// function display(nums) {
//   let total = nums.reduce((acc, num) => acc + num, 0);
//   let leftSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let rightSum = total - leftSum - nums[i];
//     if (rightSum === leftSum) {
//       return i;
//     }

//     leftSum += nums[i];
//   }

//   return -1;
// }

// console.log(display(nums));

// --------------------------------------------------------------------------------------

// 6.move all zeroes in an array to right end

// let nums = [0, 1, 0, 3, 12];

// function display(nums) {

//     let k=0

//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!==0){
//             nums[k]=nums[i]
//             k++
//         }

//     }

//     for(let i=k;i<nums.length;i++){
//         nums[i]=0
//     }

//     return nums

// }

// console.log(display(nums));

// ------------------------------------------------------------------------------------

// 7.remove element and then give the no of the non-value elements in the array

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];

// function display(nums, value) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== value) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

// console.log(display(nums, 2));

// ----------------------------------------------------------------------------------

// 8.Max Consecutive Ones

// let nums = [1,1,0,1,1,1];
// function display(nums) {

//     let result=[...nums].join("").split("0").map(x=>x.length)
//     return Math.max(...result)
// }

// console.log(display(nums));

// let nums = [1, 0, 1, 1, 0, 1];
// function display(nums) {
//   let count = 0;
//   let maxCount = 0;

//  for(let i=0;i<nums.length;i++){
//     if(nums[i]===1){
//         count++
//         if(count>maxCount){
//             maxCount=count
//         }
//     }else{
//         count=0
//     }
//  }

//  return maxCount

// }

// console.log(display(nums));

// -----------------------------------------------------------------------------------

// 9.find all prime numbers from 1 to n

// function display(n) {
//     let arr = [];

//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;

//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) arr.push(i);
//     }

//     return arr;
// }

// console.log(display(15));

// -----------------------------------------------------------------------------------

function display() {

    let arr=[]

    for(let i=97;i<=122;i++){
        arr.push(String.fromCharCode(i))
    }

    return arr
}

console.log(display());

// -----------------------------------------------------------------------------------
