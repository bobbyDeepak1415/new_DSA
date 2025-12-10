let str = "PPPGGJJKGGKKPJ";

function display(str) {
  let result = "";

  let obj = {};

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  return obj



}
// console.log(display(str));
