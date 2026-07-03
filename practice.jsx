let str = "AABBCCEDDAABB";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  let seen=new Set()

  for(let i of str){
    if(!seen.has(i)){
        seen.add(i)
        result+=i+obj[i]
    }
  }

  return result

}


// console.log(display(str))
