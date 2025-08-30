function solution(myString, pat) {
    var answer = 0;
    for (let i = 0; i + pat.length <= myString.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) answer++;
     }
    return answer;
}