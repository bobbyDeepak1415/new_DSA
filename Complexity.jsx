// 1. O(n)

// function display(nums){
//     let sum=0
//     for(let i=0;i<nums.length;i++){
// sum+=i
//     }

//     return sum
// }

// --------------------------------------------------------------------------

// 2.O(n^2)

// function display(nums){
//     let sum=0
//     for(let i=0;i<nums.length;i++){
// for(let j=0;j<nums.length;j++){
//     sum+=nums[i][j]
// }
//     }

//     return sum
// }

// --------------------------------------------------------------------------------

// 3.log(n)


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// function display(nums) {
//   let arr = [];
//   for (let i = 1; i < nums.length; i = i * 2) {
//     arr.push(nums[i]);
//   }

//   return arr;
// }

// console.log(display(nums));

// how many times can you double 1 before it reaches n

// 2^k<n
// 2^k=n
// k=logn


// --------------------------------------------------------------------------------

