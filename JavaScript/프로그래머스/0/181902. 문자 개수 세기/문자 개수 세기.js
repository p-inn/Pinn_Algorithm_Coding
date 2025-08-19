function solution(my_string) {
  return my_string.split('').reduce((acc, ch) => {
    let code = ch.charCodeAt(0);
    let idx = code >= 97 ? code - 97 + 26 : code - 65;
    acc[idx]++;
    return acc;
  }, Array(52).fill(0));
}