function solution(my_string) {
    const digits = [];

    for (let char of my_string) {
        if (!isNaN(char) && char !== ' ') {
            digits.push(Number(char));
        }
    }

    digits.sort((a, b) => a - b);

    return digits;
}