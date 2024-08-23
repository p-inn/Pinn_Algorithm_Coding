function solution(n) {
    const answer = [];
    let divisor = 2;
    
    while (n > 1) {
        if (n % divisor === 0) {
            answer.push(divisor);
            while (n % divisor === 0) {
                n /= divisor;
            }
        }
        divisor++;
    }
    
    return answer;
}
