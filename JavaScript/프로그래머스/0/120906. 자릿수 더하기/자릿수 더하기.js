function solution(n) {
    var answer = 0;
    n = n.toString().split('');
    for(let i = 0; i < n.length; i++){
        answer += Number(n[i]);
    }
    return answer;
}