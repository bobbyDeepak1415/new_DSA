
let str="AAABABBCCDDDAB"

function display(str){

    let result=""

    let obj={}

for(let i of arr){
    obj[i]=(obj[i] || 0) +1
}


let seen=new Set()

for(let i of arr){
    if(!seen.has(i)){
        seen.add(i)
        result+=i+obj[i]
    }
}

return result
    
}

// console.log(display(str))


