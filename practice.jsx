let str = "the line has the largest word in it";

function display(str) {
  // let result = "";

  let words = str.split(" ")

  let maxLength


  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result.length) {
      result=words[i]
    }
    
  }

  return result
}

console.log(display(str));
