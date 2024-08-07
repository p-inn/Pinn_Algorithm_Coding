function solution(numbers) {
    var answer = 0;
    let avg = 0;
    for(let i = 0;i<numbers.length;i++){
        avg += numbers[i];
    }
    answer = avg/numbers.length;
    
    return answer;
}