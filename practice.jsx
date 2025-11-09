// 8.majority element

let str = "the line has the largest word";

function display(str) {
  let largest = "";
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length > largest.length) {
      largest = word;
    }
  }

  return largest;
}
console.log(display(str));
