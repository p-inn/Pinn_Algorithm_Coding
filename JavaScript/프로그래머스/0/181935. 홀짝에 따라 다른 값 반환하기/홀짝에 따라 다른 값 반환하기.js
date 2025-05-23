function solution(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += (n % 2 === 1)
      ? (i % 2 === 1 ? i : 0)
      : (i % 2 === 0 ? i * i : 0);
  }

  return sum;
}
