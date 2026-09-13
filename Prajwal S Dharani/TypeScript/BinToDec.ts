import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a binary number: ", (bin: string) => {
    let dec: number = 0;
    for (let i = 0; i < bin.length; i++) {
        dec = dec * 2 + Number(bin[i]);
    }
    console.log("Binary number:", bin);
    console.log("Decimal number:", dec);
    rl.close();
});