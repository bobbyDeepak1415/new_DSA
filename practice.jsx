let store = { "}": "{", "]": "[", ")": "(" };

let str = "([[{{}]}]])";
// let str = "{[[()]]}";

function display(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (["(", "{", "["].includes(str[i])) {
      stack.push(str[i]);
    } else if ([")", "}", "]"].includes(str[i])) {
      if (stack.pop() !== store[str[i]]) return false;
    }
  }

  return stack.length === 0;
}

console.log(display("[{((),[],[()])}]"));
