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

    for(let i=1;i<str.length;i++){
        if(i===i-1) return "repeat"
        else{
result+=i
        }
        
    }
return result
}

// console.log(display("abdaa"))