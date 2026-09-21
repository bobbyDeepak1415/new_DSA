const user = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};

// You take the function out of the 'user' object and put it in a standalone variable
const standaloneGreet = user.greet;

standaloneGreet()