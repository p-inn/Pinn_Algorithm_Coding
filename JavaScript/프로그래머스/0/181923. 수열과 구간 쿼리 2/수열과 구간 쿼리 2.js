function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let best = Infinity;

    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < best) {
        best = arr[i];
      }
    }

    return best === Infinity ? -1 : best;
  });
}