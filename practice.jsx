let str = "[[[({)]}]]";

// let str1="[[[{{}}]]]"

function display(str) {
  let map = { "}": "{", "]": "[", ")": "(" };
  let stack = [];

  for (let i of str) {
    if (["(", "{", "["].includes(i)) {
      stack.push(i);
    } else if ([")", "]", "}"].includes(i)) {
      if (!map[i] === stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(display(str));
