function solution(numbers) {
const all = Array.from({ length: 10 }, (_, i) => i)
  return all.filter(n => !numbers.includes(n)).reduce((acc, cur) => acc + cur, 0);
}