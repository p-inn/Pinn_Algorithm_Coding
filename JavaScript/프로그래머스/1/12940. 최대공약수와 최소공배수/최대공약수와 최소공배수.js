function solution(n, m) {
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
  const g = gcd(n, m);
  const l = (n * m) / g;
  return [g, l];
}
