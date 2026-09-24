
let arr = [2, 2, 2, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5];



function display(arr){

    let obj={}
let maxCount=0

    for(let i of arr){
        obj[i]=(obj[i] || 0)+1
    }

    for(let i of arr){
        if(obj[i]>maxCount){
            maxCount=obj[i]
        }
    }

    return maxCount


}

console.log(display(arr))



