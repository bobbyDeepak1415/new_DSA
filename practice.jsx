// 8.majority element

// let str="Bobby is a skilled developer"
let str = "sucess";

function display(str) {
  let obj = {};

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];
    if (obj[char]) return char;
    else {
      obj[char] = true;
    }
  }
}

console.log(display(str));
