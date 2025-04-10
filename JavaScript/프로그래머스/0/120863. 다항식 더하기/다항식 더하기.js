function solution(polynomial) {
  const terms = polynomial.split(" ");
  let xSum = 0;
  let numSum = 0;

  terms.forEach(term => {
    if (term.includes("x")) {
      const num = term === "x" ? 1 : parseInt(term.replace("x", ""));
      xSum += num;
    } else if (term !== "+") {
      numSum += parseInt(term);
    }
  });

  const result = [];
  if (xSum) result.push(xSum === 1 ? "x" : `${xSum}x`);
  if (numSum) result.push(numSum);
  return result.join(" + ");
}
