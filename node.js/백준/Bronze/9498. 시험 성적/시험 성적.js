const fs = require('fs');

const score = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('F');
}