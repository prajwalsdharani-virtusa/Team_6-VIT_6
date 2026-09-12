import * as readline from "readline";

function sumOfDigits(number:number):number{
    number=Math.abs(number);

    let sum=0;

    while (number>0){
        sum=sum+(number%10);
        number=Math.floor(number/10);
    }

    return sum;
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a number: ", (input: string) => {
    const number=Number(input);

    if(!Number.isInteger(number)){
        console.log("Please enter a valid integer.");
    } 
    else{
        console.log("Sum of digits:",sumOfDigits(number));
    }

    rl.close();
});