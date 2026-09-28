
let arr=[1, 3, 5, 2, 4, 3]
function display(arr,k){

   let result 

   for(let i=0;i<arr.length;i+=k){
    let local=arr[i]
    for(let j=i+1;j<arr.length && j<i+k;j++){
        if(arr[j]<local){
            localVal=arr[j]
        }
    }

    if(local>result){
        result=local
    }
   }

    return result
}

// console.log(display(arr,3))

// 1.break down into subsets of size k 
// 2.find the smallest num in the subset
// 3.Among these smallest,find the largest 