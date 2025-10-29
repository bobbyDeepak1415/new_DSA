// 5.missing number

let arr1=[0,1,2,3,4,5,6,7,8,10]

function display(arr) {

    let sum=arr.reduce((a,b)=>a+b,0)

    return (arr.length*arr.length+1)



}
console.log(display(arr1));
