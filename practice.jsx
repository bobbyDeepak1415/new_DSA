let arr = [
  ["A", 2],
  ["C", 3],
  ["B", 4],
  ["E", 1],
];
function display(arr) {

  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(display(arr));


