let arr = [[[45, 6], 6, [3, 4, [5, [6, 8]]]]];

function display(arr) {
  let result = []

  for(let i of arr){
    if(Array.isArray(i)){
      result.push(...display(i))
    }else{
      result.push(i)
    }
  }


  return result;
}

console.log(display(arr));
