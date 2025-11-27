let words = ["This", "is", "an", "example", "of", "text", "justification."];

function display(words, maxWidth) {
  let lines = [];

  let i = 0;

  while (words.length > 0) {
    let start = i;
    let lineLength = words[i].length;
    i++;

    while (words.length > 0 && lineLength + 1 + words[i] <= maxWidth) {
      lineLength += 1 + words[i].length;
      i++;
    }
    let lineWords = words.slice(start, i);

    if (i === words.length && lineWords.length === 1) {
      let line = lineWords.join(" ");

      line += lineLength[i];
      line += " ".repeat(maxWidth - line.length);
      lines.push(line);

      continue;
    }

    let justified = "";

    let gaps = lineWords.length - 1;

    let totalSpaces = maxWidth - (lineWords.length - 1);

    let evenSpaces = Math.floor(totalSpaces / gaps);

    let extraSpaces = totalSpaces % gaps;

    for (let j = 0; j < lineWords[j] - 1; j++) {
      justified += lineWords[j];
      justified += " ".repeat(evenSpaces + (j < extraSpaces ? 1 : 0));
    }

    justified += lineWords[lineWords.length - 1];
    lines.push(justified);
  }

  return lines;
}

console.log(display(words,16));
