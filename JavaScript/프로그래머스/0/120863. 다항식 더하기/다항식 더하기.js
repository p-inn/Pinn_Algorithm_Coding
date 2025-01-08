function solution(polynomial) {
  let [xSum, constantSum] = [0, 0];

  polynomial.split(" ").forEach(term => {
    if (term.includes("x")) {
      xSum += term === "x" ? 1 : parseInt(term.replace("x", ""));
    } else if (term !== "+") {
      constantSum += parseInt(term);
    }
  });

  const xPart = xSum ? (xSum === 1 ? "x" : `${xSum}x`) : "";
  const constantPart = constantSum ? `${constantSum}` : "";

  return [xPart, constantPart].filter(Boolean).join(" + ");
}
