function solution(myString) {
    var answer = myString.split('x').filter(str => str !== '');
    const answerSorted = answer.sort((a,b) => a.localeCompare(b));
    return answerSorted;
}