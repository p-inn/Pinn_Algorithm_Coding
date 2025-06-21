function solution(number) {
    return [...number].reduce((sum, digit) => (sum + Number(digit)) % 9, 0);
}