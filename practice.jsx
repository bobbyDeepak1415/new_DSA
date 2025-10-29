// 7.number present or not

let arr1 = [ 12, 2, 33, 41, 52, 6, 71, 80, 9, 10];


function display(num,arr){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===num) return true
    }

    return false
  
}

console.log(display(52,arr1))

const result=arr1.indexOf(33)
console.log(result)