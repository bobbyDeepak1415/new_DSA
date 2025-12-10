let str = "AAABBCCCCCDD";

function display(str) {
  let result = "";

  let count = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    }
    if (str[i] !== str[i - 1]) {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(display(str));
