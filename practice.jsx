

let str="[[({{})]]"


let str3="[[{{(())}}]]"


function display(str){
    
    let map={"}":"{",")":"(","]":'['}

let result=[]

for(let i of str){
    if(["[","{","("].includes(i)){
result.push(i)
    }else if(["]","}",")"].includes(i)){
        if(result.pop()!==map[i]){
return false
        }
    }
}

return result.length===0

}


console.log(display(str3))