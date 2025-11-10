let arr = [83, 0, 0, 4, 50, 0, 0, 2, 0];

function display(arr) {
  let k = arr.length-1;

  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k--;
    }
  }


  for(let i=k;i>=0;i--){
    arr[i]=0
  }

  return arr

}

console.log(display(arr));
