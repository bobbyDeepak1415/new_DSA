


let hayStack = "Bobby is a man and a Developer";
let needle = "Developer";


function display(hayStack,needle){
    
    let arr1=hayStack.split("")
    

    
for(let i=0;i<arr1.length;i++){
    if(arr1[i]===needle){
        return i
    }
}




}

console.log(display(hayStack,needle))
