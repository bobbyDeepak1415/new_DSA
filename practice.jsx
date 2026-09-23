



let arr = [2, 7, 11, 15];



function display(arr,target){


  for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
if(arr[i]+arr[j]===target){
  return arr[i],arr[j]
}
    }
  }
  


}


console.log(display(arr,17))