// 8.majority element

let str = "   anagram    jello is    ";

function display(str) {


    return str.trim().split(/\s+/).at(-1).length



}

console.log(display(str));
