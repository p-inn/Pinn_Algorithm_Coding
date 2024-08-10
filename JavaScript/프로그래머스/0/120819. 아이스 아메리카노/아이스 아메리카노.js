function solution(money) {
    var answer = [];
    var americano = 0;
    var other = 0;
    var cost = 5500;
    americano = money/cost;
    other = money-(Math.trunc(cost)*Math.trunc(americano));
    answer = [Math.trunc(americano),other];
    return answer;
}