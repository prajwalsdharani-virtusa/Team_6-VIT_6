const readline=require("readline");

function swapVariables(firstValue,secondValue) {
    [firstValue,secondValue]=[secondValue,firstValue];

    return [firstValue,secondValue];
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter the first value: ",(firstValue)=>{
    rl.question("Enter the second value: ",(secondValue)=>{

        const swappedValues=swapVariables(firstValue,secondValue);

        console.log("After swapping:");
        console.log("First value:",swappedValues[0]);
        console.log("Second value:",swappedValues[1]);

        rl.close();
    });
});