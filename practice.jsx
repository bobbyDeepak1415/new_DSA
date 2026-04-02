let arr1 = [3, 4, [4, [90, 89], [7, 9], 54, 78]];

const display = (arr) => {
  let result = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      result.push(...display(i));
    } else {
      result.push(i);
    }
  }

  return result;
};

console.log(display(arr1));
