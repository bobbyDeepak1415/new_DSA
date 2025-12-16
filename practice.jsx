let str = "AABKBJJJCBAABAKK";

function display(str) {
  let result = "";

  let obj = {};

  for (let i=0;i<str.length;i++ ) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  let checked = new Set();

  for (let i of str) {
    if (!checked.has(i)) {
      checked.add(i);
      result += i + obj[i];
    }
  }

  return result;
}

console.log(display(str));
