
let arr=[1, 3, 5, 2, 4, 3]
function display(arr,k){

    let result=0

    for(let i=0;i<arr.length;i++){
        let local=arr[i]
        for(let j=i+1;j<arr.length;j++){

            if(arr[j]<local){
                local=arr[j]
            }

        }
    }

    return local

}


console.log(display(arr,k))