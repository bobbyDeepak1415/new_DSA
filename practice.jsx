// 8.majority element

let str = "the line has the largest word in it";

function display(str, needle) {


for(let i=0;i<str.length-needle.length;i++){
    let found=true
    for(let j=0;j<needle.length;j++){

        if(str[i+j]!==needle[j]){
            found=false
        }

    }

    if(found) return i
}

return -1



}
console.log(display(str, "line"));
