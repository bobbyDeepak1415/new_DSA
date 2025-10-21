// Questions

// hashmap brackets

// function isValidBrackets(str) {

//   const map = { ")": "(", "}": "{", "]": "[" };

//   const stack=[]

//   for(let i=0;i<str.length;i++){
//     let char=str[i]

//     if(["{","[","("].includes(char)){
//       stack.push(char)
//     }else if(["}","]",")"].includes(char)){
//       if(stack.pop()!==map[char]){
//         return false
//       }
//     }

//   }

//   return stack.length===0

// }

// Test cases
// console.log(isValidBrackets("{[{[[]]}]}"));
// console.log(isValidBrackets("[{((),[],[()])}]"));     // true
// console.log(isValidBrackets("{{[}})"));               // false

// -----------------------------------------------------------------------------------------

// 1.find Index of needle

// let hayStack = "Bobby is a man and a Developer";
// let needle = "Developer";

// function display(hayStack,needle){

//   return hayStack.indexOf(needle)

// }

// ------

// function display(hayStack, needle) {

//   for (let i = 0; i <= hayStack.length - needle.length; i++) {
//     let found = true;
//     for (let j = 0; j < needle.length; j++) {
//       if (hayStack[i + j] !== needle[j]) {
//         found = false;
//         break;
//       }
//     }

//     if (found) return i;
//   }

//   return -1;
// }

// console.log(display(hayStack, needle));

// ----------------------------------------------------------------------------

// 2.reverse String

// let s = ["h", "e", "l", "l", "o"];

// function display(hayStack, needle) {
//   return str.reverse()
// }

// console.log(display(str));

// -------------------------------------------------------------------------------

// 3.valid anagram

let str1 = "anagram";
let str2 = "nagaram";

// function display(str1, str2) {
//   const sort1 = [...str1].sort((a, b) => a.localeCompare(b)).join("");

//   const sort2 = [...str2].sort((a, b) => a.localeCompare(b)).join("")

//  return sort1===sort2

// }

// console.log(display(str1, str2));

// -----------

function display(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    count[char] = (count[char] || 0) + 1;
  }

  for(let i=0;i<str2.length;i++){
    let char=str2[i]
    if(!count[char]) return false
    count[char]--
  }

  return true

}

console.log(display(str1, str2));

// ------------------------------------------------------------------------------------

// 4.longest common prefix

// let strs = ["flower", "flow", "flight"];

// function display(strs) {
//   if (strs.length === 0) return;

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       prefix = prefix.slice(0, -1);
//     }

//     if (prefix.length === 0) return "";
//   }

//   return prefix;
// }

// console.log(display(strs));

// -------------------------------------------------------------------------------
