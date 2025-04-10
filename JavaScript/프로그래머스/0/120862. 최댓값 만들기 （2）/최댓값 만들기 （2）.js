function solution(numbers) {
  const asc = [...numbers].sort((a, b) => a - b);
  const candidate1 = asc[0] * asc[1];
  const candidate2 = asc[asc.length - 1] * asc[asc.length - 2];
  return Math.max(candidate1, candidate2);
}