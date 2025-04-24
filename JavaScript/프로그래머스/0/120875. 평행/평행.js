function solution(dots) {
  const getSlope = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return (y2 - y1) / (x2 - x1);
  };

  const combinations = [
    [[0, 1], [2, 3]],
    [[0, 2], [1, 3]],
    [[0, 3], [1, 2]],
  ];

  for (let [[a, b], [c, d]] of combinations) {
    const slope1 = getSlope(dots[a], dots[b]);
    const slope2 = getSlope(dots[c], dots[d]);
    if (slope1 === slope2) return 1;
  }

  return 0;
}
