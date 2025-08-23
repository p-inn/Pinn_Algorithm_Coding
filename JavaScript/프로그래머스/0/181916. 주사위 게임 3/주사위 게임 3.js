function solution(a, b, c, d) {
  const cnt = {};
  for (const x of [a, b, c, d]) cnt[x] = (cnt[x] ?? 0) + 1;

  const entries = Object.entries(cnt).map(([v, f]) => [Number(v), f]);
  const freqs = entries.map(([, f]) => f).sort((x, y) => y - x);
  if (freqs[0] === 4) {
    const p = entries[0][0];
    return 1111 * p;
  }

  if (freqs[0] === 3) {
    const p = entries.find(([, f]) => f === 3)[0];
    const q = entries.find(([, f]) => f === 1)[0];
    return (10 * p + q) ** 2;
  }

  if (freqs[0] === 2 && freqs[1] === 2) {
    const [p, q] = entries.map(([v]) => v);
    return (p + q) * Math.abs(p - q);
  }
  if (freqs[0] === 2) {
    const singles = entries.filter(([, f]) => f === 1).map(([v]) => v);
    return singles[0] * singles[1];
  }
  return Math.min(a, b, c, d);
}
