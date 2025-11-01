// 5.remove element and give the length of the non value elements in the array

let arr1 = [0, 1, 2, 2,5, 3, 0, 4, 2];

function display(arr, value) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[k]=arr[i]
      k++;
    }
  }

  return k;
}

console.log(display(arr1, 2));
