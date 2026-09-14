let str = "javascript programming language";
let titleCase = str
.toLowerCase()
.split(" ")
.map(word => 
word.charAt(0).toUpperCase() +
word.slice(1))
.join(" ");
console.log(titleCase);

