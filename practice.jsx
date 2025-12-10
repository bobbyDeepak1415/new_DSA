let str = "PPPGGJJKGGKKPJ";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      result += str[i] + obj[str[i]];
      seen.add(str[i])
    }
  }

  return result;
}

console.log(display(str));
