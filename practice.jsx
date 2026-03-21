let str = "AABBBCDDDEEEEE";
function display(str) {
  let obj = {};

  let result = 0;

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let checked = new Set();

  for (let i of str) {
    if (!checked.has(i)) {
      result += i + obj[i];
      checked.add(i);
    }
  }

  return result;
}

console.log(display(str));
