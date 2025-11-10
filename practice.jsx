let arr = [83, 4, 50, 0, 0, 2, 0];

function display(str1, str2) {
  let ans = "";

  let m = str1.length;
  let n = str2.length;

  let i = 0;
  let j = 0;

  while (i < m || j < n) {
    if (i < m) {
      ans += str1[i];
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
