// 1. sum of 1 to n

// function display(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum = sum + i;
//   }

//   return sum;
// }

// console.log(display(5));

// ------------------------------------------------
// 2.sum of digits of a number

// function digits(n) {

//     let result=JSON.stringify(n).split("")
//     let sum=0
// for(let i=0;i<result.length;i++){
// sum+=Number(result[i])
// }

// return sum

// }

// console.log(digits(457))

// function digits(num) {
//   let sum = 0;

//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   return sum;
// }

// console.log(digits(493));

// ----------------------------------------------

// 3. count the number of digits in a number

// function countDigits(num){
// num=Math.abs(num)
//     let count=0

//     do{
// count++
// num=Math.floor(num/10)
//     }while(num>5)
// return count
// }

// console.log(countDigits(-78093));
// console.log(countDigits(278749093));

// --------------------------------------------------------

// 4.palindrome

// function display(num){

//     let localNum=num
//     let reverseNum=0

//     while(localNum>0){

//         const lastDigit=localNum%10

//          reverseNum=reverseNum*10+lastDigit

//         localNum=Math.floor(localNum/10)

//     }

// return num===reverseNum

// }

// console.log(display(3443))

// --------------------------------------------------------------------

// 5.fibonacci

// 0,1,1,2,3,5,8

// f5=5
// f6=8
// f4=3

// function display(num){

//     if(num<2) return 1

//     let prev=0
//     let current=1

//     let next

//     for(let i=2;i<=num;i++){
//         next=current+prev
//         prev=current
//         current=next
//     }

// return next
// }

// console.log(display(4))

// -------------------------------------------------------------------------

// 6.  find missing number

// var nums = [0, 1, 2, 3, 5];

// function display(nums) {
//   // let sum=0

//   // for(let i=0;i<nums.length;i++){
//   //     sum+=nums[i]
//   // }

//   // return (nums.length*(nums.length+1))/2-sum

//   return (
//     (nums.length * (nums.length + 1)) / 2 -
//     nums.reduce((acc, curr) => acc + curr)
//   );
// }

// console.log(display(nums));

// --------------------------------------------------------------

// 7. time complexity?

// function display(num){

//   let sum=0

//   while(num>0){
//     sum+=num%10
//     num=Math.floor(num/10)

//   }
//   return sum
// }

// console.log(display(45792))
// ans: logn

// -----------------------------------------------------------------

// JAVSCRIPT

//1.check if an elemnent exists in an array

// const arr1 = [2, 4, 87, 862, 2, 5, 39, 2, 64];

// const display=(arr,num)=>{

//   for(let i=0;i<arr.length;i++ ){
//     if(arr[i]===num){
//       return true
//     }

//   }
//   return false

// }

// console.log(display(arr1,4));

// const result1=arr1.indexOf(87)

// console.log(result1)

// -----------------------------------------------------------------------

// 2.delete,add and update from an array
// shift,splice
// *splice can add delete and update elements in or from an array

// const arr1 = [2, 4, 5, 6, 87, 862, 2, 5, 39, {name:"Bobby",city:"ongloe"},[45,89]];

// arr1.unshift(98,36,7653)

// console.log(arr1)

// arr1.splice(1,0,44,55,66)

// arr1.splice(1,3,44,55,66)

// console.log(arr1)

// slice vs splice

// const subArr=arr1.slice(1,5)
// console.log(subArr)
// console.log(arr1)

// -----------------------------------------------------------------------

// 3.check if 2 arrays are equal or not

// const checkIfEqual = (arr1, arr2) => {
// //   if (arr1.length !== arr2.length) return false

// //   for(let i=0;i<arr1.length;i++){

// //     if(arr1[i]!==arr2[i]){
// //       return false
// //     }

// //   }
// // return true

// return arr1.length===arr2.length && arr1.every((ele,i)=>arr1[i]===arr2[i])

// };

// console.log(checkIfEqual([1, 2, 3], [1, 2, 3]));

// -----------------------------------------------------------------------------------

// 4.how to sort an array(time cmplxty of sort() is nlogn)

// const arr1 = ["oranges","zebra","apple","cats",];
// const result=arr1.sort((a,b)=>a.localeCompare(b))

// const arr1 = [2, 4, 5, 6, 87, 162, 2, 5, -39];

// // const result=arr1.sort((a,b)=>a-b)
// // console.log(result)

// console.log(arr1.sort())

// ---------------------------------------------------------------------
// 5.how to reverse an array

// const arr1 = [2, 4, 5, -6, 0.87, 162, 5, -39];

// console.log(arr1.reverse())

// -----------------------------------------------------------------------------------
  
//  * Map, reduce,filter

// const arr1 = [2, 5, 5, -6, 0.87, 162, 5, -39];

// console.log(arr1.map((ele,i)=>ele*ele))
// console.log(arr1.filter((ele,i)=>ele>0))

// console.log(arr1.reduce((acc, num) => (num > 0 ? acc + num : acc), 0));

// console.log(arr1);

// --------------------------------------------------------------------------------

// *Flat

const arr1 = [1,[2,[3,4,5,6],7,8],9,10]

console.log(arr1.flat())
console.log(arr1.flat(1))
console.log(arr1.flat(2))
