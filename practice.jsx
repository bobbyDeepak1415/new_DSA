let nums = [8, 45, -3, 5, -9, -2];

function display(nums) {
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
let char=nums[i]
    if(char<0){
      arr.push(char)
    }

  }

  return arr.reduce((a,b)=>a+b)

}

console.log(display(nums));

// return the sum of all negative numbers,return all the negative numbers
