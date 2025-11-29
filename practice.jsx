let arr = [[3, 4], 90, [45, 67, [56, 33, 2, [40, 90], 89]]];

function display(arr) {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...display(i));
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(display(arr));
