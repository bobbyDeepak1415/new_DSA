// 4.palindrome

function display(num) {
  let rev = 0;
  let local=Math.abs(num)

  while (local > 0) {
    rev = rev * 10 + (local % 10);
    local = Math.floor(local / 10);
  }

  return Math.abs(num) === rev;
}

console.log(display(-8998));
console.log(display(1911));

// 1
// rev=0*10+8=8

// num=819

// 2
// rev=8*10+9=89

// num=81

// 3
// rev=89*10+1=891

// num=8

// 3
// rev=891*10+8=8918

// num=0
