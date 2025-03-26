function solution(numbers) {
  const wordList = ["zero","one","two","three","four","five","six","seven","eight","nine"];

  wordList.forEach((word, i) => {
    numbers = numbers.split(word).join(i);
  });

  return Number(numbers);
}
