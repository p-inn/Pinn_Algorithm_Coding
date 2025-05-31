function solution(numLog) {
  const commandMap = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a"
  };

  let result = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    const diff = numLog[i + 1] - numLog[i];
    result += commandMap[diff];
  }

  return result;
}
