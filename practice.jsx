// 1.hashmap


// let arr1=[4,4,3,3,3,3,5,6,5,5,5,5]



let str="{{{[({})]}}}"
let str1="{{}{[({})]}}}"


function display(str) {

    let map = { "}": "{", "]": "[", ")": "(" };

    let cache=[]

    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(["{","[","("].includes(char)){
            cache.push(char)
        }else if(["}","]",")"].includes(char)){
            if(cache.pop()!==map[char]) return false
        }

    }

    return cache.length===0




}
console.log(display(str1));
