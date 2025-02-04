function solution(a, b, c, d) {
    let dice = [a, b, c, d].sort((x, y) => x - y);

    let [p, q, r, s] = dice;

    if (p === s) return 1111 * p;
    if (p === q && q === r) return (10 * p + s) ** 2;
    if (q === r && r === s) return (10 * s + p) ** 2;
    if (p === q && r === s) return (p + r) * Math.abs(p - r);
    if (p === q) return r * s; 
    if (q === r) return p * s;
    if (r === s) return p * q;

    return p;
}
