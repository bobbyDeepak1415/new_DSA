
let arr = [1,2,3,3,3,3,4,4]



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


    


}

// console.log(display(arr))



