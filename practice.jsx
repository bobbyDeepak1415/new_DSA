// i/p: [{fruits: "mango", vegetable: "radish"},
// {fruits: "apple", vegetable: "tomato"},
// {fruits: "kiwi", vegetable: "potato"},]

// o/p: [{fruits: ["mango", "apple", "kiwi"],
// vegetable: ["radish", "tomato", "potato"]}]

// function display(arr){

//     let o/p=[{fruits,vegetables}]

//     for(let i=)

// }


let str="Hello World"


function display(str){

    let arr=str.split(" ")

    let result=[]

    for(let i of arr){
        let seen=new Set()
        for(let j of i){
            seen.add(i)
        }

        result.push(`${i}-${seen.size}`)
    }



    // return arr

}


// console.log(display(str))