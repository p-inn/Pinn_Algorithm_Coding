
function solution(n, k) {
    var answer = 0;

    var lamb = n * 12000
    var beverage = k * 2000
    var service = Math.floor(n/10) * 2000
    answer = lamb + beverage - service

    return answer;
}