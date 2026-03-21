let arr = [
  ["A", 2],
  ["D", 3],
  ["B", 4],
  ["E", 1],
  ["C", 1],
];
function display(arr) {
  return arr.sort((a, b) => a[0].localeCompare(b[0]));
}

console.log(display(arr));
