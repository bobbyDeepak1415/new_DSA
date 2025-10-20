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

// // 3.log(n)

// function display(n) {
//   let arr = [];
//   for (let i = 1; i < n; i = i * 2) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(display(16));

// how many times can you double 1 before it reaches n

// 2^k<n
// 2^k=n
// k=logn

// --------------------------------------------------------------------------------

// 4.log(n)

// function display(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10; 
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// console.log(display(16));

// whenever an input is being multiplied or divided by a certain number, the time complexity becomes the log of that number,ie, the time complexity basically becomes log(n)
