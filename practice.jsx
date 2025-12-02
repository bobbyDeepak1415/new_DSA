function display(candidates, target) {
  let result = [];

  function backTrack(start, current, remaining) {
    if (remaining === 0) {
      result.push([...current]);
    }
    if (remaining < 0) {
      return;
    }

    for(let i=start;i<candidates.length;i++){
      current.push(candidates[i])
      backTrack(i,current,remaining)
    }

  }
}

// console.log(display([2,3,6,7], 7));
