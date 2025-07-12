function solution(arr, n) {
    const sumA = arr.map((v, i) => i % 2 === 0 ? v + n : v);
    const sumB = arr.map((v, i) => i % 2 !== 0 ? v + n : v);
    return arr.length % 2 == 0 ? sumB : sumA;
}