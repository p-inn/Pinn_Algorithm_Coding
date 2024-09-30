function solution(number) {
    let sum = 0;
    for (let digit of number) {
        sum += parseInt(digit, 10);
    }
    return sum % 9;
}
