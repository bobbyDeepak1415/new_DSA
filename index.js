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

const arr1 = [2, 4, 87, 862, 2, 5, 39, 2, 64];

const display=()=>{
  
}

console.log(display(arr1,8628));

// for(let i=0;i<arr1.length;i++){
//   console.log(arr1[i])
// }

 const result=arr1.indexOf(87)
 console.log(result)
