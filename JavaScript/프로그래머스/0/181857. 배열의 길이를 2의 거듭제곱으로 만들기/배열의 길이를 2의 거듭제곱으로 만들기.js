function solution(arr) {
  const n = arr.length;
  let p = 1;
    while (p < n) {
        p *= 2;
    }
  const need = p - n;
  return arr.concat(Array(need).fill(0));
}