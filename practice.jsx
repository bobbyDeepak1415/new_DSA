function display(candidates, target) {
  let result = [];

  function backTrack(start,current,remaining){

    if(remaining===0){
      result.push([...current])
      return
    }

    if(remaining<0){
      return
    }

    for(let i=start;i<candidates.length;i++){
      current.push(candidates[i])
      backTrack(i,current,remaining-candidates[i])
      current.pop()
    }

  }

  backTrack(0,[],target)

  return result;
}

// console.log(display([2, 3, 6, 7], 7));
