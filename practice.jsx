const subjects = ["Maths", "English", "Telugu", "Geography", "Physics"];

function display(subs, pageNo, pageSize) {

    let startIndex=(pageNo-1)*pageSize

    let endIndex=startIndex+pageSize

    return subs.slice(startIndex,endIndex)
}

console.log(display(subjects,2,3));

// Implement a function in javascript that paginates the list into pages of size N and returns the items for a given pageNumber
