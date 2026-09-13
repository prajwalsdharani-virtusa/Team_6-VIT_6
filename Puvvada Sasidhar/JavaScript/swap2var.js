const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the first value: ", (a) => {

    rl.question("Enter the second value: ", (b) => {

        console.log("\nBefore swapping:");
        console.log("a =", a);
        console.log("b =", b);

        // Array destructuring
        [a, b] = [b, a];

        console.log("\nAfter swapping:");
        console.log("a =", a);
        console.log("b =", b);

        rl.close();
    });
});