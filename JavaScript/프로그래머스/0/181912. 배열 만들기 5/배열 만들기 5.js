function solution(intStrs, k, s, l) {
    const answer = intStrs.map((c) => Number(c.slice(s, s + l)));
    return answer.filter(a => a > k);
}