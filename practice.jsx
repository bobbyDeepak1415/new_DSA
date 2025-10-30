// 1.fizzNBuzz

function display(num) {

    let arr1=[]

    for(let i=0;i<=num;i++){
        if(i%3===0 && i%5===0) arr1.push("FizzBuzz")
       else if(i%3===0 ) arr1.push("Fizz")
       else if(i%5===0) arr1.push("Buzz")
       else  arr1.push(i)
    }
return arr1

 
}

console.log(display(15));
