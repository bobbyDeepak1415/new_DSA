// 1.fizzNBuzz

let arr1 = [7, 5, 15, 25, 22, 30, 45, 35, 3];
function display(arr1) {
  //   let local = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 3 === 0 && arr1[i] % 5 === 0) arr1[i] = "FizzBuzz";
    else if (arr1[i] % 3 === 0) arr1[i] = "Fizz";
    else if (arr1[i] % 5 === 0) arr1[i] = "Buzz";
  }

  return arr1;
}

console.log(display(arr1));
