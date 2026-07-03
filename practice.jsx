let arr = [1, 2, [3, 4, [5, 6]]];

function display(arr) {
  let result = [];

  for (let i of arr) {
    if (!Array.isArray(i)) {
      result.push(i);
    } else {
      result.push(...display(i));
    }
  }

  return result;
}

console.log(display(arr));
