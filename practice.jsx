const subjects = ["Maths", "English", "Telugu", "Geography", "Physics"];

function display(subs, pageNo, pageSize) {
  let startIndex = (pageNo - 1) * pageSize;

  let lastIndex = startIndex + pageSize;

  return subs.slice(startIndex, lastIndex);
}

console.log(display(subjects, 3, 2));


// Implement a function in javascript that paginates the list into pages of size N and returns the items for a given pageNumber
