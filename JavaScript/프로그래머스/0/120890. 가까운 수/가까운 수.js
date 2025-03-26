function solution(array, n) {
array.sort((a, b) => {
  const distA = Math.abs(a - n);
  const distB = Math.abs(b - n);

  if (distA === distB) return a - b;

  return distA - distB;
});

return array[0];

}