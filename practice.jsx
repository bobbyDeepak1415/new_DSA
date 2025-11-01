// 1.hashmap


// let arr1=[4,4,3,3,3,3,5,6,5,5,5,5]



let str="{{{[({})]}}}"
let str1="{{}{[({})]}}}"


// function display(arr) {
    


// }
// console.log(display(arr1));

// 0,1,1,2,3,5,8
// 0,1,2,3,4,5,6



 function display(num){

    if(num===0) return 0
    if(num===1) return 1

    let prev=0
    let current=1
    let next

    for(let i=2;i<=num;i++){

        next=prev+current
        current=next
        prev=current
        
    }

    return next




 }
console.log(display(6))
