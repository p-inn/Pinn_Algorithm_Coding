function solution(A, B) {
  let rotated = A;

  for (let i = 0; i < A.length; i++) {
    if (rotated === B) return i;
    rotated = rotated[rotated.length - 1] + rotated.slice(0, rotated.length - 1);
  }

  return -1;
}
