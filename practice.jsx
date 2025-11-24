// return biggest negative integer

let str = "()())()";

function display(str) {

    function isValid(str){
        let count=0

        for (let ch of str){
            if(ch==="(") count++
            else if(ch===")"){
                if(count===0) return false
                count--
            }
        }

        return count===0

    }


    let result=[]

    let found=false
    let visited=new Set([str])
    let queue=[str]



    while(queue.length>0){
        
        let current=queue.shift()

        if(isValid(current)){
            result.push(current)
            found=true

        }

        if(found=true) continue

        for(let i=0;i<current.length;i++){
            if(current[i]!=="(" && current[i]!==")") continue

            let newStr = current.slice(0, i) + current.slice( i+1);

            if()


        }



    }



 
}

// console.log(display(str));
