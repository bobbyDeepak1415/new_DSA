
let str="AAABBCCABAA"

function display(str){

    let result=""


    let obj={}

    for(let i of str){
obj[i]=(obj[i] || 0)+1
    }

}

// console.log(display(str))