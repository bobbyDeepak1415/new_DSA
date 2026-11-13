
// k=

let arr1=[12,7,4,1.4,2,5,6,9]


function display(arr){

    // let result=[]

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let k=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=k
            }
        }
    }

    return arr
   
}


// console.log(display(arr1))