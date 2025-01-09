function solution(babbling) {
  const validWords = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach(word => {
    let temp = word;
    let prev = "";
    let isValid = true;

    while (temp.length > 0) {
      let found = false;
      for (let valid of validWords) {
        if (temp.startsWith(valid) && prev !== valid) {
          temp = temp.slice(valid.length); // 발음을 제거
          prev = valid; // 이전 발음을 갱신
          found = true;
          break;
        }
      }
      if (!found) {
        isValid = false;
        break;
      }
    }

    if (isValid && temp === "") count++;
  });

  return count;
}
