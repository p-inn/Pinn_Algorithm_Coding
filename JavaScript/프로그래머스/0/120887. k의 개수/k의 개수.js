function solution(i, j, k) {
  let count = 0;
  for (let n = i; n <= j; n++) {
    count += n.toString().split(k.toString()).length - 1;
  }
  return count;
}
