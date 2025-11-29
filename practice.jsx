let str = "a      man  and     dog and one single   cat";

function display(str) {
  return str.trim().split(/\s+/)
}

console.log(display(str));
