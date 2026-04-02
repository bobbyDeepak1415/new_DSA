let arr = [
  [1, 2, 3],
  [1, 1, 2, 3],
  [1, 2, 2, 3, 3, 3],
];

function display(arr) {
  let result = [];

  let obj = {};
  let count = 0;

  for (let i of arr) {
    for (let j = 0; j < i.length; j++) {
      obj[j] = (obj[j] || 0) + 1;

      if (obj[j] > 1) {
        count++;
        result.push(count);
      }
    }
    count = 0;
  }

  return result;
}

console.log(display(arr));

// ans:[0,1,2]
