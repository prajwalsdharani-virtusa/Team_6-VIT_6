import * as readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a binary number: ", (binary: string) => {

    let decimal: number = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal = decimal * 2 + Number(binary[i]);
    }

    console.log("Binary number:", binary);
    console.log("Decimal number:", decimal);

    rl.close();
});