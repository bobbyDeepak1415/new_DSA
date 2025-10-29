// 3.2 arrays are equal or not

let arr1 = [12, 21, 33];
let arr2 = [12, 21, 33];

function display(arr1, arr2) {

    if(arr1.length!==arr2.length) return false

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]) return false
    }

    return true



}

console.log(display(arr1,arr2));
