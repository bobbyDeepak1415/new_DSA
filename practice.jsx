let words = ["What", "must", "be", "acknowledgment", "shall", "be"];
function display(words, maxWidth) {

  let lines=[]

  let i=0

  while(words.length>0){
    let start=i
    let lineLength=words[i].length
    i++


    while(words.length>0 && lineLength+1+words[i].length<=maxWidth){
      lineLength+=words[i].length
      i++
    }

  }


  return words

}

// console.log(display(words, 16));
