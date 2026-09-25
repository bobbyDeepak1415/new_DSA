
let arr = [1,2,2,3,3,3,1,1,1,1]



function display(arr){

    let obj={}

    let maxCount=0
    let maxNum=0

    for(let i of arr){
        obj[i]=(obj[i] || 0)+1

        if(obj[i]>maxCount){
            maxCount=obj[i]
        }

        
    }


    for(let i of arr){
        if(obj[i]===maxCount){
            maxNum=i
        }
    }

    return maxNum


}

console.log(display(arr))



