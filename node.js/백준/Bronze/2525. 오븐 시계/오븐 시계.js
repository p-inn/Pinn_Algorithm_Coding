const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let totalMinutes = A * 60 + B + C;

const endHour = Math.floor(totalMinutes / 60) % 24;
const endMinute = totalMinutes % 60;

console.log(endHour, endMinute);
