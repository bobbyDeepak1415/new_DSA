let str = "()())()";

function display(str) {
  function isValid(str) {
    let count = 0;
    for (let char of str) {
      if (char === "(") count++;
      else if (char === ")") {
        if (count === 0) return false;
        count--;
      }
    }

    return count === 0;
  }

  let result = [];

  let found = false;
  let visited = new Set([str]);
  let queue = [str];

  while (queue.length > 0) {
    let current = queue.shift();

    if (isValid(current)) {
      result.push(current);
      found = true;
    }

    if (found) continue;
  

  for (let i = 0; i < current.length; i++) {
    if (current[i] !== "(" && current[i] !== ")") continue;

    let newStr = current.slice(0, i) + current.slice(i + 1);
    if (!visited.has(newStr)) {
      visited.add(newStr);
      queue.push(newStr)
    }
  }

}

  return result

}

console.log(display(str));
