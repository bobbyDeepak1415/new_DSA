// 8.majority element

let str = "   fly me   to   the moon  ";
let str1 = "hello world";
function display(str) {
  return str.trimEnd().split(" ").at(-1).length;
}

console.log(display(str1));
