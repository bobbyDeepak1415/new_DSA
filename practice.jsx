function display(candidates, target) {
  let result = [];

  function backTracking(start,current,remaining){

    for(let i=start;i<candidates.length;i++){
      current.push(candidates[i])
      backTracking(start,current,remaining-candidates[i])
      current.pop()
    }

  }

  backTracking(0,[],target)

  return result

}

// console.log(display([2, 3, 6, 7], 7));
