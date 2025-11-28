// let words = ["This", "is", "an", "example", "of", "text", "justification."];


 let arr=[1, [2, [[3],66], 4]];

function display(arr) {

    let result=[]


    for(let i of arr){
        if(Array.isArray(i)){
            result.push(...display(i))
        }else{
result.push(i)
        }
    }


    return result


}

console.log(display(arr));
