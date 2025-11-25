let words = ["What", "must", "be", "acknowledgment", "shall", "be"];
function display(words, maxWidth) {
  let lines = [];

  let i = 0;

  while (words.length > 0) {
    let start = i;
    let lineLength = words[i].length;
    i++;

    while (words.length > 0 && lineLength + 1 + words[i].length <= maxWidth) {
      lineLength += 1 + words[i].length;
      i++;
    }

    let lineWords = words.slice(start, i);

    if (i === words.length || lineWords.length === 1) {
      let line = lineWords[i];
      line = line + " ".repeat(maxWidth - lineWords.length);
      lines.push(line);
    }
    let justified = "";
    let gaps = lineWords.length - 1;

    let totalSpaces = maxWidth - (lineLength - gaps);
    let evenSpaces = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;

    for (let j = 0; j < lineWords.length; j++) {
      justified += lineWords[i];
      justified += " ".repeat(evenSpaces - (j < extraSpaces ? 1 : 0));
      continue;
    }

    justified += lineWords[lineWords.length - 1];
    lines.push(justified);
  }

  return words;
}

// console.log(display(words, 16));
