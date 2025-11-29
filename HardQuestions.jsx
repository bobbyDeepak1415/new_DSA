// 1.remove invalid paranthesis(301)

// let str = "()())()";

// function display(str) {
//   function isValid(str) {
//     let count = 0;

//     for (let ch of str) {
//       if (ch === "(") count++;
//       else if (ch === ")") {
//         if (count === 0) return false;
//         count--;
//       }
//     }

//     return count === 0;
//   }

//   let result = [];

//   let found = false;
//   let queue = [str];

//   let visited = new Set([str]);

//   while (queue.length > 0) {
//     let current = queue.shift();

//     if (isValid(current)) {
//       result.push(current);

//       found = true;
//     }

//     if (found) continue;

//     for (let i = 0; i < current.length; i++) {
//       if (current[i] !== "(" && current[i] !== ")") continue;

//       let newStr = current.slice(0, i) + current.slice(i + 1);

//       if (!visited.has(newStr)) {
//         visited.add(newStr);
//         queue.push(newStr);
//       }
//     }
//   }

//   return result;
// }

// console.log(display(str));

// ----------------------------------------------------------------------------

// 2.remove invalid paranthesis

// let words = ["This", "is", "an", "example", "of", "text", "justification."];

// function display(words, maxWidth) {
//   let i = 0;
//   let lines = [];

//   while (i < words.length) {
//     let start = i;
//     let lineLength = words[i].length;
//     i++;

//     while (i < words.length && lineLength + 1 + words[i].length <= maxWidth) {
//       lineLength += 1 + words[i].length;
//       i++;
//     }

//     // -----
//     let lineWords = words.slice(start, i);

//     // ------
//     if (i === words.length || lineWords.length === 1) {
//       let line = lineWords.join(" ");
//       line = line + " ".repeat(maxWidth - line.length);
//       lines.push(line);
//       continue;
//     }

//     // ----

//     let gaps = lineWords.length - 1;
//     let totalSpaces = maxWidth - (lineLength - gaps);

//     let evenSpace = Math.floor(totalSpaces / gaps);
//     let extraSpace = totalSpaces % gaps;

//     // -------

//     let justified = "";

//     for (let j = 0; j < lineWords.length - 1; j++) {
//       justified += lineWords[j];
//       justified += " ".repeat(evenSpace + (j < extraSpace ? 1 : 0));
//     }

//     justified += lineWords[lineWords.length - 1];

//     lines.push(justified);
//   }

//   return lines;
// }

// console.log(display(words, 16));


// ----------------------------------------------------------------------------------
