// 1.remove invalid paranthesis(301)

let str = "()())()";

function display(str) {
  let result = [];

  let found = false;
  let queue = [str];

  let visited = new Set([str]);

  while (queue.length > 0) {
    let current = queue.shift();

    if (isValid(current)) {
      result.push();

      found = true;
    }

    if (found) continue;

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== "(" && current[i] !== ")") continue;


      

    }



  }

  function isValid(str) {
    let count = 0;

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
