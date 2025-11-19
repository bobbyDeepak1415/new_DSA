let nums = [8, 45, -3, 5, -9, -2];

function display(nums) {
  let arr = [];


  for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
      arr.push(nums[i])
    }
  }

  return arr.reduce((a,b)=>a+b)

}

console.log(display(nums));

// return the sum of all negative numbers,return all the negative numbers
