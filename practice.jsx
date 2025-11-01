// 8.majority element

let arr1 = [1, 1, 0, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1];

function display(arr) {
  let count = {};
  let maxCount = 0;
  let maxNum = arr[0];

  for (let n of arr) {
    count[n] = (count[n] || 0) + 1;

    if (count[n] > maxCount) {
      maxCount = count;
      maxNum = n;
    }
  }

  return maxNum;



}

console.log(display(arr1));
