// return biggest negative integer

let str = "()())()";

function display(str) {
  let count = 0;
  function isValid(str) {
    for (let ch of str) {
      if (ch === "(") count++;
      else if (ch === ")") {
        if (count === 0) return false;
        count--;
      }
    }

    return count === 0;
  }
}

// console.log(display(str))
