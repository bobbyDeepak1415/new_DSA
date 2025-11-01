// 5.pivot element

let arr1 = [6, 6, 3, 1, 4, 4, 3];

function display(arr1) {
  let sum = arr1.reduce((a, b) => a + b);
  let leftSum = 0;

  for (let i = 0; i < arr1.length; i++) {
    let rightSum = sum - leftSum - arr1[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr1[i];
  }

  return -1;
}
console.log(display(arr1));
