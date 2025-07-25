function solution(arr) {
  return arr.map((n) => Array(n).fill(n)).flat();
}
