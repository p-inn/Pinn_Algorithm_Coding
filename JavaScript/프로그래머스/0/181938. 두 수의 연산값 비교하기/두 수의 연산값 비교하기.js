function solution(a, b) {
    let A = a.toString() + b.toString()
    let B = 2 * a * b;
    return Math.max(Number(A), B)
}