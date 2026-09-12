import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by spaces: ", (input: string) => {

    const arr: string[] = input.split(" ");

    rl.question("Enter the element to search: ", (element: string) => {

        let count: number = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                count++;
            }
        }

        console.log("Array:", arr);
        console.log(`Occurrences of "${element}":`, count);

        rl.close();
    });
});