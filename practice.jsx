// 3. count the number of digits in a number


function countDigits(num){

    let result=JSON.stringify(Math.abs(num)).split("")

    return result.length



}



console.log(countDigits(8932789903973))