// 1.hashmap

let str = "{{{([[]){}}}";
let str1 = "{[{[[]]}]}";

function display(str) {
  let map = { "}": "{", "]": "[", ")": "(" };

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char= str[i]
    if (["{", "[", "("].includes(char)) {
      stack.push(char);
    } else if (["}", "]", ")"].includes(char)) {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length===0
}
console.log(display(str));


let arr1=["jello","hello"]

arr1.push("kello")
console.log(arr1)
arr1.pop()
console.log(arr1)
