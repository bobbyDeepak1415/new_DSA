// 5.pivot element

let arr1 = [5, 6, 3, 1, 4, 10];


function display(arr){

    let sum=arr.reduce((a,b)=>a+b)

    let leftSum=0
    for(let i=0;i<arr.length;i++){
        let rightSum=sum-leftSum-arr[i]

        if(leftSum===rightSum) return arr[i]
        leftSum+=arr[i]


    }

    return -1

}

console.log(display(arr1))
