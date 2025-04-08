function solution(array) {
  return array
    .join("") 
    .split("")
    .filter(c => c === "7")
    .length;
}