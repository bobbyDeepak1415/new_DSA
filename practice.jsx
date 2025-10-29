// 4.palindrome

function display(num) {
  let rev = 0;
  //   let local = Math.abs(num);
  let local = Math.abs(num);
  while (local > 0) {
    rev = rev * 10 + (local % 10);
    local = Math.floor(local / 10);
  }

  return rev === Math.abs(num);
}

console.log(display(-6776));

// 1
// rev=0*10+7=7
// num=67

// 2
// rev=7*10+7=77
// num=6

// 1
// rev=77*10+6
// num=0
