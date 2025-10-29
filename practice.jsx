// 6.number present or not

let arr1 = [ 12, 2, 33, 41, 52, 6, 71, 80, 9, 10];


function display(num){

  let sum=0

  while(num>0){
    sum+=num%10
    num=Math.floor(num/10)

  }
  return sum
}

console.log(display(80))