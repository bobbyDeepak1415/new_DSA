// 1.hashmap

let str = "{{{([[]){}}}";
let str1 = "{[{[[]]}]}";

function display(str) {
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (["{", "[", "("].includes(char)) {
      stack.push(char);
    } else if (["}", "]", ")"].includes(char)) {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length===0
}

console.log(display(str1));
