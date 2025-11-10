let arr = [83, 0, 0, 4, 50, 0, 0, 2, 0];

function display(arr) {
  let k = arr.length;

  for (let i = k; i > 0; i--) {
    if (arr[i] !== 0) {
      arr[i] = arr[i + k];
      k--;
    }
  }


  for(let i=k;i<=0;i--){
    arr[i]=0
  }

  return arr

}

console.log(display(arr));
