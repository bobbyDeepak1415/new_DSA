// 1.fizzNBuzz

let arr1 = [5, 15, 25, 30, 45, 35, 3];
function display(arr1) {
  let local = [];

  for (let i = 0; i < local.length; i++) {
    if (i % 3 === 0) local.push("Fizz");
    if (i % 5 === 0) local.push("Buzz");
    if (i % 3 === 0 && i % 5 === 0) arr1.push("FizzBuzz");
  }

  return local;
}

console.log(display(arr1));
