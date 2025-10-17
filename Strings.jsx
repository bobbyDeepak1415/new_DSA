
// const arr1=  ['hello',"world","to","apple"]
const arr1=  [45,87,4,9,12,6]

function display(arr1) {

    let result=arr1.reduce((acc,num)=>acc+num)
    return result
  
}

console.log(display(arr1))
