function solution(picture, k) {
  const answer = [];

  for (let row of picture) {

    const enlargedRow = row
      .split("")
      .map((char) => char.repeat(k))
      .join("");

    for (let i = 0; i < k; i++) {
      answer.push(enlargedRow);
    }
  }

  return answer;
}
