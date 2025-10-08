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

function display(num) {
  let localNum = num;
  let reverseNum = 0;

  while (localNum > 0) {
    const lastDigit = localNum % 10;

    reverseNum = reverseNum * 10 + lastDigit;
    localNum = Math.floor(localNum / 10)
  }

  return num === reverseNum;
}

console.log(display(343));
