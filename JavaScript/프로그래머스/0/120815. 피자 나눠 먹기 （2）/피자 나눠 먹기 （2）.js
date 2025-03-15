function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(n) {
    let lcm = (6 * n) / gcd(6, n);
    return lcm / 6;
}
