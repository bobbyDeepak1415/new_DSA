// 8.majority element

let str1 = "anagram";
let str2 = "nagaram";

function display(str1, str2) {
  if (str1.length !== str2.length) return false;

  let cache = {};

  for (let i = 0; i <= str1.length; i++) {
    let char = str1[i];
    cache[char] = (cache[char] || 0) + 1;
  }

  for (let i = 0; i <= str2.length; i++) {
    let char = str2[i];
    if (!cache[char]) return false;
    cache[char]--;
  }
  return true;
}

console.log(display(str1, str2));
