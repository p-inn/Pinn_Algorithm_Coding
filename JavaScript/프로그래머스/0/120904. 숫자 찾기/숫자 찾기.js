function solution(num, k) {
    var answer = 0;
    num = num.toString().split('');
    answer = num.indexOf(k.toString());
    return answer === -1 ? -1 : answer + 1;
}