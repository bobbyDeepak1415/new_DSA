// let words = ["This", "is", "an", "example", "of", "text", "justification."];


 let arr=[1, [2, [3]], 4];

function display(arr) {

let result=[]

for(let i of arr){
    if(Array.isArray(item)){
        result.push(...flatten(item))
    }else{
        result.push(item)
    }

}

return result

}

// console.log(display(arr));
