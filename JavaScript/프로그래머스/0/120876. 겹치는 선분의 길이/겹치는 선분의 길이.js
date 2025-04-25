function solution(lines) {
  const counts = new Array(201).fill(0);

  for (const [start, end] of lines) {
    for (let i = start; i < end; i++) {
      counts[i + 100]++;
    }
  }

  return counts.filter(v => v >= 2).length;
}
