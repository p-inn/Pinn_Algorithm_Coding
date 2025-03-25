function solution(s) {
    var answer = 0;
    let splitS = s.split(' ');
    for(let i = 0; i < splitS.length; i++){
        if(splitS[i] == "Z"){
            answer -= parseInt(splitS[i - 1]); 
        } else {
            answer += parseInt(splitS[i]); 
        }
                                            
    }
    return answer;
}