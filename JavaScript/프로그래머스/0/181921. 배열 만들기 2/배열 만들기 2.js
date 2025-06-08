function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        const isValid = [...String(i)].every(char => ['0', '5'].includes(char));
        if(isValid == true){
            answer.push(i);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}