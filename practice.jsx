let arr = [83, 0, 0, 4, 50, 0, 0, 2, 0];

function display(arr) {
  
let k=0

for(let i=0;i<arr.length;i++){
  let char=arr[i]
  if(char!==0){
     arr[k]=arr[i]
     k++
  }
}

return arr

}

console.log(display(arr));
