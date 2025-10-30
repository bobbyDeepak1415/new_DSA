// 1.count odd nums
function display(low, high) {
  
    let count=0
    for(let i=low;i<=high;i++){
        if(i%2!==0) count++
    }

    return count


}

console.log(display(1, 10));
