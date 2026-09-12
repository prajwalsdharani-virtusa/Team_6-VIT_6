const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a date (YYYY-MM-DD): ", (input) => {

    const date = new Date(input);

    if (isNaN(date.getTime())) {
        console.log("Invalid date!");
    } else {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;

        console.log("Formatted Date:", formattedDate);
    }

    rl.close();
});