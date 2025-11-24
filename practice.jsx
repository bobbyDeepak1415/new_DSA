let words = ["This", "is", "an", "example", "of", "text", "justification."];

function display(words, maxWidth) {
  let i = 0;
  let lines = [];

  while (i < words.length) {
    let start = i;
    let lineLength = words[i].length;
    i++;

    while (i < words.length && lineLength + 1 + words[i].length <= maxWidth) {
      lineLength += words[i].length;
      i++;
    }
  }
}

// console.log(words,16)
