
let arr=[2,0,0,8,7,4]


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

  return arr


}



console.log(display(arr))