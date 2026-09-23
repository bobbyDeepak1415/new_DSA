


let arr=[31,2,23,9,4,13]



function display(arr){

  
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr.length-1-i;j++){
    if(arr[j]>arr[j+1]){
      let k=arr[j]

      arr[j]=arr[j+1]
      arr[j+1]=k
    }
  }
}

return arr


}


console.log(display(arr))