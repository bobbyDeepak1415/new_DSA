// 1.hashmap

let str = "{{{([[]){}}}";
let str1 = "{[{[[]]}]}";

function display(str) {
  let map = { "}": "{", "]": "[", ")": "(" };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (["{", "[", "("].includes(str[i])) {
      stack.push(str[i]);
    } else if (["}", "]", ")"].includes(str[i])) {
      if (stack.pop() !== map[str[i]]) return false;
    }
  }

  return stack.length===0
}
console.log(display(str));
