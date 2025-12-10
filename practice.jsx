let str = "AAABBCCCCCDD";

function display(str) {
  let result = "";

  // let count=0

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen = new Set();

  for (let i of str) {
    if (!seen.has(i)) {
      result += i + obj[i];
      seen.add(i);
    }
  }

  return result;
}

console.log(display(str));
