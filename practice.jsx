


let str = "AAABBCCCCCDDBBBBB";
let str1 = "PPPGGJJKGGKKPJ";



function display(str) {


    let obj={}

    let result=""

    for(let i of str){
        obj[i]=(obj[i] || 0)+1

    }

    let checked=new Set()

    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(!checked.has(char)){
            checked.add(char)
            result+=char+obj[char]
        }
    }

    return result

}

// console.log(display(str));
