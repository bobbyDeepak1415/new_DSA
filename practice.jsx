let words = ["What", "must", "be", "acknowledgment", "shall", "be"];
function display(words, maxWidth) {

  let lines=[]

  let i=0

  while(words.length>0){
    let start=i
    let lineLength=words[i].length
    i++


    while(words.length>0 && lineLength+1+words[i].length<=maxWidth){
      lineLength+=1+words[i].length
      i++
    }

    let lineWords=words.slice(start,i)

    // let gaps=lineWords.length-1
    // let totalSpaces=
    
    if(i===words.length || lineWords.length===1){

      let line=lineWords[i]
      line=line+" ".repeat(maxWidth-)
    
    }

  }


  return words

}

// console.log(display(words, 16));
