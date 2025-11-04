// 8.majority element


let str="success"


function display(){

  let obj={}

  for(let i=0;i<=str.length;i++){
    ;let char=str[i]

    if(obj[char]) return char
    else{
      obj[char]=true
    }

  }
return null
}

console.log(display(str))