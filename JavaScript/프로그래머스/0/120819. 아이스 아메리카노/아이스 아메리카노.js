function solution(money) {
    var answer = [];
    let americano = 5500;
    answer[0] = Math.trunc(money / americano);
    answer[1] = money - answer[0] * americano;
    return answer;
}