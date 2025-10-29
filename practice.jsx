// 6.missing number

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function display(num){

  let sum=0

  while(num>0){
    sum+=num%10
    num=Math.floor(num/10)

  }
  return sum
}

console.log(display(45792))