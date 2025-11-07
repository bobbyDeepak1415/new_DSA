// 8.majority element

let str1="anagram"
let str2="nagaram"


function display(str1,str2){

  return (
    [...str1].sort((a, b) => a.localeCompare(b)).join("") ===
    [...str2].sort((a, b) => a.localeCompare(b)).join("")
  );
  

}

console.log(display(str1,str2))



