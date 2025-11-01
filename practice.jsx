// 1.no of unique elements

let arr1 = [3,  4, 3, 4, 4, 4, 5];

function display(arr1) {

    let k=1

    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr1[i-1]){
            arr1[k]=arr1[i]
            k++
        }
    }

    return k
 


}
console.log(display(arr1));
