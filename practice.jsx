let arr = [3, [45, 9, [3, 4], [2, [67, [34]]]]];

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
