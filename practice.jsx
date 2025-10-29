// 4.palindrome

function display(num) {
  let rev = 0;
  let local = Math.abs(num);
  while (num > 0) {
    rev = rev * 10 + (local % 10);
    num = Math.floor(num);
  }

  return rev === num;
}

console.log(display(677));
