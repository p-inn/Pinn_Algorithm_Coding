function solution(binomial) {
    let [a, op, b] = binomial.split(" ");
    a = parseInt(a);
    b = parseInt(b);
    
    if (op === '+') {
        return a + b;
    } else if (op === '-') {
        return a - b;
    } else if (op === '*') {
        return a * b;
    }
}
