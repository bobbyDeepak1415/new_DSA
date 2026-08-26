

let str1="suceess"

function display(str){

    let stack=[]

    for(let i of str){
        if(stack.includes(i)) return i
        stack.push(i)
    }



}

console.log(display(str1))
