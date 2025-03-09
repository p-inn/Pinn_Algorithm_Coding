const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const X = parseInt(input[0], 10);
const N = parseInt(input[1], 10);

let sum = 0;

for (let i = 2; i < N + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  sum += a * b;
}

console.log(sum === X ? "Yes" : "No");
