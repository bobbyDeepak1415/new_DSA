

let str1="{[{[[]]}]}"
let str2="[{()}]"

function display(arr){

let map={"]":"[","}":"{",")":"("}

let result=[]

for(let i of arr){
    if(["{","[","("].includes(i)){
result.push(i)
    }else if(["}","]",")"].includes(i)){
        if(result.pop()!==map[i]) return false
    }
}
    
return result.length===0

}

console.log(display(str1))
