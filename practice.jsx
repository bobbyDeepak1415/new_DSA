// 8.majority element

let str = "the line has the largest";

function display(str) {
  let largestWord = "";
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }

  return largestWord;
}

console.log(display(str));
