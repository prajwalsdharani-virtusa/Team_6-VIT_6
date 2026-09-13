const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", function(str) {
    let rev = str.split("").reverse().join("");
    if (str === rev) {
        console.log("The string is a palindrome.");
    } else {
        console.log("The string is not a palindrome.");
    }
    rl.close();
});