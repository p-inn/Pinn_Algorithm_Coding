function solution(n) {
    var answer = [n];
    const sequence = [n];
      while (n !== 1) {
        if (n % 2 === 0) {
          n = n / 2;
        } else {
          n = 3 * n + 1;
        }
        answer.push(n);
      }
      return answer;
    }
    