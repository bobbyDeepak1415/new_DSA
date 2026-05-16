let input = [
  { fruits: "mango", nuts: "almonds", vegetable: "radish" },
  { nuts: "brazil nuts", fruits: "apple", vegetable: "tomato" },
  { fruits: "kiwi", vegetable: "potato" },
];

function display(givenArr) {
  let res = {};

  givenArr.forEach((obj) => {
    Object.entries(obj).forEach(([key, val]) => {
      if (res[key]) {
        res[key].push(val);
      } else {
        res[key] = [val];
      }
    });
  });

  return res;
}

console.log(display(input));
