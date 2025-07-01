function solution(myString, pat) {
    var answer = [];
    myString = myString.split('');
    for(let i = 0; i < myString.length; i++){
       answer.push(myString[i] === "A" ? "B" : "A");
    }
    return answer.join('').includes(pat) ? 1 : 0;
}