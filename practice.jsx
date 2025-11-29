// let words = ["This", "is", "an", "example", "of", "text", "justification."];

let str = "AAABBCCCCCDD";

function display(str) {
  let result = "";

  let count = 1;

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];
    if (char === str[i - 1]) {
      count++;
    } else {
      result += char + count;
      count = 1;
    }
  }

  return result;
}

console.log(display(str));
