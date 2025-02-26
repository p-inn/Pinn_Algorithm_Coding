const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
    }
    return false; 
}

console.log(isLeapYear(input) ? '1' : '0');
