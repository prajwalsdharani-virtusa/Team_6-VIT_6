import * as readline from "readline";

function findShortestWord(sentence: string): string {
    const words = sentence.trim().split(/\s+/);

    let shortest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }

    return shortest;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (sentence: string) => {

    if (sentence.trim().length === 0) {
        console.log("Sentence is empty.");
    } else {
        console.log("Shortest word:", findShortestWord(sentence));
    }

    rl.close();
});