let str = "the line has the largest word in it";

function display(str) {
  let result = "";

  let arr = str.split(" ");

  for(let i=0;i<arr.length;i++){
if(arr[i].length>result.length){
result=arr[i]
}
  }



  
  return result;
}

console.log(display(str));
