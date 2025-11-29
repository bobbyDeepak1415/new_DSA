let str="AABBBBBCCDDDDDDDDDD"

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

console.log(display(str));
