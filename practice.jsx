// 8.majority element

let str1 = "   fly me   to   the moon  ";
let str2 = "hello worlds";

function display(str) {

    
  return str.trimEnd().split(" ").at(-1).length;

  //  return arr[arr.length-1].length
}

console.log(display(str1));
