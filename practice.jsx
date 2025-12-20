let months = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  Apr: 30,
  May: 31,
  Jun: 30,
  Jul: 31,
  Aug: 31,
  Sep: 30,
  Oct: 31,
  Nov: 30,
  Dec: 31,
};

// jan 1=wed=3
// refdayIndex=3

// march 12th

// days before march=31+28=59

// total days=59+11=70

// dayIndex=(totalDays+refdayIndex)%3
// (70+3)%3=3

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

function display(month, date) {
  let totalDays = 0;

  for (let m in months) {
    if (m === month) break;
  }
}

console.log(display(Mar, 12));

