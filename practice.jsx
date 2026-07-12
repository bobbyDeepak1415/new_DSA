const subjects = ["Maths", "English", "Telugu", "Geography", "Physics"];

function display(subs, pageNo, pageSize) {


    let startIndex=pageNo*pageSize-1

    let lastIndex=startIndex+page

    return subs.slice(startIndex,lastIndex)
    
}

console.log(display(subjects,3,2)); 

// Implement a function in javascript that paginates the list into pages of size N and returns the items for a given pageNumber
