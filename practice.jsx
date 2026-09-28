// 1. Get the Minimum no repeating Subsets 
	// input: "abdaa" 
	// output: 3
	// explaination: 
	// 	--> ["abd", "a", "a"] -- 3 elements
	// 		["a", "b", "d", "a", "a"] -- 4 elements


function display(str){

let obj={}
let result=""
    for(let i of str){
obj[i]=(obj[i] || 0)+1
    }

    for(let i=0;i<str.length;i++){
        if(str[i]!=str[i-1]) {

            result+=str[i]
        }
        
    }
return result
}

console.log(display(""))