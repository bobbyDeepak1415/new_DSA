// 1.array questions

let arr1=[3,8,5,9,2,4]

function display(arr1,num){

    for(let i=0;i<arr1.length;i++){
        for(let j=i+1;j<arr1.length-1;i++){
            if(arr1[i]+arr1[j]===num) return [i,j]
        }
    }

return 

}

// console.log(display(arr1,9))