// i/p: [{fruits: "mango", vegetable: "radish"},
// {fruits: "apple", vegetable: "tomato"},
// {fruits: "kiwi", vegetable: "potato"},]

// o/p: [{fruits: ["mango", "apple", "kiwi"],
// vegetable: ["radish", "tomato", "potato"]}]

// function display(arr){

//     let o/p=[{fruits,vegetables}]

//     for(let i=)

// }

let str = "Hello World";

function display(str) {
  let obj = {};

  let result = [];

  let arr = str.split(" ");
  for (let item of arr) {
    let seen = new Set();
    for (let j of item) {
      if (!seen.has(j)) {
        seen.add(j);
      }
    }
  }
}

console.log(display(str));
