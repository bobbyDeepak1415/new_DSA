// 5.move all zeroes to the end

let arr1 = [5, 6, 0, 0, 4, 15, 0, 9];

function display(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[k] = arr[i];
      k++;
    }
  }

  for (let i = k; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(display(arr1));
