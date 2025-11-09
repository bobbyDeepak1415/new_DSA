// 8.majority element

let str = "aplp";

function display(str) {
  let stack = (obj = {});

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];

    if(obj[char]) return char

    obj[char] = (obj[char] || 0) + 1;


  }

return -1

}

console.log(display(str));
