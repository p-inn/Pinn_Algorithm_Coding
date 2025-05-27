function solution(ineq, eq, n, m) {
  const operators = {
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
    '>!': (a, b) => a > b,
    '<!': (a, b) => a < b
  };

  return operators[ineq + eq](n, m) ? 1 : 0;
}
