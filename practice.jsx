// return biggest negative integer

let nums = [8, 45, -1, 5, -9, -2, -33, -6, 55];

function display(nums) {

  let negative=[]
  let positive=[]
  for(let i=0;i<nums.length;i++){
    if(nums[i]<0) negative.push(nums[i])
    if(nums[i]>0) positive.push(nums[i])
  }


  return [...positive,...negative]

}

console.log(display(nums));
