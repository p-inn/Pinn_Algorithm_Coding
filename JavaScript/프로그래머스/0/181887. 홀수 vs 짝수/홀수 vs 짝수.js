function solution(num_list) {
    const sumA = num_list
    .filter((_, index) => index % 2 === 1)
    .reduce((acc, cur) => acc + cur, 0);
    const sumB = num_list
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
    return sumA > sumB ? sumA : sumB;
}