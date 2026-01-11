let store = { "}": "{", "]": "[", ")": "(" };

let str = "([[{{}]}]])";
// let str = "{[[()]]}";

// / let str = "AAABBCCCCCDD";
// // let str1 = "PPPGGJJKGGKKPJ";

function display(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== store[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(display("[[[[]]]]"));
// console.log(display("{{[}})"));
// console.log(display("[{((),[],[()])}]"));
