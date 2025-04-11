function solution(sides) {
    const [a, b] = sides.sort((a, b) => a - b);
    let minX = b - a + 1;
    let maxX = a + b - 1;
    return maxX - minX + 1;
}