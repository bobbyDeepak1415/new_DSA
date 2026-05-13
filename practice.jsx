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

  for (let item of str) {
    for (let j of item) {
      obj[j] = (obj[j] || 0) + 1;
    }

    let seen = new Set();

    for (let j of item) {
      if (!seen.has(j)) {
        seen.add(j);
      }
    }

    if (!obj[item] > 1) {
      result.push();
    }
  }
}

console.log(display(str));