function solution(n, k) {
    var answer = 0;
    let discount = Math.floor(n / 10);
    return 12000 * n + 2000 * (k - discount);
}