
let str="AABBBCDDDEEEEE"
function display(str) {
    
    let result=0

    const checked=new Set()

    for(let i=0;i<str.length;i++){
        let item=str[i]
checked[item]=(checked[item]||0)+1
result+=item+checked[item]
    }

    return result

}

console.log(display(str));
