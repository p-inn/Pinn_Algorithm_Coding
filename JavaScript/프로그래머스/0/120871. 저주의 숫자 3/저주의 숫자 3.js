function solution(n) {
    let count = 0;
    let currentNumber = 0;

    while (count < n) {
        currentNumber++;
        if (currentNumber % 3 !== 0 && !currentNumber.toString().includes('3')) {
            count++;
        }
    }

    return currentNumber;
}
