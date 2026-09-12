import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input: string) => {

    const characters: string[] = input.toLowerCase().split("");
    const duplicates: string[] = [];

    for (let i = 0; i < characters.length; i++) {

        if (
            characters.indexOf(characters[i]) !== i &&
            !duplicates.includes(characters[i]) &&
            characters[i] !== " "
        ) {
            duplicates.push(characters[i]);
        }
    }

    if (duplicates.length === 0) {
        console.log("No duplicate characters found.");
    } else {
        console.log("Duplicate characters:", duplicates.join(", "));
    }

    rl.close();
});