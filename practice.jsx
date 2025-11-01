// 1.hashmap


// let arr1=[4,4,3,3,3,3,5,6,5,5,5,5]



let str="{{{[({})]}}}"
let str1="{{}{[({})]}}}"


// function display(arr) {
    


// }
// console.log(display(arr1));

// 0,1,1,2,3,5,8
// 0,1,2,3,4,5,6

// prev=0
// current=1
// next

// 1
// next=0+1=1
// prev=1
// current=1

// 2
// next=2
// prev=1
// current=2

// 3
// next=3
// prev=2
// current=3

// 4
// next=5
// prev=3
// current=5

// 6
// next=8
// prev=5
// current=8




 function display(num){

    if(num===0) return 0
    if(num===1) return 1

    let prev=0
    let current=1
    let next

    for(let i=2;i<=num;i++){

        next=prev+current
        prev=current
        current=next
        
    }

    return next




 }
console.log(display(6))
