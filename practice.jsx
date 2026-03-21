let arr = [
  ["A", 2],
  ["C", 3],
  ["B", 4],
  ["E", 1],
];
function display(arr) {
  let sortedArr = arr.map((item) => item[0]);

  return sortedArr.sort((a, b) => a.localeCompare(b));
}

console.log(display(arr));

arr = [
  ["A", 2],
  ["B", 4],
  ["C", 3],
  ["E", 1],
];
