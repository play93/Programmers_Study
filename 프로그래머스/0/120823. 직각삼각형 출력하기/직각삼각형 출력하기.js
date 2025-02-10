const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let inputNum = Number(input)
    for(let i=0; i<inputNum; i++){
        console.log("*".repeat(i+1))
    };
});