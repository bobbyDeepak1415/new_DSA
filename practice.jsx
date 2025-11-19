

function display(n) {

 let arr=[]
 
 for(let i=2;i<=n;i++){

  let isPrime=true
  for(let j=2;i<j;j++){
    if(i%j===0) {
      isPrime=false
      break
    }
  }

  if(isPrime) arr.push(i)

 }
 
 return arr

}

// console.log(display(15));
