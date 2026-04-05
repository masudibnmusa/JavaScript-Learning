const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the 1st number : ", function(a) {
    rl.question("Enter the 2nd number : ", function(b) {

        let sum = Number(a) + Number(b);

        console.log("Sum is : ", sum);

        rl.close();
    });
});