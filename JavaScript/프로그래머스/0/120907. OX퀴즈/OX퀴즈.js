function solution(quiz) {
  return quiz.map(q => {
    const [X, op, Y, , Z] = q.split(" ");
    const result = op === "+" ? +X + +Y : +X - +Y;
    return result === +Z ? "O" : "X";
  });
}
