let str = "AABBBCDDDEEEEE";
function display(str) {
  let obj = {};

  let result = "";

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let checked=new Set()

  for(let i=0;i<str.length;i++){
    let item=str[i]
    if()
  }

  return result;
}

console.log(display(str));
