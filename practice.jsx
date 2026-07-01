

let str="[[({{})]]"


let str3="[[{{(())}}]]"


function display(str){
    
    let map={"}":"{",")":"(","]":'['}

    let stack=[]

    for(let i of str){
        if(["{","[","("].includes(i)){
            stack.push(i)
        }else if(["}","]",")"].includes(i)){
            if(stack.pop()!==map[i]){
                return false
            }
        }
    }

    return stack.length===0
}


console.log(display(str3))