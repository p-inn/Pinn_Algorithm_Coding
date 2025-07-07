function solution(num_str) {
    let numStr = (num_str.split(''));
    return numStr.map(Number).reduce((acc,cur)  => acc + cur, 0);
}