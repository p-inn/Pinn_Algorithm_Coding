function solution(rsp) {
    var answer = '';
    let rspString = rsp.split('');
    for(let i = 0; i < rspString.length; i++){
        if (rspString[i] == 2) {
            answer += 0;
        }else if(rspString[i] == 0){
            answer+= 5;
        }else if (rspString[i] == 5) answer+= 2;
    }
    return answer;
}