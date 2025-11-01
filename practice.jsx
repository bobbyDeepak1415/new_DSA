// 1.square of elements

let arr1 = [3, 4, -3, 2, 5, -1];

function display(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i] * arr1[i];
  }

  return arr1.sort((a,b)=>a-b)

}
console.log(display(arr1));
