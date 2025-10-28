// 3. count the number of digits in a number

function countDigits(num) {

    num=Math.abs(num)

  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);

  return count;
}

console.log(countDigits(-8093));
