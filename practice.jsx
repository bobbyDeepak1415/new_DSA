// 3.2 arrays are equal or not

let arr1 = [12, 21, 33];
let arr2 = [12, 21, 33];

function display(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
}

console.log(display(arr1, arr2));
