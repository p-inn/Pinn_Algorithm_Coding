function solution(rank, attendance) {

  const candidates = rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i]);

  candidates.sort((a, b) => a[0] - b[0]);

  const [a, b, c] = candidates.slice(0, 3).map(([_, i]) => i);

  return 10000 * a + 100 * b + c;
}