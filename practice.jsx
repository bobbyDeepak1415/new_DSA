// let str = ")(";
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
  let checked = new Set([str]);
  let queue = [str];
  let found = false;

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

      if (!checked.has(newStr)) {
        checked.add(newStr);
        queue.push(newStr);
      }
    }
  }

  return result;
}

console.log(display(str));
