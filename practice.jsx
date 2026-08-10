// let temp=arr[i]=1
// 
// 
// 

let nums = [1,0, 8, 0, 9, 11,12, 0, 13,0, 44];



function display(arr){

  let k=0

  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      let temp=arr[i]
      arr[i]=arr[k]
      arr[k]=temp
      k++

    }
  }



  return nums

}

// console.log(display(nums))

