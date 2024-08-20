function solution(emergency) {

    const answer = [...emergency].sort((a, b) => b - a);

    return emergency.map(value => answer.indexOf(value) + 1);
}