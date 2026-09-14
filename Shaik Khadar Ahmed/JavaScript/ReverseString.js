const readline=require("readline");

function reverseString(text){
    return text.split("").reverse().join("");
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a string: ",(text)=>{
    const result=reverseString(text);

    console.log("Reversed string:",result);

    rl.close();
});