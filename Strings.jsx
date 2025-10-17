console.log("hello");

const myName = "Bobby";

function display(myName) {

    let index=-1

  for (let i = 0; i < myName.length; i++) {
    if (myName[i] === "y") {
     index=i

    }
  }

return index

}

console.log(display(myName))
