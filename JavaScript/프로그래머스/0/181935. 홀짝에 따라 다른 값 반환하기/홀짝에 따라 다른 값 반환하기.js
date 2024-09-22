function solution(n) {
    let sum = 0;

    for (let i = n % 2 === 0 ? 2 : 1; i <= n; i += 2) {
        sum += n % 2 === 0 ? i * i : i;
    }

    return sum;
}
