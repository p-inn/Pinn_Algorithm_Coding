function solution(rank, attendance) {
    return rank
    .map((r, i) => [r, i])
    .filter(([_, i]) => attendance[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3)
    .map(([_, i]) => i)
    .reduce((acc, v, idx) => acc + v * [10000, 100, 1][idx], 0);
}