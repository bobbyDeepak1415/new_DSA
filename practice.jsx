
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("set",i); //1
  }, 0);
 
  Promise.resolve().then(() => {
    console.log("P", i); //2
  });
}
 
console.log("End"); //3

// p,0
// p,1
// p,2
// set,o
// set,1
// set,2