
let str="abdaa"
function display(arr,k){

    let result=0

    for(let i=0;i<arr.length;i+=k){
        // let local=arr[i]
        for(let j=i+1;j<arr.length &&j<i+k;j++){

            if(arr[j]<arr[i]){
                arr[i]=arr[j]
            }

        }

        if(i===0 || arr[i]>result){
            result=arr[i]
        }
    }

    return result
    

}


console.log(display(arr,2))