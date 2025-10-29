// 5.fibonacci

// 0,1,1,2,3,5,8,13
// 0,1,2,3,4,5,6,7

function display(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let current = 1;
  let next = 0;
  let prev = 0;

  for (let i = 2; i <= num; i++) {
      next = current + prev;
      prev = current;
    current = next;
  }

  return next;
}

console.log(display(7));
