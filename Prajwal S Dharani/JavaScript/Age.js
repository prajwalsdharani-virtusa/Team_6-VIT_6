const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter your date of birth (YYYY-MM-DD): ", function(dob) {
    let bd = new Date(dob);
    let tdy = new Date();
    let age = tdy.getFullYear() - bd.getFullYear();
    let month = tdy.getMonth() - bd.getMonth();
    if (month < 0 || (month === 0 && tdy.getDate() < bd.getDate())) {
        age--;
    }
    console.log("Your age is:", age);
    rl.close();
});