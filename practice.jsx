let nums = [8, 45, -3, 5, -9, -2];

function display(nums) {
  let positive=[]
  let negative=[]
  


  for(let i=0;i<nums.length;i++){

    if(nums[i]>0){
      positive.push(nums[i])
    }
    else if(nums[i]<0){
      
      negative.push(nums[i])
    }

  }


return [...positive,...negative]


}

console.log(display(nums));

