// 2.sum of digits of a number


function display(n){

    let sum=0
    while(n>0){

        sum+=n%10
        n=Math.floor(n/10)
    }

    return sum
   
}



console.log(display(918))