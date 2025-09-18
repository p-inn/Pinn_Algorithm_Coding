function solution(arr, queries) {
  const answer = [];

  for (const [s, e, k] of queries) {
    let best = Infinity;

    for (let i = s; i <= e; i++) {
      const x = arr[i];
      if (x > k && x < best) best = x;
    }

    answer.push(best === Infinity ? -1 : best);
  }

  return answer;
}