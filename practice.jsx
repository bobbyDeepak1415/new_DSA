

const nums = [2, 7, 11, 15];

function display(arr,target){

    let result=[]

    for(let i of nums){
        for(let j of nums){
            if(i+j===target){
                result.push(i,j)
            }
        }
    }

   return result
}

// console.log(display(nums,22))