// 3. count the number of digits in a number


function display(n){

    let arr1=JSON.stringify(Math.abs(n)).split("")
    return arr1.length

   
}



console.log(display(-9199088))