// 2.sum of digits of a number


function display(n){

    let sum=0

   let result=JSON.stringify(n).split("")
   
   for(let i=0;i<result.length;i++){
sum+=Number(result[i])
   }

   return sum
}



console.log(display(918))