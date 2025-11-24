let words = ["This", "is", "an", "example", "of", "text", "justification."];

function display(words, maxWidth) {
  

  let i=0
  let lines=[]

  while(i<words.length){
    let start=i

    let lineLength=words[i].length
    i++




    while(i<words.length && lineLength+1+words[i]<=maxWidth){
      lineLength+=words[i].length
      i++
    }


    let lineWords=words.slice(start,i)

if(i===words.length || lineWords.length===1){
  let line=lineWords.join(" ")
  line=line+" ".repeat(maxWidth-line.length)
  lines.push(line)
  continue

}


let gaps=lineWords.length-1

let totalSpaces=maxWidth-(lineLength-gaps)
let evenSpaces=Math.floor(totalSpaces/gaps)
let extraSpaces=totalSpaces%gaps


  }

  return lines

}

// console.log(display(words,16))
