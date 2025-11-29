let str = "AAABBCCCCCCCDDEEE";

function display(str) {
  let result;
  let count = 1;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      result += str[i] + count;
      count++;
    } else if (str[i] !== str[i - 1]) {
      str += str[i];
      count = 1;
    }
  }

  // return result;
}

console.log(display(str));
