// 5.move all zeroes to left

let arr1 = [5, 6, 0, 0, 4, 0];

function display(arr) {

    let k=0

    for(let i=0;i<arr.length;i++){

        if(arr[i]===0){
            arr1[k]=arr[i]
            k++
        }

    }

    return arr
  


}

console.log(display(arr1));

