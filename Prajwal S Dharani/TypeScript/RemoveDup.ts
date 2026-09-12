import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a string: ", (str: string) => {
    let result: string = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    console.log("Original string:", str);
    console.log("After removing duplicates:", result);
    rl.close();
});