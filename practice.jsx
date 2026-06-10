

const nums = [2, 7, 11, 15,2];

function display(arr,target){

    let result=[]

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                result.push(i,j)
            }
        }
    }

   
   return result
}

console.log(display(nums,9))