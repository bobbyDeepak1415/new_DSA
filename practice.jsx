// let nums = [1,0, 8, 0, 9, 11,12, 0, 13,0, 44];

// function display(arr){

//   let k=0

//   for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//       let temp=arr[i]
//       arr[i]=arr[k]
//       arr[k]=temp
//       k++
//     }
//   }

//   return nums

// }

// console.log(display(nums))

let arr = [1, 2, 2, 3, 4, 4, 5];

function display(arr) {
  let result = [];

  let obj={}

  for(let i of arr){
    obj[i]=(obj[i] || 0)+1
  }

  for(let i=0;i<arr.length;i++){
  let num=arr[i]
if(obj[num]===1){
  result.push(num)
}
  }

  return result;
}

console.log(display(arr));
