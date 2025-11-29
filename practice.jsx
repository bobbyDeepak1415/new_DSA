let str = "AAABBCCCCCCCDDEEE";

function display(str) {
  

  let result=""

  let count=1

  for(let i=1;i<=str.length;i++){
    if(str[i]===str[i-1]){
      count++
    }else if(str[i]!==str[i-1]){
      result+=str[i-1]+count
      count=1
    }
  }

  return result

}

console.log(display(str));
