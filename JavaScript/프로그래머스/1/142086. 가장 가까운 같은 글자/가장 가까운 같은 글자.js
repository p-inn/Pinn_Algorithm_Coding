function solution(s) {
  const last = new Map();
  return [...s].map((ch, i) => {
    const v = last.has(ch) ? i - last.get(ch) : -1;
    last.set(ch, i);
    return v;
  });
}