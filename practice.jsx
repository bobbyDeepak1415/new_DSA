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

// curDayIndex=(total+refDay)%7

// total+=months[m]
// total+=date-1
// monthPrev=

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

function display(month, date) {

let referDayIndex=3

let totaldays=0

for(let m in months){
  if(m===month) break
  totaldays+=months[m]
}

totaldays+=date-1

const dayIndex=(totaldays+referDayIndex)%7


  return days[dayIndex]

}

console.log(display("Mar", 12));





