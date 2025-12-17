let str = "the line has the largest wordsssssssss in it";

function display(str) {
  let arr1 = str.split(" ");

  let result = arr1[0];

  for (let i = 1; i < arr1.length; i++) {
    if (arr1[i].length > arr1[i - 1].length) {
      result = arr1[i];
    }
  }

  return result;
}

console.log(display(str));
