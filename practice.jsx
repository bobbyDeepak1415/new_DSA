let str = "()())()";

function display(str) {
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

  let result = [];

  let queue = [str];

  let found = false;

  let checked = new Set([str]);

  while (queue.length > 0) {
    let current = queue.shift();

    if (isValid(current)) {
      queue.push(current);
      found === true;
    }

    if (found) continue;

    for (let i = 0; i < current.length; i++) {
      if (current[i] !== "(" || current[i] !== ")") continue;

      let newStr = current.slice(0, i) + current.slice(i + 1);

      if (!checked.has(newStr)) {
        checked.add(newStr);
        result.push(newStr);
      }
    }
  }

  return result;
}

console.log(display(str));
