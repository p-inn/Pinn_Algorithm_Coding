function solution(common) {
  const isArithmetic = common[1] - common[0] === common[2] - common[1];

  if (isArithmetic) {
    const diff = common[1] - common[0];
    return common[common.length - 1] + diff;
  } else {
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  }
}
