const readline=require("readline");

function formatDate(date){
    const year=date.getFullYear();
    const month=String(date.getMonth()+1).padStart(2,"0");
    const day=String(date.getDate()).padStart(2,"0");

    return `${year}-${month}-${day}`;
}

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter a date (YYYY-MM-DD): ",(input)=>{
    const date=new Date(input);

    if(Number.isNaN(date.getTime())){
        console.log("Please enter a valid date.");
    } 
    else{
        console.log("Formatted date:",formatDate(date));
    }

    rl.close();
});