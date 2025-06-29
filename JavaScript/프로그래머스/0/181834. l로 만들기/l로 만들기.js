function solution(myString) {
    var answer = '';
    let A = myString.split('');
    for (let i = 0; i < A.length; i++) {
      if (A[i] < 'l') {
        answer += 'l';
      } else {
        answer += A[i];
      }
    }
    return answer;
}