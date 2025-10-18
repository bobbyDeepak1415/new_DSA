// Questions

// 1.find Index of needle

let hayStack = "Bobby is a man";
let needle = "man";

function display(hayStack, needle){



  for (let i = 0; i < hayStack.length; i++) {
    let found=true

    for(let j=0;j<needle.length;j++){
        if(hayStack[i+j]!==needle[j]){
            found=false
            break
        }

    }
    if(found) return i
  }

  return -1
}

console.log(display(hayStack, needle));

// ----------------------------------------------------------------------------

// 2.reverse String

// let s = ["h", "e", "l", "l", "o"];

// function display(hayStack, needle) {
//   return str.reverse()
// }

// console.log(display(str));

// -------------------------------------------------------------------------------

// 3.valid anagram
