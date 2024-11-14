function solution(strArr) {
  const lengthMap = new Map();

  for (const str of strArr) {
    const len = str.length;
    lengthMap.set(len, (lengthMap.get(len) || 0) + 1);
  }


  let maxCount = 0;
  for (const count of lengthMap.values()) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
}
