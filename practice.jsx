
let arr=[1,2,3,4,4,3,5]

function display(str){

    let result=[]

    let obj={}

    for(let i of arr){
obj[i]=(obj[i] || 0)+1
    }



    for(let i of arr){
        if(obj[i]===1){
            result.push(i)
        }
    }


    return result

  
}

console.log(display(arr))