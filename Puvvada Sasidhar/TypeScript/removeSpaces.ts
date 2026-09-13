import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input: string) => {

    const result: string = input.replace(/\s/g, "");

    console.log("Original String:", input);
    console.log("String without spaces:", result);

    rl.close();
});