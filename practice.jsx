let words = ["This", "is", "an", "example", "of", "text", "justification."];

function display(words, maxWidth) {
  let lines = [];

  let i = 0;

  while (i < words.length) {
    let start = i;

    let lineLength = words[i].length;
    i++;

    while (i < words.length && lineLength + 1 + words[i].length <= maxWidth) {
      lineLength += words[i].length;

      let lineWords = words.slice(start, i);
      i++;

      if (i === words.length || lineWords.length === 1) {
        let line = lineWords.join(" ");
        line = line + " ".repeat(maxWidth - line.length);
        



      }
    }
  }
}

// console.log(display(words,16));
