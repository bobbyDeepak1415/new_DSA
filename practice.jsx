let arr = [
  [1, 2, 3],
  [1, 1, 2, 3],
  [1, 2, 2, 3, 3, 3, 1],
];

function display(arr) {
  let result = [];

  for (let i of arr) {
    let obj = {};

    let count = 0;
    for (let item of i) {
      obj[item] = (obj[item] || 0) + 1;
    }

    for (let key in obj) {
      if (obj[key] > 1) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
}

console.log(display(arr));

// ans:[0,1,2]
