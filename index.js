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



const arr1 = [2, 4, 5, 6,39 ,[45,89]];

const person={
  name:"Bobby",
  status:"employed",
  
  active:true,
  age:28,
  adress:{
    city:"Ongole",
    state:"AP"
  }
}

const newPerson={...person}



newPerson.name="Deepak"
newPerson.adress.city="Bangalore"


// console.log(newPerson)
// console.log(person)

const arr2 = [45,46,47];

const str="Bob"
// const str2=."by"
let str3=str.concat("by")

// const newArr=[...arr1]
const newArr=arr1.concat(arr2)


// newArr[5].splice(0,1)
// newArr.splice(0,3)
// console.log(newArr)
// console.log(arr1)
console.log(str3)


