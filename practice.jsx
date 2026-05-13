// i/p: [{fruits: "mango", vegetable: "radish"},
// {fruits: "apple", vegetable: "tomato"},
// {fruits: "kiwi", vegetable: "potato"},]

// o/p: [{fruits: ["mango", "apple", "kiwi"],
// vegetable: ["radish", "tomato", "potato"]}]

// function display(arr){

//     let o/p=[{fruits,vegetables}]

//     for(let i=)

// }

let str = "Hello world from Bobby";

function display() {
  let result = [];
  let arr = str.split(" ");
  for (let i of arr) {
    let seen = new Set();
    for (let j of i) {
      seen.add(j);
    }

    result.push(`${i}-${seen.size}`)
  }

  return result;
}

console.log(display(str))

