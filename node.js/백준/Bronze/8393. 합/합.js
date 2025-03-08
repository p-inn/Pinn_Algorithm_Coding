const fs = require('fs');

const n = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

let sum = (n * (n + 1)) / 2;

console.log(sum);
