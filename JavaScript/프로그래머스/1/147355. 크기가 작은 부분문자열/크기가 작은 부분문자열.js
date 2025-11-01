function solution(t, p) {
  const m = p.length;
  let count = 0;
  for (let i = 0; i <= t.length - m; i++) {
    const sub = t.slice(i, i + m);
    if (sub <= p) count++;
  }
  return count;
}