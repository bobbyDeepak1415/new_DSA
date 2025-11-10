let str = "the line has the largest";

let word1 = "abcdef";
let word2 = "pqr";

function display(str1, str2) {
  let ans = "";

  let m = str1.length;
  let n = str2.length;

  let i;
  let j;

  while (i < m || j< n) {
    if (i < m) {
      ans += str[i];
      i++;
    }
    if (j < n) {
      ans += str2[j];
      j++;
    }
  }


  return ans;
}

console.log(display(word1, word2));
