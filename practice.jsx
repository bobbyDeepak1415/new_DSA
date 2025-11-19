let nums = [8, 45, -3, 5, -9, -2];

function display(nums) {
  let arr = [];

  let k=0

  for (let i = 0; i < nums.length; i++) {
let char=nums[i]
    if(char<0){
      arr[k]=arr[i]
      k++
    }

  }



  return arr

}

console.log(display(nums));

// return the sum of all negative numbers,return all the negative numbers
