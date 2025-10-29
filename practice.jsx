// 6.missing number

let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8,9, 10];

function display(arr) {

    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }

    return (arr.length*(arr.length+1))/2-sum



}
console.log(display(arr1));
