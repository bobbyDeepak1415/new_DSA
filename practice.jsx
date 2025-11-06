// 8.majority element

let str1 = "anagram";
let str2 = "nagaram";

function display(str1, str2) {
  // if(str1.length!==str2.length) return

  // let cache={}

  // for(let i=0;i<str1.length;i++){

  // }

  const sort1 = [...str1].sort((a, b) => a.localeCompare(b)).join("");
  const sort2 = [...str2].sort((a, b) => a.localeCompare(b)).join("");

  return sort1 == sort2;
}

console.log(display(str1, str2));
