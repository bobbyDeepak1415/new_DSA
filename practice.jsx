// 8.majority element



let str = "the line has the largest word in it";

function display(str){

    let words=str.split(" ")
    let largest=""

    for(let i=0;i<words.length;i++){
        if(words[i].length>largest.length){
            largest=words[i]
        }
    }

return largest

}


console.log(display(str))
