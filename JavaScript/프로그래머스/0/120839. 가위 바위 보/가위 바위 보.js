function solution(rsp) {
    var answer = [];
    let rspString = rsp.split('');
    for(let i = 0; i < rspString.length; i++){
        if (rspString[i] == 2) {
            answer.push(0);
        }else if(rspString[i] == 0){
            answer.push(5);
        }else if (rspString[i] == 5) answer.push(2);
    }
    return answer.join('');
}