
// Basics questions

// 1.count odd nums

function display(high, low) {
  let nums = 0;

  for (let i = low; i <= high; i++) {
 if(i%2!=0) nums++
  }

  return nums;
}

console.log(display(10, 8));
