import * as readline from "readline";

function linearSearch(numbers:number[],target:number):number{
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===target){
            return i;
        }
    }

    return -1;
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter numbers separated by spaces: ",(input: string)=>{
    const numbers=input.trim().split(/\s+/).map(Number);

    if(numbers.length===0||numbers.some(Number.isNaN)){
        console.log("Please enter valid numbers.");
        rl.close();
        return;
    }

    rl.question("Enter the number to search: ",(targetInput:string)=>{
        const target=Number(targetInput);

        if(Number.isNaN(target)){
            console.log("Please enter a valid number.");
        } 
        else{
            const result=linearSearch(numbers,target);

            if(result===-1){
                console.log("Element not found.");
            } 
            else{
                console.log("Element found at index:",result);
            }
        }

        rl.close();
    });
});