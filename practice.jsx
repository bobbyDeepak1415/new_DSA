// 8.majority element

let nums = [ 1, 1, 1, 2, 2, 3];

function display(nums) {

  let k=1

  for(let i=1;i<nums.length;i++){
    if(nums[i]!==nums[i-1]){
      nums[k]=nums[i]
      k++
    }
  }

  return nums.splice(0,k)



}

console.log(display(nums)); // [0, 1, 2, 3, 4]
