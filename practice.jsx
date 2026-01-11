let store = { "}": "{", "]": "[", ")": "(" };

let str = "([[{{}]}]])";
// let str = "{[[()]]}";

// / let str = "AAABBCCCCCDD";
// // let str1 = "PPPGGJJKGGKKPJ";


function display(str) {

    let stack=[]
for(let i=0;i<str.length;i++){

    let char=str[i]
    if(["(","{","["].includes()){
        stack.push(char)
    }
    }


 }

// console.log(display("[{((),[],[()])}]"));
