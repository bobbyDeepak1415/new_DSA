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

  let result = [];
  let queue = [str];
  let found = false;
  let visited = new Set([str]);

  while (queue.length > 0) {
    let current = queue.shift();

    if (isValid(current)) {
      result.push(current);

      found = true;
    }

    if (found) continue;

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== "(" && current[i] !== ")") continue;
      let newStr = current.slice(0, 1) + current.slice(i + 1);

      if (!visited.has(newStr)) {
        visited.add(newStr);
        queue.push(newStr);
      }
    }
  }

  return result;
}

console.log(display(str));
