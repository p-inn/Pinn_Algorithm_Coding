const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(parseInt(line.trim(), 10));
    if (input.length === 2) {
        rl.close();
    }
});

rl.on('close', () => {
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (x > 0 && y < 0) {
        console.log(4);
    }
});
