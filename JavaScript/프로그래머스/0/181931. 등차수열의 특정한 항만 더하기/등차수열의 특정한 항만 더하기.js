function solution(a, d, included) {
  let sum = 0;

  included.forEach((include, index) => {
    if (include) {
      sum += a + d * index;
    }
  });

  return sum;
}
