function solution(n, m) {
    let result = 1;
    for (let i = 0; i < m; i++) {
        result *= (n - i);
        result /= (i + 1);
    }
    return result;
}