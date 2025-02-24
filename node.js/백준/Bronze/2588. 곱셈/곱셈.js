const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0], 10);
const B = parseInt(input[1], 10);

const B_ones = B % 10;
const B_tens = Math.floor((B / 10) % 10);
const B_hundreds = Math.floor(B / 100);

console.log(A * B_ones);
console.log(A * B_tens);
console.log(A * B_hundreds);
console.log(A * B);
