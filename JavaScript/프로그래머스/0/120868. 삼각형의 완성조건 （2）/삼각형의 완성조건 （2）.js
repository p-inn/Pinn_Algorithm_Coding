function solution(sides) {
  const [a, b] = sides.sort((x, y) => x - y);
  const L = (b - a) + 1;
  const R = (a + b) - 1; 
  return R - L + 1;
}