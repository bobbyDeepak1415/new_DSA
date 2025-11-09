// 8.majority element

let str1 = "nkgaram";
let str2 = "anagram";
// function display(str1, str2) {
//   return (
//     [...str1].sort((a, b) => a.localeCompare(b)) ===
//     [...str2].sort((a, b) => a.localeCompare(b))
//   );
// }

function display(str1, str2) {
  let obj = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    obj[char] = (obj[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!obj[char]) {
      return false;
    }
  }

  return true;
}

console.log(display(str1, str2));
