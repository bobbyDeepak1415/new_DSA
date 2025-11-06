// 8.majority element

let str = "Bobby is a Man";

function display(str, needle) {
  for (let i = 0; i <= str.length - needle.length; i++) {
    let found = true;

    for (let j = 0; j <= str.length; j++) {
      if (str[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }

    if (found) return i;
  }

  return -1;
}

console.log(display(str, "Man"));
