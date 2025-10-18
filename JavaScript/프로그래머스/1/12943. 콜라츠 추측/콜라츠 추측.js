function solution(n) {

  if (n == 1) return 0;

  let cnt = 0;
  while (n !== 1 && cnt < 500 ) {
    if (n % 2 == 0) {
      n = n / 2
    } else {
      n = 3 * n + 1
    }
    cnt++;
  }

  return n == 1 ? cnt : -1;
}