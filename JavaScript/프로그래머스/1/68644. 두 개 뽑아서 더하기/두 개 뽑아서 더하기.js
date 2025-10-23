function solution(numbers) {
  const sums = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      sums.add(sum);
    }
  }

  const result = Array.from(sums);
  return result.sort((a,b) => a - b);
}