let words = ["This", "is", "an", "example", "of", "text", "justification."];

function display(words, maxWidth) {

  let lines=[]

  let i=0

  while(i<words.length){
    let start=i
    let lineLength=words[i].length
    i++

    while(i<words.length && lineLength+1+words[i].length<=maxWidth){
    lineLength+=1+words[i].length
    i++
    }

    let lineWords=words.slice(start,i)

    


    if()


  }

  return lines



 
}

console.log(display(words, 16));
