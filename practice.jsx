// 1.fizzNBuzz

// let arr1 = [5, 15, 25, 30, 45, 35, 3];
function display(num) {
    
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"

    else return "false"

}

console.log(display(45));
