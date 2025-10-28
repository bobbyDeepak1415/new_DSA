// 4.palindrome

function display(num) {

    
  let rev = Number(JSON.stringify(Math.abs(num)).split("").reverse().join(""));

  return Math.abs(num) === rev;
}

console.log(display(-89898));
