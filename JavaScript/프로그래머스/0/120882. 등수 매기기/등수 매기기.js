function solution(score) {
    const averages = score.map(([eng, math]) => (eng + math) / 2);
    const sorted = [...averages].sort((a, b) => b - a);
    const answer = averages.map(score => sorted.indexOf(score) + 1);
    return answer;
}