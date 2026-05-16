


let str="Hello World from Bobby"

function display(str){

    let result=[]


    let arr=str.split(" ")


    for(let i of arr){
        let seen=new Set()
        for(let j of i){
            seen.add(j)
        }

        result.push(`${i}-${seen.size}`)
    }

    return result

}


console.log(display(str))