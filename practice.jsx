let str = "AABKBJJJCBAABAKK";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let checked = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!checked.has(str[i])) {
      checked.add(str[i])
      result += str[i] + obj[str[i]];
    }
  }

  return result;
}

console.log(display(str));
