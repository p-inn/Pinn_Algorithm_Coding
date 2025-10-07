function solution(x) {
    let hashard = [...String(x)].map(Number).reduce((acc, cur) =>acc + cur, 0);
    return x % hashard == 0 ? true : false;
}