function solution(arr, queries) {
  for (const query of queries) {
    const i = query[0];
    const j = query[1];
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  return arr;
}