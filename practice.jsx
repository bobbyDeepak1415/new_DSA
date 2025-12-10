// let str = "PPPGGJJKGGKKPJ";

// function display(str) {
//   let result = "";

//   let obj = {};

//   for (let i of str) {
//     obj[i] = (obj[i] || 0) + 1;
//   }

//   let seen = new Set();

//   for (let i of str) {
//     if (!seen.has(i)) {
//       result += i + obj[i];
//       seen.add(i);
//     }
//   }

//   return result;
// }
// // console.log(display(str));

let str = "AAABBCCCCCDD";

function display(str) {
  let result = "";

  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    let char = str[i];
    if (char === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(display(str));
