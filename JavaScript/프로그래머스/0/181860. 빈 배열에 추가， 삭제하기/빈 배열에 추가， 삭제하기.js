function solution(arr, flag) {
    var answer = [];
    for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      answer = answer.concat(Array(2 * arr[i]).fill(arr[i]));
    } else {
      answer = answer.slice(0, -arr[i]);
    }
  }
  return answer;
}
