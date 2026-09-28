// 1. Get the Minimum no repeating Subsets 
	// input: "abdaa" 
	// output: 3
	// explaination: 
	// 	--> ["abd", "a", "a"] -- 3 elements
	// 		["a", "b", "d", "a", "a"] -- 4 elements


function display(str){

let obj={}

    for(let i of str){
obj[i]=(obj[i] || 0)+1
    }

    let result=0
    for(let i of Object.values(obj)){
        if(i>result){
            result=i
        }
    }

    
return result
}

console.log(display("sertaaaaaeeeee"))

