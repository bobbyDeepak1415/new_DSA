

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

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

// totalDays=all the months days before +the days before ref in this month

function display(month,date) {


    let totalDays=0

    for(let m in months){
        if(m===month) break
        totalDays+=months[m]
    }

    totalDays+=date-1


    let startRef=6
  
    let dayIndex=(startRef+totalDays)%7

  return days[dayIndex];
}

console.log(display("Sep",28));
