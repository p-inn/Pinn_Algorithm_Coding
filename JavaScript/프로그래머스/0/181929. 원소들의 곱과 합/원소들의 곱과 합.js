function solution(num_list) {
    var answer = 0;
    const A = num_list.reduce((acc, cur) => acc * cur, 1);
    const B = num_list.reduce((acc, cur) => acc + cur, 0);
    return A < B * B ? 1 : 0;
}