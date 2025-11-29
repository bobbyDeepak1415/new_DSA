// let words = ["This", "is", "an", "example", "of", "text", "justification."];

let str = "AAABBCCCCCDD";

function display(arr) {

  let result=''

  let count=1

  for(let i=1;i<str.length;i++){
    if(str[i]===str[i-1]){
      count++
    }else{
      result+=str[i-1]+count
      count=1
    }
  }

  result+=

  


  
}

// console.log(display(str));
