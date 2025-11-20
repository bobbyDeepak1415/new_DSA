// return biggest negative integer

let nums = [8, 45, -3, 5, -9, -2, -33, -6, 55];

function display(nums) {

  let negative=[]
  for(let i=0;i<nums.length;i++){
    if(nums[i]<0) negative.push(nums[i])
  }

  negative.sort()

  return negative

}

console.log(display(nums));
