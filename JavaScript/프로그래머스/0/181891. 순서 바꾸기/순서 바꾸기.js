function solution(num_list, n) {
    const afterN = num_list.slice(n);
    const beforeN = num_list.slice(0, n);
    return afterN.concat(beforeN);
}
