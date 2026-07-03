let str = "AABBCCEDDAABB";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen=new Set()

}


// console.log(display(str))
