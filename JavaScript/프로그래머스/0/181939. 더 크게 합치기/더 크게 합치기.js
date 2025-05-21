function solution(a, b) {
    const sumA = a.toString()+b.toString();
    const sumB = b.toString()+a.toString();
    return Math.max(sumA, sumB);
}