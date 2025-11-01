// 1.most occuring number

let arr1 = [4, 4, 5, 4, 3, 3, 4, 3, 3, 5, 6, 5, 5, 4, 4, 4];

function display(arr1) {
  let count = {};

  let maxNum = arr1[0];
  let maxCount = 0;

  for (let n of arr1) {
    count[n] = (count[n] || 0) + 1;

    if (count[n] > maxCount) {
      maxCount = count[n];
      maxNum = n;
    }
  }

  return maxNum;
}
console.log(display(arr1));
