// let words = ["This", "is", "an", "example", "of", "text", "justification."];

let str = "AAABBCCCCCDD";

function display(arr) {

  let result=[]

  let obj={}
  let done =new str([])

  for(let i=0;i<str.length;i++){
    let char=str[i]
    let count=0
    if(obj[char]){
      count++

    }else if(!obj[char]){
      count=0
      result
      
    }
  }

  return result.join(" ")

  
}

// console.log(display(str));
