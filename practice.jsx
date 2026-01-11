// function display(month, date) {}

let str = "Hello Bobby Deepak";

function display(str) {
  return str.trim().split(" ").at(-1);
}

console.log(display(str));
