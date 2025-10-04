function solution(arr, divisor) {
    let divisorE = arr.filter(e => e % divisor === 0);
    return divisorE.length == 0 ? [-1] : divisorE.sort((a, b) => a - b);
}