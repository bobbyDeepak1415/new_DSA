// 4.palindrome

function display(num) {
  let rev = 0;
  let local = Math.abs(num);
  while (num > 0) {
    rev = rev * 10 + (local % 10);
    num = Math.floor(num / 10);
  }

  return rev === num;
}

console.log(display(6776));

// 1
// rev=0*10+7=7
// num=67

// 2
// rev=7*10+7=77
// num=6

// 1
// rev=77*10+6
// num=0
