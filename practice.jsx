let str = "suuccess";

function display(str){

  let obj={}

  for(let i of str){
    if(obj[i]) return i
    obj[i]=true
  }

}


// console.log(display(str))