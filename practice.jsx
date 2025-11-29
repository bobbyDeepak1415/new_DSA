let str = "the line has the largest word in it";

function display(str) {
  // let result = "";

  let words = str.split(" ");

  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

console.log(display(str));
